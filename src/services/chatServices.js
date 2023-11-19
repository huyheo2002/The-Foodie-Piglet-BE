import db from "../models";

const checkRoom = (roomName, roomCreatorId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let room = await db.ChatRoom.findOne({
                where: {
                    name: roomName,
                    roomCreatorId: roomCreatorId
                },
            });

            if (room) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (error) {
            reject(error);
        }
    });
};

const checkRoomParticipant = (roomId, userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let room = await db.RoomParticipant.findOne({
                where: {
                    roomId: roomId,
                    userId: userId
                },
            });

            if (room) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (error) {
            reject(error);
        }
    });
};

const createChatRoom = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // các thông tin cần FE lấy
            // data.name => tên phòng
            // data.roomCreatorId => người tạo phòng
            // data.participantId => người được mời tham gia (có thể có hoặc ko)

            if (data.roomCreatorId) {
                let isExist = await checkRoom(data.name, data.roomCreatorId);
                if (isExist === false) {
                    let respon = await db.ChatRoom.create({
                        name: data.name,
                        roomCreatorId: data.roomCreatorId
                    });

                    // console.log("respon services create chat room", respon)
                    if (respon) {
                        // console.log("data.name", data.name);
                        let findRoom = await db.ChatRoom.findOne({
                            where: {
                                name: data.name,
                                roomCreatorId: data.roomCreatorId
                            }
                        })
                        // console.log("findRoom", findRoom);
                        if (findRoom) {
                            let checkRoomParticipantIsExits = await checkRoomParticipant(findRoom.id, data.roomCreatorId);
                            if (checkRoomParticipantIsExits === false) {
                                await db.RoomParticipant.create({
                                    userId: data.roomCreatorId,
                                    roomId: findRoom.id,
                                })

                                if (data.participantId) {
                                    if (Array.isArray(data.participantId)) {
                                        for (let userId of data.participantId) {
                                            await db.RoomParticipant.create({
                                                userId: userId,
                                                roomId: findRoom.id,
                                            });
                                        }
                                        // console.log("data.participantId array")
                                    } else {
                                        // console.log("data.participantId object")
                                        await db.RoomParticipant.create({
                                            userId: data.participantId,
                                            roomId: findRoom.id,
                                        })
                                    }
                                }

                                resolve({
                                    errCode: 0,
                                    message: "OK",
                                    room: findRoom,
                                });
                            } else {
                                resolve({
                                    errCode: 2,
                                    message:
                                        "This user is already present in the room",
                                    room: findRoom,
                                });
                            }
                        }
                    }

                } else {                
                    resolve({
                        errCode: 1,
                        message:
                            "This chat room already exists, please try another chat room",
                    });
                }
            }

        } catch (error) {
            reject(error)
        }
    })
}

const getAllChatRoom = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let room = await db.ChatRoom.findAll({
                include: [{
                    model: db.sequelize.models.User,
                    // attributes: ["name", "email", "username", "phone", "address"],
                }]
            });

            resolve(room);
        } catch (error) {
            reject(error);
        }
    })
}

const getAllChatRoomWithId = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log("userId", userId);
            let room = await db.ChatRoom.findOne({
                include: [{
                    model: db.sequelize.models.User,
                    // attributes: ["name", "email", "username", "phone", "address"],
                }],
                where: {
                    id: userId,
                }
            });

            if(room) {
                resolve(room);
            }
        } catch (error) {
            reject(error);
        }
    })
}

const findChatRoom = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let room = await db.ChatRoom.findOne({
                where: {
                    id: id,
                },
                include: [{
                    model: db.sequelize.models.User,
                    // attributes: ["name", "email", "username", "phone", "address"],
                }],
            })

            if (room) {
                resolve(room);
            } else {
                resolve("Not found");
            }
        } catch (error) {
            reject(error);
        }
    })
}

const addMember = (data) => {
    return new Promise(async (resolve, reject) => {
        // data.userId: id người sẽ được thêm vào phòng => array(number :V)
        // data.roomId: id phòng => number
        try {
            let listUserIds = [];
            if (typeof (data.userId) === 'string') {
                // Trường hợp data.userId là chuỗi, xử lý nó
                if (data.userId.includes(',')) {
                    // Trường hợp chuỗi có dấu phẩy, tách thành mảng các userId
                    listUserIds = data.userId.split(',').map(userId => parseInt(userId.trim(), 10));
                } else {
                    // Trường hợp chỉ có một userId trong chuỗi
                    listUserIds = [parseInt(data.userId.trim(), 10)];
                }
            } else if (typeof (data.userId) === 'number') {
                // Trường hợp data.userId là số, thêm vào mảng
                listUserIds = [data.userId];
            }

            listUserIds.length > 0 && listUserIds.forEach(async (userId) => {
                await db.RoomParticipant.create({
                    userId: userId,
                    roomId: data.roomId,
                });
            });

            let findRoom = await db.ChatRoom.findByPk(data.roomId);
            if (findRoom) {
                let nameRoom = `Nhóm của ${findRoom.name} và mọi người`;
                if (!(findRoom.name.includes('Nhóm'))) {
                    await findRoom.update({
                        name: nameRoom
                    });
                }

                resolve({
                    errCode: 0,
                    message: "OK",
                });
            } else {
                resolve({
                    errCode: 1,
                    message: "Can't change group name",
                });
            }

            // add member fail
            resolve({
                errCode: 2,
                message: "Add member fail",
            });
        } catch (error) {
            reject(error);
        }
    })
}

const removeMemberInRoom = (data) => {
    return new Promise(async (resolve, reject) => {
        // data.userId: id người sẽ rời phòng
        // data.roomId: id phòng

        // console.log("data.userId", data.userId);
        try {
            let listUserIds = [];
            if (typeof (data.userId) === 'string') {
                // Trường hợp data.userId là chuỗi, xử lý nó
                if (data.userId.includes(',')) {
                    // Trường hợp chuỗi có dấu phẩy, tách thành mảng các userId
                    listUserIds = data.userId.split(',').map(userId => parseInt(userId.trim(), 10));
                } else {
                    // Trường hợp chỉ có một userId trong chuỗi
                    listUserIds = [parseInt(data.userId.trim(), 10)];
                }
            } else if (typeof (data.userId) === 'number') {
                // Trường hợp data.userId là số, thêm vào mảng
                listUserIds = [data.userId];
            }

            // console.log("listUserIds", listUserIds);
            listUserIds.length > 0 && listUserIds.forEach(async (userId) => {
                let findParticipant = await checkRoomParticipant(data.roomId, userId);
                if (findParticipant) {
                    await db.RoomParticipant.destroy({
                        where: {
                            userId: userId,
                            roomId: data.roomId
                        }
                    });
                }
            });

            resolve({
                errCode: 0,
                message: "OK",
            });
        } catch (error) {
            reject(error);
        }
    })
}

const leaveChatRoom = (data) => {
    return new Promise(async (resolve, reject) => {
        // các data fe cần truyền vào
        // roomId: phòng chat hiện tại
        // userIdLeave: id người rời khỏi cuộc trò chuyện

        try {
            // xóa người vừa rời đi
            let respon = await db.RoomParticipant.destroy({
                where: {
                    userId: data.userId,
                    roomId: data.roomId
                }
            });

            if (respon) {
                resolve({
                    errCode: 0,
                    message: "OK",
                });
            } else {
                resolve({
                    errCode: 1,
                    message: "Remove member fail",
                });
            }
        } catch (error) {
            reject(error);
        }
    })
}

const getAllMemberInRoom = (roomId) => {
    return new Promise(async (resolve, reject) => {
        // roomId: id phòng
        try {
            let room = await db.RoomParticipant.findAll({
                include: [{
                    model: db.sequelize.models.User,
                }],
                where: {
                    roomId: roomId,
                }
            });

            resolve(room);
        } catch (error) {
            reject(error);
        }
    })
}

const changeNameGroup = (data) => {
    return new Promise(async (resolve, reject) => {
        // các data fe cần truyền vào
        // roomId: phòng chat hiện tại
        // userId: id người sẽ đổi tên (phải là trưởng nhóm :v)
        // name: tên mới sẽ thay đổi cho cuộc trò chuyện

        try {
            let primRoom = data.roomId;
            let findRoom = await db.ChatRoom.findByPk(primRoom);
            let updateRoom = null;
            if (data.userId == findRoom.roomCreatorId) {
                let getAllName = await db.ChatRoom.findOne({
                    where: {
                        name: data.name,
                        roomCreatorId: data.userId
                    }
                })

                if (!getAllName) {
                    // Nếu không tồn tại, thực hiện hàm updateRoom
                    updateRoom = await findRoom.update({
                        name: data.name
                    });
                } else {
                    resolve({
                        errCode: 2,
                        message: "The group name already exists, please give it another name for easier management",
                    });
                }
            }

            if (updateRoom) {
                resolve({
                    errCode: 0,
                    message: "OK",
                });
            } else {
                resolve({
                    errCode: 1,
                    message: "Change name Fail",
                });
            }
        } catch (error) {
            reject(error);
        }
    })
}

const promoteToLeader = (data) => {
    return new Promise(async (resolve, reject) => {
        // các data fe cần truyền vào
        // roomId: phòng chat hiện tại
        // userId: id người sẽ đc lên làm trưởng nhóm

        try {
            let primRoom = data.roomId;
            let findRoom = await db.ChatRoom.findByPk(primRoom);
            let updateRoom = null;
            if (data.userId != findRoom.roomCreatorId) {
                updateRoom = await findRoom.update({
                    roomCreatorId: data.userId,
                });
            }

            if (updateRoom) {
                resolve({
                    errCode: 0,
                    message: "OK",
                });
            } else {
                resolve({
                    errCode: 1,
                    message: "Promote to leader Fail",
                });
            }
        } catch (error) {
            reject(error);
        }
    })
}

const getAllRoomParticipant = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let room = await db.RoomParticipant.findAll({
                include: [{
                    model: db.sequelize.models.ChatRoom,
                }, {
                    model: db.sequelize.models.User,
                }
                ]
            });

            resolve(room);
        } catch (error) {
            reject(error);
        }
    })
}

const getAllMessage = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let messages = await db.Message.findAll({
                include: [{
                    model: db.sequelize.models.ChatRoom,
                }, {
                    model: db.sequelize.models.User,
                }
                ]
            });

            resolve(messages);
        } catch (error) {
            reject(error);
        }
    })
}

const createMessage = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let createMessage = await db.Message.create({
                userId: data.userId,
                roomId: data.roomId,
                content: data.content
            })            

            if(createMessage) {
                resolve({
                    errCode: 0,
                    message: "OK",
                });
            }
        } catch (error) {
            reject(error);
        }
    })
}

const recallMessage = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let idPrim = id;            
            let findMessage = await db.Message.findByPk(idPrim);
            if(findMessage) {
                let updateMessage = await findMessage.update({
                    content: "Tin nhắn đã được thu hồi"
                })            
                if(updateMessage) {
                    resolve({
                        errCode: 0,
                        message: "OK",
                    });
                } else {
                    resolve({
                        errCode: 1,
                        message: "Recall message fail",
                    });
                }
            }
        } catch (error) {
            reject(error);
        }
    })
}

const deleteMessage = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let idPrim = id;                   
            let destroyMessage = await db.Message.destroy({
                where: {
                    id: idPrim
                }
            })            
            
            if(destroyMessage) {
                resolve({
                    errCode: 0,
                    message: "OK",
                });
            } else {
                resolve({
                    errCode: 1,
                    message: "Recall message fail",
                });
            }
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = {
    createChatRoom: createChatRoom,
    getAllChatRoom: getAllChatRoom,
    getAllChatRoomWithId: getAllChatRoomWithId,
    findChatRoom: findChatRoom,
    addMember: addMember,
    removeMemberInRoom: removeMemberInRoom,
    leaveChatRoom: leaveChatRoom,
    getAllMemberInRoom: getAllMemberInRoom,
    changeNameGroup: changeNameGroup,
    promoteToLeader: promoteToLeader,
    getAllRoomParticipant: getAllRoomParticipant,
    getAllMessage: getAllMessage,
    createMessage: createMessage,
    recallMessage: recallMessage,
    deleteMessage: deleteMessage,
};
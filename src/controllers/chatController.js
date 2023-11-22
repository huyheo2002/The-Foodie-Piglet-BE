import * as chatServices from "../services/chatServices";

const handleCreateChatRoom = async (req, res) => {
    let data = req.body;
    // console.log("data controller", data);
    let message = await chatServices.createChatRoom(data);

    return res.status(200).json(message)
}

const handleGetAllChatRoom = async (req, res) => {
    let room = await chatServices.getAllChatRoom();

    return res.status(200).json({
        errCode: 0,
        errMsg: "Ok",
        room: room
    })
}

const handleGetAllRoomParticipant = async (req, res) => {
    let room = await chatServices.getAllRoomParticipant();

    return res.status(200).json({
        errCode: 0,
        errMsg: "Ok",
        room: room
    })
}

const handleGetAllChatRoomWithId = async (req, res) => {
    let id = req.query.id;
    let room = await chatServices.getAllChatRoomWithId(id);

    return res.status(200).json({
        errCode: 0,
        errMsg: "Ok",
        room: room
    })
}

const handleFindChatRoom = async (req, res) => {
    let id = req.query.id;
    let room = await chatServices.findChatRoom(id);

    return res.status(200).json({
        errCode: 0,
        errMsg: "Ok",
        room: room
    })
}

const handleAddMember = async (req, res) => {
    let data = req.body;
    let message = await chatServices.addMember(data);

    return res.status(200).json(message)
}

const handleRemoveMemberInRoom = async (req, res) => {
    let data = req.body;
    let message = await chatServices.removeMemberInRoom(data);

    return res.status(200).json(message)
}

const handleLeaveChatRoom = async (req, res) => {
    let data = req.body;
    let message = await chatServices.leaveChatRoom(data);

    return res.status(200).json(message)
}

const handleGetAllMemberInRoom = async (req, res) => {
    let roomId = req.query.roomId;
    let room = await chatServices.getAllMemberInRoom(roomId);

    return res.status(200).json({
        errCode: 0,
        errMsg: "Ok",
        room: room
    })
}

const handleChangeNameGroup = async (req, res) => {
    let data = req.body;
    let message = await chatServices.changeNameGroup(data);

    return res.status(200).json(message)
}

const handlePromoteToLeader = async (req, res) => {
    let data = req.body;
    let message = await chatServices.promoteToLeader(data);

    return res.status(200).json(message)
}

const handleGetAllMessage = async (req, res) => {
    let messages = await chatServices.getAllMessage();

    return res.status(200).json({
        errCode: 0,
        errMsg: "Ok",
        messages: messages
    })
}

const handleCreateMessage = async (req, res) => {
    let data = req.body;
    let message = await chatServices.createMessage(data);

    return res.status(200).json(message)
}

const handleRecallMessage = async (req, res) => {
    let id = req.body.id;
    let message = await chatServices.recallMessage(id);

    return res.status(200).json(message)
}

const handleDeleteMessage = async (req, res) => {
    let id = req.body.id;
    let message = await chatServices.deleteMessage(id);

    return res.status(200).json(message)
}

// Test socket
const handleCreateMessageSocket = async (data) => {
    try {
        let message = await chatServices.createMessage(data);
        
        console.log("message controller", message);
        if (message.errCode === 0) {
            return message;
        }

        return {
            errCode: 1,
            message: "Failed to create message",
        };
    } catch (error) {
        console.error(error);
        return {
            errCode: 1,
            message: "Failed to create message",
        };
    }
}

const handleRecallMessageSocket = async (id) => {
    try {
        let message = await chatServices.recallMessage(id);
        
        if (message) {
            return message;
        }        
    } catch (error) {
        console.error(error);
        return message;
    }
}

const handleDeleteMessageSocket = async (id) => {
    try {
        let message = await chatServices.deleteMessage(id);
        
        if (message) {
            return message;
        }        
    } catch (error) {
        console.error(error);
        return message;
    }
}

module.exports = {
    handleCreateChatRoom: handleCreateChatRoom,
    handleGetAllChatRoom: handleGetAllChatRoom,
    handleGetAllChatRoomWithId: handleGetAllChatRoomWithId,
    handleFindChatRoom: handleFindChatRoom,
    handleAddMember: handleAddMember,
    handleRemoveMemberInRoom: handleRemoveMemberInRoom,
    handleLeaveChatRoom: handleLeaveChatRoom,
    handleGetAllMemberInRoom: handleGetAllMemberInRoom,
    handleChangeNameGroup: handleChangeNameGroup,
    handlePromoteToLeader: handlePromoteToLeader,
    handleGetAllRoomParticipant: handleGetAllRoomParticipant,
    handleGetAllMessage: handleGetAllMessage,
    handleCreateMessage: handleCreateMessage,
    handleRecallMessage: handleRecallMessage,
    handleDeleteMessage: handleDeleteMessage,
    // test socket
    handleCreateMessageSocket: handleCreateMessageSocket,
    handleRecallMessageSocket: handleRecallMessageSocket,
    handleDeleteMessageSocket: handleDeleteMessageSocket
}
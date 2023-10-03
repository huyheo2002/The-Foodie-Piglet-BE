import tableServices from "../services/tableServices";
import reserveTableServices from "../services/reserveTableServices";
import sendMail from "../sendMail";

const handleGetAllTables = async (req, res) => {
    let id = req.query.id; 
    let tables = await tableServices.getAllTables(id);
    return res.status(200).json({
        errCode: 0,
        errMsg: "Ok",
        tables: tables
    })
}

const handleCreateReserveTable = async (req, res) => {
    let data = req.body;   

    console.log("handleCreateReserveTable controller data", data)
    let getIdTable = data?.idTable;
    // console.log("getIdTable", getIdTable)

    let dateObject = new Date(data?.dateStart);
    let dateObjectStart = new Date(data?.dateStart);
    let dateObjectEnd = new Date(data?.dateEnd);
    let getDate = dateObject.toISOString().split('T')[0];
    let timeStart = dateObjectStart.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    let timeEnd = dateObjectEnd.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    let getStart = new Date(data?.dateStart).getTime();
    let getEnd = new Date(data?.dateEnd).getTime();
    
    try {
        console.log("ok")
        if(getIdTable) {
            // console.log("ok")
            let reservedTables = await reserveTableServices.getAllReserveTable("all");
            
            let reserveCurrentTable = reservedTables.filter((item) => {
                // console.log("item.idTable", item.idTable)
                // console.log("item", item)
                
                return item.idTable == getIdTable
            });
            // console.log("reserveCurrentTable", reserveCurrentTable)
            let ok = true;

            reserveCurrentTable.forEach(reservation => {
                let start = new Date(reservation.dateStart).getTime();
                let end = new Date(reservation.dateEnd).getTime();

                // console.log("getStart", getStart)
                // console.log("getEnd", getEnd)
                // console.log("start", start)
                // console.log("end", end)

                if(start <= getStart && getStart <= end) {
                    ok = false;
                } else if(start <= getEnd && getEnd <= end) {
                    ok = false;
                }

            });

            if(!ok) {
                // return res.status(400).json({
                //     errCode: 1,
                //     errMsg: "Thời gian không hợp lệ",
                // })

                return res.status(200).json({
                    errCode: 1,
                    errMsg: "Invalid time",
                })
            }
        }
        let respon = await reserveTableServices.createReserveTable(data);  
        // todo email
        if(respon) {
            let email = data?.email;
            let title = `Bạn đã đặt bàn thành công vào ngày ${getDate} lúc ${timeStart} - ${timeEnd} ✔`;
            const greetings = [
                "Cảm ơn bạn đã đặt bàn với chúng tôi! Chúng tôi rất mong được phục vụ bạn.",
                "Chúng tôi đã nhận được đặt bàn của bạn. Hãy chờ đợi một trải nghiệm tuyệt vời tại nhà hàng của chúng tôi.",
                "Chúng tôi đã ghi nhận thông tin đặt bàn của bạn. Sẽ là một niềm vui khi chào đón bạn tới.",
                "Đặt bàn của bạn đã được xác nhận thành công. Chúng tôi sẽ sắp xếp mọi thứ cho bạn.",
                "Xin chúc mừng, đặt bàn của bạn đã hoàn tất! Hãy chuẩn bị sẵn sàng để thưởng thức bữa ăn tuyệt vời.",
                "Chúng tôi rất trân trọng đã được phục vụ bạn. Hãy đến đúng thời gian để có trải nghiệm tốt nhất.",
                "Chúng tôi đã đặt bàn cho bạn theo yêu cầu. Hãy liên hệ nếu có thay đổi hoặc câu hỏi nào khác.",
                "Không lâu nữa, bạn sẽ có cơ hội thưởng thức những món ngon tại nhà hàng của chúng tôi. Chúng tôi rất háo hức chào đón bạn.",
                "Chúng tôi đã nhận được thông tin đặt bàn của bạn. Hãy yên tâm, chúng tôi đã sẵn sàng phục vụ bạn.",
                "Chúng tôi đang chuẩn bị cho đợt đặt bàn của bạn. Sẽ là một buổi tối đáng nhớ!"
            ];
            const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

            // console.log("email", email);
            // console.log("title", title)
            // console.log("randomGreeting", randomGreeting)
            // console.log("<i>${randomGreeting}</i>", `<i>${randomGreeting}</i>`)

            sendMail(email, title, randomGreeting, `<i>${randomGreeting}</i>`);
        }   

        return res.status(200).json({
            errCode: 0,
            errMsg: "Ok",
            reserveTable: respon
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    handleGetAllTables: handleGetAllTables,
    handleCreateReserveTable:handleCreateReserveTable,
}
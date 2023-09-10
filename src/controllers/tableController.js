import tableServices from "../services/tableServices";
import reserveTableServices from "../services/reserveTableServices";

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

    // console.log("data", data)
    let getIdTable = data?.idTable;
    // console.log("getIdTable", getIdTable)

    let getStart = new Date(data?.dateStart).getTime();
    let getEnd = new Date(data?.dateEnd).getTime();

    // console.log("getStart", getStart)
    // console.log("getEnd", getEnd)
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
                return res.status(400).json({
                    errCode: 1,
                    errMsg: "Thời gian không hợp lệ",
                })
            }
        }
        let respon = await reserveTableServices.createReserveTable(data);  
        // todo email   
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
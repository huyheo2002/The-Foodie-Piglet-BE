import db from "../../models";
import curdServices from "../../services/curdServices";

const getHomePages = async (req, res) => {
    try {
        let data = await db.User.findAll();        
        // console.log(data);
        return res.render("Home/index.ejs", {
            data: JSON.stringify(data)
        });
    } catch (error) {
        console.log("Cant connect DB: ", error);
    }
}

const getTestPage = (req, res) => {
    return res.render("Test/index.ejs");
}

const getUsers = async (req, res) => {
    try {
        let data = await db.User.findAll();        
        // console.log(data);
        res.status(200);
        res.setHeader('content-type', 'application/json');
        res.write(JSON.stringify(data));
        res.end();
    } catch (error) {
        console.log("Cant connect DB: ", error);
    }
}
const getNew = async (req, res) => {
    try {
        let data = await db.New.findAll();        
        // console.log(data);
        res.status(200);
        res.setHeader('content-type', 'application/json');
        res.write(JSON.stringify(data));
        res.end();
    } catch (error) {
        console.log("Cant connect DB: ", error);
    }
}

const getCURD = async (req, res) => {
    try {
        let data = await db.User.findAll();        
        // console.log(data);
        return res.render("curd.ejs", {
            data: JSON.stringify(data)
        });
    } catch (error) {
        console.log("Cant connect DB: ", error);
    }
}

const postCURD = async (req, res) => {
    try {
        let message = await curdServices.createUser(req.body);
        console.log("message", message);
        return res.send("server load")
    } catch (error) {
        console.log("Cant connect DB: ", error);
    }
}


module.exports = {
    getHomePages: getHomePages,
    getTestPage: getTestPage,
    getUsers: getUsers,
    getCURD: getCURD,
    postCURD: postCURD,
    getNew: getNew,
}
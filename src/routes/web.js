import express from "express";
import homeController from "../controllers/Home/index";
import userController from "../controllers/userController";
import roleController from "../controllers/roleController";


const router = express.Router();

const initWebRoutes = (app) => {
    router.get("/", homeController.getHomePages);

    router.get("/1", homeController.getTestPage);

    router.get("/api/user", homeController.getUsers);

    router.get("/curd", homeController.getCURD);
    router.post("/post-curd", homeController.postCURD);

    router.get("/huydeptrai", (req, res) => {
        return res.send("Hello Huy");
    });

    // api sd ben react
    // table user
    router.post("/api/login", userController.handleLogin);
    router.get("/api/get-all-users", userController.handleGetAllUsers);
    router.get("/api/get-all-users-compact", userController.handleGetAllUsersCompact);
    router.post("/api/create-user", userController.handleCreateNewUser);
    router.put("/api/edit-user", userController.handleEditUser);
    router.delete("/api/delete-user", userController.handleDeleteUser);

    // table roles
    router.get("/api/get-all-roles", roleController.handleGetAllRoles);


    return app.use("/", router);
}

module.exports = initWebRoutes;
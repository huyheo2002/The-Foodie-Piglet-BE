import express from "express";
import homeController from "../controllers/Home/index";
import userController from "../controllers/userController";
import roleController from "../controllers/roleController";
import newsController from "../controllers/newsController";
import news_typeController from "../controllers/news_typeController";
// import passport from "passport";
// const router = express.Router();

const router = require('express').Router()
const passport = require('passport')
require('dotenv').config()


const initWebRoutes = (app) => {
  router.get("/", homeController.getHomePages);

  router.get("/1", homeController.getTestPage);

  router.get("/api/user", homeController.getUsers);

  router.get("/curd", homeController.getCURD);
  router.post("/post-curd", homeController.postCURD);
  router.get("/api/news", homeController.getNews);

  router.get("/huydeptrai", (req, res) => {
    return res.send("Hello Huy");
  });

  // router login with google passport
  router.get(
    "/api/auth/google",
    passport.authenticate("google", { scope: ["profile", 'email'], session: false })
  );

  router.get(
    "/api/auth/google/callback",
    (req, res, next) => {
      // console.log("req", req)
      passport.authenticate("google", (err, profile) => {
        if (err) {
          console.log(err);
          // Handle error, e.g., redirect to an error page
        } else {
          // req.user = profile; // Store the user's profile in req.user
          // next(); // Move to the next middleware or route handler
          req.user = profile;
          next();
        }
      })(req, res, next);
    }, (req, res) => {        
        console.log("req router", req)
        res.redirect(`${process.env.URL_CLIENT}/login-success/${req.user?.emails[0]?.value }`)
    }
  );
  

  router.get('/login-success/:email', userController.handleLoginSuccess)

  // api sd ben react
  // table user
  router.post("/api/login", userController.handleLogin);
  router.get("/api/get-all-users", userController.handleGetAllUsers);
  router.get(
    "/api/get-all-users-compact",
    userController.handleGetAllUsersCompact
  );
  router.post("/api/create-user", userController.handleCreateNewUser);
  router.put("/api/edit-user", userController.handleEditUser);
  router.delete("/api/delete-user", userController.handleDeleteUser);
  //table news
  router.get("/api/get-all-news", newsController.handleGetAllNews);
  router.get(
    "/api/get-all-news-compact",
    newsController.handleGetAllNewsCompact
  );
  router.post("/api/create-news", newsController.handleCreateNewNews);
  router.put("/api/edit-news", newsController.handleEditNews);
  router.delete("/api/delete-news", newsController.handleDeleteNews);
  router.get("/api/get-all-news_type", news_typeController.handleGetAllNews_type);
  // table roles
  router.get("/api/get-all-roles", roleController.handleGetAllRoles);

  app.use("/", router);
};

module.exports = initWebRoutes;

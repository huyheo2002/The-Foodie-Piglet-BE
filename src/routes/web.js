import express from "express";
import homeController from "../controllers/Home/index";
import userController from "../controllers/userController";
import roleController from "../controllers/roleController";
import tableController from "../controllers/tableController";
import categoryController from "../controllers/categoryController";
import productController from "../controllers/productController";
import variantController from "../controllers/variantController";
const multer = require("multer");
const path = require('path');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// import passport from "passport";
// const router = express.Router();

const router = require("express").Router();
const passport = require("passport");
require("dotenv").config();

const initWebRoutes = (app) => {
  router.get("/", homeController.getHomePages);

  router.get("/1", homeController.getTestPage);

  router.get("/api/user", homeController.getUsers);

  router.get("/curd", homeController.getCURD);
  router.post("/post-curd", homeController.postCURD);

  router.get("/huydeptrai", (req, res) => {
    return res.send("Hello Huy");
  });

  // router login with google passport
  router.get(
    "/api/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
      session: false,
    })
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
    },
    (req, res) => {
      console.log("req router", req);
      res.redirect(
        `${process.env.URL_CLIENT}/login-success/${req.user?.emails[0]?.value}`
      );
    }
  );

  router.get("/login-success/:email", userController.handleLoginSuccess);

  // get path image
  router.get("/public/base/:filename", (req, res) => {
    const imagePath = path.join(__dirname, `../public/images/base/${req.params.filename}`);
    console.log("imagePath", imagePath)
    res.sendFile(imagePath);
  });

  router.get("/public/avatar/:filename", (req, res) => {
    const imagePath = path.join(__dirname, `../public/images/avatar/${req.params.filename}`);
    console.log("imagePath", imagePath)
    res.sendFile(imagePath);
  });

  router.get("/public/product/:filename", (req, res) => {
    const imagePath = path.join(__dirname, `../public/images/product/${req.params.filename}`);
    console.log("imagePath", imagePath)
    res.sendFile(imagePath);
  });

  // api sd ben react
  // table user
  router.post("/api/login", userController.handleLogin);
  router.get("/api/get-all-users", userController.handleGetAllUsers);
  router.get(
    "/api/get-all-users-compact",
    userController.handleGetAllUsersCompact
  );
  router.post(
    "/api/create-user",
    upload.single("avatar"),
    userController.handleCreateNewUser
  );
  router.put("/api/edit-user", upload.single("avatar"), userController.handleEditUser);
  router.delete("/api/delete-user", upload.none(), userController.handleDeleteUser);

  // table roles
  router.get("/api/get-all-roles", roleController.handleGetAllRoles);

  // table for Table :v
  router.get("/api/get-all-tables", tableController.handleGetAllTables);
  router.post("/api/create-reserve-tables", upload.none(), tableController.handleCreateReserveTable);

  // table category product
  router.get("/api/get-all-category", categoryController.handleGetAllCategory);

  // table products
  router.get("/api/get-all-product", productController.handleGetAllProducts);
  router.get("/api/get-all-product-compact", productController.handleGetAllProductsCompact);

  router.post(
    "/api/create-product",
    upload.single("image"),
    productController.handleCreateNewProduct
  );
  router.put("/api/edit-product", upload.single("image"), productController.handleEditProduct);
  router.delete("/api/delete-product", upload.none(), productController.handleDeleteProduct);

  // table variant in product :V
  // router.get("/api/get-all-product", productController.handleGetAllProducts);
  router.get("/api/get-all-variant-compact", variantController.handleFindVariantWithIdCompact);

  // router.post(
  //   "/api/create-product",
  //   upload.single("image"),
  //   productController.handleCreateNewProduct
  // );
  // router.put("/api/edit-product", upload.single("image"), productController.handleEditProduct);
  // router.delete("/api/delete-product", upload.none(), productController.handleDeleteProduct);

  app.use("/", router);
};

module.exports = initWebRoutes;

import express from "express";
import homeController from "../controllers/Home/index";
import userController from "../controllers/userController";
import roleController from "../controllers/roleController";
import tableController from "../controllers/tableController";
import categoryController from "../controllers/categoryController";
import productController from "../controllers/productController";
import variantController from "../controllers/variantController";
import newController from "../controllers/newController";
import genresController from "../controllers/genreController";
import cartController from "../controllers/cartController";
import paymentController from "../controllers/paymentController";
import commonController from "../controllers/commonController";
import permissionController from "../controllers/permissionController";
import authController from "../controllers/authController";
import notificationController from "../controllers/notificationServices";
import chatController from "../controllers/chatController";

const multer = require("multer");
const path = require("path");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = require("express").Router();
const passport = require("passport");
require("dotenv").config();

const initWebRoutes = (app) => {
  router.get("/", homeController.getHomePages);

  router.get("/1", homeController.getTestPage);

  router.get("/api/user", homeController.getUsers);

  router.get("/curd", homeController.getCURD);
  router.post("/post-curd", homeController.postCURD);
  router.get("/api/new", homeController.getNew);

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
      passport.authenticate("google", (err, profile) => {
        if (err) {
          console.log(err);
        } else {
          req.user = profile;
          next();
        }
      })(req, res, next);
    },
    (req, res) => {
      res.redirect(
        `${process.env.URL_CLIENT}/login-success/${req.user?.emails[0]?.value}`
      );
    }
  );

  // auth
  router.get("/login-success/:email", authController.handleLoginSuccess);
  router.post("/api/login", upload.none(), authController.handleLogin);
  router.put(
    "/api/change-password",
    upload.none(),
    authController.handleChangePassword
  );
  router.post(
    "/api-reset-password",
    upload.none(),
    authController.handleResetPassword
  );
  router.post(
    "/api-forgot-password",
    upload.none(),
    authController.handleForgotPassword
  );

  // get path image
  router.get("/public/base/:filename", (req, res) => {
    const imagePath = path.join(
      __dirname,
      `../public/images/base/${req.params.filename}`
    );
    res.sendFile(imagePath);
  });

  router.get("/public/avatar/:filename", (req, res) => {
    const imagePath = path.join(
      __dirname,
      `../public/images/avatar/${req.params.filename}`
    );
    res.sendFile(imagePath);
  });

  router.get("/public/product/:filename", (req, res) => {
    const imagePath = path.join(
      __dirname,
      `../public/images/product/${req.params.filename}`
    );
    res.sendFile(imagePath);
  });
  router.get("/public/news/:filename", (req, res) => {
    const imagePath = path.join(
      __dirname,
      `../public/images/news/${req.params.filename}`
    );
    res.sendFile(imagePath);
  });

  // api sd ben react
  // table user
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
  router.put(
    "/api/edit-user",
    upload.single("avatar"),
    userController.handleEditUser
  );
  router.delete(
    "/api/delete-user",
    upload.none(),
    userController.handleDeleteUser
  );
  // table genres
  router.get("/api/get-all-genres", genresController.handleGetAllGenres);
  // table new
  router.get("/api/get-all-news", newController.handleGetAllNews);
  router.get(
    "/api/get-all-news-compact",
    newController.handleGetAllNewsCompact
  );
  router.post(
    "/api/create-new",
    upload.single("image"),
    newController.handleCreateNewNews
  );
  router.put(
    "/api/edit-new",
    upload.single("image"),
    newController.handleEditNew
  );
  router.delete(
    "/api/delete-new",
    upload.none(),
    newController.handleDeleteNew
  );

  // table roles
  router.get("/api/get-all-roles", roleController.handleGetAllRoles);
  router.get(
    "/api/get-all-roles-with-permission",
    roleController.handleGetAllRolesWithPermission
  );
  router.post(
    "/api/create-new-role",
    upload.none(),
    roleController.handleCreateNewRole
  );
  router.put(
    "/api/update-role",
    upload.none(),
    roleController.handleUpdateRole
  );
  router.delete(
    "/api/delete-role",
    upload.none(),
    roleController.handleDeleteRole
  );

  // table for Table :v
  router.get("/api/get-all-tables", tableController.handleGetAllTables);
  router.get(
    "/api/get-all-reserve-tables",
    tableController.handleGetAllReserveTable
  );

  router.post(
    "/api/create-reserve-tables",
    upload.none(),
    tableController.handleCreateReserveTable
  );
  router.put(
    "/api/update-reserve-tables",
    upload.none(),
    tableController.handleUpdateReserveTable
  );
  router.delete(
    "/api/delete-reserve-tables",
    upload.none(),
    tableController.handleDeleteReserveTable
  );

  // table category product
  router.get("/api/get-all-category", categoryController.handleGetAllCategory);

  // table products
  router.get("/api/get-all-product", productController.handleGetAllProducts);
  router.get(
    "/api/get-all-product-compact",
    productController.handleGetAllProductsCompact
  );
  router.get("/api/find-one-product", productController.handleFindOneProduct);

  router.post(
    "/api/create-product",
    upload.single("image"),
    productController.handleCreateNewProduct
  );
  router.put(
    "/api/edit-product",
    upload.single("image"),
    productController.handleEditProduct
  );
  router.delete(
    "/api/delete-product",
    upload.none(),
    productController.handleDeleteProduct
  );

  // table variant in product :V
  router.get(
    "/api/get-all-variant-compact",
    variantController.handleFindVariantWithIdCompact
  );
  router.get(
    "/api/get-one-variant-compact",
    variantController.handleFindOneVariantWithIdCompact
  );

  router.post(
    "/api/create-variant-product",
    upload.none(),
    variantController.handleCreateNewVariantInProduct
  );
  router.put(
    "/api/edit-variant-product",
    upload.none(),
    variantController.handleEditVariantInProduct
  );
  router.delete(
    "/api/delete-variant-product",
    upload.none(),
    variantController.handleDeleteVariantInProduct
  );

  // table cart
  router.get("/api/get-all-cart", cartController.handleGetAllCart);
  router.get(
    "/api/get-all-cartItem-of-user",
    cartController.handleGetAllCartItemOfUser
  );

  router.post(
    "/api/add-to-cart",
    upload.none(),
    cartController.handleAddToCart
  );
  router.delete(
    "/api/delete-item-in-cart",
    upload.none(),
    cartController.handleDeleteItemInCart
  );
  router.delete(
    "/api/refresh-cart",
    upload.none(),
    cartController.handleRefreshCart
  );

  // table payment
  router.get("/api/get-all-payment", paymentController.handleGetAllPayment);
  router.get(
    "/api/get-all-payment-compact",
    paymentController.handleGetAllPaymentCompact
  );
  router.get(
    "/api/get-all-payment-of-user",
    paymentController.handleGetAllPaymentOfUser
  );

  router.post(
    "/api/create-new-order",
    upload.none(),
    paymentController.handleCreateNewOrder
  );
  router.put(
    "/api/edit-order",
    upload.none(),
    paymentController.handleEditOrder
  );
  router.delete(
    "/api/delete-payment",
    upload.none(),
    paymentController.handleDeletePayment
  );

  // common
  router.get("/handle/decoded", commonController.decodeToken);

  // permission
  router.get(
    "/api/get-all-permission-group",
    permissionController.handleGetAllPermissionGroup
  );
  router.get(
    "/api/get-all-permission",
    permissionController.handleGetAllPermission
  );

  router.post(
    "/api/create-permission-group",
    upload.none(),
    permissionController.handleCreatePermissionGroup
  );
  router.put(
    "/api/update-permission-group",
    upload.none(),
    permissionController.handleUpdatePermissionGroup
  );
  router.delete(
    "/api/delete-permission-group",
    upload.none(),
    permissionController.handleDeletePermissionGroup
  );

  router.post(
    "/api/create-permission",
    upload.none(),
    permissionController.handleCreatePermission
  );
  router.put(
    "/api/update-permission",
    upload.none(),
    permissionController.handleUpdatePermission
  );
  router.delete(
    "/api/delete-permission",
    upload.none(),
    permissionController.handleDeletePermission
  );

  // notify
  router.get(
    "/api/get-all-notification",
    notificationController.handleGetAllNotification
  );

  // chat api
  router.get("/api/get-all-chatroom", chatController.handleGetAllChatRoom);
  router.get(
    "/api/get-all-chatroom-with-id",
    chatController.handleGetAllChatRoomWithId
  );
  router.get("/api/find-chatroom", chatController.handleFindChatRoom);
  router.get(
    "/api/get-all-member-in-room",
    chatController.handleGetAllMemberInRoom
  );
  router.get(
    "/api/get-all-room-participant",
    chatController.handleGetAllRoomParticipant
  );
  router.get("/api/get-all-message", chatController.handleGetAllMessage);

  router.post(
    "/api/create-chatroom",
    upload.none(),
    chatController.handleCreateChatRoom
  );
  router.post("/api/add-member", upload.none(), chatController.handleAddMember);
  router.post(
    "/api/create-message",
    upload.none(),
    chatController.handleCreateMessage
  );

  router.put(
    "/api/change-name-group",
    upload.none(),
    chatController.handleChangeNameGroup
  );
  router.put(
    "/api/promote-to-leader",
    upload.none(),
    chatController.handlePromoteToLeader
  );
  router.put(
    "/api/recall-message",
    upload.none(),
    chatController.handleRecallMessage
  );

  router.delete(
    "/api/remove-member",
    upload.none(),
    chatController.handleRemoveMemberInRoom
  );
  router.delete(
    "/api/leave-room",
    upload.none(),
    chatController.handleLeaveChatRoom
  );
  router.delete(
    "/api/delete-message",
    upload.none(),
    chatController.handleDeleteMessage
  );

  app.use("/", router);
};

module.exports = initWebRoutes;

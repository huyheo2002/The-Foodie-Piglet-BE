import db from "../models";
import makeKeyword from "../utils/makeKeyword";
import generateUniqueId from "../utils/uniqueName";
const fs = require("fs");
require("dotenv").config();

const getAllProduct = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = await db.Product.findAll({
        include: [
          {
            model: db.sequelize.models.Category,
            attributes: ["name"],
          },
          {
            model: db.sequelize.models.Variant,
            attributes: ["name", "price", "discountVariant"],
          },
        ],
      });

      resolve(products);
    } catch (error) {
      console.log(error);
    }
  });
};

const getAllProductCompact = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = await db.Product.findAll({
        include: [
          {
            model: db.sequelize.models.Category,
            attributes: ["name"],
          },
          {
            model: db.sequelize.models.Variant,
            attributes: ["name", "price", "discountVariant"],
          },
        ],
        attributes: {
          exclude: ["keyword", "desc", "createdAt", "updatedAt", "categoryId"],
        },
      });

      resolve(products);
    } catch (error) {
      console.log(error);
    }
  });
};

const findOneProduct = (prodId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let products = await db.Product.findOne({
        include: [
          {
            model: db.sequelize.models.Category,
            attributes: ["name"],
          },
          {
            model: db.sequelize.models.Variant,
            attributes: ["name", "price", "discountVariant"],
          },
        ],
        where: {
          id: prodId,
        },
      });

      resolve(products);
    } catch (error) {
      reject(error);
    }
  });
};

const createNewProduct = (data, image) => {
  return new Promise(async (resolve, reject) => {
    try {
      let nameImage = null;
      if (image) {
        let binaryData = image.buffer;
        nameImage = generateUniqueId() + image.originalname || "data.bin";
        let filePath = `src/public/images/product/${nameImage}`;
        fs.writeFile(filePath, binaryData, "binary", (err) => {
          if (err) {
            console.error("Error writing file:", err);
          } else {
            console.log("File saved successfully:", filePath);
          }
        });
      }

      let keyword = null;
      if (data && data.name) {
        keyword = makeKeyword(data.name);
      }

      let newProduct = await db.Product.create({
        keyword: keyword,
        name: data.name,
        desc: data.desc,
        categoryId: data.categoryId,
        isAvailable: data.isAvailable,
        image: nameImage,
      });

      if (newProduct) {
        let newVariant = await db.Variant.create({
          // name (size) S M L
          name: data.size ?? "S",
          price: data.price ?? 200,
          discountVariant: data.discountVariant ?? null,
          productId: newProduct.id,
        });

        console.log("newVariant", newVariant);
      }

      resolve({
        errCode: 0,
        message: "Ok",
      });
    } catch (error) {
      reject(error);
    }
  });
};

const editProduct = (data, image) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 2,
          message: "Missing required parameter",
        });
      }

      const idPrim = data.id;
      console.log("idPrim", idPrim);
      let product = await db.Product.findByPk(idPrim);

      if (product) {
        let oldImage = product.image;
        let nameImage = null;
        if (image) {
          if (product.image) {
            let filePathOld = `src/public/images/product/${product.image}`;
            fs.unlink(filePathOld, (err) => {
              if (err) {
                console.error(err);
              }
            });
          }

          let binaryData = image.buffer;
          nameImage = generateUniqueId() + image.originalname || "data.bin";
          let filePathNew = `src/public/images/product/${nameImage}`;
          fs.writeFile(filePathNew, binaryData, "binary", (err) => {
            if (err) {
              console.error("Error writing file:", err);
            } else {
              console.log("File saved successfully:", filePathNew);
            }
          });
        }

        let keyword = null;
        if (data && data.name) {
          keyword = makeKeyword(data.name);
        }

        await product.update({
          keyword: keyword,
          name: data.name,
          desc: data.desc,
          categoryId: data.categoryId,
          isAvailable: data.isAvailable,
          image: nameImage ?? oldImage,
        });

        resolve({
          errCode: 0,
          message: "Ok",
          product: product,
        });
      } else {
        resolve({
          errCode: 1,
          message: "Product not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const deleteProduct = (prodId) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Variant.destroy({
        where: { productId: prodId },
      });

      let product = await db.Product.findOne({
        where: { id: prodId },
      });
      if (!product) {
        resolve({
          errCode: 2,
          errMsg: "The product isn't exits",
        });
      }

      if (product.image) {
        let filePathOld = `src/public/images/product/${product.image}`;
        fs.unlink(filePathOld, (err) => {
          if (err) {
            console.error(err);
          }
        });
      }

      await db.Product.destroy({
        where: { id: prodId },
      });

      resolve({
        errCode: 0,
        message: "The products is deleted",
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getAllProductCountByCategory = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let productCounts = await db.Product.findAll({
        attributes: [
          [db.sequelize.fn("COUNT", db.sequelize.col("Product.id")), "count"],
        ],
        include: [
          {
            model: db.sequelize.models.Category,
            attributes: ["name"],
          },
        ],
        group: ["Category.id"],
      });

      const result = productCounts.map((item) => ({
        category: item.Category.name,
        count: item.getDataValue("count"),
      }));

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getAllProduct: getAllProduct,
  getAllProductCompact: getAllProductCompact,
  createNewProduct: createNewProduct,
  editProduct: editProduct,
  deleteProduct: deleteProduct,
  findOneProduct: findOneProduct,
  getAllProductCountByCategory: getAllProductCountByCategory,
};

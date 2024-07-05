const Product = require("../models/Product");
const {
  createProductService,
  updateProductService,
  updateBulkProductService,
  getProductsService,
  getProductById,
} = require("../services/product.service");
exports.getProducts = async (req, res, next) => {
  try {
    const products = await getProductsService();
    res.status(200).json({
      status: "Success",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Can't get the data",
      error: error.message,
    });
  }
};

exports.createProducts = async (req, res, next) => {
  try {
    const result = await createProductService(req.body);
    res.status(200).json({
      status: "success",
      message: "Data inserted Successfully",
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data isn't inserted",
      error: error.message,
    });
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updateProductService(id, req.body);
    res.status(200).json({
      status: "Success",
      message: "Data update",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Product couldn't update",
      error: error.message,
    });
  }
};
exports.updateBulkProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updateBulkProductService(req.body);
    res.status(200).json({
      status: "Success",
      message: "Data update",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Product couldn't update",
      error: error.message,
    });
  }
};

// Get product Details
exports.getProductDetails = async (productId) => {
  try {
    const product = await getProductById(productId);
    return product;
  } catch (error) {
    throw new Error("Error fetching product details");
  }
};
// exports.updateBulkProduct = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const result = await updateBulkProductService(req.body);
//     res.status(200).json({
//       status: "Success",
//       message: "Data update",
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "fail",
//       message: "Product couldn't update",
//       error: error.message,
//     });
//   }
// };

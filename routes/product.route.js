const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

router.route("/bulk-update").patch(productController.updateBulkProduct);
// router.route("/bulk-delete").delete(productController.deleteBulkProduct);

router
  .route("/")
  .get(productController.getProducts)
  .post(productController.createProducts);

router.route("/:id").patch(productController.updateProduct);
// .delete(productController.deleteProductById);

module.exports = router;

const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const { Auth } = require("../middlewares/auth.js");

//middleware
router.use(Auth.author);

// Get all order based on user
router.get("/", orderController.getAllOrder);
const { Auth } = require("../middlewares/auth.js");

//middleware
router.use( Auth.author);

// Get order by id
router.get("/:orderId", orderController.getOrderById);

// Create order by logged user
router.post("/", orderController.createOrder);

// Delete order by id
router.delete("/:orderId", orderController.deleteOrder);

module.exports = router;

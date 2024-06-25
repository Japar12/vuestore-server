// module.exports = (app) => {
//   const order = require("../controllers/order.controller");

//   let router = require("express").Router();

//   // look a cart
//   router.get("/user/:id", order.findCart);
//   router.post("/update/user/:id", order.addToCart);
//   router.delete("/delete/user/:id/product/:code", order.removeFromCart);

//   app.use("/api/orders", router);
// };

module.exports = (app) => {
  const orders = require("../controllers/order.controller");
  const router = require("express").Router();

  router.get("/user/:id", orders.findOrder);
  router.post("/update/user/:id/", orders.addToCart);
  router.delete("/delete/user/:id/product/:code", orders.removeFromCart);

  app.use("/api/orders", router);
};

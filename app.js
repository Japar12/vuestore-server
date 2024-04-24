const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const db = require("./app/models");
db.mongoose.connect(db.url)
// disini versinya harus downgrade, udh dicoba ubah mongoose package.jsonnya tetep gak bisa

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to vuestore-server",
  });
});

require('./app/routes/product.route')(app)
require('./app/routes/order.route')(app)

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});

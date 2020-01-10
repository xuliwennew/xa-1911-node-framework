const mongoose = require("mongoose");

//1. mongoose 与mongodb server 连接
mongoose.connect("mongodb://127.0.0.1:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//2.监听连接成功的信息
mongoose.connection.on("connected", () => {
  console.log("mongodb connect success!");
});

//监听mongodb是否打开
mongoose.connection.once("open", () => {
  console.log("mongodb connect opened!");
});

module.exports = mongoose

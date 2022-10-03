const express = require("express");
const app = express();
const { userRouter, blogRouter } = require("./routes");
const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://test:sparta@cluster0.d9pmfhg.mongodb.net/BlogService?retryWrites=true&w=majority";

const server = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    mongoose.set("debug", true);
    console.log("MongoDB connected");

    app.use(express.json());
    app.use("/user", userRouter);
    app.use("/blog", blogRouter);

    app.listen(3000, () => console.log("server listening on port 3000"));
  } catch (err) {
    console.log(err);
  }
};

server();

// CRUD중 get을 가져와서 함수의 인자를 받아와서 실행을 한다.
// req(est): client로부터 받은 요청
// res(ponse) : client에게 요청받은 내용을 보내는것

// REST API
// 개발자들사이의 약속.

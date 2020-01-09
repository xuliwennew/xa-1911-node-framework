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

mongoose.connection.once("open", () => {
  console.log("mongodb connect opened!");
});

//3. 在node操作集合 users CURD ODM
// 3.1 创建一个node中的users对象,(schema key : string)
let usersSchema = new mongoose.Schema({
  name: String,
  age: Number
});

//3.2 把userSchema 和 集合绑定在一起
let UsersModel = mongoose.model("users", usersSchema); // usersModel -> mapping -db

//4. 操作 UsersModel CURD
//4.1 添加一个doc
let addUser = () => {
  let user = new UsersModel({
    name: "李四",
    age: 30
  });

  user.save((err, results) => {
    //null
    console.log(results);
  });
};

//修改dom
let updateUser =()=>{
    UsersModel.update({name:"李四"},{$set:{name:"lisi"}},(err,res)=>{
        console.log(res)
    })
}


//删除dom 
let delUser = ()=>{
    UsersModel.deleteOne({name:"lisi"},(err,res)=>{
         console.log(res)
    })
}

//查询dom
let findUser = ()=>{
    UsersModel.find({},(err,results)=>{
        console.log(results)
    })
}


//分页查询
let findUserByPager =(pageIndex,pageSize=1)=>{
    UsersModel.find({}).skip(pageIndex*pageSize).limit(pageSize).exec((err,results)=>{
        console.log(results)
    })
}

findUserByPager(0,1)

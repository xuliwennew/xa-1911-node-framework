const mongoose = require("./mongoConfig")


let usersSchema = new mongoose.Schema({
  name: String,
  age: Number,
  pwd:String
});

//3.2 把userSchema 和 集合绑定在一起
let UsersModel = mongoose.model("users", usersSchema); // usersModel -> mapping -db


 module.exports = {

     /**
      * 添加用户信息
      */
     addUser(){
        let user = new UsersModel({
            name: "lisi",
            age: 20,
            pwd:require("crypto").createHash('md5').update("987654").digest('hex')
        });
     },
      /**
      * 更新用户信息
      */
     updateUser(){
        UsersModel.update({name:"李四"},{$set:{name:"lisi"}},(err,res)=>{
            console.log(res)
        })
     },
      /**
      * 判断用户是否可以登录
      */
     async checkUserLogin(user){
        let pwds = require("crypto").createHash('md5').update(user.pwd).digest('hex')
        return await UsersModel.find({name:user.name,pwd:pwds})
     }
 }
 

 
 

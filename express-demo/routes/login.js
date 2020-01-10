var express = require('express');
var router = express.Router();
const userDao = require("../dao/userDao")

 
router.get('/', function(req, res, next) {
  res.render('login', { title: 'hello world!' });
});

router.post("/check", async (req,res)=>{
   let user = req.body
   let realuser = await userDao.checkUserLogin(user)
   console.log(realuser)
   if(realuser.length >0){
      // res.send("登录成功了！")
      // 用户正确，把当前的登录的用户信息保存到当前的session中
      req.session.user = realuser[0].name
      res.redirect("/")
   }else {
       res.send("登录错误：请检查用户名或者密码是否正确!")
   }

})

router.get("/out",(req,res)=>{
  req.session.destroy((err)=>{
    console.log(err)
    res.redirect("/login")
  })
})

module.exports = router;

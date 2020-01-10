var express = require('express');
var router = express.Router();

 
router.get('/', function(req, res, next) {
   
   //判断当前的session中是否有user信息，如果有，登录过了，没有转到login
   let user = req.session.user
   if(user){
      res.render('index', { title: `欢迎: ${user}` });
   }else {
     res.redirect("/login")
   }
 
});

module.exports = router;

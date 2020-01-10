var express = require('express');
var router = express.Router();
const axios = require("axios")

/* GET home page. */ 
router.get('/', async (req, res, next)=> {
  console.log(req.session.userInfo)
   //const courselist = require("../mock/data.json").data.courselist
   let list = await axios.get("https://m.imooc.com/wap/api/course/loadCourseList?marking=all&course_type=0&easy_type=&order=2&pageIndex=1&flag=&ex_learned=0")
   console.log(list)
   res.render("product",{title:"商品列表",list:list.data.data.courselist})
});

// /product/add
router.get('/add', function(req, res, next) {
  res.render('product-add', { title: '添加商品信息' });
});


module.exports = router;

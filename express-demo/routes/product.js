var express = require('express');
var router = express.Router();

/* GET home page. */  // promoise generator async await 
router.get('/', (req, res, next)=> {
    //res.render 页面
    //res.json jsonp
   res.json({
       title:"apple"
   })
});

// /product/add
router.get('/add', function(req, res, next) {
  res.render('product-add', { title: '添加商品信息' });
});


module.exports = router;

//http error 
var createError = require('http-errors');
//express mvc core 
var express = require('express');
//node path
var path = require('path');
// client cookie -> cookie json
var cookieParser = require('cookie-parser');
// 日志写
var logger = require('morgan');

//引入session模块
const session=require("express-session");

//引用自定义的middleware
var testPlugins = require("./middlewares/testPlugins")


//引入页面的逻辑模块
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');
var loginRouter = require('./routes/login');

// 创建一个express服务器对象
var app = express();

// 设置 views文件夹的位置1
app.set('views', path.join(__dirname, 'views'));
// 设置模板引擎 express --view=ejs hbs handlebars
app.set('view engine', 'ejs');

//自定义的插件
app.use(testPlugins);

//把session安装 创建session, set-cookie sessionid
app.use(session({
  secret:"qf",
  resave:false,
  saveUninitialized:true,
  cookie: ('name', 'value',{maxAge:  5*60*1000,secure: false})
}));

// app.use(function) 中间件
app.use(logger('dev'));
// json , request -> ajax form ->json post x-wwwx-form-encoded
app.use(express.json());
// form x-wwwx-form-encoded
app.use(express.urlencoded({ extended: false }));
// request cookie - session  json
app.use(cookieParser());

 

//设置静态目录 -》fs.readStream ./xx/xx/ss node linux e:\ /usr/sss
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,"public2")))

//注册资源一级访问路径
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter); // /product/all/1
app.use("/login",loginRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

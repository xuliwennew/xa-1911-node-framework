const http = require("http");
const fs = require("fs");
const path = require("path");

/**
  静态服务器的搭建 Server Client
  1. require("http") 在nodejs中查找模块的方法
  2. 实例化一个Server
 */

//new http.Server() req 获取客户端信息 res 返回信息
// req stream
let server = http
  .createServer((req, res) => {
    //判断请求的文件的扩展名 .jpg | gif mp4
    let urlExt = path.extname(req.url);
    console.log(urlExt);
    if (urlExt == ".jpg") {
      // fs 1.小文件 readFile 一次读一次写 10G
      // fs 2 ,大文件 stream 80kb -> write  处理binary
      let filename = path.basename(req.url);
      let fileUrl = path.resolve(__dirname, "website/images", filename);
      console.log(fileUrl);
      let readStream = fs.createReadStream(fileUrl);
      //把文件流中的buffer binary-> 传到res输入流中
      readStream.pipe(res);
    } else if (urlExt == ".mp4") {
      let filename = path.basename(req.url);
      let fileUrl = path.resolve(__dirname, "website/video", filename);
      console.log(fileUrl);
      let readStream = fs.createReadStream(fileUrl);
      //把文件流中的buffer binary-> 传到res输入流中
      readStream.pipe(res);
    } else if (urlExt == ".css") {
      let filename = path.basename(req.url);
      let fileUrl = path.resolve(__dirname, "website/css", filename);
      console.log(fileUrl);
      let readStream = fs.createReadStream(fileUrl);
      //把文件流中的buffer binary-> 传到res输入流中
      readStream.pipe(res);
    } else {
      let content = fs.readFileSync(
        path.resolve(__dirname, "website/index.html"),
        "utf-8"
      ); //f:xxx/sss
      res.end(content);
    }
  })
  .listen(3000, () => {
    console.log("server is ready on port 3000");
  });

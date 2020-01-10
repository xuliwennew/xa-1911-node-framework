const websocket = require("ws")

//创建一个websocket服务器
let server = new websocket.Server({port:8080})

//通过监听serverebt服务器的事件
//connection : 当有一个客户端连接上了服务器
//message : 当有连接成功的客户端发送数据的时候，
server.on("connection",(socket)=>{
    console.log("some one connected!")

   // message是用来接收客户端发送的数据
    socket.on("message",(data)=>{
        console.log(data)
        //谁发送的，发送给谁
        // socket.send(data)

        //广播模式
        server.clients.forEach(client=>{
            client.send(data)
        })

    })
})
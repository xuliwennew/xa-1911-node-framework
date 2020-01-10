// sign 生成一个jwt token
// verify token
const jwt = require("jsonwebtoken")


//jwt的令牌 = header ({}) + payload(验证的数据) + signature(header+payload+secret sha256)
//根据指定的验证信息生成token
let token = jwt.sign({name:"zhangsan"},"qf",{ expiresIn: '1h' })

console.log(token)

let tokenStr = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiemhhbmdzYW4iLCJpYXQiOjE1Nzg2MzkyNDgsImV4cCI6MTU3ODY0Mjg0OH0.ywalf6UszNNSIvvamnUa6Wiy4sTsYw1CYXMPNJY4O1k"


let data = jwt.verify(tokenStr,"qf")
console.log(data)
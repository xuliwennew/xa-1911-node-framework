


function testPlugins(req,res,next){
   console.log("自定义的中间件调用了！")
   next()
}

module.exports = testPlugins
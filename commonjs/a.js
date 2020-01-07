//模块化目的：封装

//private 
let a = 1

//直接写public
exports.show = function () {
    return "hello world"
}


exports.Person = class Person {

}

// //public 对外访问 exports.a
// module.exports = {
//    a1:a,
//    s:show,
//    getUser(){
//        return "hello"
//    },
// }
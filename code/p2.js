const fp = require('lodash/fp');
const {Maybe, Container } = require(support)

//1.创建一个函数ex1让functor里面的值增加

let maybe = Maybe.of([5,6,1])
let ex1 = 1
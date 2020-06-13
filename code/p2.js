const fp = require('lodash/fp');
const {Maybe, Container } = require('./support');

//1.创建一个函数ex1让functor里面的值增加，使用fp,add 和  fp.map

let maybe = Maybe.of([5,6,1])
let ex1 = maybe.map(fp.map(x => fp.add(1,x)));
console.log(ex1);


//2.使用函数ex2能够使用fp.first获取列表的第一个元素

let xs = Container.of(['do','ray','me','fa','so','la','xi','do'])

let ex2 = xs.map(fp.first);
console.log(ex2)

//3.使用函数ex3找到user的名字的首字母

let safeProp = fp.curry(function(x,o) {
    return Maybe.of(o[x])
})

let user = {
    id: 2,
    name: 'Albert'
}
//字符串分解成数组遇到问题
let ex3 = safeProp('name',user).map(fp.split("")).map(fp.first);
console.log(ex3);


//4.Maybe重写ex4 不用if

// let ex4 = function(n) {
//     if(n) {return parseInt(n)}
// }

let ex4 = function(n){
    Maybe.of(n).map(parseInt)
} 

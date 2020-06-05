//函数式编程概念
//非函数式
let num1 = 1;
let num2 = 2;
let sum= num1 + num2;

//非函数式
function sum1(num1,num2){
    return num1 + num2;
}
let result = sum1(12,3);




//函数是一等公民
/**
 * 1.函数可以存储在变量中
 * 2.函数可以作为参数
 * 3.函数作为返回值
 */
//函数赋值给变量
 let fn = function(){
     console.log('函数是一等公民');
 }



// 高阶函数

//把函数作为参数传递给另一个函数
function forEach(array,fn){
    for (let i = 0; i < array.length; i++) {    
        fn(array[i]);//循环数组需要执行的操作，通过传入函数实现
    }
}
let array = [1,3,5,7,9];
forEach(array,item => {
    console.log(item);
})
// 作业模拟filter
//把函数作为另一个函数的返回结果
function makeFn(){
    return function(){
        console.log('Hello levy')
    }
}
let fn1 = makeFn();
fn1();//第一种执行方式
makeFn()();//第二种执行方式
// 模拟函数只执行一次
function once(fn2){
    let done =false;
    return function(){
        if(!done){
            done = true;
            console.log(fn2);
            return fn2.apply(this,arguments);
        }
    }
}
let pay = once(function(money){
    console.log(money)
})
console.log(JSON.stringify(pay))
pay(10);
pay(10);
pay(10);
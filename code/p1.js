const fp = require('lodash/fp');
//数据
const cars =[
    {
        name: 'F F',
        horsepower: 660,
        dollar_value: 700000,
        in_stock: true
    },
    {
        name: 'SC Z',
        horsepower: 650,
        dollar_value: 648000,
        in_stock: false
    },
    {
        name: 'JX',
        horsepower: 550,
        dollar_value: 132000,
        in_stock: true
    },
    {
        name: 'AMO',
        horsepower: 750,
        dollar_value: 185000,
        in_stock: true
    }
]
//获取最后一条数据的in_stock属性
let isLastInStock = function(cars){
    //获取最后一条数据
    let last_car = fp.last(cars);
    //获取最后一条数据in_stock的值
    return fp.prop('in_stock',last_car);
}
console.log(isLastInStock(cars));

//1. 使用flowRight实现
let isLastInStock2 = fp.flowRight(fp.prop('in_stock'),fp.last);
console.log(isLastInStock2(cars));


//2.获取第一car的name
let getCarName = fp.flowRight(fp.prop('name'),fp.first);
//获取name
let name = getCarName(cars);

//3.组合函数实现averageDollarValue

let _average = function(xs) {
    return fp.reduce(fp.add,0,xs)/xs.length;
}
// let averageDollarValue  = function(cars) {
//     let dollar_values = fp.map(function(car) {
//         return car.dollar_value;
//     },cars)
//     return _average(dollar_values);
// }
// console.log(averageDollarValue(cars));


 let averageDollarValue  = fp.flowRight(_average,fp.map(fp.prop('dollar_value')))
 console.log(averageDollarValue(cars))

//4.编写sanitizeNames函数
let  _underscore = fp.replace(/\W+/g,'_');
let temp = fp.flowRight(_underscore,fp.toLower,fp.prop('name'));
let anitizeNames = fp.map(temp);
let result =anitizeNames(cars);


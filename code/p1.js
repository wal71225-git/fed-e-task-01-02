const fp = require('lodash/fp');
//数据
const cars =[
    {
        name: 'FF',
        horsepower: 660,
        dollar_value: 700000,
        in_stock: true
    },
    {
        name: 'SCZ',
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

function getDoollar_value(car){
    console.log(car)
    return car.dollar_value;
}

let averageDollarValue  = function(cars) {
    console.log(cars)
    return fp.flowRight(_average,fp.map(getDoollar_value()))
}
console.log(averageDollarValue(cars))
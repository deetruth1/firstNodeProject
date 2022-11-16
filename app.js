// const number = 25
// if(number > 20){
//     console.log(`the number is greater than 20 because the number is ${number}`);
// }

// const os = require("os")
// //console.log(os);
// const version = os.version
// const host = os.hostname
// const uptime = os.uptime
// const cpuSpeed = os.cpus
// console.log(`you are currently running on `);
// console.log(`host: ${host}`);
// console.log(`Version: ${version}`);
// console.log(`uptime: ${uptime}`);
// //console.log(`cpu Speed: ${cpuSpeed}`);

// const sayHello = (name) => {
//     console.log(`Hello ${name}`);
// }
// sayHello("Truth")

// const dispNum = () => {
//     for (let num = 0; num < 11; num++){
//         console.log(`The number is: ${num}`);
//     }

// }
// dispNum()

// const sayHello = require("./modules/sayHello")
// sayHello("Moses")
const threeNum = require("./modules/first")
const  DivNum = require("./modules/second")
const power = require("./modules/third")
let sum = threeNum(3,5,7)
//console.log(`the sum is ${sum}`);
let div = DivNum(sum)
// console.log(`the result is ${div}`)
let pow = power(div)
console.log(`the result is ${pow}`);

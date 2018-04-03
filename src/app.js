
// // defaults are imported OUTSIDE of brackets
// // import {add, square, subtract} throws error if subtract is called
// import subtract, {add, square} from './utils.js'
import isSenior, {canDrink, isAdult} from './person.js'

// // console.log(isAdult(18), canDrink(18))
// console.log(subtract(1, 12))

console.log(isSenior(64))
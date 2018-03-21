//arguments object - no longer bound with arrow functions

const add = function(a, b) {
    console.log(arguments[0] + 30) // arguments is a native function thing..? that lets you have access to what is called
    return a + b
}
console.log(add(55, 1))

// const add = (a, b) => {
//     // console.log(arguments) // not defined with arrow functions
// }

//this keyword - no longer bound

// const user = {
//     name: 'Josh',
//     cities: ['Springfield', 'Arlington', 'DC'],
//     printPlacesLived: function() {
//         console.log(this.name)
//         console.log(this.cities)

//         // workaround for 'this' issue
//         const that = this

//         this.cities.forEach(function(city) {
//             console.log(that.name + ' has lived in ' + city)
//             // 'this' throws error here
//         })
//         // as a method, a function within an object has access to 'this'. An anonymous function like this does not
//     }
// }

const user = {
    name: 'Josh',
    cities: ['Springfield', 'Arlington', 'DC'],
    // ES6 method definition
    printPlacesLived() {
        return this.cities.map( city => this.name + ' has lived in ' + city)
        // this.cities.forEach( city => {
        //     console.log(this.name + ' has lived in ' + city)
        // })
        // this arrow function has access to the 'this' keyword
        // don't use arrow functions as methods, do NOT have access to this, goes to window level
    }
}

console.log(user.printPlacesLived())

// Challenge area

const multiplier = {
    arrayOfNumbers: [2, 4, 1, 345, 321, 32],
    multiplyBy: 2.3,
    multiply() {
        return this.arrayOfNumbers.map(x => x * this.multiplyBy)
    }
}

console.log(multiplier.multiply())
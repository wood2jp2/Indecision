// const squareClassic = function(x) {
//     return x*x
// }

// const squareArrow = x => x * x

// console.log(squareClassic(4))

// Challenge - use arrow functions
// getFirstName('Mike Smith') => 'Mike'
// create regular arrow function
// create arrow function using shorthand syntax

const getFirstNameVerbose = str => {
    return str.split(' ')[0]
}

console.log(getFirstNameVerbose('Tyler Smith'))

const getFirstNameShorthand = str => str.split(' ')[0]

console.log(getFirstNameShorthand('Matt Delaney'))

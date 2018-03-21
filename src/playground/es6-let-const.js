var nameVar = 'Josh'
var nameVar = 'Randy'
console.log('nameVar', nameVar) //Randy

let nameLet = 'Art'
//let nameLet = 'Nancy ----- CANNOT re-declare
nameLet = 'Nancy' //this is fine, and nameLet is now Nancy
console.log('nameLet', nameLet)

const nameConst = 'Frank'
// nameConst = 'Gunner' //the value should not change, this is invalid
// const nameConst = 'Fernan' //this is also invalid
console.log('nameConst', nameConst)

let saySomething = () => {
    var hey = 'hey'
    console.log(hey)
}

saySomething()

// console.log(hey) // won't work, since hey is scoped to the function, same with 'const' or 'let'

var fullName = 'Josh Wood'
// let fullName // if you declare out here, then you are good

if (fullName) {
    var firstName = fullName.split(' ')[0]
    // let firstName = fullName.split(' ')[0] //only accessible within the 'if' statement
    // const firstName = fullName.split(' ')[0] // only accessible within the 'if' statement
    console.log(firstName) //outputs 'Josh' for all cases
}

console.log(firstName) // for 'var' works, does NOT work for 'const' or 'let' if declared within if statement
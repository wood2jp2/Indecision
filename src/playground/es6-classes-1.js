
// upper case first letter
class Person {
    // Anonymous is default if no arg is given
     constructor(name = 'Anonymous', age = 0 ) {
         this.name = name
         this.age = age
     }
     getDescription() {
         return `${this.name} is ${this.age} year${this.age === 1 ? '' : 's'} old`
     }
     getGreeting() {
        //  return 'Hi. I am ' + this.name
        // string interpolation, no manual concatination
        return `Hi! I am ${this.name}`
     }
}

class Student extends Person {
    constructor(name, age, major) {
        // super gets parent values when called in the constructor
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription()
        this.hasMajor() ? description += `. Major is ${this.major}.` : null
        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    getGreeting() {
        let greeting = super.getGreeting()
        this.homeLocation ? greeting+=`. I am visiting from ${this.homeLocation}` : null
        
        return greeting
    }
}

const me = new Traveler('Josh Wood', 26, 'Springfield')
console.log(me.getGreeting())

const other = new Traveler(undefined, undefined, 'Nowhere')
console.log(other.getGreeting())
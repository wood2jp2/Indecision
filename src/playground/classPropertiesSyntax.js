class OldSyntax {
    constructor(props) {
        this.name = 'Mike'
        this.age = props
        this.getGreeting = this.getGreeting.bind(this)
    }
    getGreeting() {
        return `Hi my name is ${this.name} `
    }
}

const Josh = new OldSyntax(24)
const getGreeting = Josh.getGreeting

console.log(getGreeting())

// ================================== //

class NewSyntax {
    name = 'Josh';
    getGreeting = () => `Hi my name is ${this.name}`
}

const Josh1 = new NewSyntax()
const newGreeting = Josh1.getGreeting
console.log(newGreeting())
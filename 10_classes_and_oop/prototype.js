let myName = 'harsh    ';
let mychannel = 'chai        ';

// console.log(myName.length);
// console.log(myName.truelength);

let myHeros = ['thor', 'spiderman']

let heroPower = { 
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.harsh = function(){
    console.log(`harsh is present in all object`);
}

Array.prototype.heyHarsh = function() {
    console.log(`Harsh says Hello`);
}

// heroPower.harsh()
// myHeros.harsh()
// myHeros.heyHarsh()
// heroPower.heroPower()

// inheritance

const User = {
    user: 'chai',
    email: 'google.com'
}

const Teacher = {
    makeVideo: true

}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = 'ChaiAurCode    '

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
'harsh'.trueLength()
'iceTea'.trueLength()
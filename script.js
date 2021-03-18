
function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User ('Вася');

alert (user.name);
alert (this.isAdmin);



// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User ('Вася');

// alert (user.name);
// alert (this.isAdmin);



// console.log(this);


// function myFunction() {
//     console.log(this);
// }

// myFunction();


// var dog = {
//     name: "chester",
//     breed: 'beagle',
//     intro: function() {
//         console.log(this);
//     }
// };

// dog.intro();


// let room = {
//     name: "Vasya",
//     Age: 30,
//     intro: function () {
//         console.log(this);
//     }
// };

// room.intro();


var obj1 = {
    Hello: function() {
        console.log('Hello world');
        return this;
    },

    obj2: {
        bread: 'dog',
        speak: function() {
            console.log('woof!');
            return this;
        }
    }
};


console.log(obj1);
console.log(obj1.Hello());
console.log(obj1.obj2);
console.log(obj1.obj2.speak());

var objReg = {
    Hello: function() {
        return this;
    }
};

var objArrow = {
    hello: () => this 
};

objReg.Hello();
objArrow.hello();

// function test () {
//     console.log('hello world');
//     console.log(this);
// };


// test();

// function test () {
//     'user strict';
//     return this;
// }

// var dog = {
//     breed: 'Beagles',
//     LovesTocHase: 'rabbits',
// };

// function chase () {
//     console.log(this.breed + 'loves chasing' + this.loveschasing + '.');
// }

// dog.foo = chase;
// dog.foo();


// chase();


// function Dog(breed, name, friend){
//     this.breed = breed;
//     this.name = name;
//     this.friends = friends;
//     this.intro = function() {
//         console.log('Hi, my name is ${this.name} and Im a ${this.breed}');
//         return this;
//     }
// };

// var Chester = new Dog('beagle', 'chester', ['Graie', 'Josey', 'Barkley']);

// Chester.intro();
// console.log(Chaster);

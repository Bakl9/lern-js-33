
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


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




function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User ('Вася');

alert (user.name);
alert (this.isAdmin);

var user = {
    name : 'vishal',
    sayHi: () => {
        console.log(`name: ${this.name}`);
    },
    sayName(){
        console.log(arguments);
        console.log(`name: ${this.name}`);
    }
}

user.sayHi();
user.sayName(1,2,3);
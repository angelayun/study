var age = 10;
var person = {
    age: 20,
    getAge () {
        var age = 30;
        return this.age;
    },
};
alert(age, age * 2); // 10,20
person.getAge(); //20
var b = person.getAge;
b(); //10
(person.getAge)(); //10
(1, person.getAge)();//10
(1, person.getAge.bind(person))();//20
(person.getAge, person.getAge)();//20
(person.getAge = person.getAge)();//报错
person.getAge.call(); //10
person.getAge.call(person);//20

function getAge2 () {
    this.age = 40;
    console.log(person.getAge());
};
getAge2();//40
console.log(age);//40

function getAge3 () {
    this.age = 50;
    this.getAge4 = () => {
        console.log(person.getAge.call(this));
    }
}
new getAge3().getAge4();
console.log(age);

function getAge4 () {
    this.age = 60;
    this.getAge5 = () => {
        console.log(person.getAge.call(this));
    }
}
new getAge4().getAge5();
console.log(age);
var age2 = 10;
var person2 = {
    age2: 20,
    getAge2: () => {
        var age2 = 30;
        return this.age2;
    },
};
console.log(person2.getAge2.call());
console.log(person2.getAge2.call(person2));
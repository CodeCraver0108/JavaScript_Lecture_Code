// Sometimes we need to create many objects of the same type.

// To create an object type we use an object constructor function.h

// It is considered good practice to name constructor functions with an upper-case first letter.

function Person(first,last,age){
    this.firstName = first,
    this.lastName = last,
    this.age = age
}
const payal = new Person('Payal','sharma',20)


console.log(payal)





















// In the constructor function, this has no value.

// The value of this will become the new object when a new object is created.










// const P1 = new Person('Shivansh','Patel',20)
// const P2 = new Person('Rahul','Tiwari',30)
// console.log(P2)







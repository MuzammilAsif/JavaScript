// basics of javascript 
let name = "Your name \n"
let age = 18
console.log(name, age)

// calculation usign arithmetic operators
let a = 6
let b = 4
console.log(`the sum of ${a} and ${b} is ${a+b}`)
console.log(`the sub of ${a} and ${b} is ${a-b}`)
console.log(`the multiply of ${a} and ${b} is ${a*b}`)
console.log(`the Divison of ${a} and ${b} is ${a/b}`)

// increment & decrement
let num0 = 2
console.log('post increment',num0++)
console.log('pre increment',++num0)
console.log(num0)

console.log('post decrement',num0--)
console.log('pre decrement',--num0)
console.log(num0)

// objects in javascripts
const obj = {
    name:'john',
    age:22,
    passion:'programmer'
}
console.log(obj);
console.log(obj['name']);
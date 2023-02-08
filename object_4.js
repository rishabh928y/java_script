const num = new Array(1,2,3,4,5,6,7,8,9);

// Push
num.push(10)

// Unshift
// num.unshift(0)

// Pop
num.pop()

// Shift
// num.shift()

num[0] = {num:80}

const names = ['Amal', 'Dhanvan', 'Akash', 'Akshit', 'Neha', 'Supriya', 'Akash']
names.indexOf('Akash')

names.lastIndexOf('Akash')

names.includes('Akshit')

let channels = [{
    name: 'Apna College', 
    subscriber: 1000
}, {
    name: 'Apni Kaksha',
    subscriber: 20000
}, {
    name: 'Aman Dhattarwal',
    subscriber: 50000
}];

let names1 = ['Amal', 'Dhanvan', 'Akash']
let names2 = ['Akshit', 'Neha', 'Supriya', 'Akash']

// console.log(channels.find(element => element.name === 'Apna Kaksha'))
// let names3 = names.concat(names2)
let names3 = [...names1, ...names2]

console.log(names3)

// For Loop
for(let i = 0; i<names.length; i++) {
    // console.log(names[i])
}

// For of
for(let name of names) {
    // console.log(name)
}

names.forEach(function(name, index){
    // console.log(name, index);
}) 

// Join 
let student = ['S', 'h', 'i', 'v', 'a']
student = student.join('_')

// Split
// console.log(student.split('_'))

let cities = [
    {name: 'Mumbai', population: 3792621},
    {name: 'Delhi', population: 8175133},
    {name: 'Bangalore', population: 2695598},
    {name: 'Chennai', population: 2099451},
    {name: 'Lucknow', population: 1526006}
];

// console.log(cities.filter(city => city.population > 3000000))
console.log(cities.map(city => city.population * 2))



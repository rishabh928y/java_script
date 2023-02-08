// Primitive Datatype
// let number = 10;
// // Pass by Value 
// let number_2 = number
// number = 15;

// // console.log(number);
// // console.log(number_2);

// // Reference Datatype
// let obj = {number : 10};
// // Pass by Reference
// let obj2 = obj;

// // obj.number = 15;

// // console.log(obj)
// console.log(obj2)

const course = {
    title: 'Javascript',
    enroll() {
        console.log('you are successfully enrolled');
    }
}

// const Course_1 = { ...course }
// course_1.title = "C++";

const course_1 = Object.assign({},course)
course_1.title = 'C++'

for(let key in course) {
    console.log(key, course[key]);
}

for(let key of Object.keys(course)) {
    console.log(key, course[key]);
}

const course_1 = {};

for(let key of Object.keys(course)) {
    course_1[key] = course[key]
}

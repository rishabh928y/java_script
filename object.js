// // let lecture = 10;
// // let section = 3;
// // let title = 'Javascript';

// // const course = {
// //     lecture: 10,
// //     section: 3,
// //     title: 'Javascript',
// //     notes: {
// //         introduction: "Welcome to JS course"
// //     },
// //     enroll() {
// //         console.log('you are successfully enrolled');
// //     }
// // }

// // course.enroll()
// // console.log(course)

// // course.price = 999

// //Factory Function
// function createCourse(title) {
//     return {
//         title:title,
//         enroll() {
//             console.log('you are successfully enrolled');
//         }
//     }
// }

// const newCourse = createCourse('Javascript');

// course.enroll()
// console.log(course)

// Constructor Function
function Course(title) {
    this.title = title,
    this.enroll = function() {
        console.log('you are successfully enrolled');
    }
// }

// const course = new Course('Javascript');
// delete course.title;
// course.checkEnrollment = function(){
//     console.log('30 users are enrolled');
// }
// course.enroll()

// console.log(course)

// const Course = new Course('Javascript');
// console.log(course.constructor)
// console.log(newCourse.constructor)

// const course = {
//     title: title,
//     enroll() {
//         console.log('you are successfully enrolled');
//     }
// }

const course = new Object({
    title: title,
    enroll() {
        console.log('you are successfully enrolled');
    }
})

// const course = 'jewefn'   // immutable

// const Course_1 = new Function('title', `
// this.title = title,
// this.enroll = function () {
//     console.log('you are successfully enrolled');
// }
// `)

// const course_2 = new Course_1('Javascript');
// course_2.enroll();

// // let fetchData = callback => {
// //     setTimeout(() => {
// //         callback('My name is subhrajit')
// //     }, 1500)
// // };
// // setTimeout(() => {
// //     console.log('Timer is done');
// //     fetchData(text => {
// //         console.log(text);
// //     })
// // }, 2000)
// // console.log('Hello');
// // console.log('Hi');


// let fetchData = () => {
//     let promise = new Promise((res, rej) => {
//         setTimeout(() => {
//             res('Done!')
//         }, 1500)
//     })
//     return promise;
// }

// setTimeout(() => {
//     console.log('Timer is done');
//     fetchData()
//         .then(text => {
//             console.log(text);
//             return fetchData()
//         })
//         .then(text2 => {
//             console.log(text2);
//         })
// }, 2000)
// console.log('Hi');
// console.log('Hello');

const p1 = new Promise((resolve, reject) => {
    resolve('hello');
})

const p2 = new Promise((resolve, reject) => {
    throw new Error('报错了');
    // resolve('hi')
})


Promise.race([p1, p2]).then(result => {
    console.log(result)
}).catch(err => {
    console.log(err)
})

const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('fail')), 3000)
})
  
const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(p1), 1000)
})

// 由于p2返回的是另一个 Promise(p1)，
// 导致p2自己的状态无效了，由p1的状态决定p2的状态
p2.then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})

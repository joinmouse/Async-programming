// then方法可以接受两个回调函数作为参数
// 第一个回调函数是Promise对象的状态变为resolved时调用
// 第二个回调函数是Promise对象的状态变为rejected时调用

let promise = new Promise(function(resolve, reject) {
    console.log('Promise');
    resolve();
});

promise.then(function() {
    console.log('resolved')
})

console.log('Hi')
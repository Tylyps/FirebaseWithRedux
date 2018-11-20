const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Jakub',
    //   age: 21
    // });
    reject('Something went wrong!');
  }, 2000)
});

console.log('before');

promise.then((data) => {
  console.log('1', data);
}).catch((error) => {
  console.log(error)
});

console.log('after')

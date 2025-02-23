// Example of using Callback
fetchDataCallback('https://jsonplaceholder.typicode.com/posts/1', function (error, data) {
  if (error) {
    console.log('Failed:', error);
  } else {
    console.log('Callback Response Data:', data);
  }
});

// Example of using Promise
fetchDataPromise('https://jsonplaceholder.typicode.com/posts/1')
  .then((data) => {
    console.log('Promise Response Data:', data);
  })
  .catch((error) => {
    console.log('Promise Failed:', error);
  });

// Example of using Async/Await
fetchDataAsync('https://jsonplaceholder.typicode.com/posts/1');

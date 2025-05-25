// Using Callback
function fetchDataCallback(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      callback(null, xhr.responseText); // No error, pass the response
    } else {
      callback('Error: ' + xhr.status); // Error occurred
    }
  };

  xhr.onerror = function () {
    callback('Network Error'); // Network error
  };

  xhr.send();
}

// Using Promise
function fetchDataPromise(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(xhr.responseText); // Resolve with response data
      } else {
        reject('Error: ' + xhr.status); // Reject with error message
      }
    };

    xhr.onerror = function () {
      reject('Network Error'); // Reject if there is a network error
    };

    xhr.send();
  });
}

// Using Async/Await
async function fetchDataAsync(url) {
  try {
    const data = await fetchDataPromise(url); // Await the Promise from fetchData
    console.log('Response Data:', data);
  } catch (error) {
    console.log('Failed:', error); // Log the error if rejected
  }
}


dyfaygdhasgdhyag

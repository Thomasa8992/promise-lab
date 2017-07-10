var promise = Promise.reject(new Error('Salt in your wound!'));

promise.catch(function (err) {
      console.error(err.message);
    });


// Your task is to implement a custom Promise implementation using ES6. The Promise object represents a value that may not be available yet but will be resolved at some point in the future.

// You will need to use polyfills to ensure that your implementation works in all modern browsers. Your implementation should include the following methods:

//     then(onFulfilled, onRejected) - Adds a callback to be executed when the Promise is resolved.
//     catch(onRejected) - Adds a callback to be executed when the Promise is rejected.
//     resolve(value) - Resolves the Promise with a given value.
//     reject(reason) - Rejects the Promise with a given reason.

class CustomPromise {
  constructor(executor) {
    // Initial state is pending
    this.state = "pending";
    // queue to stoer callback from 'then' on successfull resolve
    this.callbackQueue = [];
    // error handling, initial setup to blank function. updated with caller callback of catch for error handline
    this.onRejected = () => {};
    //bind resolve and reject to current object of Promise
    this.onResolve = this.onResolve.bind(this);
    this.onReject = this.onReject.bind(this);

    executor(this.onResolve, this.onReject);
  }

  onResolve(value) {
    try {
      //Resolved and update state
      this.state = "fulfilled";
      this.value = value; // Store the resolved value
      // execute the callbacks in the queue now.
      this.callbackQueue.forEach((callback) => {
        // the previous value is used for next chain
        this.value = callback(this.value); // Pass the value through the promise chain
      });
    } catch (error) {
      //clear further chains if error occurs
      this.callbackQueue = [];
      this.onReject(error);
    }
  }

  onReject(error) {
    //update state and pass error handling callback to be executed
    this.state = "rejected";
    this.onRejected(error);
  }

  then(onFulfilled, onRejected) {
    //incase of already fullfilled execute the promise logic here or else when not fulfilled push to queue.
    // handles the case, when promise resolves or rejects synchronously
    return new CustomPromise((resolve, reject) => {
      const callback = () => {
        try {
          if (typeof onFulfilled === "function") {
            const result = onFulfilled(this.value); // Execute the onFulfilled callback with the resolved value
            resolve(result); // Resolve the new promise with the result of the callback
          } else {
            resolve(this.value); // Resolve the new promise with the resolved value
          }
        } catch (error) {
          reject(error); // Reject the new promise if an error occurs
        }
      };

      if (this.state === "fulfilled") {
        // If promise is already fulfilled, execute the callback immediately,
        callback();
      } else {
        this.callbackQueue.push(callback);
      }
    });
  }

  catch(onRejected) {
    this.onRejected = onRejected;
    return this;
  }

  static resolve(value) {
    return new CustomPromise((resolve) => resolve(value));
  }

  static reject(reason) {
    return new CustomPromise((resolve, reject) => reject(reason));
  }
}

// You will need to fill in the constructor and the methods with the appropriate code to make this implementation work.
// Requirements

//     Your implementation should work in all modern browsers, including IE11 and above.
//     Your implementation should include error handling for any unexpected behavior.
//     Your implementation should not use any external libraries or frameworks.
//     Your implementation should use ES6 features, including classes and arrow functions.
//     Your implementation should be well-documented with clear explanations of how it works.

// Testing

// To test your implementation, you can create a new instance of your CustomPromise class and use it to resolve or reject a value, and then use the then and catch methods to handle the results.

// Here's an example of how to use your implementation:

const myPromise = new CustomPromise((resolve, reject) => {
  //Resolve the Promise after 1 second
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

myPromise
  .then((result) => {
    console.log(result); // Output: Success!
  })
  .catch((error) => {
    console.error("error", error);
  });

// //   You can also test your implementation by creating a Promise that rejects, and using the catch method to handle the error:
const myPromise1 = new CustomPromise((resolve, reject) => {
  // Reject the Promise immediately
  resolve("Error!");
});

myPromise1.then((error) => {
  console.log("error", error); // Output: Error!!
});

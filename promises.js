const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 5000);
  //   reject("error");
});

promise.then(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log("error :", error);
  }
);

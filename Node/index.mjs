import fs from "fs";

// const file = fs.readFileSync("index.html");

// console.log(file.toString());

// fs.readFile("index.html", (error, data) => {
//   if (error) throw error;
//   else console.log(data.toString());
// });

// fs.appendFile("file1.js", "console.log('hello javascript')", function (err) {
//   if (err) throw err;
//   console.log("Saved!");
// });

// fs.open("mynewfile2.txt", "w", function (err, file) {
//   if (err) throw err;
//   console.log("Saved!");
// });

// fs.writeFile("mynewfile3.txt", "Hello js!", function (err) {
//   if (err) throw err;
//   console.log("Saved!");
// });

// fs.appendFile("mynewfile1.txt", " This is my text.", function (err) {
//   if (err) throw err;
//   console.log("Updated!");
// });

// fs.writeFile("mynewfile3.txt", "This is my text", function (err) {
//   if (err) throw err;
//   console.log("Replaced!");
// });


// fs.unlink("mynewfile2.txt", function (err) {
//   if (err) throw err;
//   console.log("File deleted!");
// });

fs.rename("mynewfile1.txt", "myrenamedfile.txt", function (err) {
  if (err) throw err;
  console.log("File Renamed!");
});
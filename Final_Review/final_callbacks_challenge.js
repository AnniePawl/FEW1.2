// const callbacks = [];

// for (var i = 0; i < 4; i++) {
//   callbacks.push(() => {
//     console.log(i)
//   });
// }

const callbacks = [];

for (var i = 0; i < 4; i++) {
  callbacks.push (i);
  console.log(i);
  }

callbacks[0]();
callbacks[1]();
callbacks[2]();
callbacks[3]();

// Console currently logging  4 4 4 4
// Problem with callbacks.push and arrow function
// Arrow function not good for content that's changing (dynamic)

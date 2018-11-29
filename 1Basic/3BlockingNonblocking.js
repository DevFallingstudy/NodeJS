/* Let's learn about blocking and non-blocking */

var fs = require("fs");

/* Blocking Code */
console.log('')
console.log('---- Blocking Start ----')
var data = fs.readFileSync('files/blocktxt.txt');
console.log(data.toString());
console.log('Has ended after blocktxt');

console.log('')

/* Non-Blocking Code */
console.log('---- Non-Blocking Start ----')
fs.readFile('files/blocktxt.txt', function(err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});

console.log('Ending while reading blocktxt')

// MVP VERSION
const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Number = function () {
  this.text = null;
};

Number.prototype.getData = function () {
  const request = new Request('http://numbersapi.com/random/trivia');
  request.get((data) => {
    // console.log(data);
    // console.log(event);
    this.text = data;
    // console.log(this.text);
    PubSub.publish('Number:number-loaded', this.text);
  })
}

module.exports = Number;


// // EXTENSION VERSION
// const PubSub = require('../helpers/pub_sub.js');
// const Request = require('../helpers/request.js');
//
// const Number = function () {
//   this.number = [
//       {type: 'Date'},
//       // 'http://numbersapi.com/random/date'
//       {type: 'Math'},
//       // 'http://numbersapi.com/random/math'
//       {type: 'Trivia'},
//       // 'http://numbersapi.com/random/trivia'
//       {type: 'Year'},
//       // 'http://numbersapi.com/random/year'
//     ];
// };


// module.exports = Number;


// FURTHER EXTENSION - NOT WORKING
// Number.prototype.bindEvents = function() {
//   PubSub.subscribe('SelectNumberView:number-input', (event) => {
//     const inputNumber = event.detail;
//     const result = this.numberCallback(inputNumber);
//     PubSub.publish('Number:callback', result);
//   });
// };
//
//
// Number.prototype.numberCallback = function(number) {
//           document.getElementById('number-fact').innerText = str;
//       }
//
//       (function() {
//           var scriptTag = document.createElement('script');
//           scriptTag.async = true;
//           scriptTag.src = "http://numbersapi.com/42/math?callback=showNumber";
//           document.body.appendChild(scriptTag);
//       })();
// };
//
// Number.prototype.getData = function () {
//   const request = new Request('http://numbersapi.com/random/trivia');
//   request.get((data) => {
//     // console.log(data);
//     // console.log(event);
//     this.text = data;
//     // console.log(this.text);
//     PubSub.publish('Number:number-loaded', this.text);
//   })
// }
//
// module.exports = Number;

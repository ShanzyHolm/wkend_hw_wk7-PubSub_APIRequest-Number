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

const PubSub = require('../helpers/pub_sub.js');

const NumberView = function (container) {
  this.container = container;
};

NumberView.prototype.bindEvents = function () {
  PubSub.subscribe('Number:number-loaded', (event) => {
    this.render(event.detail);
    console.log(this.container);
  });
}

NumberView.prototype.render = function (number) {
  const p = document.createElement('p');
  p.textContent = number;
  // console.log(number);
  this.container.appendChild(p);
}

module.exports = NumberView;

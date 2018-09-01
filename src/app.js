const Number = require('./models/number.js');
const NumberView = require('./views/number_view.js');

document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');

  const number = new Number();
  number.getData();

  const numberContainer = document.querySelector('div#number-container');

  const numberView = new NumberView(numberContainer);
  numberView.bindEvents();
});

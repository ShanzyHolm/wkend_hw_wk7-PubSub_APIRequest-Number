// // MVP VERSION
//
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





// // EXTENSION VERSION
// const Number = require('./models/number.js');
// const NumberView = require('./views/number_view.js');
// const SelectNumberView = require('./views/select_number_view.js');
//
// document.addEventListener('DOMContentLoaded', () => {
//   const selectYearElement = document.querySelector('select#year-dropdown');
//   const yearDropdown = new SelectNumberView(selectYearElement);
//   yearDropdown.bindEvents();
//
//   const number = new Number();
//   number.getData();
//
//   const numberContainer = document.querySelector('div#number-container');
//
//   const numberView = new NumberView(numberContainer);
//   numberView.bindEvents();
// });

// ===========================================

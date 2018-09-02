// EXTENSION - NOT WORKING

// const PubSub = require('../helpers/pub_sub.js');
//
// const SelectNumberView = function(yearElement) {
//   this.yearElement = yearElement;
// };
//
// SelectNumberView.prototype.bindEvents = function() {
//   const input = document.querySelector('#number')
//   input.addEventListener('input', (event) => {
//     const inputNumber =  ;
//     // console.log('inputNumber', inputNumber);
//     PubSub.publish('SelectNumberView:number-input', inputNumber);
//   })
// };
//
//
// module.exports = SelectNumberView;


// // FURTHER EXTENSION - Input year of birth to return a number fact
// SelectNumberView.prototype.populate = function() {
//   var min = 1900,
//   max = 2018,
//   select = document.getElementById('select#year-dropdown');
//
//   for (var y = min; y <= max; y++) {
//     var option = document.createElement('option');
//     option.value = y;
//     option.innerHTML = y;
//     this.yearElement.appendChild(option);
//   };
//   this.yearElement.value = new Date().getFullYear();
// }


// https://stackoverflow.com/questions/19731767/to-generate-years-automatically-in-javascript-dropdown

const assert = require('assert');
const { Given, When, Then } = require('cucumber');


function isItFriday(today) {
    if (today === "friday"){
        return "Shubham";
    }else{
 return "nope";  
}
}
  
  Given('today is Sunday', function () {
    this.today = 'Sunday';
  });
  
  When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today);
  });
  
  Then('I should be told {string}', function (expectedAnswer) {
    assert.equal(this.actualAnswer, expectedAnswer);
  });
  Given('today is Friday', function () {
  this.today = 'Friday';
});
//Global scope variable
var name = 'Vaibhav';

var fullName = (function() {
    var name = 'Vai';
     return function() {
         name = name + ' ' + 'Vashishtha'; 
         console.log(name);
        };
 })();

 alert(fullName());

/**
 * To create a process to update a counter
 */
var counter = 0;

/**
 * Based on the option increment / decrement a counter
 * @param {*} option 
 */
function updateCounter(option) {
    if (option == 'increment') {
        counter++;
    } else if (option == 'decrement') {
        counter--;
    }
}

function getCounterValue() {
    return counter;
}
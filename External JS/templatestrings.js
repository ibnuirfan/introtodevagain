function addTwoNumbers(a, b = 0) {
    var sum = a + b;
    console.log(`The sum of ${a} and ${b} is ${sum}`);
    return 'The sum of ${a} and ${b} is ${sum}';
}

var fullNameOld = function(firstName, LastName) {
    return 'my full name is' + 1>2 + ' ' + LastName;
}

const fullName = (firstName, LastName) => {
    return `my full name is ${1>2} ${LastName}`;
}

console.log(fullNameOld('Vaibhav', 'Vashishta'));

console.log(fullName('Vaibhav', 'Vashishta'));
"use strict"

// Module four JS. Lesson seven. Collback and arrow function

// function
// callback function
console.log('Exemple one. Callback function');

function greet(name) {
    console.log(`Welcom ${name}!`)
    return `Welcom ${name}!`;
}

console.log(greet('Aleksey'));
console.log(greet);

// higher order function
function registerGuest(name, callback) {
    console.log(`Register gest ${name}.`);
    callback(name);
}

registerGuest('Artiom', greet);

// inline callback function
console.log('Exemple tree. Inline calback function');

function registerGuestOne(name, callback) {
    console.log(`Register guest ${name}.`);
    callback(name);
}

registerGuestOne('Ivan', function greetOne(name) {
    console.log(`Welcome ${name}.`);
});

registerGuestOne('Hennadii', function notify(name) {
    console.log(`Dear ${name}, your number will be ready in 30 minutes.`);
});

// several callback
console.log('Exemple four. Several callbacks');

// function without colbacks
function processCall(recipient) {
    const isRecipientAvailable = Math.random() > 0.5;

    if (!isRecipientAvailable) {
        console.log(`The subscriber ${recipient} is not available, leave message.`);
    } else {
        console.log(`Connecting with ${recipient}, pleas wait...`);
    }
}

processCall('Mxim');

// function with callbacks
function processCallOne(recipient, onAvalaible, onNotAvalaible) {
    const isRecipientAvalaible = Math.random() > 0.5;
    
    if (!isRecipientAvalaible) {
        onAvalaible(recipient);
        return;
    }

    onNotAvalaible(recipient);
}

function takeCall(name) {
    console.log(`Connecting with ${name}, pleas wait...`);
}

function activateAnsweringMachine(name) {
    console.log(`The subscriber ${name} is not avalaible, leave message.`);
}

function leaveHoloMessage(name) {
    console.log(`The subscriber ${name} is not avalaible, recording hologram`);
}

processCallOne('Andrey', takeCall, activateAnsweringMachine);
processCallOne('Anton', takeCall, leaveHoloMessage);

// abstraction repeat
console.log('Abstraction repeat.');
console.log('Cycle.');

const n = 3;

for (let i = 0; i < n; i += 1) {
    console.log(i);
}

// abstraction
console.log('Abstraction.');

function repeatLog(n) {
    for (let i = 0; i < n; i += 1) {
        console.log(i);
    }
}

repeatLog(5);

// Exemple
function printValue(value) {
    console.log(value);
}

function prettyPrint(value) {
    console.log('Logging value: ', value);
}

function repeat(n, action) {
    for (let i = 0; i < n; i += 1) {
        action(i);
    }
}

repeat(2, printValue);
repeat(3, prettyPrint);

// Method forEach
console.log('Metod forEach.');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

for (let i = 0; i < numbers.length; i += 1) {
    console.log(`Index: ${i}, value: ${numbers[i]}`);
}

numbers.forEach(function (number, index) {
    console.log(`Index: ${index}, value: ${number}`);
});

// arrow functions
console.log('Arrow functions.');

classicAdd(1, 2, 3);

function classicAdd(a, b, c) {
    return a + b + c;
}

console.log(classicAdd());

//if several parameters
const arrowAdd = (a, b, c) => {
    return a + b + c;
};

console.log(arrowAdd(1, 2, 3));

// if one a parameter
const arrowLog = name => {
    console.log(name);
};

arrowLog('Alekseii');

// if without a parameter
const arrowLogHello = () => {
    console.log('Hello!');
};

arrowLogHello();

// Implicit return
console.log('Implicit return.');

const add = (a, b, c) => {
    return a + b + c;
};

console.log(add(1, 2, 5));

const multiply = (a, b, c) => a * b * c;

console.log(multiply(1, 2, 3));

// arguments, rest
const words = (...args) => {
    console.log(args);
};

words('word one', 'word two', 'word tree', '...',);

// arrow functions as callbacks
const numbersOne = [10, 20, 30, 40, 50,];

numbersOne.forEach(function (number, index) {
    console.log(`Index: ${index}, value: ${number}.`);
});

numbersOne.forEach((number, index) =>
    console.log(`Index: ${index}, value: ${number}.`));

const logMessage = (number, index) => {
    console.log(`Index: ${index}, value: ${number}.`);
};

console.log(logMessage);

numbersOne.forEach(logMessage);

// varieties code
console.log('Varieties code.');
console.log('Imperative programming.');

const numbersTwo = [100, 200, 300, 400, 500, 600, 700, 800,];
const filteredNumbers = [];

for (let i = 0; i < numbersTwo.length; i += 1) {

    if (numbersTwo[i] > 400) {
        filteredNumbers.push(numbersTwo[i]);
    }
}

console.log(filteredNumbers);

console.log('Declarative programming.');
const filteredNumbersOne = numbersTwo.filter(value => value > 500);
console.log(filteredNumbersOne);

// Module four. Lesson eight. Iterating array methods

// Ditry function
console.log('Dirty function.');

const dirtyMultiply = (array, value) => {
    console.log(`Array before function implementation: ${array}.`);
    for (let i = 0; i < array.length; i += 1) {
        array[i] = array[i] * value;
    }
    console.log(`Array after function implementation: ${array}.`);
};

const numbersThree = [1000, 2000, 3000, 4000,];

dirtyMultiply(numbersThree, 2);

console.log(numbersThree);

// Pure function
console.log('Pure function.');

const pureMultiply = (array, value) => {
    console.log(`Array before function implementation ${array}.`);

    const newArray = [];

    array.forEach(element => {
        newArray.push(element * value);
    });

    console.log(`Array after function implementation ${array}.`);

    return newArray;
};

console.log(pureMultiply(numbersThree, 2));

// Iteration array methods

// Method map()
console.log('Method map()');
const numbersFour = [850, 750, 650, 550, 450, 350, 250, 150, 50,];
const addFifty = numbersFour.map(number => number + 50);
console.log(addFifty);

const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase);

const students = [
  { name: 'Andrey', score: 83 },
  { name: 'Aleksey', score: 59 },
  { name: 'Ivan', score: 37 },
  { name: 'Maxim', score: 94 },
  { name: 'Nikolay', score: 64 },
];

const names = students.map(student => student.name);

console.log(names);

// Method flatMap()
console.log('Method flatMap().');

const studentsOne = [
  { name: 'Andrey', courses: ['mathematics', 'fisics'] },
  { name: 'Aleksey', courses: ['informatics', 'mathematics'] },
  { name: 'Ivan', courses: ['fisics', 'biology'] },
];

console.log(studentsOne.map(student => student.courses));

console.log(studentsOne.flatMap(student => student.courses));

const studentsTwo = [
    {
        name: 'Andrey',
        courses: [
            ['mathematics', 'fisics'],
            ['informatics', 'mathematics'],
            ['fisics', 'biology'],
        ],
    },
    {
        name: 'Aleksey',
        courses: [
            ['informatics', 'mathematics'],
            ['mathematics', 'fisics'],
            ['fisics', 'biology'],
        ],
    },
    {
        name: 'Ivan',
        courses: [
            ['fisics', 'biology'],
            ['mathematics', 'fisics'],
            ['informatics', 'mathematics'],
        ],
    },
];

console.log(studentsTwo.flatMap(student =>
    student.courses.flatMap(cours => cours)));

// Method filter()
console.log('Method filter()');

const values = [51, -3, 27, 21, -68, 42, -37,];

const positiveValues = values.filter(value => value > 0);
console.log(positiveValues); // [51, 27, 21, 42]

const bigValues = values.filter(value => value > 100);
console.log(bigValues); // []

console.log(values.map(value => value > 0));
// [true, false, true, true, false, true, false]

// unique elements
console.log('Unique elements');

const allCourses = studentsOne.flatMap(student => student.courses);
console.log(allCourses);

// console.log(studentsOne.filter(course => console.log(course)));
// console.log(studentsOne.filter(course => console.log(course.courses)));
    
const uniqueCourses = allCourses.filter(
    (course, index, array) => array.indexOf(course) === index);

console.log(uniqueCourses);

console.log('My example')

const array = allCourses.filter(
    (course, index, array) => {
        console.log(array);
        console.log(index);
        console.log(course);
    });

console.log(array);

const numbersFive = [1, 2, 3, 1, 4, 5, 1, 6, 7, 1, 8, 9,];
console.log(numbersFive.indexOf(1));

// Method find()
const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

console.log(colorPickerOptions.find(color => color.label === 'indigo'));
console.log(colorPickerOptions.find(color => color.label === 'black'));

// Method findIndex()
console.log('Method findIndex.');

console.log(colorPickerOptions.findIndex(option => option.label === 'pink')); // 3
console.log(colorPickerOptions.findIndex(option => option.label === 'white')); // -1

// Methods every() and some()
console.log('Methods every()');

console.log(numbersFive.every(number => number > 0));
console.log(numbersFive.every(number => number > 1));
console.log(numbersFive.every(number => number < 10));

console.log('Methods some()');

console.log(numbersFive.some(number => number > 0));
console.log(numbersFive.some(number => number > 1));
console.log(numbersFive.some(number => number < 10));
console.log(numbersFive.some(number => number > 10));

const fruits = [
    { name: 'apples', amount: 100 },
    { name: 'bananas', amount: 0 },
    { name: 'grapes', amount: 50 },
];

console.log(fruits.every(fruit => fruit.amount === 0));
console.log(fruits.some(fruit => fruit.amount === 0));

// Method reduce()
console.log('Method reduce()');

// const totall = [5, 9, 4, 9, 5, 6,].reduse((previousValue, number) => {
//     return previousValue + number;
// }, 0);

const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 32
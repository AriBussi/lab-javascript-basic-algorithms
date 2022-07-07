console.log("I'm ready!");

// Iteration 1: Names and Input
const hacker1 = 'Ari';
const hacker2 = 'Tombola';

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let message;

if (hacker1.length > hacker2.length) {
    message = `The driver has the longest name, it has ${hacker1.length} characters.`
} else if (hacker2.length > hacker1.length) {
    message = `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
} else {
    message = `Wow, you both have equally long names, ${hacker1.length} characters!.`
}

console.log(message);

// Iteration 3: Loops
// 3.1
let uppercased = '';

for (let i = 0; i < hacker1.length ; i++) {
    uppercased = uppercased + hacker1[i].toUpperCase() + " ";
}

console.log(uppercased);

//3.2
let reversed = '';

for (let i = hacker1.length - 1; i >= 0 ; i--) {
    reversed = reversed + hacker1[i];
}

console.log(reversed);

//3.3
let lastLog = 'What?! You both have the same name?';

if( hacker1 > hacker2) {
    lastLog = "The driver's name goes first.";
} else if ( hacker2 > hacker1) {
    lastLog = "Yo, the navigator goes first definitely.";
}

console.log(lastLog);

// Write a program to print the square of each number from 1 to 10.
for (let i = 1; i <= 10; i++) {
     console.log("the squre is "+ i*i);
}

// Create a program to calculate the sum of all even numbers from 1 to 20.
let sum = 0
for(let i=0; i<=20; i++){
    if(i % 2 == 0)
    sum += i
}
console.log(sum);

// Write a program to find the factorial of a given number using a for loop.

let number = 5; 
let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial *= i;
}

console.log("the number" + number + " of " + factor)


// Create a program that prints the multiplication table of a given number (up to 10).

let number = 4; 

for (let i = 1; i <= 10; i++) {
    console.log(number + (number * i));
}

// Write a program to print the Fibonacci series up to a specified number of terms.

let numTerms = 10;
let a = 0, b = 1;
console.log(a);
for (let i = 0; i < numTerms; i++) {
    console.log(b);
    [a, b] = [b, a + b];
}


// Create a program to find the largest element in a list using a for loop.

function findLarge(arr) {
    return Math.max(...arr);
}
let myList = [12, 45, 67, 23,100, 89, 34]; 
console.log(findLarge(myList));


// Write a program to count the number of vowels in a given string.

function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }  
    return count;
}

let myString = "Hello World";
console.log(countVowels(myString));

//Create a program that checks whether a given number is prime or not.

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}


let myNumber = 20; if (isPrime(myNumber)) {
    console.log(myNumber + " is a prime number.");
} else {
    console.log(myNumber + " is not a prime number.");
}


//Write a program to reverse a given list using a for loop.

function reverseList(arr) {
    const length = arr.length;
    for (let i = 0; i < length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[length - 1 - i];
        arr[length - 1 - i] = temp;
    }
    return arr;
}


let myList = [1, 2, 3, 4, 5]; 
console.log("Original list:", myList);
console.log("Reversed list:", reverseList(myList));

//Create a program that prints a pattern of stars in a pyramid shape.

for (let i = 0; i <= 5; i++) {
    console.log("***")
}

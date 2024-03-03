//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array
 
//• Test whether an item is not in a array

const string1: string ='Banana';
const string2: string ='Grapes';
console.log( string1 === string2 );
console.log(string1 !== string2);


//• Tests using the lower case function
const mixCaseString:string='Hello World'
console.log (mixCaseString.toLowerCase()=='Hello World')

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

const num1:number=10;
const num2:number=5;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);


//• Tests using "and" and "or" operators

const condition1 : boolean=true;
const condition2 : boolean=false;
console.log (condition1 && condition2);
console.log (condition1 &&  condition2);

//• Test whether an item is in a array
 
//• Test whether an item is not in a array

// Function to test whether an item is in an array
const myArray: string[] = ["apple", "banana", "orange"];
console.log("Array includes test:", myArray.includes("banana")); // true

// Test whether an item is not in an array
console.log("Array excludes test:", !myArray.includes("grape")); // true


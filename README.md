



1. 

In case of var, it is a old technique. Nowadays it is not used so much. It can be hoisted but the result will be undefined. 
In case of let, We can reassign the variable value of let, but can not call the variable outside the curly bracket {}, because of it maintain block-scoped.
In case of let, We can change the variable value at any cost, also can not call the variable outside the curly bracket {}, because of it maintain block-scoped.

2. 

The spread operator (...) allows an array or object to be expanded into individual elements to create a new copy of an array without affecting the original, to pass array elements as separate arguments to a function (like Math.max).

3. 

map() is used for transforming an array into a new format. It returns New Array. The length of new array is the same length as the old one.
filter() is used for selecting specific items based on a specific condition. It also returns a New Array. The length of new array can be shorter because many item can be rejected.
foreach() can not returns any result. It just run the array and call the single component at a time.

4.  

An arrow function is a short way to write JavaScript functions using the => syntax introduced in ES6. It keep the code less messy. For one parameter, no () is needed. The function can be written in more than one line but return is used must in this case. Example:
const add = (a, b) => a + b; 
console.log(add(5, 10)); // Output: 15


5.  

Template literals are a modern way to create strings by using backticks ( ` ` ) instead of single or double quotes. It is used for adding variable dirctly into a string using the ${variable} syntax or multiline html structure. example:

const item = "Orange";
const amount = 1;
const price = 10;

const output = `The price of ${amount} ${item} is ${price}.`; 

console.log(output); 
// Output: The price of 1 Orange is $10.






/* 1. Write a recursive function that counts how many sheep jump over the fence. 
Your program should take a number as input. That number should be the number of sheep you have.
 The function should display the number along with the message "Another sheep jumps over the fence"
 until no more sheep are left.

Input: 3
Output:
3: Another sheep jump over the fence
2: Another sheep jump over the fence
1: Another sheep jump over the fence
All sheep jumped over the fence */

function howManySheep(n){
  //base case
  if(n === 0){
    return 'All the sheep jumped over the fence'
  }
  else {
    howManySheep(n-1)
    return `${n}: Another sheep jumped over the fence`
  }
}

/* 2: Write a function called powerCalculator() that takes two parameters, 
an integer as a base, and another integer as an exponent. The function returns the value of the base 
raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

powerCalculatorRec(10,2) should return 100
powerCalculatorRec(10,-2) should return exponent should be >= 0 */

function powerCalculator(b, e){
  if(e < 0){
    return 'exponent should be >= 0'
  }
  if(e == 0){
    return 1
  }
  else { return b * (powerCalculator(b, e-1))}
}

/* 3. Write a function that reverses a string. Take a string as input, reverse the string,
and return the new string. */

function stringReverse(string){
  if (string === ''){
    return ''
    }
  
  else return stringReverse(string.substr(1)) + string.charAt(0)
}

stringReverse('hello')

/* hello + olleh
ello + olle
llo + oll
lo + ol
o + o
'' */
/* 
4. nth Triangular Number
Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number 
is the number of dots composing a triangle with n dots on a side,
and is equal to the sum of the n natural numbers from 1 to n. 
This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45. */

/* 1 = 1 
2 = 1 + 2
3 = 1+ 2 + 3
4 = 1 + 2 + 3 + 4
15 = 10 + 5
21 = 15 + 6
28 = 21 + 7
36 = 28 + 8 

or number dots n(n+1)/2 */

function triangularNumber(n){
  if (n === 1){
    return 1
  }
  else return triangularNumber(n-1) + n
}
triangularNumber(4)

/* 
Write a recursive function that splits a string based on a separator
(similar to String.prototype.split). Don't use JS array's split function to solve this problem.

Input: 02/20/2020
Output: 02202020
 */
function splitter(string, separator){
  if(string === ''){
    return ''
  }
  else {
    if (string.charAt(0) == separator) {
    return splitter(string.substr(1), separator)
    } return string.charAt(0) + splitter(string.substr(1), separator)

  }
}

/* 
Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which
each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13.
The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13. 
*/

function fib(n) {  
  if(n === 0) {    
    return 0;
 }  if(n === 1) {    
   return 1;
 }  else {    
   return fib(n-1) + fib(n-2);
 }}
 
fib(1)
/* Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying
 that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120. */

 function factorial(number){
   if(number === 1){
     return 1
   }
   else {
     return factorial(number - 1) * number
   }
 }
/* You have entered a Maze and need to find your way out of it. There are more than one possible exit from the Maze.
 Write a recursive function that will help you find a possible exit though the maze

You can use the following mazes to test your program. */

/* let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
]; */

function mazeSolution(array){
  if(array.length == 0){
    return ''
  }
    return mazeSolution(array[array.length-1].map(entry => entry === ' ' ? 'R' : 'D'))
  
 
}

//works for small maze


/* Write a recursive function that prints out the binary representation of a given number. For example, the program should take 3 as an input
 and print 11 as output, 
or 25 as an input and print 11001 as an output. Note that the binary representation of 0 should be 0. */
function binaryNum(num){
  if (num < 0){
  return ''
  }
  else {
    let binary = num%2
    return binaryNum(Math.floor(num/2)) + binary
    }
}

binaryNum(5)
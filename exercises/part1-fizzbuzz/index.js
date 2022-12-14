/* =====================

# Exercise: FizzBuzz

## Introduction

Step 1: Write a program that uses console.log to print each of the numbers from 1 to 100.

Step 2: Update the program so that, for multiples of three, it prints "Fizz" instead
of the number and, for multiples of five, it prints "Buzz" instead of the number.

Step 3: For numbers which are multiples of *both* three and five, make the program
print "FizzBuzz" instead of "Fizz" or "Buzz".

Hint 1. Remember that you can use conditionals to /conditionally/ change a program's behavior
Hint 2. Consider how modulo (calculating the remainder of a division problem) might be useful

Believe it or not, this is a common programming challenge in job interviews!

===================== */




for ( var n = 1; n < 101; n ++ ) {
  
  
    var Three = n % 3;
    var Five = n % 5;
    
    
    if ( (Three == 0) && (Five == 0) ) 
        console.log( "FizzBuzz");
    
    // if the number is divisible by 3, then print Fizz
    else if (Three == 0)
      console.log( "Fizz");
    
    // if the number is divisible by 5, then print Buzz
    else if (Five == 0)
      console.log( "Buzz");
    
    // otherwise just print the number
    else
      console.log( n );
  }

  
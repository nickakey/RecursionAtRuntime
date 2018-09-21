
//TOASTER

/*Secondly, here's a key concept - a function is like a little machine right? It does something.
That's a sufficently true definition for most coding. But when it comes to recursion, it's not true enough.
Actually, a function is like a blueprint, for how you create a machine. So when you write a function,
it's a blueprint. When you invoke a function, it creates the machine and runs that functionality.
So let's look at something side by side. */

function doNothing(){
  return;
}
doNothing();


/* switch to dual pane view.
On the above function, when doNothing gets invoked, a runtime function is created, that lasts until return is called.
*/

//ORDER OF OPERATIONS

function ten(){
  return 5 + five();
  //This arithmetic operation can not resolve until it figures out what five() will become
}

function five(){
  //As a result, this code runs BEFORE ten returns,
  //and ten is waiting
  return 5;
}

/* Now what does this have to do with recursion? Good question */

function countDown(number){
  if(number === 0){return}
  countDown(number - 1)
  return;
}
countDown(3)

/* I want to give everyone 5 minutes, and code out what you think this will look like at run time */

/*When we run countDown, it creates one runtime function of countdown, and then another runtime function of countdown, and then another run time function of countdown, and then another runtime function of countdown.
So there are multiple runtime instances of countdown happening. And notice that the FIRST return can't happen until  countDown resolves. Javascript is single threaded meaning the interpreter can only do one thing at a time. That means that it must evalutate this function invocation FIRST before getting to the return. */


/* Ok, let's do another one. Everyone write down what you think this will look like at run time */

function addCountDown(number){
  if(number === 0){return 0}
  return number + addCountDown(number - 1)
}
addCountDown(3)

/* walk through the run time recursion */
/* Focus on how the top part doesn't resolve until the bottom part resolves * /



/* Ok everyone, what will THIS look like at run time ? */

function addArray(numbers){
  if(numbers.length === 0){return 0}
  return numbers[0] + addArray(numbers.slice(1));
}
addArray([3,2,4]);

//Walk through how this one works

function letterTally(str, obj = {}) {
  if(str.length === 0){return obj};
  if( obj.hasOwnProperty(str[0]) ){
    obj[str[0]]++;
    return letterTally(str.slice(1), obj);
  } else {
    obj[str[0]] = 1;
    return letterTally(str.slice(1), obj);
  }
};
letterTally("aba")

//OK we've got one more, what will this one look like at run time?

/*Ok so so far we've seen 2 different types of recursion
1. One type, we break up the work on the way down, and then solve it on the way up
2. Ok the second type is, we break the work down and we pass a object down so that it can modify and add to all those objects.

But there is one more type of recursion.... which is BRANCHING RECURSION.

NQueens, recursive rock paper scissors, now how do we visualize these ?

Instead of the recursion just going vertically, it goes like THIS (Whiteboard) and all of these add to some object.

So with rock paper scissors, we branch, we branch, and then we add everything to the object that passes it through. Here's the issue though. The runtime of these things becomes WILD. It would be way too hard to trace everything. So what do we do instead? Well we imagine what the process will look like.

* Come up with a whiteboard algorithm to fill everything up
* Come up with a basecase
* Code it

Rock Paper Scissors

*/

All anagrams
/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  // Your code here.
  /* START SOLUTION */
  /* END SOLUTION */
};

//#1 Write a function createHelloWorld. It should return a new function that always returns "Hello World".

function createHelloWorld() {
    return function() {
      return "Hello World";
    };
  }
  
  const f = createHelloWorld();
  console.log(f());
  


//#2 Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.

//You may assume that fn will never duplicate numbers for a given array.

function sortByFn(arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
}


const arr1 = [5, 4, 1, 2, 3];
const fn1 = (x) => x;
const sortedArr1 = sortByFn(arr1, fn1);
console.log(sortedArr1);


//#3 Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).


function createCounter(n) {
  let current = n;

  function counter() {
    const result = current;
    current += 1;
    return result;
  }

  return counter;
}


const counter1 = createCounter(10);
console.log([counter1(), counter1(), counter1()]);
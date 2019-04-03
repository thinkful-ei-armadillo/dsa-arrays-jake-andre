'use strict';


//5.
// time complexity: O(n)
// this function cannot be optimized anymore, since we must 
// check each character
function urlify(url) {
  return url.split(' ').join('%20');
}

//6.
// time complexity: O(n)
// cannot be optimized any further
function greaterThanFive(arr) {
  for(let i = arr.length - 1; i >= 0; i--) {
    if(typeof arr[i] === 'number' && arr[i] < 5) {
      arr.splice(i, 1);
    }
  }

  return arr;
}

//7.
// loop through array and add the pairs together
function maxSum(arr){
  let pair1=0;
  let pair2=0;
  let sum=0;
  for(let i = 0; i< arr.length/2; i++){
    pair1 = arr[i] + arr[i+1];
    pair2 = arr[i+2] + arr[i+3];
    sum = pair1 + pair2;
  }
}

//8.
// time complexity: O(n)
// cannot be simplified any further
function merge(arr1, arr2){
  let result = [];
  let a = 0;
  let b = 0;
  while(a < arr1.length && b < arr2.length){
    if(arr1[a]<=arr2[b]){
      result.push(arr1[a++]);
    }else{
      result.push(arr2[b++]);
    }
  }
  return result;
}
//9.
// time complexity: O(n)
// cannot be further simplified
function remove(str, arr){
  let newStr='';
  for(let i = 0; i<str.length; i++){
    if(!arr.includes(str[i])){
      newStr+=str[i];
    }
  }
  return newStr;
}

//10.
// time complexity:O(n^2)
// could possibly be simplified
function products(arr){
  let product = arr.reduce((pro, val) => pro * val, 1);
  return arr.map((val) => product/val);

}

// console.log(urlify('tauhida parveen'));
// console.log(urlify('www.thinkful.com /tauh ida parv een'));
// console.log(greaterThanFive([1, 4, 5, 10, 11, 2]));
// console.log(merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
// console.log(remove('Battle of the Vowels: Hawaii vs. Grozny', ['a','e','i','o','u']));
console.log(products([1, 3, 9, 4]))
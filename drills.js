// time complexity: O(n)
// this function cannot be optimized anymore, since we must 
// check each character
function urlify(url) {
  return url.split(' ').join('%20');
}

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

console.log(urlify('tauhida parveen'));
console.log(urlify('www.thinkful.com /tauh ida parv een'));
console.log(greaterThanFive([1, 4, 5, 10, 11, 2]));

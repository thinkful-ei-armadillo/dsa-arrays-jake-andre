'use strict';
const memory = require('./memory');
const Memory = new memory();

class myArray {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = Memory.allocate(this.length);
  }

  push(value) {
    //if the length is greater than the capacity, 
    //resize according the size ratio
    if (this.length >= this._capacity){
    //resize the array clearing space for new item
    //each time you go over capacity, 
    //triple the size of allocated memory
      this._resize((this.length+1)* myArray.SIZE_RATIO);
    }
    //set the memory at pointer + length to equal value
    Memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = Memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    Memory.copy(this.ptr, oldPtr, this.length);
    Memory.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return Memory.get(this.ptr + index);
  }

  pop(){
    if(this.length === 0) {
      throw new Error('Index error');
    }
    const value = Memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    if (this.length >= this._capacity) {
      this._resize((this.length+1)*Array.SIZE_RATIO);
    }
    Memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index)
    Memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index){
    if(index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    Memory.copy(this.ptr + index, this.ptr + index +1, this.length - index - 1);
    this.length--;
  }
}

function main() {
  myArray.SIZE_RATIO = 3;

  let arr = new myArray();
  arr.push(3);
  /* at this point the length is 1, capacity is 3, and pointer is at 0 */
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  /* at this point the length is 6, capacity is 12, and pointer is at 3 */
  arr.pop();
  arr.pop();
  arr.pop();
  /* at this point the length has changed to 3, capacity is still 12, and the point is
  still at 3. only the length has changed because we have not freed the previously used
  pointers from memory */
  arr.pop();
  arr.pop();
  arr.pop();

  // this will return NaN because our Memory class only accepts arrays of numbers
  // (it is a Float64Array)
  arr.push('tauhida');

  console.log(`first element:      ${arr.get(0)}`);
  console.log('myArray instance:  ', arr);
}

console.log(main());




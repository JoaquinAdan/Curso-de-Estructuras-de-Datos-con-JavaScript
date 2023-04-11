// const array = ["Diego", "Karen", "Joaco"];

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }
  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  unshift(item) {
    if (!item) {
      return this.length;
    }
    if (this.length !== 0) {                                  // if(3 !== 0) {}
      for (let i = this.length - 1; i >= 0; i--) {            //   for (let i = 2; 2>=0 ; i--) {
        this.data[i + 1] = this.data[i];                      //     data[3] = data[2]    { 0, 1, 2 } {0, 1, 2, 3} el 3 antes era 2.         
      }                                                       //   } genera un espacio nuevo y lo rellena con el espacio anterior data[3] es nuevo y mueve el [2] al [3]
    }                                                         //
    this.data[0] = item;                                      //
    this.length++;                                            //
    return this.length;
  }
  shift() {
    const firstItem = this.data[0];
    delete this.data[0];
    this.length--;
    return firstItem;
  }
}
const myArray = new MyArray();
myArray.push('Diego');
myArray.push('Karen');
myArray.push('Joaco');
// // console.log(myArray.get(1));
console.log(myArray);
// // console.log(myArray.pop());
myArray.unshift('Jose');
// console.log(myArray.delete(1));
console.log(myArray);

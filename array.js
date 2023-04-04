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
}

const myArray = new MyArray();
myArray.push('Juan');
myArray.push('Adriana');
console.log(myArray.get(1));
console.log(myArray)
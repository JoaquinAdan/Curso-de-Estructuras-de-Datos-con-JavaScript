// 1 --> 2 --> 3 --> 4 --> 5 --> null

let singlyLinkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  },
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySingleLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  checkNode(node) {
    if (!node.next) {
      return node;
    }
    return this.checkNode(node.next);
  }
  append(val) {
    const newNode = new Node(val);
    const lastNode = this.checkNode(this.head);
    lastNode.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.head;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  // video por el minuto 6:50 del 18
  getTheIndex(index) {}
  insert(index, value) {
    if (this.length === 0) return this.append(value);
    if (index >= this.length) {
    }
    const newNode = new Node(value);
    const intermediateNode = this.getTheIndex(index - 1);

    this.length++;
  }
  remove(index) {
    const previousPointer = this.getTheIndex(index - 1);
    const holdingPointer = this.getTheIndex(index + 1);

    previousPointer.next = holdingPointer;

    this.length--;

    return this;
  }
}

let myLinkedList = new MySingleLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
console.log(myLinkedList);

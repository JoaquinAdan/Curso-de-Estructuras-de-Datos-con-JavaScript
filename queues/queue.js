class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    //Instanciamos el nodo nuevo
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.length) {
      return this;
    }
    if (this.length === 1) {
      console.error('There is no nodes in the queue.');
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.length--;
    return this.first;
  }
}

const queue = new Queue();
queue.enqueue('Raul');
queue.enqueue('Pedrito');
queue.enqueue('Rubius');
queue.enqueue('Josefina');
queue.enqueue('Enrique');
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue);

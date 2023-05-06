class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    //Instanciamos el nodo nuevo
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      // Guardamos lo que haya en el top del stack
      const holdingPointer = this.top;
      // convertimos el nuevo nodo en el top
      this.top = newNode;
      // el siguiente al nuevo es el viejo top
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.length) {
      console.error('There is no nodes in the stack.');
      return;
    }
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }
    this.length--;
    return this.top;
  }
}

const stack = new Stack();
stack.push(4);
stack.push(true);
stack.push(1);
stack.push('s');
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log(stack);

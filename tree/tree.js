//           10
//          /   \
//         /     \
//        4       20
//       / \     /  \
//      2   8   /    \
//             17    170

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  search(value, tree = this.root) {
    if (tree == null) {
      return 'El elemento no se encuentra.';
    } else if (value > tree.value) {
      return this.search(value, tree.right);
    } else if (value < tree.value) {
      return this.search(value, tree.left);
    } else {
      return '¡El elemento ha sido encontrado!';
    }
  }
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(40);
binarySearchTree.insert(30);
binarySearchTree.insert(70);
binarySearchTree.insert(71);
binarySearchTree.insert(60);
console.log(binarySearchTree.search(30));
console.log(binarySearchTree);

class Node {
  value: number;
  left: Node | null;
  right: Node | null;
  constructor(value: number, left: Node | null, right: Node | null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BST {
  root: Node | null;
  constructor() {
    this.root = null;
  }
  insert(inputValue: number) {
    const node = new Node(inputValue, null, null);
    if (this.root === null) this.root = node;
    else {
      // Keep the current
      let current: Node | null = this.root;
      // Keep the parent
      let parent: Node = current;
      while (current !== null) {
        // Find insertion point
        if (inputValue < current.value) {
          current = parent.left;
          if (current === null) {
            parent.left = node;
          } else {
            parent = current;
          }
        } else {
          current = parent.right;
          if (current === null) {
            parent.right = node;
          } else {
            parent = current;
          }
        }
      }
    }
  }

  inorder(node: Node | null) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.value);
      this.inorder(node.right);
    }
  }
}

export default BST;

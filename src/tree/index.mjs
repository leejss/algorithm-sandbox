import BST from "./BST.js";

const tree = new BST();

const data = [2, 11, 14, 15, 16];

data.forEach((n) => {
  tree.insert(n);
});

tree.inorder(tree.root);

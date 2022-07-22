import BST from "./BST";
import genRandIntArray from "../utils/genRandIntArray";

const tree = new BST();
const randArr = genRandIntArray(20);

randArr.forEach((n) => tree.insert(n));

tree.inorder(tree.root);

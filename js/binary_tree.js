// Binary tree class
class TreeNode {

  // Constructor
  constructor(data){
    this.data = data;
  }

  // Return data of node
  get data() {
    return this._data;
  }

  // Set data of node
  set data(value) {
    this._data = value;
  }

  // Return left node
  get left() {
    return this._left;
  }

  // Set left node
  set left(node) {
    this._left = node;
  }

  // Return right node
  get right() {
    return this._right;
  }

  // Set right node
  set right(node) {
    this._right = node;
  }

  // Insert function
  insert(value) {
    if(value <= this.data){
      if(this.left == undefined){
        this.left = new TreeNode(value);
      }else{
        this.left.insert(value);
      }
    }else{
      if(this.right == undefined){
        this.right = new TreeNode(value);
      }else{
        this.right.insert(value);
      }
    }
  }

  // Check data available
  contains(value) {
    if(this.data == value){
      return true;
    }else {
      if(value < this.data){
        if(this.left == undefined){
          return false;
        }else{
          this.left.contains(value);
        }
      }else{
        if(this.right == undefined){
          return false;
        }else{
          this.right.contains(value);
        }
      }
    }
  }


}

let COUNT = 10;

// print tree
function print2D(root, space) { 
  // Base case 
  if (root == undefined) 
      return; 

  // Increase distance between levels 
  space += COUNT; 

  // Process right child
  print2D(root.right, space); 

  // Print current node after space 
  document.write("<br>"); 
  for (let i = COUNT; i < space; i++) {
    document.write(" "); 
  }
  document.write(`${root.data}<br>`); 

  // Process left child 
  print2D(root.left, space); 
}
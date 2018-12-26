// Question 1
document.write(`<p><b>Q.1. - </b>Find lowest common ancestor between two nodes from the given binary tree.</p>`);

// array of testcase
let arr = [];

// Test case1
let root;
root = new TreeNode(1); 

root.left = new TreeNode(2); 
root.left.left = new TreeNode(4); 
root.left.left.left = new TreeNode(8);
root.left.right = new TreeNode(5);

root.right = new TreeNode(3);
root.right.right = new TreeNode(7);
root.right.left = new TreeNode(6); 

let n1 = 2;
let n2 = 3;

let temp = {
  tree: root,
  l: n1,
  r: n2,
  acenstor: -1
}

arr.push(temp);

// call function for each testcase
let testcaseNo = 1;
arr.forEach(function(element){
  document.write(`<p>Testcase ${testcaseNo} :</p>`);
  
  document.write(`<pre>`);
  print2D(element.tree, 0);
  document.write(`</pre>`);
  
  findCommonAcenstor(element.tree, element);

  if(element.acenstor != -1)
    document.write(`<p>Common ancestor of ${element.l} & ${element.r} is ${element.acenstor}.</p>`);
  else
    document.write(`<p>Common ancestor of ${element.l} & ${element.r} not found!</p>`);
});

function findCommonAcenstor(root, ele){
  if(root == undefined || root.left == undefined || root.right == undefined)
    return;
  
  if(root.left.data == ele.l && root.right.data == ele.r){
    ele.acenstor = root.data;
  }

  findCommonAcenstor(root.left, ele);

  findCommonAcenstor(root.right, ele);
}
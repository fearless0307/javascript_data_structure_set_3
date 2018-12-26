// Question 2
document.write(`<p><b>Q.2. - </b>Find next node in same level for given node in a binary tree.</p>`);

// array of testcase
let arr = [];

// Test case1
let root;
root = new TreeNode(1); 

root.left = new TreeNode(2); 
root.left.left = new TreeNode(4); 
root.left.left.left = new TreeNode(7);
root.left.left.left.left = new TreeNode(10);

root.left.right = new TreeNode(6);
root.left.right.right = new TreeNode(9);
root.left.right.right.right = new TreeNode(12);

root.right = new TreeNode(3); 
root.right.right = new TreeNode(5);
root.right.right.right = new TreeNode(8); 

let num = 9;

let temp = {
  tree: root,
  num: num
};
arr.push(temp);

// call function for each testcase
let testcaseNo = 1;
arr.forEach(function(element){
  document.write(`<p>Testcase ${testcaseNo} :</p>`);
  
  document.write(`<pre>`);
  print2D(element.tree, 0);
  document.write(`</pre>`);

  let t = [];
  let fLevel = {
    l: -1
  };

  findRightSibling(element.tree, element.num, 0, t, fLevel);

  console.log(t);

  document.write(`<p>Result :<br>`)
  if(t.length > 1){
    document.write(`Right sibling of ${element.num} is ${t[t.length-1]}.</p>`);
  }else{
    if(t.length == 0){
      document.write(`${element.num} is not available in tree.</p>`);
    }else{
      document.write(`No right sibling of ${element.num} available!</p>`);
    }  
  }
  
});

// function to find right sibling of given number
function findRightSibling(root, s, level, t, fLevel){

  if(t.length == 2){
    return;
  }

  // Base case 
  if (root == undefined) 
      return; 
  
  // Increase level
  level += 1;

  // Find level of number
  if(fLevel.l == -1 && root.data == s){
    fLevel.l = level;
  }

  if(level == fLevel.l){
    t.push(root.data);
  }

  // Process left child 
  findRightSibling(root.left, s, level, t, fLevel);

  // Process right child
  findRightSibling(root.right, s, level, t, fLevel); 
}
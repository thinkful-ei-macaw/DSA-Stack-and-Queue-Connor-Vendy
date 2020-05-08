//creates a node containing the data and a reference to the next item
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    //If the stack is empty, then the node will be the top of the stack
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    //If the stack already has something, then create a new node,
    //add data to the new node,
    //and have the pointer point to the top
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    //in order to remove the top of the stack,
    //point  the pointer to the next item and that next item
    //becomes the top f the stack
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function main() {
  let starTrek = new Stack();
  starTrek.push("Kirk");
  starTrek.push("Spock");
  starTrek.push("McCoy");
  starTrek.push("Scotty");
  //printStack(starTrek);
  //peek(starTrek);
  //isEmpty(starTrek);
  starTrek.pop("Scotty");
  starTrek.pop("McCoy");
  printStack(starTrek);

}

main();

//display
function printStack(stack){
  //top of stack
  let node = stack.top;
  //iterate through 
  while(node !== null){
    //print value
    console.log(node.data);
    //move onto next node
    node = node.next;
  }

}
//look at top 
function peek(stack) {
  console.log(stack.top.data);
}

function isEmpty(stack){
  if(stack.top === null){
    console.log(stack, 'is empty');
    return ;
  } else{
    console.log(stack, 'is not empty');
    return;
  }
}

function is_palindrome(s) {
  const s1 = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const s2 = s1;
  // pop each letter off s and push to stack1
  
  // unshift each letter from s and push to stack2

  // compare stacks 1 and 2

  // stack1 === stack2, then it is a palindrome, else not 
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));
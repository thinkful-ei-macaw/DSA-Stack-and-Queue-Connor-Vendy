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
  // starTrek.pop("Scotty");
  // starTrek.pop("McCoy");
  // printStack(starTrek);

  // console.log(is_palindrome("dad"));
  // console.log(is_palindrome("A man, a plan, a canal: Panama"));
  // console.log(is_palindrome("1001"));
  // console.log(is_palindrome("Tauhida"));

  //console.log(matchParenthesis('VENDY IS A DATA (((( STRUCTURES ))) EXPERT'));
  console.log(printStack(sortStack(starTrek)));
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
  if (stack.top) {
    return stack.top.data;
  }
  return null;
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

  let stack1 = new Stack();

  if(s.length === 0){
    return 'empty string';
  }

  for (let i = 0; i < s1.length; i++) {
    stack1.push(s1[i]);
  }

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== stack1.pop()) {
      return 'not a palindrome';
    }
  }

  return 'is a palindrome';
}

function matchParenthesis(exp) {
  let stack = new Stack();
  for(let i = 0; i < exp.length; i++){
  //at each index check if ( or )
    //if ( push
    if(exp[i]==='('){
      stack.push(exp[i]);
    }
    // if ) peek & pop
    if(exp[i] === ')'){
      if (peek(stack) === '(') {
        stack.pop();
      } else {
        return 'you are missing a (';
      }
    }
  }
  if (peek(stack) === '(') {
    return 'missing a )';
  }
  return 'all parens accounted for';
}

function sortStack(stack) {
  let sortedStack = new Stack();
  
  while (peek(stack)) {
    //save first item in a temp var
    let temp = stack.pop();  

    while(!isEmpty(sortedStack) && temp > peek(sortedStack)){
      stack.push(sortedStack.pop())
    }
    sortedStack.push(temp)
    console.log('this is a ',sortedStack);
  }
  
console.log('this is the',sortedStack)
return sortedStack;
  // //keep track of new top in stack
  // let newTop = stack.top.data;
  // //need to check the size of the items
  // if(temp.length > newTop.length){
  //   sortedStack.push(newTop)
  // }
  // console.log('Top of stack', temp)
  // return sortedStack;
}

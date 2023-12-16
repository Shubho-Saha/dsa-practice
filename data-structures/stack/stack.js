class Node{
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class Stack{
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        let newNode = new Node(value);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }

        return ++this.size;
    }

    pop() {
        if (this.size === 0) return null;
        if (this.size === 1) {
            this.last = null;
        }
        let temp = this.first;
        this.first = temp.next;
        temp.next = null;
        this.size--;

        return temp.val;

    }
}

let stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(15);
stack.push(20);
console.log(stack.push(25));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack)
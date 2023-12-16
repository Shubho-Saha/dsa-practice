class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        let newNode = new Node(value);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        return ++this.size;
    }

    dequeue() {
        if (this.size === 0) return null;
        let temp = this.first;
        if (this.size === 1) {
            this.last = null;
        }
        this.first = temp.next;
        temp.next = null;
        this.size--;
        return temp.val;
    }

}

let q = new Queue();
q.enqueue(5);
q.enqueue(10);
q.enqueue(15);
console.log(q.enqueue(20));
console.log(q);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q);
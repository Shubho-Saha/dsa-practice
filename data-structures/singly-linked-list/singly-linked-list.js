class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {

        if (this.length === 0) {
            return undefined;
        } else {
            let pre = null;
            let current = this.head;

            while (current.next) {
                pre = current;
                current = current.next;
            }

            if (pre) {
                pre.next = null;
                this.tail = pre;
            } else {
                this.head = null;
                this.tail = null;
            }

            this.length--;
            return current.val;
        }
    }

    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        let newHead = currentHead.next;
        this.head = newHead;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead.val;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(val) {
        if (val < 0 || val > this.length -1) return null;
        let count = 0;
        let currentItem = this.head;
        while (count <= val) {
            if (count === val) {
                return currentItem.val;
            }
            currentItem = currentItem.next;
            count++;
        }
    }
}

let list = new SinglyLinkedList();
list.push('Hey');
list.push('there');
list.push('wassup');
list.push('man');

console.log(list);
console.log(list.get(2));




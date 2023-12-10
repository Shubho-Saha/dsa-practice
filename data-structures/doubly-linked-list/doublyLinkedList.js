console.log('Doubly Linked List Practice');
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        let temp = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp.val;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if (this.length === 0) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead.val;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;

        let count;
        let current;

        if (index < this.length / 2) {
            count = 0;
            current = this.head;
            while (count !== index) {
                current = current.next;
                count++
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }

        return current;

    }

    set(index, value) {
        let targetNode = this.get(index);

        if (targetNode != null) {
            targetNode.val = value;
            return true;
        }

        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;

        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return !!this.push(value);
        else {
            let newNode = new Node(value);
            let leftNode = this.get(index - 1);
            let rightNode = leftNode.next;

            leftNode.next = newNode;
            newNode.prev = leftNode;
            rightNode.prev = newNode;
            newNode.next = rightNode;

        }
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false;

        if (index === 0) return !!this.shift();
        if (index === this.length - 1) return !!this.pop();

        else {
            let targetNode = this.get(index);
            let leftNode = targetNode.prev;
            let rightNode = targetNode.next;

            leftNode.next = rightNode;
            rightNode.prev = leftNode;

            this.length--;
            return true;
        }
    }

    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

let list = new DoublyLinkedList();
list.push(5);
list.push(10);
list.push(15);
list.push(20);
list.push(25);
console.log(list.remove(5))
list.print();
console.log(list);
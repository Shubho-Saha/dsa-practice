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

    push(value) {
        let newNode = new Node(value);
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

    unshift(value) {
        let newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let count;
        let current;
        if (index <= this.length / 2) {
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
        if (targetNode) {
            targetNode.val = value;
            return true;
        }
        return false;

    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;

        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return !!this.push(value);

        let newNode = new Node(value);
        let leftNode = this.get(index - 1);
        let rightNode = leftNode.next;

        leftNode.next = newNode;
        newNode.prev = leftNode;
        rightNode.prev = newNode;
        newNode.next = rightNode;
        
        this.length++;
        return true;

    }

    print() {
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.val);
            current = current.next;
        }
        console.log(values);
    }
}

let list = new DoublyLinkedList();
list.push('First');
list.push('second');
list.push('3rd');
list.push('4th');
list.push('fifth');
list.push('6th');
list.push('Seventh');
console.log(list);
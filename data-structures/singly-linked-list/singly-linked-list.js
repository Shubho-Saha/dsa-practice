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

    get(index) {
        if (index < 0 || index > this.length - 1) return null;
        let count = 0;
        let currentItem = this.head;
        while (count <= index) {
            if (count === index) {
                return currentItem;
            }
            currentItem = currentItem.next;
            count++;
        }
    }

    set(index, value) {
        let targetNode = this.get(index);
        if (!targetNode) return false;
        targetNode.val = value;
        return true;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(value);
        if (index === this.length) !!this.push(value);
        let newNode = new Node(value);
        let leftNode = this.get(index - 1);
        let rightNode = leftNode.next;
        leftNode.next = newNode;
        newNode.next = rightNode;
        this.length++;
        return true;

    }

    remove(index) {
        if (index < 0 || index > this.length - 1) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let leftNode = this.get(index - 1);
        let targetNode = leftNode.next;
        let rightNode = targetNode.next;
        leftNode.next = rightNode;
        this.length--;
        return targetNode.val;
    }

    reverse() {
        if (this.length < 2) return this;
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let pre = null;
        let next;
        while (node) {
            next = node.next;
            node.next = pre;
            pre = node;
            node = next;
        }

        // for (let i=0; i<this.length; i++) {
        //     next = node.next;
        //     node.next = pre;
        //     pre = node;
        //     node = next;
        // }

        return this;
    }

    rotate(number) {
        let index = (number < 0) ? number + this.length : number;

        if (index < 0 || index >= this.length) return undefined;

        let prevNode = this.get(index-1);

        if (!prevNode) return undefined;

        this.tail.next = this.head;
        this.head = prevNode.next;
        this.tail = prevNode;
        prevNode.next = null;

        return this;

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

let list = new SinglyLinkedList();
list.push('Hey');
list.push('there');
list.push('Mrinmoy');
list.push('saha');
list.push('shubho');
console.log(list);




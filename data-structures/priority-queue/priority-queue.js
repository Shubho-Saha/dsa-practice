console.log('Priority Queue');

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let childIdx = this.values.length - 1;
        let childElem = this.values[childIdx];

        while (childIdx > 0) {
            let parrentIdx = Math.floor((childIdx - 1) / 2);
            let parrentElem = this.values[parrentIdx];

            if (childElem.priority <= parrentElem.priority) break;
            this.values[parrentIdx] = childElem;
            this.values[childIdx] = parrentElem;
            childIdx = parrentIdx;
        }
    }

    dequeue() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];


        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority > element.priority) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];

                if (
                    ((swap === null) && rightChild.priority > element.priority) ||
                    ((swap !== null) && rightChild.priority > leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;

            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

    print() {
        for (let elem of this.values) {
            console.log(elem.value, elem.priority);
        }
    }
}

let pqueue = new PriorityQueue();
pqueue.enqueue("sleep", 6);
pqueue.enqueue('read', 2);
pqueue.enqueue('walk', 4);
pqueue.enqueue('attend exam', 10);
pqueue.enqueue('dinner', 8);
pqueue.enqueue('run', 3)
pqueue.print();
// console.log(pqueue.dequeue());
// console.log(pqueue.dequeue());
// pqueue.print();
console.log(pqueue.values[2])
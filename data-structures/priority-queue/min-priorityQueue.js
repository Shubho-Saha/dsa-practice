class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQ {
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

        while(childIdx > 0) {
            let parrentIdx = Math.floor((childIdx - 1)/2);
            let parrentElem = this.values[parrentIdx];

            if (childElem.priority >= parrentElem.priority) break;
            this.values[childIdx] = this.values[parrentIdx];
            this.values[parrentIdx] = childElem;
            childIdx = parrentIdx;

        }
    }

    dequeue() {
        let root = this.values[0];
        let end = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return root;
    }

    sinkDown() {
        let idx = 0;
        let element = this.values[idx];
        let length = this.values.length;
        
        while(true) {
            let leftChildIdx = idx * 2 + 1;
            let rightChildIdx = idx * 2 + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];

                if (element.priority > leftChild.priority) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];

                if (
                    ((swap === null) && (rightChild.priority < element.priority)) ||
                    ((swap !== null) && (rightChild.priority < leftChild.priority))
                ) {
                    swap = rightChildIdx
                }
            }

            if (swap === null) break;

            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;

        }
    }
}

let pq = new PriorityQ();
pq.enqueue('a', 5);
pq.enqueue('b', 2);
pq.enqueue('c', 8);
pq.enqueue('d', 1);
pq.enqueue('e', 1);

console.log(pq);
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
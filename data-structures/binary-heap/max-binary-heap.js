console.log('Binary Heap');

class MaxBinaryHeap {
    constructor() {
        this.values = [];
        this.demo = 'demo txt';
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let childIndex = this.values.length - 1;
        let childElem = this.values[childIndex];

        while (childIndex > 0) {
            let parrentIndex = Math.floor((childIndex - 1) / 2);
            let parrentElem = this.values[parrentIndex];
            if (childElem <= parrentElem) break;
            this.values[parrentIndex] = childElem;
            this.values[childIndex] = parrentElem;
            childIndex = parrentIndex
        }
    }

    extractMax() {
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
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    ((swap === null) && rightChild > element) ||
                    ((swap !== null) && rightChild > leftChild)
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
}


let heap = new MaxBinaryHeap();
heap.insert(40);
heap.insert(20);
heap.insert(55);
heap.insert(30);
heap.insert(10);
heap.insert(35);
heap.insert(37);
heap.insert(15);
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.values);
console.log('Min Binary Heap');

class MinBinaryHeap {
    constructor () {
        this.values = [];
    }

    insert(num) {
        this.values.push(num);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        let element = this.values[idx];

        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1)/2);
            let parentElem = this.values[parentIdx];

            if (element >= parentElem) break;
            this.values[idx] = parentElem;
            this.values[parentIdx] = element;
            idx = parentIdx;
        }
    }

    extractMin() {
        let min = this.values[0];
        let end = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }

        return min;
    }

    sinkDown() {
        let idx = 0;
        let element = this.values[0];
        let length = this.values.length;

        let leftChildIdx, rightChildIdx;
        let leftChild, rightChild;
        let swapIdx;

        while(true) {
            swapIdx = null;
            leftChildIdx = idx * 2 + 1;
            rightChildIdx = idx * 2 + 2;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild < element) {
                    swapIdx = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];

                if (
                    ((swapIdx === null) && (rightChild < element)) ||
                    ((swapIdx !== null) && (rightChild < leftChild))
                ) {
                    swapIdx = rightChildIdx;
                }
            }
            if (swapIdx === null) break;
            this.values[idx] = this.values[swapIdx]
            this.values[swapIdx] = element;
            idx = swapIdx;
        }
    }
}

let minbh = new MinBinaryHeap();
minbh.insert(22);
minbh.insert(29);
minbh.insert(10);
minbh.insert(2);
minbh.insert(8);

console.log(minbh);
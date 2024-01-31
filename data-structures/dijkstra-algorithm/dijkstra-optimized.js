console.log("Self Practice");

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
        let node = new Node(value, priority);
        this.values.push(node);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        let element = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parentElem = this.values[parentIdx];

            if (element.priority > parentElem.priority) break;

            this.values[parentIdx] = element;
            this.values[idx] = parentElem;
            idx = parentIdx;
        }
    }

    dequeue() {
        let max = this.values[0];
        let end = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }

        return max;
    }

    sinkDown() {
        let idx = 0;
        let element = this.values[0];
        let length = this.values.length;

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChildElem, rightChildElem;
            let swap = null;

            if (leftChildIdx < length) {
                leftChildElem = this.values[leftChildIdx];

                if (leftChildElem.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChildElem = this.values[rightChildIdx];

                if (
                    (swap === null && rightChildElem.priority < element.priority) ||
                    (swap !== null && rightChildElem.priority < leftChildElem.priority)
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

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push({node: vertex2, weight});
            this.adjacencyList[vertex2].push({node: vertex1, weight});
        } else {
            console.log("Invalid");
        }
    }

    dijkstra(start, finish) {
        let nodes = new PriorityQ();
        let distances = {};
        let previous = {};
        let path = [];
        let smallest;

        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
            }
            previous[vertex] = null;
        }

        while (nodes.values.length) {
            smallest = nodes.dequeue().value;

            if (smallest === finish) {
                while(smallest) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }

            for (let key in this.adjacencyList[smallest]) {
                let nextNode = this.adjacencyList[smallest][key];
                let nextNeighbor = nextNode.node;
                let candidate = distances[smallest] + nextNode.weight;

                if (candidate < distances[nextNeighbor]) {
                    distances[nextNeighbor] = candidate;
                    previous[nextNeighbor] = smallest;
                    nodes.enqueue(nextNeighbor, candidate);
                }
            }
        }

        return path.reverse();
    }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

console.log(graph.dijkstra('A', 'F'));






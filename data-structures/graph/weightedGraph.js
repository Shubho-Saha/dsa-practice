console.log('Weighted Graph');

class WeightedGraph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight});

        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
}

let wgraph = new WeightedGraph();
wgraph.addVertex('A');
wgraph.addVertex('B');
wgraph.addVertex('C');

wgraph.addEdge('A', 'B', 10);
wgraph.addEdge('A', 'C', 5);
wgraph.addEdge('B', 'C', 8);
console.log(wgraph);
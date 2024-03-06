class Wgraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2, weight) {
        if (!this.adjacencyList[v1] || !this.adjacencyList[v2] || !weight) {
            console.log('invalid input')
            return null;
        } 
        this.adjacencyList[v1].push({node:v2, weight});
        this.adjacencyList[v2].push({node:v1, weight}); 
    }

    removeEdge(v1, v2) {
        if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return null;
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(item => item.node !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(item => item.node !== v1);
        
    }

    removeVertex(vertex) {
        let currentEdge;
        while(this.adjacencyList[vertex].length) {
            currentEdge = this.adjacencyList[vertex].pop();
            this.removeEdge(currentEdge.node, vertex)
        }
        delete this.adjacencyList[vertex];
    }

    //Depth First Search - Recursive
    DFSRecursive(start) {
        let result = [];
        let visited = {};
        const adjacencyList = this.adjacencyList;

        function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(element => {
                if (!visited[element.node]) {
                    dfs(element.node)
                }
            });
        }

        dfs(start);
        console.log(result);
        return result;

    }

    //Depth First Search - Iterative
    DFSIterative(start) {
        let stack = [start];
        let result = [];
        let visited = {};
        visited[start] = true;

        while(stack.length) {
            let crrntEdge = stack.pop();
            result.push(crrntEdge);

            this.adjacencyList[crrntEdge].forEach(element => {
                if (!visited[element.node]) {
                    visited[element.node] = true;
                    stack.push(element.node);
                }
            })
        }

        console.log(result);
        return result;

    }

    //Breadth First Search 
    BFS(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        let currentNode;

        while(queue.length) {
            currentNode = queue.shift();
            result.push(currentNode);
            this.adjacencyList[currentNode].forEach(element => {
                if (!visited[element.node]) {
                    queue.push(element.node);
                    visited[element.node] = true;
                }
            })
        }

        console.log(result);
        return result;

    }
}

let wg = new Wgraph();
wg.addVertex('a');
wg.addVertex('b');
wg.addVertex('c');
wg.addVertex('d');
wg.addEdge('e');

wg.addEdge('a', 'b', 2);
wg.addEdge('a', 'c', 4);
wg.addEdge('b', 'c', 6);
wg.addEdge('c', 'd', 6);

wg.DFSRecursive('a');
wg.DFSIterative('a');
wg.BFS('a');
console.log(wg);
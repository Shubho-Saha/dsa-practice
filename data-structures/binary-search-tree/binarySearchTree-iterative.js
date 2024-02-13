console.log('Binary Search Tree');

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if (!val) return null;

        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {

                if (val === current.value) return null;

                if (val < current.value) {

                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }

                } else if (val > current.value) {

                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }

                }

            }
        }
    }

    search(val) {
        if (this.root === null) return null;
        let current = this.root;

        while (true) {

            if (val === current.value) {
                return true;
            } else if (val < current.value) {
                if (current.left === null) {
                    return false;
                } else {
                    current = current.left;
                }
            } else {
                if (current.right === null) {
                    return false;
                } else {
                    current = current.right;
                }
            }

        }
    }
    //Breadth First Search
    BFS() {
        let node = this.root;
        let queue = [];
        let data = [];

        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return data;

    }

    //Depth First Search Preorder
    DFSPreOrder() {
        let data = [];
        let current = this.root;

        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(current);
        return data;
    }

    //Depth First Search PostOrder
    DFSPostOrder() {
        let data = [];
        let current = this.root;

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }

        traverse(current);
        return data;
    }

    //Depth First Search InOrder
    DFSInOrder() {
        let data = [];
        let current = this.root;

        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }

        traverse(current);
        return data;
    }
}

let bst = new BinarySearchTree();
bst.insert(20);
bst.insert(15);
bst.insert(30);
bst.insert(5);
bst.insert(17);
bst.insert(25);
bst.insert(35);
bst.insert(27);
bst.insert(16);
bst.insert(26);

console.log(bst);
console.log(bst.search(3));
console.log(bst.search(32));
console.log('Breadth First Search');
console.log(bst.BFS());
console.log('Depth First Search PreOrder');
console.log(bst.DFSPreOrder());
console.log('Depth First Search PostOrder');
console.log(bst.DFSPostOrder());
console.log('Depth First Search InOrder');
console.log(bst.DFSInOrder());

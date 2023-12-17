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

        while(true) {

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
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(7);
bst.insert(13);
bst.insert(18);
bst.insert(3);
bst.insert(1);
bst.insert(20);

console.log(bst);
console.log(bst.search(3));
console.log(bst.search(32));

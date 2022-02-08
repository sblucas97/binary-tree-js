class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  
  insert(value) {
    const newNode = new Node(value);
    if(!this.root) {    
        this.root = newNode;
        return;
    }

    let current = this.root;
    
    while(current?.value) {
        if(value > current.value) {
            if(!current.right) {
                current.right = newNode;
                return;
            }
            current = current.right;
            
        } else {
            if(!current.left) {
                current.left = newNode;
                return;
            }
            current = current.left;
        }   
    }
  }

  delete(value) {
    const removeNode = (node, value) => {
        if(!node) return null;

        if(value > node.value) {
            node.right = removeNode(node.right, value);
            return node;
        }

        if(value < node.value) {
            node.left = removeNode(node.left, value);
            return node;
        }

        if(!node.left && !node.right) {
            return null;
        }

        if(!node.right) {
            return node.left;
        }

        if(!node.left) {
            return node.right;
        }

        let smallestNode = node.right;
        while(smallestNode.left) {
            smallestNode = smallestNode.left;
        }
        node.value = smallestNode.value
        node.right = removeNode(node.right, smallestNode.value);
        return node;
    }

    this.root = removeNode(this.root, value);   
   }

  search(value) {
    if(!this.root) return false;

    let current = this.root;

    while(current) {
        if(current.value > value) {
            current = current.left;
        } else if(current.value < value) {
            current = current.right;
        } else if(current.value === value) {
            return current;
        }
    }

    return false;
  }

  print() {
    const handlePrint = (node) => {
        if(!node?.value) return false;

        console.log(node.value, '\n');

        handlePrint(node.left);
        handlePrint(node.right);
    }
    
    handlePrint(this.root);
  }
}

const binaryTree = new BinaryTree();
binaryTree.insert(20);
binaryTree.insert(17);
binaryTree.insert(25);
binaryTree.insert(13);
binaryTree.insert(18);
binaryTree.insert(22);
binaryTree.insert(33);
binaryTree.insert(10);
binaryTree.insert(14);
binaryTree.insert(30);
binaryTree.insert(45);

binaryTree.delete(20);

binaryTree.print();
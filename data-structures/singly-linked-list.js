class Node {
    // piece of data - val
    constructor(val) {
       this.val = val;
       // reference to a next node
       this.next = null;

    }

}

class SinglyLinkedList {
    constructor() {
        //pointer to the head of list
        this.head = null;
        //pointer to the tail of list
        this.tail = null;
        // length of the list
        this.length = 0;
    }
    //push method to create a new node & assign to head
    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
        return this
    }
    //pop method to remove a node from the end of the linked list
    pop() {
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null
        }
        return current
    }

    //shift method to remove from the beginning of the list
    shift() {
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null
        }
        return currentHead;
    }
    //unshift method to add to the beginning of list
    unshift(val) {
        let newNode = new Node(val)
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    //Get method to retrieve a node by its position in a linked list
    get(index) {
       if(index < 0 || index >= this.length) return null
       let counter = 0;
       let current = this.head;
       while(counter !== index) {
           current = current.next;
           counter++
       }
       return current
    }

    //Set method to change the value of a node based on its position in the Linked List
    set(index, val) {
        let node = this.get(index)
       if(node) {
           node.val = val;
           return true
       }
       return false;

    }

    //insert method to add a node to the linked list at a specific position
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return this.push(val);
        if (index === 0) return this.unshift(val);
        let newNode = new Node(val);
        let temp = prev.next;
        let prev = this.get(index - 1);
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    //REMOVE METHOD TO REMOVE A NODE FROM THE LINKED LIST AT A SPECIFIC POSITION
    remove(index) {
        if(index < 0 || index > this.length) return undefined;
        if(index === this.length - 1) return this.pop(index);
        if(index === 0) return this.shift();
        let prevNode = this.get(index - 1);
        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;

    }
}

let list = new SinglyLinkedList()
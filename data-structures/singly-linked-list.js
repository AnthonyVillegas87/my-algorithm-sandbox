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

}

let list = new SinglyLinkedList()
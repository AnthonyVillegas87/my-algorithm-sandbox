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
}

let list = new SinglyLinkedList()
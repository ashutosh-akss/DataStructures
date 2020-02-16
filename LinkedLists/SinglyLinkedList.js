class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.current = null;
    }

    insertFront(node) {
        if(this.head === null){
            this.head = node;
            this.current = node;
        }else{
            node.next = this.head;
            this.head = node;
        } 
    }

    insertNth(node,pos) {
        if(this.head === null && pos > 1){
            throw new Error('Linked list is empty')
        }else{
            let currPos = 1;
            let prevNode = this.head;
            let currentNode = this.head.next;
            let nextNode = this.head.next.next;
            while(currPos <= pos && nextNode !== null){

                currPos++;
            }


        } 
    }

    insertEnd(node) {
        if(this.head === null){
            this.head = node;
            this.current = node;
        }else{
            this.current.next = node;
            this.current = this.current.next;
        }
    }

    deleteFront() {

    }

    deleteNth(pos) {

    }

    deleteEnd() {

    }

    search(needle) {

    }

    print() {

    }

    iterate(callback) {

    }

    reverse() {

    }
}
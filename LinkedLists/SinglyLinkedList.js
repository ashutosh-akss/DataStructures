class Node {
  constructor(data) {
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
    if (this.head === null) {
      this.head = node;
      this.current = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  insertNth(node, pos) {
    if (pos == 1) return this.insertFront(node);

    if (this.head === null && pos > 1) {
      throw new Error("Linked list is empty");
    } else {
      let currPos = 1;
      let currNode = this.head;
      while (currPos < pos - 1 && currNode !== null) {
        currNode = currNode.next;
        currPos++;
      }

      node.next = currNode.next;
      currNode.next = node;
    }
  }

  insertEnd(node) {
    if (this.head === null) {
      this.head = node;
      this.current = node;
    } else {
      this.current.next = node;
      this.current = this.current.next;
    }
  }

  deleteFront() {
    if (this.head == null) return;
    this.head = this.head.next;
  }

  deleteNth(pos) {
    let currPos = 1;
    let tempNode = this.head;
    while (currPos < pos && tempNode !== null) {
      tempNode = tempNode.next;
      currPos++;
    }

    tempNode.next = tempNode.next.next;
  }

  deleteEnd() {
    let tempNode = this.head;
    while (tempNode.next.next !== null) {
      tempNode = tempNode.next;
    }
    tempNode.next = null;
  }

  search(needle) {}

  print() {
    let tempNode = this.head;
    while (tempNode !== null) {
      console.log(tempNode.data);
      tempNode = tempNode.next;
    }
  }

  iterate(callback) {}

  reverse() {
    let prev = null;
    let current = this.head;
    let next = this.head.next;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }
}

const ll = new SinglyLinkedList();

ll.insertEnd(new Node(15));
ll.insertEnd(new Node(13));
ll.insertFront(new Node(12));
ll.insertFront(new Node(19));
ll.insertNth(new Node(21), 1);
ll.print();
ll.reverse();
console.log("==== AFTER REVERSING LIST =====");
ll.print();

// ll.deleteFront();
// console.log("==== AFTER DELTE FRONT =====");
// ll.print();
// ll.deleteEnd();
// console.log("==== AFTER DELTE END =====");
// ll.print();
// console.log("==== AFTER nth END =====");
// ll.deleteNth(1);
// ll.print();

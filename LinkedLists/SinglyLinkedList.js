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
    if (this.head === null && pos > 1) {
      throw new Error("Linked list is empty");
    } else {
      let currPos = 1;
      let prevNode = null;
      let currNode = this.head;
      while (currPos <= pos && currNode !== null) {
        currNode = currNode.next;
        currPos++;
      }

      if (currPos < pos) {
        throw new Error(`only {currPos} nodes are present in linked list`);
      }
      prevNode.next = node;
      node.next = currNode.next;
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

  deleteFront() {}

  deleteNth(pos) {}

  deleteEnd() {}

  search(needle) {}

  print() {
    let tempNode = this.head;
    while (tempNode !== null) {
      console.log(tempNode.data);
      tempNode = tempNode.next;
    }
  }

  iterate(callback) {}

  reverse() {}
}

const ll = new SinglyLinkedList();

ll.insertEnd(new Node(15));
ll.insertEnd(new Node(13));
ll.insertFront(new Node(12));
ll.insertFront(new Node(19));
ll.insertNth(new Node(21), 3);

ll.print();

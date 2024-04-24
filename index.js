class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    append(value) {
        let n = this.head;
        while (n.next != null) {
            n = n.next
        }
        n.next = new ListNode(value)
    }

    prepend(value) {
        let n = this.head
        this.head = new ListNode(value);
        this.head.next = n;
    }

    size() {
        let i = 1;
        let n = this.head
        while (n.next != null) {
            i++
            n = n.next
        }
        return `This list has ${i} nodes dude!`
    }

    headCaller() {
        return this.head
    }

    tail() {
        let n = this.head
        while (n.next != null) {
            n = n.next
        }
        return n
    }

    at(index) {
        let n = this.head
        for (let i = 0; i < index; i++) {
            n = n.next;
        }
        return n
    }

    pop() {
        let n = this.head;
        let prev;
        while (n.next != null) {
            prev = n
            n = n.next
        }
        prev.next = null;
    }

    contains(value) {
        let valuesArr = []
        let n = this.head;
        do {
            valuesArr.push(n.data)
            n = n.next
        } while (n.next != null)
        valuesArr.push(n.data)
        return valuesArr.includes(value);
    }

    find(value) {
        let valuesArr = [];
        let n = this.head;
        while (n.next != null) {
            valuesArr.push(n.data)
            n = n.next
        }
        valuesArr.push(n.data);
        if (valuesArr.includes(value) != false) {
            return `${value} is located at ${valuesArr.indexOf(value)} index`
        } else {
            return 'Error: value was not found on the list.'
        }
    }

    toString() {
        let n = this.head;
        let stringified = ''
        while (n.next != null) {
            stringified += `( ${n.data} ) -> `
            n = n.next
        }
        stringified += `( ${n.data} ) -> null`
        return stringified
    }

    insertAt(value, index) {
        let n = this.head;
        let prev;
        let newNode = new ListNode(value)
        for (let i = 0; i < index; i++) {
            prev = n;
            n = n.next
        }
        prev.next = newNode
        newNode.next = n;
    }

    removeAt(index) {
        let n = this.head;
        let prev;
        for (let i = 0; i < index; i++) {
            prev = n;
            n = n.next
        }
        prev.next = n.next;
    }
}

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }

}

let headNode = new ListNode(2);
let node1 = new ListNode(5);
const myList = new LinkedList(headNode)

headNode.next = node1;

myList.append(8)

myList.removeAt(1)

console.log(myList.head)


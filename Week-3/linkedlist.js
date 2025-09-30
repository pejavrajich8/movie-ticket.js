class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // append to tail
    add(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }

    // remove first node matching value
    remove(value) {
        if (!this.head) return;

        let current = this.head;
        while (current && current.value !== value) {
            current = current.next;
        }
        if (!current) return; // not found

        if (current.prev) {
            current.prev.next = current.next;
        } else {
            // removing head
            this.head = current.next;
        }

        if (current.next) {
            current.next.prev = current.prev;
        } else {
            // removing tail
            this.tail = current.prev;
        }
    }

    traverse(callback) {
        let current = this.head;
        while (current) {
            callback(current.value);
            current = current.next;
        }
    }

    // find first node with value
    find(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) return current;
            current = current.next;
        }
        return null;
    }

    delete(value) {
        if (!this.head) return;

        let current = this.head;
        while (current) {
            if (current.value === value) {
                if (current.prev) {
                    current.prev.next = current.next;
                } else {
                    // removing head
                    this.head = current.next;
                }

                if (current.next) {
                    current.next.prev = current.prev;
                } else {
                    // removing tail
                    this.tail = current.prev;
                }
                return;
            }
            current = current.next;
        }
    }

    print() {
        const values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(' <-> '));
    }
}

// Export for Node/CommonJS environments if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Node, DoublyLinkedList };
}
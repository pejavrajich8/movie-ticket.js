class Stack {
    constructor() {
        this.items = [];
    }
     // Add an element to the top of the stack
    push(item) {
        this.items.push(item);
    }
    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
         // Remove and return the top element of the stack  
        return this.items.pop();
    }
    peek() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }

    clear() {
        this.items = [];
    }
    print() {
        console.log(this.items.join(' '));
    }

}

const initialString = "abc--fgh--i-jk--lmno-p--q-rs-t-uv-wx-yz--";

function proccessUndoStackString(str) {
    const stack = new Stack();
    for (const char of str) {
        if (char === '-') {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    stack.print();
    return stack.items.join('');
}

const p = document.getElementById('result');
const r = proccessUndoStackString(initialString);
p.innerText = r;






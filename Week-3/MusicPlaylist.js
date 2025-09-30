class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }   
}

class Playlist {
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

    print() {
        const values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(" <-> "));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const playlist = new Playlist();

    playlist.add('Blinding Lights');
    playlist.add('Shape of You');
    playlist.add('Bad Guy');
    playlist.add('Someone You Loved');
    playlist.add('Levitating');
    playlist.add('Watermelon Sugar');
    playlist.add('Dance Monkey');
    playlist.add('Circles');
    playlist.add('Believer');
    playlist.add('Señorita');
    playlist.add('Sunflower');
    playlist.add('Happier');
    playlist.add('Memories');
    playlist.add('Counting Stars');
    playlist.add('Old Town Road');
    playlist.add('Rockstar');
    playlist.add('Stay');
    playlist.add('Attention');

    // playlist.print();

    // current pointer starts at head
    let current = playlist.head;

    const subtitle = document.getElementById('subtitle');
    const nextBtn = document.getElementById('NextSongBtn');
    const prevBtn = document.getElementById('PrevSongBtn');
    const playBtn = document.getElementById('PlaySongBtn');

    function render() {
        if (!subtitle) return;
        subtitle.textContent = current ? `Currently Playing: ${current.value}` : 'No song';
    }

    render();

    nextBtn && nextBtn.addEventListener('click', () => {
        if (!current) return;
        current = current.next || playlist.head; // wrap
        render();
    });

    prevBtn && prevBtn.addEventListener('click', () => {
        if (!current) return;
        current = current.prev || playlist.tail; // wrap
        render();
    });

    playBtn && playBtn.addEventListener('click', () => {
        if (!current || !subtitle) return;
        subtitle.textContent = `▶️ Playing: ${current.value}`;
        setTimeout(render, 900);
    });
});


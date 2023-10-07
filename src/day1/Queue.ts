// 7

// FIFO

type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    // O(1)
    enqueue(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }

    // O(1)
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        const head = this.head;
        this.head = this.head.next;
        // If there was no garbage collector in place (which is not the case with JavaScript),
        // we would need to free memory manually
        head.next = undefined;
        if (this.length === 0) {
            this.tail = undefined;
        }
        return head.value;
    }

    // O(1)
    peek(): T | undefined {
        return this.head?.value;
    }
}

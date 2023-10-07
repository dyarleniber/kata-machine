// 5

type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    private getAt(idx: number): (Node<T> | undefined)[] {
        let prev;
        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            prev = curr;
            curr = curr.next;
        }
        return [curr, prev];
    }

    private removeNode(node: Node<T>, prev?: Node<T>): T | undefined {
        this.length--;
        if (this.length === 0) {
            const value = this.head?.value;
            this.head = this.tail = undefined;
            return value;
        }
        if (prev) {
            prev.next = node.next;
        }
        if (node === this.head) {
            this.head = node.next;
        }
        if (node === this.tail) {
            this.tail = prev;
        }
        node.next = undefined;
        return node.value;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("Index not valid");
        }
        if (idx === 0) {
            this.prepend(item);
            return;
        }
        if (idx === this.length) {
            this.append(item);
            return;
        }
        this.length++;
        const [curr, prev] = this.getAt(idx);
        if (curr) {
            const node = { value: item } as Node<T>;
            node.next = curr;
            if (prev) {
                prev.next = node;
            }
        }
    }

    remove(item: T): T | undefined {
        let prev = undefined;
        let curr = this.head;
        for (let i = 0; curr && i < this.length; i++) {
            if (curr.value === item) {
                break;
            }
            prev = curr;
            curr = curr.next;
        }
        if (curr) {
            return this.removeNode(curr, prev);
        }
        return;
    }

    removeAt(idx: number): T | undefined {
        const [curr, prev] = this.getAt(idx);
        if (curr) {
            return this.removeNode(curr, prev);
        }
        return;
    }

    append(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }
        node.next = this.head;
        this.head = node;
    }

    get(idx: number): T | undefined {
        const [node] = this.getAt(idx);
        return node?.value;
    }
}

// 18

/**
 * Example of a Min Heap:
 *
 *       (2)
 *     /     \
 *   (4)     (5)
 *  /  \     /  \
 * (7) (6) (9)  (8)
 *
 * The smallest element, 2, is at the root.
 *
 *
 * Example of a Max Heap:
 *
 *       (9)
 *     /     \
 *   (7)     (6)
 *  /  \     /  \
 * (5) (3) (4)  (2)
 *
 * The largest element, 9, is at the root.
 *
 *
 * Heap uses a weak order (it's ordered, but it's not perfect ordered).
 */
export default class MinHeap {
    public length: number;
    private data: number[]; // JavaScript built-in array is growable by default

    constructor() {
        this.length = 0;
        this.data = [];
    }

    private heapifyDown(idx: number): void {
        const leftChildIdx = this.leftChild(idx);
        const rightChildIdx = this.rightChild(idx);

        if (idx >= this.length || leftChildIdx >= this.length) {
            return;
        }

        const value = this.data[idx];

        const leftChildValue = this.data[leftChildIdx];
        const rightChildValue = this.data[rightChildIdx];

        if (leftChildValue > rightChildValue && value > rightChildValue) {
            this.data[idx] = rightChildValue;
            this.data[rightChildIdx] = value;
            this.heapifyDown(rightChildIdx);
        } else if (rightChildValue > leftChildValue && value > leftChildValue) {
            this.data[idx] = leftChildValue;
            this.data[leftChildIdx] = value;
            this.heapifyDown(leftChildIdx);
        }
    }

    private heapifyUp(idx: number): void {
        if (idx <= 0) {
            return;
        }

        const value = this.data[idx];

        const parentIdx = this.parent(idx);
        const parentValue = this.data[parentIdx];

        if (parentValue > value) {
            this.data[idx] = parentValue;
            this.data[parentIdx] = value;
            this.heapifyUp(parentIdx);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }

    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }

    insert(value: number): void {
        // Steps:
        // 1. Insert the new value as the last element
        // 3. Heapify up

        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        // Steps:
        // 1. Remove the head element
        // 2. Take the last element and put it at the head (first element)
        // 3. Heapify down

        if (this.length === 0) {
            return -1;
        }

        const head = this.data[0];
        this.length--;

        if (this.length == 0) {
            this.data = [];
            return head;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return head;
    }
}

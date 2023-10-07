// 9

/**
 * Conceptually, this is NOT a valid implementation for other languages.
 * The native JavaScript array was used here for simplicity and convenience.
 *
 * An ArrayList is a dynamic array-like data structure that can grow or shrink in size as needed,
 * unlike traditional arrays in most programming languages, which have a fixed size.
 *
 * JavaScript arrays share many characteristics with ArrayLists conceptually,
 * they come with built-in methods and behaviors tailored to the language's dynamic nature.
 * JavaScript arrays are dynamic and built-in, making it easy to manage elements with methods like push, splice, and unshift.
 *
 * TODO: Introduce a more generic and conceptually correct implementation for ArrayList.
 * TODO: Introduce also an implementation for a Circular Buffer (or Ring buffer).
 */
export default class ArrayList<T> {
    private elements: T[];
    public length: number;

    constructor(_length: number) {
        this.elements = [];
        this.length = 0;
    }

    prepend(item: T): void {
        this.elements.unshift(item);
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            throw new Error("Index out of bounds");
        }
        this.elements.splice(idx, 0, item);
        this.length++;
    }

    append(item: T): void {
        this.elements.push(item);
        this.length++;
    }

    remove(item: T): T | undefined {
        const index = this.elements.indexOf(item);
        if (index !== -1) {
            const removedItem = this.elements.splice(index, 1)[0];
            this.length--;
            return removedItem;
        }
        return undefined;
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }
        return this.elements[idx];
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }
        const removedItem = this.elements.splice(idx, 1)[0];
        this.length--;
        return removedItem;
    }
}

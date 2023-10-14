// 19

// This is just an initial implementation.
// TODO: Ensure this implementation is fully correct.

class TrieNode {
    children: { [char: string]: TrieNode } = {};
    isEndOfWord: boolean = false;
}

export default class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(item: string): void {
        let node = this.root;
        for (const char of item) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    delete(item: string): void {
        this.deleteItem(this.root, item, 0);
    }

    private deleteItem(node: TrieNode, item: string, index: number): boolean {
        if (index === item.length) {
            if (!node.isEndOfWord) return false;
            node.isEndOfWord = false;
            return Object.keys(node.children).length === 0;
        }

        const char = item[index];
        if (!node.children[char]) return false;

        const shouldDeleteNode = this.deleteItem(
            node.children[char],
            item,
            index + 1,
        );

        if (shouldDeleteNode) {
            delete node.children[char];
            return Object.keys(node.children).length === 0;
        }

        return false;
    }

    find(partial: string): string[] {
        const results: string[] = [];
        let node = this.root;

        for (const char of partial) {
            if (!node.children[char]) {
                return results;
            }
            node = node.children[char];
        }

        this.findAllWordsStartingWithPrefix(node, partial, results);
        return results;
    }

    private findAllWordsStartingWithPrefix(
        node: TrieNode,
        currentWord: string,
        results: string[],
    ): void {
        if (node.isEndOfWord) {
            results.push(currentWord);
        }

        for (const char in node.children) {
            this.findAllWordsStartingWithPrefix(
                node.children[char],
                currentWord + char,
                results,
            );
        }
    }
}

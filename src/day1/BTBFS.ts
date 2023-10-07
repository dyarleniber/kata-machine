// 15

/**
 * Breadth First Search (BFS)
 *
 * It uses a Queue to keep track of the nodes to visit.
 * But the native JavaScript array was used here for convenience.
 *
 * Given the following tree:
 *
 *   (1)
 *  /   \
 * (2)  (3)
 *  \   / \
 * (4) (5) (6)
 *
 * The traversal order wll be: (1) -> (2) -> (3) -> (4) -> (5) -> (6)
 */

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const queue = [head];
    while (queue.length) {
        const curr = queue.shift();
        if (curr?.value === needle) {
            return true;
        }
        if (curr?.left) {
            queue.push(curr.left);
        }
        if (curr?.right) {
            queue.push(curr.right);
        }
    }
    return false;
}

// 12

/**
 * Pre order tree traversal (DFS - Depth First Search)
 *
 * It uses a Stack to keep track of the nodes to visit.
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
 * The traversal order wll be: (1) -> (2) -> (4) -> (3) -> (5) -> (6)
 */

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    // Base case
    if (!curr) {
        return path;
    }
    // Recurse steps
    // pre
    path.push(curr.value);
    // recurse
    walk(curr.left, path);
    walk(curr.right, path);
    // post
    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}

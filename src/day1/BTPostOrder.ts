// 14

/**
 * Post order tree traversal (DFS - Depth First Search)
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
 * The traversal order wll be: (4) -> (2) -> (5) -> (6) -> (3) -> (1)
 */

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) {
        return path;
    }
    walk(curr.left, path);
    walk(curr.right, path);
    path.push(curr.value);
    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}

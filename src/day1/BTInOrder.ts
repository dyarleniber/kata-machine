// 13

/**
 * In order tree traversal (DFS - Depth First Search)
 *
 * It uses a Stack to keep track of the nodes to visit.
 * But the native JavaScript array was used here for convenience.
 *
 * Given the following tree:
 *
 *   (2)
 *  /   \
 * (4)  (1)
 *       / \
 *     (5) (3)
 *           \
 *           (6)
 *
 * The traversal order wll be: (4) -> (2) -> (5) -> (1) -> (3) -> (6)
 */

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) {
        return path;
    }
    walk(curr.left, path);
    path.push(curr.value);
    walk(curr.right, path);
    return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}

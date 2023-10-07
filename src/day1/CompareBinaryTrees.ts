// 16

/**
 * O(n)
 *
 * Problem:
 * Compare two binary trees to see if they are equal in both shape and structure.
 *
 * Solution:
 * Use a Depth First Search (DFS) algorithm, since it PRESERVES the shape of the traversal.
 * The shape of the traversal is NOT preserved when using a Breadth First Search (BFS).
 */
export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    if (a === null && b === null) {
        return true;
    }
    if (a === null || b === null) {
        return false;
    }
    if (a.value !== b.value) {
        return false;
    }
    return compare(a.left, b.left) && compare(a.right, b.right);
}

// 3

/**
 * O(sqrt(n))
 *
 * Problem:
 * Given two crystal balls that will break if dropped from a high enough distance,
 * determine the exact spot in which it will break in the most optimized way.
 *
 * Solution:
 *
 * Linear Search: We could use a Linear Search to solve this problem,
 * but the time complexity would be O(n).
 *
 * Binary Search: A Binary Search would be more efficient,
 * but it won't give us the exact spot where the crystal ball will break.
 *
 * So, to optimize the process we can use a linear search with gaps of sqrt(n).
 */
export default function two_crystal_balls(breaks: boolean[]): number {
    const gap = Math.floor(Math.sqrt(breaks.length));
    // Drop the first ball at intervals of 'gap' until it breaks
    for (let i = gap; i < breaks.length; i += gap) {
        // If the first ball breaks, we switch to a linear search within that range
        if (breaks[i]) {
            // Linear search within the narrowed-down range
            for (let j = i - gap; j <= i; j++) {
                // If the second ball breaks, we've found the exact breaking point
                if (breaks[j]) {
                    return j;
                }
            }
        }
    }
    return -1;
}

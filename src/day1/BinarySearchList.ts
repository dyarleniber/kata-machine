// 2

/**
 * O(log n)
 *
 * Binary search works by repeatedly dividing the search space in half until it finds the desired element.
 * Mathematically, this process can be expressed as follows:
 *
 * Let's say you start with a sorted list of n elements.
 * In each step of binary search, you reduce the remaining search space by half.
 * So, after the first step, you have n/2 elements to search through.
 * After the second step, you have (n/2)/2 = n/2^2 elements, and so on.
 *
 * In general, after k steps, you have n/2^k elements left to search through.
 * Binary search continues until you have only one element left or until you've found the desired element.
 * Let's call this final step, where you have one element left, the stopping point.
 *
 * To find the time complexity, we need to find out how many times we can divide n by 2 until we reach 1.
 * Mathematically, this can be represented as:
 *
 * n / 2^k = 1
 *
 * Solving for k:
 * n = 2^k
 *
 * Taking the logarithm of both sides:
 * log₂(n) = log₂(2^k)
 * k = log₂(n)
 *
 * So, the number of steps it takes for binary search to find an element in a sorted list of size n is log₂(n).
 * In Big O notation, we typically drop the base 2 because it represents a constant factor,
 * so we simply write it as O(log n).
 */
export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;
    do {
        const m = Math.floor(lo + (hi - lo) / 2);
        const v = haystack[m];
        if (v === needle) {
            return true;
        } else if (v > needle) {
            hi = m;
        } else {
            lo = m + 1;
        }
    } while (lo < hi);
    return false;
}

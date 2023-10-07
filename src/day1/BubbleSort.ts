// 4

/**
 * O(n^2)
 *
 * The easiest way to visualize the time complexity of Bubble Sort
 * is by examining the nested loops over the input array.
 * We have a nested loop structure where we iterate through n elements twice,
 * resulting in a total of n * n iterations or n^2 iterations in total.
 *
 * It's also possible to use the Gauss's Formula to determine the time complexity of Bubble Sort.
 * In the worst-case scenario,
 * we compare and potentially swap every pair of elements in the array until it's fully sorted.
 * With n elements, this means making n - 1 comparisons in the first pass,
 * n - 2 comparisons in the second pass, and so on until the last pass, where only 1 comparison is made.
 * This pattern results in the sum of the first n - 1 natural numbers,
 * which can be expressed using Gauss's formula ((n + 1) * n / 2):
 *
 * ((n - 1) + 1) * (n - 1) / 2 =
 * (n * (n - 1)) / 2 =
 * n ^ 2 - n / 2
 *
 * In big O notation, we disregard constants and lower-order terms, simplifying the expression to O(n^2).
 */
export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}

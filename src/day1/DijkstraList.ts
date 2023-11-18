// 23

/**
 * O(v^2 + e)
 * Can be O(log v(v+e)) when a min heap is used
 *
 * Dijkstra's Shortest Path
 *
 * It uses the Breadth First Search (BFS)
 */

// O(v)
// Can be O(log v) when a min heap is used
function hasUnvisited(seen: boolean[], dists: number[]): boolean {
    return seen.some((s, i) => !s && dists[i] < Infinity);
}

// O(v)
// Can be O(log v) when a min heap is used
function getLowestUnvisited(seen: boolean[], dists: number[]): number {
    let idx = -1;
    let lowestDistance = Infinity;
    for (let i = 0; i < seen.length; i++) {
        if (seen[i]) {
            continue;
        }
        if (lowestDistance > dists[i]) {
            lowestDistance = dists[i];
            idx = i;
        }
    }
    return idx;
}

export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList,
): number[] {
    // O(v)
    const seen = new Array<boolean>(arr.length).fill(false);
    const prev = new Array<number>(arr.length).fill(-1);
    const dists = new Array<number>(arr.length).fill(Infinity);
    dists[source] = 0;

    while (hasUnvisited(seen, dists) /* O(v^2) */) {
        const curr = getLowestUnvisited(seen, dists); // O(v^2)
        seen[curr] = true;
        const adjs = arr[curr];
        for (let i = 0; i < adjs.length; i++ /* O(e) */) {
            const edge = adjs[i];
            if (seen[edge.to]) {
                continue;
            }
            const dist = dists[curr] + edge.weight;
            if (dist < dists[edge.to]) {
                dists[edge.to] = dist; // Can be O(log v) when a min heap is used
                prev[edge.to] = curr;
            }
        }
    }

    let curr = sink;
    const path: number[] = [];
    while (prev[curr] !== -1) {
        path.push(curr);
        curr = prev[curr];
    }
    path.push(source);
    return path.reverse();
}

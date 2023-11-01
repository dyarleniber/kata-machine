// 20

export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array<boolean>(graph.length).fill(false);
    const prev = new Array<number>(graph.length).fill(-1);
    const queue: number[] = [source];
    seen[source] = true;
    do {
        const curr = queue.shift() as number;
        if (curr === needle) {
            break;
        }
        const adjs = graph[curr];
        for (let i = 0; i < adjs.length; i++) {
            if (adjs[i] === 0) {
                continue;
            }
            if (seen[i]) {
                continue;
            }
            seen[i] = true;
            prev[i] = curr;
            queue.push(i);
        }
    } while (queue.length);
    if (prev[needle] === -1) {
        return null;
    }
    // build it backwards
    let curr = needle;
    const path: number[] = [];
    while (prev[curr] !== -1) {
        path.push(curr);
        curr = prev[curr];
    }
    return [source].concat(path.reverse());
}

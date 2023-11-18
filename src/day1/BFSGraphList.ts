// 21

export default function bfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array<boolean>(graph.length).fill(false);
    const prev = new Array<number>(graph.length).fill(-1);
    const queue = [source];
    seen[source] = true;
    while (queue.length) {
        const curr = queue.shift() as number;
        if (curr === needle) {
            break;
        }
        const adjs = graph[curr];
        for (let i = 0; i < adjs.length; i++) {
            const edge = adjs[i];
            if (seen[edge.to]) {
                continue;
            }
            seen[edge.to] = true;
            prev[edge.to] = curr;
            queue.push(edge.to);
        }
    }
    if (prev[needle] === -1) {
        return null;
    }
    const path: number[] = [];
    let curr = needle;
    while (prev[curr] !== -1) {
        path.push(curr);
        curr = prev[curr];
    }
    path.push(source);
    return path.reverse();
}

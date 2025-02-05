## Data Structure and Algorithms covered

- Time & Space Complexity
- Arrays
- Linear Search
- Binary Search
- Two Crystal Balls
- Lists
- Singly
- Doubly
- Queue
- Stack
- ArrayList
- RingBuffers
- Recursion
- Maze Solving
- QuickSort
- Trees
- Traversals, Pre Order, In Order, Post Order, BFS traversals
- Comparing Binary Trees
- Binary Search Trees
- Heaps
- Tries
- Graphs
- BFS / DFS
- Dijkstra's Shortest Path
- Map
- LRU

## Data Structure and Algorithms Visualizations

The best way to understand complex data structures is to see them in action. Here you can find interactive animations for a variety of data structures and algorithms: https://www.cs.usfca.edu/~galles/visualization/Algorithms.html

## Big O

Big O is a way to categorize your algorithms time or memory requirements based on input.

Important concepts:
- Growth is with respect to the input.
- Constants are dropped.
- Worst case is usually the way we measure.

There is practical vs theoretical differences:

Just because n is faster than n^2, doesn't mean practically its always faster for smaller input.
Remember, we drop constants. Therefore O(100n) is faster than O(n^2) but practically speaking, you would probably win for some small set of input.

Is there anything else besides Big O? Well, there is technically a bunch of different ways to measure the complexity of algorithms, but in general the easiest one to use is the "Upper Bound".

Another Big O trick:

If the input halves at each step, its likely O(log(n)) or O(n log(n)). For example: Binary search.

> Big-O Cheat Sheet: https://www.bigocheatsheet.com/

## Arrays

Arrays are fixed size, contiguous memory chunks. That means we cannot grow it.
There is no "insertAt" or push or pop. Doesn't mean you can't write those though.

The classic definition of an array in programming is a data structure that stores a collection of elements, each identified by an index or a key. It provides efficient access to elements based on their position.

In languages like C and C++, arrays are contiguous blocks of memory where elements are stored one after another. You can access elements in these arrays using an index, and the memory layout allows for efficient random access to elements.

However, in JavaScript, arrays are not the same as the classic arrays in languages like C or C++. JavaScript arrays are more like a special type of object that uses numeric indices as keys to access values. They are implemented as dynamic, resizable objects, and elements can have different data types.

JavaScript arrays are more flexible but may not offer the same performance characteristics as contiguous memory arrays in languages like C/C++. They also have various built-in methods and properties that are specific to JavaScript's array-like objects.

## Linked lists

A linked list is a linear data structure made up of nodes.
Each node contains data and a reference (or link) to the next node in the sequence.
Linked lists are used for dynamic storage of elements and allow efficient insertions and deletions.

Linked lists are used in various data structures and applications where dynamic memory allocation and efficient insertions and deletions are essential. Such as Stacks, Queues, Graphs and so on.

There are three main types of Linked Lists:

- Simple Linked List
- Doubly Linked List (or Double Ended Linked List)
- Circular Linked Lists (Ring Buffer)

> Circular linked list is a list where the last pointer points to the first node.

In summary:

Use **arrays** when you need fast random access, efficient searching, and a more memory-efficient structure for fixed-size collections.

Use **linked lists** when you need frequent insertions and deletions, dynamic sizing, and reduced memory wastage in variable-sized collections.

## Hash Tables / Hash Maps

A hash map is a data structure that maps keys to values. It employs a hash function to calculate an index in an array of buckets, enabling quick value retrieval.

Key Points:

- Values are not stored in sorted order.
- Hash collisions are inevitable, often resolved through chaining (creating linked lists for colliding keys).
- Two primary collision resolution methods are Chaining and Open Addressing.

Traditionally, hash tables are implemented using arrays of linked lists. When inserting a key/value pair, the key is hashed to find an array index, and the value is added to the linked list at that position.

### Terminology of Hash Maps

- **load factor**: The amount of data points vs the amount of storage (data.len / storage.capacity).
- **key**: A value that is hashable and is used to look up data. The hash has to be consistent.
- **value**: A value that is associated with a key.
- **collision**: When 2 keys map to the same cell.

### Collision Resolution Methods

- **Chaining:** Chaining involves creating a linked list at each index of the hash table to handle multiple keys that hash to the same location. When a collision occurs, the new key-value pair is simply added to the linked list at that index. Chaining is efficient and widely used for collision resolution.

- **Open Addressing:** Open addressing, also known as probing, aims to find an alternative location within the hash table when a collision happens. It involves sequentially searching for the next available slot in the table. This process continues until an empty slot is found. Open addressing requires careful handling of deletions and resizing to maintain efficiency.

### Arrays vs Hash Tables

#### Hash Tables

- Hash tables are ideal when you need to associate unique keys with values and require fast lookups based on those keys.
  - Searching through an array for an item takes a really long time, we have to loop through every item. With hash tables that is really fast thanks to their hashed indexing.
- They are dynamic data structures, making them suitable when the size of your data set may change.
- Inserting items in a hash table, unlike an array that might shift indexes, is typically O(1).
  - Is typically O(1) assuming that the time complexity of the Hash function is also O(1) and not considering collisions.

#### Arrays

- On the other hand, arrays are best suited for scenarios where you require ordered, indexed access to elements.
  - If you're looking for the smallest key, the largest key, or all the keys in a range in a hash table, you'll need to look through every key to find it.
- Arrays have a smaller memory footprint compared to hash tables.
- They are appropriate when you have a fixed, known-size collection that won't change frequently and need to access elements by their position (index) in the collection.

### TIP

Hash tables are usually the answer to improve Time Complexity!
We can avoid nested loops (O(n^2)) by using hash tables.

For example, in the following interview question: "Given an array, create a function that returns the first recurring character."

A naive O(n^2) solution would be:
```typescript
function firstRecurringCharacter(input: number[]): number {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return input[i];
            }
        }
    }
    return -1;
}
```

But a better O(n) solution using a hash table would be:
```typescript
function firstRecurringCharacter(input: number[]): number {
    const map: Record<number, boolean> = {};
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]]) {
            return input[i];
        }
        map[input[i]] = true;
    }
    return -1;
}
```

Similar questions are often asked in interviews, for example: "Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items.":
```typescript
function containsCommonItem(arr1: string[], arr2: string[]): boolean {
    // loop through first array and create object where properties === items in the array
    const map: Record<string, boolean> = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }
    // loop through second array and check if item in second array exists on created object.
    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true;
        }
    }
    return false;
}
```

> Two separate loops are better than 2 nested loops.

## LRU (Least Recently Used)

LRU stands for "Least Recently Used," and it is a caching algorithm. The basic idea behind LRU is to keep track of the order in which items are accessed and, when the cache reaches its limit and needs to evict an item, remove the least recently used item first.

Imagine you have a cache with limited space, and it stores data or items. Every time you access an item in the cache, you mark it as the most recently used. When the cache is full and you need to add a new item, you look at all the items in the cache and remove the one that hasn't been used for the longest time (i.e., the least recently used).

This helps improve the efficiency of the cache by keeping the most frequently used items and discarding those that are used less often. LRU is commonly used in various computing scenarios where efficient management of limited resources, like cache memory, is crucial for optimizing performance.

## Trees

Every complex project ends up being a tree exercise.

Some examples:
- Your filesystem is a tree.
- The DOM is a tree.
- Trees are massively important in compilers. You have probably heard the term Abstract Syntax Tree.

and there is much more...

### Tree terminology

- **root** - The most parent node. The First. Adam.
- **height** - The longest path from the root to the most child node.
- **binary tree** - A tree in which has at most 2 children, at least 0 children.
- **general tree** - A tree with 0 or more children.
- **binary search tree** - A tree in which has a specific ordering to the nodes and at most 2 children.
- **leaves** - A node without children.
- **balanced** - A tree is perfectly balanced when any node's left and right children have the same height.
- **branching factor** - The amount of children a tree has.

### Tree traversals

There are different ways in which you can visit the nodes of a tree:

- Pre order
- In order
- Post order

These types of traversals are known as Depth First Search.
But there is also another type: Breadth first search.

Depth First Search (DFS) and Breadth First Search (BFS) are two fundamental algorithms used in the field of data structures and graph theory to explore and traverse graphs. Here's a clear and brief description of each:

#### Depth First Search (DFS):

- DFS is a graph traversal algorithm that starts at a designated node (usually the root) and explores as far as possible along each branch before backtracking.
- It uses a **Stack** to keep track of the nodes to visit.

#### Breadth First Search (BFS):

- BFS is a graph traversal algorithm that explores all the neighbor nodes at the current level before moving to the next level.
- It uses a **Queue** to keep track of the nodes to visit, ensuring that nodes closer to the source node are visited before distant ones.

### Binary Search Tree (BST)

The Binary Search Tree is a classic when it comes to learning about trees. It's a simple binary tree data structure. But the key property of a BST is that it maintains a specific ordering of its nodes.

- Left Subtree: All nodes in the left subtree have values less than or equal to the node's value.
- Right Subtree: All nodes in the right subtree have values greater than the node's value.

This ordering property makes BSTs particularly useful for efficient searching for example. However, it's important to note that the efficiency of BST operations relies on maintaining a balanced tree structure, as an unbalanced BST can degrade to linear time complexity in the worst case.
To mitigate this, various balanced BST variants, like AVL trees and Red-Black trees, are used to ensure balanced structures and consistent logarithmic time complexity.

## Heap

The simplest way to put it is a binary tree where every child and grand child is smaller (MaxHeap), or larger (MinHeap) than the current node.
Heap uses a weak order (it's ordered, but it's not perfect ordered).

Heaps are often used in algorithms such as Heap Sort and in data structures like Priority Queues. They're designed to provide quick access to the minimum or maximum element, which is why they're organized in a way that ensures the top element is always the one you need.
A heap is one way to implement a priority queue. 

- Whenever a node is added, we must adjust the tree.
- Whenever a node is deleted, we must adjust the tree.
- There is no traversing the tree.

Some cool characteristics:

- It is self balancing.
- It can be used for priority.
- Funnest data structure to implement, but easy to get wrong!

## Trie

If its not a priority queue, its a trie.

They are pronounced like Tree (its named after Re"trie"val Tree).
So its a Trie tree (but people keep calling them try trees / prefix / digital tree).

A Trie is like a special way of organizing words or data for quick and efficient searching.
The easiest way to visualize a trie is to think of auto-complete (or even a cache).

## Graph

Many problems eventually become graph problems. And this is by far the largest section of algorithms.

> All trees are graphs, not all graphs are trees.

It consists of vertices (nodes) and edges (connections) that link these vertices. Graphs can be directed or undirected, weighted or unweighted, and can represent a variety of real-world systems, from social networks to transportation networks, and even abstract mathematical relationships.

### Terminology of Graphs

- **cycle**: When you start at Node(x), follow the links, and end back at Node(x).
- **acyclic**: A graph that contains no cycles.
- **connected**: When every node has a path to another node.
- **directed**: When there is a direction to the connections.
- **undirected**: !directed.
- **weighted**: The edges have a weight associated with them. Think Maps.
- **dag**: Directed, acyclic graph.
- **node**: A point or vertex on the graph.
- **edge**: The connection between two nodes.

### Representation

There are basically 2 ways to represent a graph.

#### Adjacency list

In an adjacency list each vertex maintains a list of its neighboring vertices. It's efficient for sparse graphs, consumes less memory, and is ideal for operations involving neighbors, such as finding adjacent vertices.

#### Adjacency matrix

An adjacency matrix is a 2D matrix representation of a graph where rows and columns correspond to vertices, and matrix entries indicate edge presence. It's well-suited for dense graphs, efficient for checking edge existence and vertex degrees, but consumes more memory, making it ideal for operations that involve traversing all edges in the graph.

### Search

Both DFS and BFS are also available when it comes to graphs.

### Dijkstra's Shortest Path

Dijkstra's Shortest Path algorithm is a method for finding the shortest path between two nodes in a graph (it's based on Breadth First Search).
It does not handle graphs with negative weights well. If a graph contains negative-weight edges, the algorithm may produce incorrect results because it assumes that adding a shorter edge always improves the path.

> Dijkstra's algorithm is a greedy algorithm, always choosing the locally optimal solution at each step.

> Bellman-Ford can be an alternative algorithm that address the negative numbers limitation. It can handle graphs with negative weights and detect negative cycles. However, its time complexity is higher than Dijkstra's algorithm.

### Big O

Big O is commonly stated in terms of **V** and **E** where V stands for vertices and E stands for edges.
So O(V * E) means that we will check every vertex, and on every vertex we check every edge.

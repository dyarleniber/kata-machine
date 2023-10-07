## Big O

Big O is a way to categorize your algorithms time or memory requirements based on input.

Important concepts:
- Growth is with respect to the input.
- Constants are dropped.
- Worst case is usually the way we measure.

There is practical vs theoretical differences:

Just because N is faster than N^2, doesn't mean practically its always faster for smaller input.
Remember, we drop constants. Therefore O(100N) is faster than O(N^2) but practically speaking, you would probably win for some small set of input.

Is there anything else besides Big O? Well, there is technically a bunch of different ways to measure the complexity of algorithms, but in general the easiest one to use is the "Upper Bound".

Another Big O trick:

If the input halves at each step, its likely O(LogN) or O(NlogN). For example: Binary search.

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

In summary:

Use **arrays** when you need fast random access, efficient searching, and a more memory-efficient structure for fixed-size collections.

Use **linked lists** when you need frequent insertions and deletions, dynamic sizing, and reduced memory wastage in variable-sized collections.

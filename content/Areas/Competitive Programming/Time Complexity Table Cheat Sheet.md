
## Strictly Ordered Time Complexity Classes

| **Efficiency**   | **Notation**           | **Name**                         | **Growth Rate Description**                                                                      | **Max Input Size (n) for ≈1 Sec**              |
| ---------------- | ---------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| **1 (Fastest)**  | $\huge O(1)$           | **Constant**                     | Execution time is completely unaffected by input size.                                           | **Virtually Infinite**                         |
| **2**            | $\huge O(\log \log n)$ | **Double Logarithmic**           | Grows so slowly that it is practically indistinguishable from constant time.                     | **Virtually Infinite**                         |
| **3**            | $\huge O(\log n)$      | **Logarithmic**                  | Highly efficient; the problem space is divided (usually halved) at each step.                    | **Virtually Infinite** ($n \approx 10^{300}+$) |
| **4**            | $\huge O(\sqrt{n})$    | **Fractional Power / Sublinear** | Grows slower than linear, commonly seen in algorithms like search blocks.                        | $n \approx 10^{16}$                            |
| **5**            | $\huge O(n)$           | **Linear**                       | Scales perfectly 1:1 with the size of the input.                                                 | $n \approx 10^8$ (100 million)                 |
| **6**            | $\huge O(n \log^* n)$  | **Iterated Linear**              | Scaled by the iterated logarithm (which never exceeds 5 for any practical universe-sized input). | $n \approx 10^8$                               |
| **7**            | $\huge O(n \log n)$    | **Linearithmic**                 | Each input element performs a logarithmic operation (the lower bound for comparison sorting).    | $n \approx 10^7$ (10 million)                  |
| **8**            | $\huge O(n^2)$         | **Quadratic**                    | Growth scales with the square of the input (standard nested loops).                              | $n \approx 10^4$ (10,000)                      |
| **9**            | $\huge O(n^3)$         | **Cubic**                        | Growth scales with the cube of the input (triple nested loops).                                  | $n \approx 500$                                |
| **10**           | $\huge O(2^n)$         | **Exponential**                  | The computation time doubles with every single addition to the input size.                       | $n \approx 25$ to $30$                         |
| **11**           | $\huge O(n!)$          | **Factorial**                    | Grows incredibly fast; scales with all permutations of the input.                                | $n \approx 11$                                 |
| **12 (Slowest)** | $\huge O(n^n)$         | **Superexponential**             | The absolute worst scaling; grows faster than factorial.                                         | $n \approx 8$                                  |


![[Pasted image 20260716194053.png]]


![[Pasted image 20260716193854.png]]


## Common Data Structure Operations

| Data Structure | Average Access | Average Search | Average Insertion | Average Deletion | Worst Access | Worst Search | Worst Insertion | Worst Deletion | Worst Space |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Array** | $\huge \Theta(1)$ | $\huge \Theta(n)$ | $\huge \Theta(n)$ | $\huge \Theta(n)$ | $\huge O(1)$ | $\huge O(n)$ | $\huge O(n)$ | $\huge O(n)$ | $\huge O(n)$ |
| **Stack** | $\huge \Theta(n)$ | $\huge \Theta(n)$ | $\huge \Theta(1)$ | $\huge \Theta(1)$ | $\huge O(n)$ | $\huge O(n)$ | $\huge O(1)$ | $\huge O(1)$ | $\huge O(n)$ |
| **Queue** | $\huge \Theta(n)$ | $\huge \Theta(n)$ | $\huge \Theta(1)$ | $\huge \Theta(1)$ | $\huge O(n)$ | $\huge O(n)$ | $\huge O(1)$ | $\huge O(1)$ | $\huge O(n)$ |
| **Singly-Linked List** | $\huge \Theta(n)$ | $\huge \Theta(n)$ | $\huge \Theta(1)$ | $\huge \Theta(1)$ | $\huge O(n)$ | $\huge O(n)$ | $\huge O(1)$ | $\huge O(1)$ | $\huge O(n)$ |
| **Doubly-Linked List** | $\huge \Theta(n)$ | $\huge \Theta(n)$ | $\huge \Theta(1)$ | $\huge \Theta(1)$ | $\huge O(n)$ | $\huge O(n)$ | $\huge O(1)$ | $\huge O(1)$ | $\huge O(n)$ |
| **Skip List** | $\huge \Theta(\log n)$ | $\huge \Theta(\log n)$ | $\huge \Theta(\log n)$ | $\huge \Theta(\log n)$ | $\huge O(n)$ | $\huge O(n)$ | $\huge O(n)$ | $\huge O(n)$ | $\huge O(n \log n)$ |
| **Hash Table** | N/A | $\huge \Theta(1)$ | $\huge \Theta(1)$ | $\huge \Theta(1)$ | N/A | $\huge O(n)$ | $\huge O(n)$ | $\huge O(n)$ | $\huge O(n)$ |
| **Binary Search Tree** | $\huge \Theta(\log n)$ | $\huge \Theta(\log n)$ | $\huge \Theta(\log n)$ | $\huge \Theta(\log n)$ | $\huge O(n)$ | $\huge O(n)$ | $\huge O(n)$ | $\huge O(n)$ | $\huge O(n)$ |
| **Cartesian Tree** | N/A | $\huge \Theta(\log n)$ | $\huge \Theta(\log n)$ | $\huge \Theta(\log n)$ | N/A | $\huge O(n)$ | $\huge O(n)$ | $\huge O(n)$ | $\huge O(n)$ |
| **B-Tree** | $\huge \Theta(\log n)$ | $\huge \Theta(\log n)$ | $\huge \Theta(\log n)$ | $\huge \Theta(\log n)$ | $\huge O(\log n)$ | $\huge O(\log n)$ | $\huge O(\log n)$ | $\huge O(\log n)$ | $\huge O(n)$ |
| **Red-Black Tree** | $\huge \Theta(\log n)$ | $\huge \Theta(\log n)$ | $\huge \Theta(\log n)$ | $\huge \Theta(\log n)$ | $\huge O(\log n)$ | $\huge O(\log n)$ | $\huge O(\log n)$ | $\huge O(\log n)$ | $\huge O(n)$ |
| **Splay Tree** | N/A | $\huge \Theta(\log n)$ | $\huge \Theta(\log n)$ | $\huge \Theta(\log n)$ | N/A | $\huge O(\log n)$ | $\huge O(\log n)$ | $\huge O(\log n)$ | $\huge O(n)$ |
| **AVL Tree** | $\huge \Theta(\log n)$ | $\huge \Theta(\log n)$ | $\huge \Theta(\log n)$ | $\huge \Theta(\log n)$ | $\huge O(\log n)$ | $\huge O(\log n)$ | $\huge O(\log n)$ | $\huge O(\log n)$ | $\huge O(n)$ |
| **KD Tree** | $\huge \Theta(\log n)$ | $\huge \Theta(\log n)$ | $\huge \Theta(\log n)$ | $\huge \Theta(\log n)$ | $\huge O(n)$ | $\huge O(n)$ | $\huge O(n)$ | $\huge O(n)$ | $\huge O(n)$ |


## Array Sorting Algorithms

| Algorithm | Best Time Complexity | Average Time Complexity | Worst Time Complexity | Worst Space Complexity |
| :--- | :---: | :---: | :---: | :---: |
| **Quicksort** | $\huge \Omega(n \log n)$ | $\huge \Theta(n \log n)$ | $\huge O(n^2)$ | $\huge O(\log n)$ |
| **Mergesort** | $\huge \Omega(n \log n)$ | $\huge \Theta(n \log n)$ | $\huge O(n \log n)$ | $\huge O(n)$ |
| **Timsort** | $\huge \Omega(n)$ | $\huge \Theta(n \log n)$ | $\huge O(n \log n)$ | $\huge O(n)$ |
| **Heapsort** | $\huge \Omega(n \log n)$ | $\huge \Theta(n \log n)$ | $\huge O(n \log n)$ | $\huge O(1)$ |
| **Bubble Sort** | $\huge \Omega(n)$ | $\huge \Theta(n^2)$ | $\huge O(n^2)$ | $\huge O(1)$ |
| **Insertion Sort** | $\huge \Omega(n)$ | $\huge \Theta(n^2)$ | $\huge O(n^2)$ | $\huge O(1)$ |
| **Selection Sort** | $\huge \Omega(n^2)$ | $\huge \Theta(n^2)$ | $\huge O(n^2)$ | $\huge O(1)$ |
| **Tree Sort** | $\huge \Omega(n \log n)$ | $\huge \Theta(n \log n)$ | $\huge O(n^2)$ | $\huge O(n)$ |
| **Shell Sort** | $\huge \Omega(n \log n)$ | $\huge \Theta(n (\log n)^2)$ | $\huge O(n (\log n)^2)$ | $\huge O(1)$ |
| **Bucket Sort** | $\huge \Omega(n+k)$ | $\huge \Theta(n+k)$ | $\huge O(n^2)$ | $\huge O(n)$ |
| **Radix Sort** | $\huge \Omega(nk)$ | $\huge \Theta(nk)$ | $\huge O(nk)$ | $\huge O(n+k)$ |
| **Counting Sort** | $\huge \Omega(n+k)$ | $\huge \Theta(n+k)$ | $\huge O(n+k)$ | $\huge O(k)$ |
| **Cubesort** | $\huge \Omega(n)$ | $\huge \Theta(n \log n)$ | $\huge O(n \log n)$ | $\huge O(n)$ |



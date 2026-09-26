# Permutation: Definition, Formula, and Examples

A **permutation** is a mathematical calculation that determines the total number of unique ways a specific set of objects can be arranged, where the **order of arrangement matters**.

### 1. Definition of Permutation
A permutation is an ordered arrangement of all or part of a set of items. Unlike combinations, changing the sequence of the items creates a completely new permutation. For example, the arrangement $(A, B, C)$ is counted as a distinct permutation from $(C, B, A)$.

### 2. The Formula
When choosing and arranging $r$ unique items from a total pool of $n$ items, the formula is:

$$
^nP_r = \frac{n!}{(n-r)!}
$$

Where:
- $n$ is the **total number** of items in the set.
- $r$ is the **number of items chosen** for the arrangement.
- $!$ denotes a **factorial** (e.g., $4! = 4 \times 3 \times 2 \times 1 = 24$).

### 3. Step-by-Step Examples

#### Example 1: Arranging a Full Set ($n = r$)
Suppose you want to arrange **3 books** (A, B, and C) on a shelf. 
- **Formula application:** Because you are arranging all 3 items, $n = 3$ and $r = 3$. This simplifies to $n!$ or $3!$.
- **Calculation:** $3! = 3 \times 2 \times 1 = 6$
- **The 6 possible permutations:** ABC, ACB, BAC, BCA, CAB, CBA.

#### Example 2: Arranging a Subset ($n > r$)
Suppose a race has **5 runners**, and you want to find out how many different ways the **Gold, Silver, and Bronze medals** (top 3 spots) can be awarded.
- **Identify values:** Total runners $n = 5$. Medaled positions $r = 3$.
- **Apply formula:** 
  $$^5P_3 = \frac{5!}{(5-3)!} = \frac{5!}{2!}$$
- **Calculation:** 
  $$\frac{5 \times 4 \times 3 \times 2 \times 1}{2 \times 1} = 5 \times 4 \times 3 = 60$$
- **Result:** There are **60 different ways** to award the podium medals.

### 4. Comparison Summary

| Concept | Order Matters? | Example |
| :--- | :--- | :--- |
| **Permutation** | **Yes** | Creating a lock passcode ($1\text{-}2\text{-}3$ is different from $3\text{-}2\text{-}1$) |
| **Combination** | **No** | Selecting a team of 3 people (Alice and Bob is the same team) |

### 5. Core Concept Summary
A permutation calculates the number of ways to arrange items where **order is crucial**. If you change the sequence, you create a brand new outcome.

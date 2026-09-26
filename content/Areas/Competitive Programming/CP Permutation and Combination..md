> concepts of permutations and combinations, and use only addition,
multiplication, and division.

# Simple Addition

if there are a varieties of soup and b varieties of salad, then there are a + b possible ways to order a meal of soup or salad ( but not both soup and salad).

a = soup
b = salad
a + b possible ways to order a meal of soup _or_ salad
==a or b possible ways==


# Simple Multiplication 

if there are a varieties of soup and b varieties of salad, then there are ab possible ways to order a meal of soup and salad. 

a = soup
b = salad
a * b possible ways to order a meal of soup _and_ salad.
==a and b possible ways==


A permutation of collection of objects is a reordering of them. For example, there are six different permutation of the letter ABC
ABC
ACB
BAC
BCA
CAB
CBA

5 * 4 * 3 * 2 * 1 = 120 different ways to permute the letters in "HARDY".

n * (n - 1) ... 1 is denoted by the symbol $\huge n!$ , n factorial. 


## Palindrome

a string $\huge s = s_1, s_2, ... s_N$ is a palindrome if $\huge s= s_{N-i+1}$ 
for all $\Huge 1 <= i <= N$



what is a parity? understanding the concept of parity?

Let S be a multiset of char.

$\Huge (c \in \Sigma)$ 


# Permutation 


> determines the total number of unique ways a specific set of objects can be arranged, where the order of arrangement matters.


[[Permutation]]

[[Permutation vs Combination]]


factorial relationship. 
choice made.


**order matters** : 
changing the position of an item creates a brand new permutation. 


Example / Problem 

> How many different strings can be made by reordering the letters of the word SUCCESS?


## Formal Definition 

Let $\huge S$ be a finite set where $\huge |S| = n$

n-permutation of $\huge S$ is a bijection 

r-permutation of $\huge S$ is an ordered sequence of r distinct elements taken from $\huge S$.


## Cardinality formulas 

### r-permutation without repetition.

n - set
r - distinct elements

> The number of ways to choose and arrange r distinct elements from a set of n elements is denoted by $\huge p(n,r)$ or $\huge p^n_r$



$$\huge
P(n, r) = \frac{n!}{(n-r)!} = n(n-1)(n-2)\cdots(n-r+1)
$$



### r-permutation with Repetition 

> The number of r-permutation of a set of n objects where repetition is allowed.

$$\huge
U(n, r) = n^r
$$



### Permutations of a Multiset (Indistinguishable Objects)

> The number of distinct linear arrangements of n objects, where there are k types of objects, and each type has an identical count of $\huge (n_1, n_2, \dots, n_k)$ items (such that $\huge \sum_{i=1}^{k} n_i = n$ ):


$$\huge
\frac{n!}{n_1! \cdot n_2! \cdots n_k!} = \binom{n}{n_1, n_2, \dots, n_k}
$$


### Full Permutations (Symmetric Group Order)


> The total number of bijections from an n-element set to itself, representing the order of the Symmetric Group $\huge  (S_{n})$

$$\Huge
|S_n| = n!
$$





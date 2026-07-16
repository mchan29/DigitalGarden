

Source : 
[計算量オーダーの求め方を総整理！ 〜 どこから log が出て来るか 〜 #競技プログラミング - Qiita](https://qiita.com/drken/items/872ebc3a2b5caaa4a0d0)



[[Time Complexity Table Cheat Sheet]]


- What is the execution time limit? 
- what is the size of the problem you want to solve $\huge n$ ? 


- Execution time limit $1$ seconds
- The machine used for the calculations is a regular home PC.


The number of for loops that can be processed in $1$ per second is about 

$$\huge 10^8 = 100,000,000$$



| Number of loops | Description of the Ant Plant                   | Now                                            |
| --------------- | ---------------------------------------------- | ---------------------------------------------- |
| $\huge 10^6$    | Be in time with plenty of time                 |                                                |
| $\huge 10^7$    | Probably in time                               | Be in time with plenty of time                 |
| $\huge 10^7$    | Unless the process is very simple, it's tough. | Probably in time                               |
| $\huge 10^9$    |                                                | Unless the process is very simple, it's tough. |
|                 |                                                |                                                |


In many practical situations, data around $\huge n = 10^5~10^7$ is often handled, 
and the key is whether an algorithm with $\huge O(n^2)$ can be improved to $\huge O(n)$ or $\huge O(n\log{n})$




- CPU theoretical value: approximately $\huge 10^9$ times/second (GHz level)


> [!note]
> Theoretical CPU value ($\huge10^9$) ÷ Implementation cost (approx. 10x) = Practical benchmark $\huge (10^8)$









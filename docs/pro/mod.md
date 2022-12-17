# 同余定理

本节主要为数学理论，用于解决类似$a^{b}$除$c$的余数是多少的问题。是对 [计算简介 > #b÷R#方法](docs/methods/mod.md) 一节的应用和拓展。

这个玩意听起来高大上，实际上挺弱智的。

先上一段百度百科：
> 同余定理是数论中的重要概念。给定一个正整数$m$，如果两个整数$a$和$b$满足$a-b$能够被$m$整除，即$\frac{a-b}{m}$为一个整数，那么就称整数$a$与$b$对模$m$同余，记作$a\equiv b{\pmod m}$。

写的什么鬼……

简单来说，就是$a$除$m$的余数和$b$除$m$的余数相同，我们就称$a$与$b$对模$m$同余，记作：$a\equiv b{\pmod m}$。

方便起见，我们称$a$除$m$的余数为$a$对$m$取模。

若 $a\equiv 0{\pmod m}$，即$a$能被$m$整除，则记作$\left. m \middle| a \right.$。

显然：

- $a\mid b\iff-a\mid b\iff a\mid-b\iff|a|\mid|b|$
- 设 $m\ne0$，那么 $a\mid b\iff ma\mid mb$。
- 设 $b\ne0$，那么 $a\mid b\implies|a|\le|b|$。
- 设 $a\ne0$，$b=qa+c$，$q\in \mathbf{Z}$，那么 $a\mid b\iff a\mid c$。

由此我们得出同余的一些性质：

- 自反性：$a\equiv a\pmod m$。
- 对称性：若 $a\equiv b\pmod m$，则 $b\equiv a\pmod m$。
- 传递性：若 $a\equiv b\pmod m$，$b\equiv c\pmod m$，则 $a\equiv c\pmod m$。
-   线性运算：若 $a,b,c,d\in\mathbf{Z}$，$m\in\mathbf{N}^*$，$a\equiv b\pmod m$，$c\equiv d\pmod m$ 则有：
    - $a\pm c\equiv b\pm d\pmod m$。
    - $a\times c\equiv b\times d\pmod m$。

由乘法线性运算易证：若 $a\equiv b\pmod m$，则 $a^k\equiv b^k\pmod m$

## 应用

这样我们就能不用二项式定理轻松秒形如 $a^b$除$m$的余数 的题了。

随便举个例子：求$114514^{1919}$除$11$的余数。

首先化简底数$114514$，用计算器的#b÷R#方法易得 $114514 \equiv 4 \times d\pmod {11}$，由推论原题答案可直接化简为$4^{1919}$除$11$的余数。

~~接下来我们就可以直接硬算了~~ 接下来依然无法硬算，但是可以进一步化简。

我们可以使用类似[快速幂](https://oi-wiki.org/math/binary-exponentiation/)的算法对指数进行拆分（将每一项底数拆分得#b÷R#方法能直接求余）：
$$
\begin{aligned}
    4^{1919} & = 4^{1900}\times 4^{19}\\
    & = (4^{10})^{190}\times 4^{10} \times 4^9\\
    & = 1048576^{190}\times 1048576 \times 262144
\end{aligned}
$$

加点同余定理：
$$
\begin{aligned}
    4^{1919} & = 1048576^{190}\times 1048576 \times 262144\\
             & \equiv 1^{190}\times 1 \times 3\pmod {11}\\
             & \equiv 3\pmod {11}\\
\end{aligned}
$$

好了，$3$就是这题的答案了，比二项式定理快多了吧。

### 例题

1. 求$1919810^{114514}$除$7$的余数。

### 解析

1. 由之前我们讲的，直接简化问题为求$4^{114514}$除$7$的余数，然后进一步拆分：
$$
\begin{aligned}
    4^{114514} & = 4^{2\times 31 \times 1847}\\
               & = ((4^2)^{31})^{1847}\\
               & \equiv (2^{31})^{1847} \pmod {7}\\
               & \equiv 2^{1847} \pmod {7}\\
               & = 2^{1800 + 47}\\
               & = 2^{1800} \times 2^{47}\\
               & = (2^{18})^{100} \times 2^{27} \times 2^{20}\\
               & \equiv 1^{100} \times 1 \times 4 \pmod {7}\\
               & \equiv 4 \pmod {7}\\
\end{aligned}
$$
所以答案就为$4$（如果拿二项式定理有的好算算的了DOGE
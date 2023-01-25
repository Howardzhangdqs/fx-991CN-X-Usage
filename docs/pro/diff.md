# 求导

用人话说，导数就是函数一个点上切线的斜率，用数学语言表达就长这样：
$$\mathop {\lim }\limits_{\Delta x \to 0} \frac{{\Delta y}}{{\Delta x}} = f'(x)$$
导函数，用人话说是函数$f(x)$在可导区间内任一点的导数所构成的新函数$f'(x)$，用数学语言表达就长这样：
$$f'(x) = \mathop {\lim }\limits_{\Delta x \to 0} \frac{{f(x + \Delta x) - f(x)}}{{\Delta x}}$$

## 使用计算器的中心差分法进行求导

按出方法：#bSHIFT##b$\int^{\square}_{\square}\blacksquare$#（$\frac d{dx}\square|_{x=\square}$）
![](assets/img/Snipaste_2023-01-24_21-52-02.png)

数学输入模式中，它的输入顺序相较$\sum$Sigma方法阳间点，光标移动顺序符合从左往右，具体如下：
$$
\frac d{dx}(\textcircled{\scriptsize 1})\Big|_{x=\displaystyle\textcircled{\scriptsize 2}}
$$

输入内容：
$$
\frac d{dx}(f_x)\Big|_{x=a}
$$

其中$f_x$即为待求导的函数，$a$为需要求导的位置

线性输入模式中，输入方式将变为：
$$
d/dx(f_x, a, tol)
$$

![](assets/img/Snipaste_2023-01-25_17-22-52.png)
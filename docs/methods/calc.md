# #bCALC#方法
#bCALC#方法 是一个能很大程度减小诸如在进行数列计算、枚举时减小修改量的方法。该方法可以在计算模式（模式1）和复数模式（模式2）中被调用。

让我们通过举例来了解这个方法的用法：

计算函数$f(x)=x+2\times x^2$，当$x$分别等于$2,3,4$时$f(x)$的值。

传统的方法可能是~~口算~~把数字一个个带进原式变成$2+2\times 2^2$、$3+2\times 3^2$、$4+2\times 4^2$再计算，但是我们的#bCALC#方法可以只输入一次表达式，之后每次定义函数自变量即可。

1. 首先把要计算的表达式原封不动的敲进计算器
![](./assets/img/Snipaste_2022-12-02_21-15-36.png)

2. 点击键盘左上的#bCALC#按钮
![](./assets/img/Snipaste_2022-12-02_21-16-55.png)

3. 在弹出的黑条中输入$2$，点击#b=#
![](./assets/img/Snipaste_2022-12-02_21-18-19.png)

这样我们就完成了对变量$x$的赋值，此时只需再点一次#b=#即可得到表达式答案$10$。

![](./assets/img/Snipaste_2022-12-02_21-19-22.png)

同样的方式可以快速给变量$x$赋值为$3$、$4$然后快速计算出相应表达式值。

如果操作足够熟练你会发现这个方法确实会给你节省很多的时间，至少不用一个一个一个的去改变量值了。

如果函数有两个自变量，操作也是类似的，下面以函数$f(x, y)=x^y$为例，我们要计算当$x=4$，$y=5$时函数的值：

1. 首先把要计算的表达式原封不动的敲进计算器
![](./assets/img/Snipaste_2022-12-03_09-48-44.png)

2. 点击键盘左上的#bCALC#按钮
![](./assets/img/Snipaste_2022-12-03_09-50-07.png)
此时你可能注意到了液晶屏右上出现了一个下箭头:fa fa-caret-down:的图标，这意味着我们可以通过按键盘上的上下键来切换将要赋值的变量。<br>
我们先对变量$x$进行赋值，顺次按下#b4##b=#（将$x$赋值为$4$）<br>
此时变量$x$值已经为$4$，我们需要切换到变量$y$进行赋值。
![](./assets/img/Snipaste_2022-12-03_10-01-10.png)
你可能注意到了点击了#b=#后计算器自动切换到了$y=$的界面，我们只需要正常的赋值即可。<br>
如果前一个数字赋值错了，我们可以点上下键来切换回上一个变量再次赋值。

?> 当开始编辑一个变量的值后，计算器会进入“线性编辑”模式（你能看到屏幕上有光标在闪烁且无黑条），除非 按#b=#完成变量的赋值 或 按#bAC#放弃编辑 从而退出该模式，否则无法切换变量。<br>
![](./assets/img/Snipaste_2022-12-03_10-08-15.png)
“线性编辑”模式内使用线性语法而非数学语法，比如$3^2$应输入为`3^(2`

## 应用

!> 所有例题**严禁动笔计算**！

1. 请计算函数$f(x, y, z)=\frac{1}{\sqrt{x^y}}\times z^2$，$x=3$，$y=4$，$z=5$时的值
2. 求出函数$f(x)=\frac{x}{\sqrt{x^x}}$，$x\in \left\{1, 4, 6\right\}$的值域。
3. 求出函数$f(a)=a^2 + 4a + 6$当$a$取值为$114$，$514$，$1919$时函数的值。

### 解析
1. 这个主要是想让大家练一下多变量赋值，你完全可以把自变量带进去变成$\frac{1}{\sqrt{3^4}}\times 5^2$敲出答案的，不过我们还是用#bCALC#方法试一遍。<br>先把算式敲进去，由于计算器中没有变量$z$，故用其他的变量（比如这里我用的是$A$）代替。
![](./assets/img/Snipaste_2022-12-03_08-38-42.png)
顺次按下#bCALC##b3##b=#（将$x$赋值为$3$）#b4##b=#（将$y$赋值为$4$）#b5##b=#（将$A$赋值为$5$）#b=#（得出结果$\frac{25}9$）

2. 通过定义域求值域，定义域就三个数，一个自变量重复使用了3此，很适合使用#bCALC#减少修改表达式时间。<br>输入表达式后顺次按下#bCALC##b1##b=#（将$x$赋值为$1$）#b=#（得出结果$\frac{\sqrt{3}}3$），#bCALC##b4##b=#（将$x$赋值为$4$）#b=#（得出结果$\frac14$），#bCALC##b6##b=#（将$x$赋值为$6$）#b=#（得出结果$\frac1{36}$）。<br>所以函数值域为$\left\{\frac{\sqrt{3}}3, \frac14, \frac1{36}\right\}$

3. 这题比较有气味，也比较容易，那就权且作为一个打字练习，直接给答案：$f(114)=13458$，$f(514)=266258$，$f(1919)=3690243$。
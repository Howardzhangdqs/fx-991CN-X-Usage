# 界面介绍

这一版可能看着有点蠢，但是我觉得还是有部分借鉴价值的。

开启一台 fx-991CN X 的方法也是唯一方法就是点击输入区右上角的<span class="btn">开机</span>按钮，这个按钮比旁边的三个按钮（<span class="btn">SHIFT</span><span class="btn">ALPHA</span><span class="btn">菜单/设置</span>）设计的略低一点（为防止误触，不是质量不好被你按坏了）

先放一个好玩的，显示液晶板面的全部像素：同时按下<span class="btn">SHIFT</span>+<span class="btn">7</span>+<span class="btn">开机键</span>后会出现DIAGNOSTIC界面，顺次点击<span class="btn">9</span><span class="btn">SHIFT</span>，即可看到全部液晶屏的像素。

!> 本操作会使计算器设置、存储器恢复出厂设置

通过这个操作你可能注意到了液晶面板主要分为两个部分：顶部的状态栏和下方的一大块点阵。

## 状态栏与指示符

状态栏中每个单独的图标各自叫做一个指示符。

下表列举了状态栏中出现的各个指示符的含义，如果你的状态栏中有形如这样的图标就表示你的计算器正处于相应的模式中：

| 指示符 | 表示 |
| :--: | :--: |
| <span class="badge">S</span> | 点击了<span class="btn">SHIFT</span>后进入的转换键功能，再次点击<span class="btn">SHIFT</span>即会消失并退出转换键功能 |
| <span class="badge">A</span> | 点击了<span class="btn">ALPHA</span>后进入的转换键功能（对<span class="btn">SHIFT</span>转换键功能的拓展），再次点击<span class="btn">ALPHA</span>即会消失并退出转换键功能 |
| <span class="badge">D</span> | 角度采用角度制（出厂设置默认为这个） |
| <span class="badge">R</span> | 角度采用弧度制 |
| <span class="badge">G</span> | 角度采用百分度制 |
| `FIX` | 计算结果为小数时保留指定位 |
| `SCI` | 计算结果为小数时输出为科学计数法 |
| `M` | 存储器中变量M不为空（这个经常会有同学误触到<span class="btn">M+</span>然后状态栏里多出一个`M`就感觉很害怕，其实完全不必要担心） |
| ![](./interface.assets/edit.png) | 它表示计算器的输入/输出模式选择为【数学输入/数学输出】或【数学输入/小数输出】 |
| ![](./interface.assets/sto.png) | 当按下<span class="btn">STO</span>后会进入赋值模式，等待用户点击一个变量，用户随便点一个键盘上的变量即会将计算器当前计算步骤中得出的值赋值给这个用户选中的变量。 |
| <span class="badge">=</span> | 屏幕目前显示的多语句表达式的中间结果。 |

# 这个坑先挖着，我先把后面的写完了再来填

#s[:fa fa-github:HowardZhangdqs](https://github.com/Howardzhangdqs)#
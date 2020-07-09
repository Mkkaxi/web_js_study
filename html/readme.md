box-sizing:border-box
{
    将盒子的boder和padding计算到盒子的总高度和宽度
    width = border + padding + 内容宽度
    height = border + padding + 内容高度
}

z-index
{
    设置元素显示的优先级，值为数字，越大的显示在最上层（！！！元素必须为定位元素）
}

./
{
    相对路径
    ./为当前目录
    ../为父级目录
    /为根目录

    绝对路径：C:\xyz\test.txt 
}
加粗
{
    font-weight: bold;
}

元素阴影
{
    box-shadow: 0px（元素向x轴方向浮动） 0px（元素向y轴方向浮动） 15px（元素阴影范围） darkgray（阴影颜色）;
}
水平居中
{
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;

    translateX：向x轴移动
    rotateX：沿x轴旋转

    left:0;
    right:0;
}
动画效果
{
    animation: close（函数名） 4s（动画播放时间） ease（匀速） infinite（无限循环播放）;

    @keyframes close（定义动画函数）
    {
    0%{transform: translate(0);}（每个时间执行的动作）
    20%{transform: translate(20px);}
    35%{transform: translate(20px);}
    55%{transform: translate(0);}
    100%{transform: translate(0);}
    }
}
透明度
{
    opacity
}

伪类
{
    能在html中少写一个元素标签
    .face::before
    {
        content: '';（！！！）
        width: 18px;
        height: 8px;
        background-color: #badc58;
        position: absolute;
        right: -8px;
        top: 20px;
        border-radius: 50%;
    }
}

居中（弹性布局）
{
    display: flex;
    justify-content: center;（设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。默认值为flex-start，center为居中显示）
    align-items: center;（纵轴方向对齐方式，center为居中）

    flex：2 （占据父级元素的 2/3）
    flex：1 （占据父级元素的 1/3）
}
颜色渐变
{
    background: linear-gradient(-170deg, #2376ae 0%, #c16ecf 100%);
}

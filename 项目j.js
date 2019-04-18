window.onload = function(){
    /*720代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;100代表换算比例，这里写100是
      为了以后好算,比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等*/
    getRem(750,100)
};
window.onresize = function(){
    getRem(750,100)
};
function getRem(pwidth,prem){
    var html = document.getElementsByTagName("html")[0];
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = oWidth/pwidth*prem + "px";
}



var count = 0;  //定义图片变更次数
var FI=null; //存储淡入interval循环
var timer=null;//存储轮播interval循环
var fullBox = document.getElementById('adshow');//用于设置背景颜色
var pictures=document.getElementsByClassName('pictures');//存储图片
var button=document.getElementsByClassName('button');//存储下部圆圈
var percent = 0;//淡入循环变量
function fadeIn(){//淡入函数
        FI = setInterval(function (){
        percent += 0.010000; //精确浮点数精度
        if(percent>=1){clearInterval(FI);}
        else{
            pictures[count].style.opacity=percent;}
        },10);
        percent = 0;}
function pic(){//图像变换函数
    for(var i=0;i<pictures.length;i++){
      pictures[i].style.opacity=0;};//所有图片透明
    fullBox.style.backgroundColor = pictures[count].id//背景图片颜色等于相应图片的id
    for(var c=0;c<button.length;c++){//底部按钮颜色变化
        button[c].style.backgroundColor = 'white';
    };
    button[count].style.backgroundColor='#f6780a';    
}

//主轮播循环
showtime();
function showtime(){timer=setInterval(show,4000)};
function show(){//轮播循环函数
    count ++;
    if(count > pictures.length - 1){
    count = 0;};
    fadeIn();               
    pic();
}
//底部换页
for(var i=0;i<button.length;i++){
    button[i].index = i;
    button[i].onmouseover=function(){
        clearInterval(timer);
        count = this.index;//确保count值不会出错
        fadeIn();
        pic();
    };
    button[i].onmouseout=function(){showtime()};
    }

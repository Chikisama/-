// document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';

// !(function(doc,win) {
// 	var docEle = doc.documentElement,
// 		evt = "onorientationchange" in window ? "orientationchange" : "resize",
// 		fn = function() {
// 			var width = docEle.clientWidth;
// 			width && (docEle.style.fontSize = 100 * (width / 750) + "px");
// 		};

// 	win.addEventListener(evt, fn, false);
// 	doc.addEventListener("DOMContentLoaded", fn, false);


// }(document,window));
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


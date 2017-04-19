const Xhr=new XMLHttpRequest();
Xhr.open('get',url,false)// addEventl//false是 冒泡阶段 执行函数
dom2 事件的兼容性问题
this 指向 事件本身 window
事件源的 windowe.event重复性问题
顺序问题
等等
xhr.onreadystatechange=function () {
    //
    xhr.readyState==4 &&/^2\d{2}/.test(xhr.status)
};
//这是最普通的ajax false 是同步的问题
xhr.send();
Access-control-allow-origin-
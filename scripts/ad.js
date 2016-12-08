$(function () {
    var $imgrolls = $('#jnImageroll div a');
    var index = 0;
    $imgrolls.css("opacity","0.7");
    var adTime = null;
    var len = $imgrolls.length;

    $imgrolls.mouseover(function () {
        index = $imgrolls.index(this);
        showImg(index)
    }).eq(0).mouseover();

    //鼠标滑入停止动画，滑出开始动画
    $('#jnImageroll').hover(function () {
        if(adTime){
            clearInterval(adTime)
        }
    },function () {
            adTime = setInterval(function () {    //设定adTime
            showImg(index);  //setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭
            index++;          //由 setInterval() 返回的 ID 值可用作 clearInterval() 方法的参数
            if(index==len){index=0}   //if判断用==
        },5000)
    }).trigger('mouseleave');   //trigger() 方法触发被选元素的指定事件类型

});
function showImg(index) {
    var $rollobj = $('#jnImageroll');
    var $rolllist = $rollobj.find('div a');
    var newhref = $rolllist.eq(index).attr('href');//eq() 方法将匹配元素集缩减值指定 index 上的一个
    $('#JS_imgWrap').attr('href',newhref)     //find() 方法获得当前元素集合中每个元素的后代，通过选择器、jQuery 对象或元素来筛选
                        .find('img').eq(index)
                           .stop(true,true).fadeIn().siblings().fadeOut();
    $rolllist.removeClass('chos').css('opacity','0.7').eq(index).addClass('chos').css('opacity','1')
}
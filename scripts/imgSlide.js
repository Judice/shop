/* 品牌活动模块横向滚动 */
$(function () {
    $('#jnBrandTab li a').click(function () {
        $(this).parent().addClass("chos").siblings().removeClass("chos");
        index = $('#jnBrandTab li a').index(this);
        showBrandlist(index);
        return false
    }).eq(0).click()
});
function showBrandlist(index) {
    var $rollobj = $('#jnBrandList');
    var Brandwidth = $rollobj.find('li').outerWidth();
    Brandwidth = Brandwidth * 4;
    $rollobj.stop(true,false).animate({ left: -Brandwidth*index },1000)
}

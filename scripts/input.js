/* 搜索框显示效果 */
$(function () {
    $('#inputSearch').focus(function () {
        $(this).addClass('focus');
        if($(this).val()==this.defaultValue){       //jquery对象使用val()   DOM对象使用defaulValue
            $(this).val('');  //不是使用赋值语句
        }
    }).blur(function () {
        $(this).removeClass('focus');
        if($(this).val() == ''){
            $(this).val(this.defaultValue)
        }
    }).keyup(function (e) {
        if(e.which == 13){
            alert('提交表单')
        }
    })
})
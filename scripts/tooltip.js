/* 超链接文字提示 */
$(function () {
    var x = 10;
    var y = 20;
    $('a.tooltip').mouseover(function (e) {
        this.Title = this.title;
        this.title = '';
        var tooltip = '<div id="tooltip">'+this.Title+'</div>';
        $('body').append(tooltip);
        $('#tooltip').css({
            'top':(e.pageY+y)+'px',
            'left':(e.pageX+x)+'px'
        }).show('fast')
    }).mouseout(function () {
        this.title = this.Title;
        $('#tooltip').remove()
    }).mousemove(function (e) {
        $('#tooltip').css({
            'top':(e.pageY+y)+'px',
            'left':(e.pageX+x)+'px'
        })
    })
})

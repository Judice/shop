/*衣服尺寸选择*/
$(function () {
	$('.pro_size ul li').click(function () {
		$(this).addClass('cur').siblings().removeClass('cur');
		$(this).parent().siblings('strong').text( $(this).text() );  //使用text()获取文字，改写文字
    })
});

$(function () {
	$span = $('.pro_price strong');
	var price = $span.text();
	$('#num_sort').change(function () {
		var num = $(this).val();      //获取数字使用val()
		var account = price*num;
		$span.text(account)
    }).change()
})

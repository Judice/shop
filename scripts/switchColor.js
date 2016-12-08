/*衣服颜色切换*/
$(function () {
	$('.color_change ul li img').click(function () {                         //！！！！！使用find方法要先找到父元素
		$(this).addClass('hover').parent().siblings().find('img').removeClass('hover');  //设置鼠标悬浮效果
		var imgSrc = $(this).attr('src');
		var i = imgSrc.lastIndexOf('.');
		var unit = imgSrc.substring(i);
		imgSrc = imgSrc.substring(0,i);
		$('#thickImg').attr('href',imgSrc+'_one_big'+unit);
		$('#bigImg').attr('src',imgSrc+'_one_small'+unit);
		var alt = $(this).attr('alt');
		$('.color_change strong').text(alt);                  //修改文字
		var newimgSrc = imgSrc.replace('images/pro_img/','');
		$('.imgList li').hide();
		$('.imgList').find('.imgList_'+newimgSrc).show();  //是'.imgList'不要漏掉.代表class类,注意此处find用法
        //解决问题：切换颜色后，放大图片还是显示原来的图片。
        $('.imgList').find(".imgList_"+newImgSrc).eq(0).find("a").click();
    })
})
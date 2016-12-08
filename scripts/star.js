/*商品评分效果*/
$(function(){
    //通过修改样式来显示不同的星级
    $(".rating li a").click(function(){
          var title = $(this).attr('title');
          alert('你对商品的评价是'+title);
          var cl = $(this).parent().attr('class');
          $(this).parent().parent().removeClass().addClass('rating '+cl+'star'); //rating之后必须有空格
          $(this).blur();//去掉超链接的虚线框
          return false
    })
})
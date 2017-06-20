//swipe
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 30,
});
$(window).scroll(function(){  //只要窗口滚动,就触发下面代码 
	var scrollt = document.documentElement.scrollTop + document.body.scrollTop;
	//兼容写法！获取滚动后的高度 ;document.body.scrollTop为滚动条的离页面顶端高度
	//document.body.scrollTop与document.documentElement.scrollTop两者有个特点，就是同时只会有一个值生效。
	//比如document.body.scrollTop能取到值的时候，document.documentElement.scrollTop就会始终为0；反之亦然。
	if( scrollt > 200 ){  //判断滚动后高度超过200px,就显示  
		$("#top_btn").show();
	}else{      
		$("#top_btn").hide();
	}
});
//点击返回顶部按钮
$("#top_btn").click(function(){
	scroll('0', 500);//动画函数，500ms滚动到顶端
//	$("body").scrollTop(0);//无动画效果
});
//滚动到顶端的运动函数
function scroll(scrollTo, time) {
	var scrollFrom = document.documentElement.scrollTop + document.body.scrollTop;
	scrollFrom = parseInt(scrollFrom),
    i = 0,
    scrollTo = parseInt(scrollTo);
    time /= 5;
    var interval = setInterval(function () {
        i++;
        document.body.scrollTop = (scrollTo - scrollFrom) / time * i + scrollFrom;
        if (i >= time) {
            clearInterval(interval);
        }
    }, 5);
}
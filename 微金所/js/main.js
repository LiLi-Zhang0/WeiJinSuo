//改变浏览器窗口获取不同大小的图片
$(function(){
    //调整浏览器窗口大小时，发生 resize 事件
    function resize(){
        //获取浏览器的宽度
        var windowWidth = $(window).width();
        //判断屏幕的大小 小于768px显示小图，大于768px显示大图
        var isSmallScreen = windowWidth<768;
        
        //根据isSmallScreen的值来切换大小图
        //获取item元素
        var ida = $('.carousel-inner > .item');
        console.log(ida);
        //遍历轮播图的item
        //each(function(索引值，每一项))方法 each()为每个匹配元素执行函数
        //$item.data来获取属性值
        ida.each(function(i,item){
            //把DOM对象转换为jQuery对象 
            $item = $(item);
            //imgSrc拿到图片的值
            var imgSrc = isSmallScreen?$item.data("image-xs"):$item.data("image-lg");
            //已经拿到每一项，把路径填进去
            $item.html('<img src="' + imgSrc + '"/>');
            //$item.css("backgroundImage", 'url(' + imgSrc + ')');
        })

    //tab选项卡实现滚动条
    //1、拿到标签页的标签容器宽度
    //2、获取所有子元素的和 第1个li.width+第2个li.width+......
    //3、遍历元素
    //4、把宽度赋值给容器ul-wrapper
    var $ulContainer = $(".nav-tabs");
    /* bootstrap有默认的margin  和 padding    获取的宽度实际上还是偏小的  所以多给他加点就行了*/
    var width = 30;
    $ulContainer.children().each(function(index,element){
        //元素的可视宽度clientWidth
        //console.log(clientWidth);
        width += element.clientWidth;
    })
    //出现滚动条
    if(width >$(window).width()) {
        //jQuery css()方法设置或返回被选元素的一个或多个样式属性。
        $ulContainer.css("width",width).parent().css("overflow-x","scroll");
    }else{
        //不成立的话让滚动条隐藏
        $ulContainer.css("width","auto").parent().css("overflow","hidden");
    }
        
    }
    //on()方法用来监听事件
    //用trigger触发resize事件
    $(window).on('resize',resize).trigger('resize');




    //触发toolTip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    

    //实现新闻板块点击改变左侧标题
    //获取要点击的a标签
    $("#newsPart .nav-pills a").on("click",function(){
        //获取当前要操作的元素
        $this = $(this);
        //自定义属性获取对应的title标题值
        //通过在html中设置data-title=" "自定义属性获取属性值
        var title = $(this).data("title");
        //console.log(title);

        //把title赋值给标题newsTitle
        $(".newsTitle").text(title);

    })



})


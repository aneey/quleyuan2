define(['text!../component/paradise/paradise.html',"css!../component/paradise/paradise.css",'../component/paradise/iscroll'],function(content,css,iscroll){
    function paradiseJS() {

        $('#container').html(content);
            $.ajax({
                type:"get",
                url:"http://duif.applinzi.com/leyuan/leyuan_data.php?address=%E5%85%A8%E5%9F%8E",
                async:true,
                success:function(res){
                    // console.log(res);
                    //这里要注意为什么获取到的是undefine，因为是php文件，返回的是字符串，
                    res = JSON.parse(res);
                    setData(res.data);
                }
            });
            function setData(arr){
                for(var i=0;i<arr.length;i++){
                    var obj = arr[i];
                    var liObj = $('<li><img src="" data-original="'+ obj.img +'" class="lazy"><div class="lDiv"><p>'+obj.name+'</p><p>'+obj.address+'</p></div><div class="rDiv" id="map-btn"><p>定位</p>'+obj.dist+'公里</div></li>');
                    // console.log(liObj);
                    $('.p2List').append(liObj);
                }
                //懒加载 注意：ajax为异步请求，如果放在外面会直接走这一步（但是没有找到.lazy这个东西），然后再走ajax请求的数据，
                $('.lazy').lazyload({
                    'effect':'fadeIn',
                    'effectSpeed':2000 //加载时间 可不写
                })

            }
        var iscroll = new IScroll('#wrapper');
     }
    function show(){
        $('.a_kind').on('click',function () {
            $('.kind').show();
        })
    }





    return{
        paradiseJS:paradiseJS,
        show:show

    }



})
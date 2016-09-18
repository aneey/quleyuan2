define(['text!../component/home/home.html',"css!../component/home/home.css"],function(content){
    function homeJS() {
        $('#container').html(content);
            $.ajax({
                type:"get",
                url:"http://duif.applinzi.com/leyuan/home_data.php?",
                async:true,
                success:function(res){
                    // console.log(res);
                    //这里要注意为什么获取到的是undefine，因为是php文件，返回的是字符串，
                    res = JSON.parse(res);
                    setData(res.reclist);
                }
            });
            function setData(arr){
                for(var i=0;i<arr.length;i++){
                    var obj = arr[i];
                    var liObj = $('<li><img src="'+obj.img+'"></li>');
                    $('.list').append(liObj);
                }
            }

    }

   return{
       homeJS:homeJS

   }



})
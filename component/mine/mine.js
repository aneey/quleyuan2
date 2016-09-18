/**
 * Created by Administrator on 2016/9/13.
 */
define(['text!../component/mine/mine.html',"css!../component/mine/mine.css"],function(content,css){
    function mineJS() {
        $('#container').html(content);



    }

    return{
        mineJS:mineJS

    }



})
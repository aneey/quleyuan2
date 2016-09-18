/**
 * Created by Administrator on 2016/9/13.
 */
define(['text!../component/card/card.html',"css!../component/card/card.css"],function(content){
    function cardJS() {
        $('#container').html(content);



    }

    return{
        cardJS:cardJS

    }



})
document.documentElement.style.fontSize = innerWidth/16 + 'px';
window.onresize = function(){
    document.documentElement.style.fontSize = innerWidth/16 + 'px';
}
var arr = ['#home','#paradise','#card','#mine'];
function changeColor(num) {
    for (var i=0;i<arr.length;i++){

           if(i==num){
               $('.foo_a').eq(i).css('color','orangered');
           }else{
               $('.foo_a').eq(i).css('color','#333');
           }

    }
}
changeColor(0);
$('#home').on('click',function(){
    $('#home').css('color','red');
    changeColor(0);
})
$('#paradise').on('click',function(){
    $(this).css('color','orangered');

    changeColor(1);
})
$('#card').on('click',function(){
    $(this).css('color','orangered');

    changeColor(2);
})
$('#mine').on('click',function(){
    $(this).css('color','orangered');

    changeColor(3);
})
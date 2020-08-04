$(document).ready(function(){
    $(".w1").click(function(){
        data=$('#ctn1').offset().top;
        $('html,body').animate({scrollTop:data},1000);
    });
    $(".w2").click(function(){
        data=$('#ctn2').offset().top;
        $("html,body").animate({scrollTop:data},1000);
    });
    $(".w3").click(function(){
        data=$('#ctn3').offset().top;
        $("html,body").animate({scrollTop:data},1000);
    });
});


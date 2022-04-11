$(document).ready(function(){
    $("#fullpage").fullpage({
        navigation:true,
        abchor:["page1","page2","page3","page4"],
        responsiveWidth:992,
        showActiveTooltip:true,
        afterLoad:function(anchorslink,index){
            console.log(index)
            if(index == 1){
                $(".p1-slide").addClass("move")
                $(".p1-title").addClass("move")
            }else{
                $(".p1-slide").removeClass("move")
                $(".p1-title").removeClass("move")
            }
            if(index == 2){
                $(".p2-text").addClass("move")
            }else{
                $(".p2-text").removeClass("move")
            }
            if(index == 3){
                $(".p3-text").addClass("move")
            }else{
                $(".p3-text").removeClass("move")
            }
            if(index == 4){
                $(".p4-text").addClass("move")
            }else{
                $(".p4-text").removeClass("move")
            }
        }
    });

    const swiper = new Swiper('.swiper', {
        spaceBetween: 30,
        effect: "fade",

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    
});
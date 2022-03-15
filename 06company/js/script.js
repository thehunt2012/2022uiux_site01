$(document).ready(function(){
    var visualslider = $(".visualslider").bxSlider({
        controls:false,
        auto:true
    });
    
    $(".next1").click(function(){
        visualslider.goToNextSlide()
    });
    $(".prev1").click(function(){
        visualslider.goToPrevSlide()
    }); // visualslider

    var news1Slider = $(".news1Slider").bxSlider({
        controls:false,
        pager:false
    });
    $(".left").click(function(){
        news1Slider.goToPrevSlide()
    });
    $(".right").click(function(){
        news1Slider.goToNextSlide()
    });

    $("nav > ul > li").hover(function(){
        $(this).find(".submenu").show();
    },function(){
        $(this).find(".submenu").hide();
    });

    $(".lang div").click(function(){
        console.log($(this).index());
        let i = $(this).index();

        $(".lang div").removeClass("active");
        $(this).addClass("active");

        if(i == 1){
            $(".navbar > ul").html(`
                     <li><a href="#">ABOUT US</a></li>
                     <li><a href="#">PARTICIPATION</a></li>
                     <li><a href="#">GOOD-PEOPLE</a></li>
                     <li><a href="#">GOOD-STORY</a></li>
                     `)
         }else{
            $(".navbar > ul").html(`
                     <li><a href="#">구세군</a></li>
                     <li><a href="#">후원하기</a></li>
                     <li><a href="#">좋은 사람들</a></li>
                     <li><a href="#">좋은 이야기</a></li>
                     `)
         }
 
    });

   
    let chk = 0;
    $(".toggle").click(function(){
        if( chk == 0 ){
            $(this).addClass("active");
            $(".navbar").css("right",0);
            $(".lang").css("display","flex");
            $(".overLayer").show();
            chk = 1;
        }else{
            $(this).removeClass("active");
            $(".navbar").css("right","-100%");
            $(".lang").hide();
            $(".overLayer").hide();
            chk = 0;
        }
    });

    $(".close").click(function(){
        $(".toggle").removeClass("active");
        $(".navbar").css("right", "-100%");
        $(".overLayer").hide();
        $(".lang").hide();
    });

    $(window).resize(function(){
        $(".toggle").removeClass("active");
        $(".navWrap").removeAttr("style");
        $(".lang").removeAttr("style");
        $(".overLayer").hide();
        $(".header").removeClass("fixed");

        wSize();
    })

    function wSize(){
        let wWidth = $(window).width();
        console.log(wWidth);

        if(wWidth > 700){
            $(window).scroll(function(){
                let scrollY = window.pageYOffset;
                console.log(scrollY)
        
                if(scrollY > 200){
                    $(".header").addClass("fixed");
                }else{
                    $(".header").removeClass("fixed");
                }
            });
        }else{
            $(window).off("scroll")
        }
    }
    wSize();
    
    $(".youtube").colorbox({
        iframe:true,
        innerWidth:1000,
        innerHeight:562.5
    });

    var swiper = new swiper('.swiper-container',{
        loop: true,
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    })

}); // ready
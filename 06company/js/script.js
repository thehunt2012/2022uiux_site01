$(document).ready(function(){
    var visualslider = $(".visualslider").bxSlider({
        controls:false,
        // auto:true
    });
    $(".next1").click(function(){
        visualslider.goToNextSlide()
    });
    $(".prev1").click(function(){
        visualslider.goToPrevSlide()
    }); // visualslider

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

    let wWidth = $(window).width();
        console.log(wWidth)

        window.addEventListener("scroll", function(){
            let scrollY = window.pageYOffset;

            if (wWidth > 700){
                if(scrollY > 200){
                    document.querySelector(".header").classList.add("fixed");
                }else{
                    document.querySelector(".header").classList.remove("fixed");
                }
            }

        });

    $(window).resize(function(){
        wWidth = $(window).width();
        console.log(wWidth)

        window.addEventListener("scroll",function(){
            let scrollY = window.pageYOffset;

            if(wWidth > 700){
                if(scrollY > 200){
                    document.querySelector(".header").classList.add("fixed");
                }else{
                    document.querySelector(".header").classList.remove("fixed");
                }
            }
        });
    })
   
    let chk = 0;
    $(".toggle").click(function(){
        if( chk == 0 ){
            $(this).addClass("active");
            $(".navWrap").css("right",0);
            $(".lang").css("display","flex");
            chk = 1;
        }else{
            $(this).removeClass("active");
            $(".navWrap").css("right","-100%");
            $(".lang").hide();
            chk = 0;
        }
    });


    $(window).resize(function(){
        $(".toggle").removeClass("active");
        $(".navWrap").removeAttr("style");
        $(".lang").removeAttr("style");
    })
    
    $(".youtube").colorbox({
        iframe:true,
        innerWidth:1000,
        innerHeight:562.5
    });

}); // ready
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
    }); // visual slider

    var news1Slider = $(".news1Slider").bxSlider({
        controls:false,
        pager:false
    });
    $(".left").click(function(){
        news1Slider.goToPrevSlide()
    });
    $(".right").click(function(){
        news1Slider.goToNextSlide()
    }); // contents slider


    $(".lang div").click(function () {
        console.log($(this).index());
        let i = $(this).index();

        $(".lang div").removeClass("active");
        $(this).addClass("active");

        if (i == 1) {
            $(".navbar > ul").html(`
                    <li><a href="sub01_salvationarmy.html">ABOUT US</a></li>
                    <li>
                        <a href="sub02_participation.html">PARTICIPATION</a>
                        <ul class="submenu">
                            <li><a href="sub02_participation.html?tab=0">후원하기</a></li>
                            <li><a href="sub02_participation.html?tab=1">국내후원</a></li>
                            <li><a href="sub02_participation.html?tab=2">해외후원</a></li>
                            <li><a href="sub02_participation.html?tab=3">캠페인후원</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="sub03_goodPeople.html">GOOD-PEOPLE</a>
                        <ul class="submenu">
                            <li><a href="sub03_goodPeople.html?tab=0">사관/병사</a></li>
                            <li><a href="sub03_goodPeople.html?tab=1">함께 하는 사람들</a></li>
                            <li><a href="sub03_goodPeople.html?tab=2">홍보대사/자문위원</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="sub04_goodStory.html">GOOD-STORY</a>
                        <ul class="submenu">
                            <li><a href="sub04_goodStory.html?tab=0">후원소식</a></li>
                            <li><a href="sub04_goodStory.html?tab=1">후원결과보고</a></li>
                            <li><a href="sub04_goodStory.html?tab=2">경영보고</a></li>
                            <li><a href="sub04_goodStory.html?tab=3">윤리경영</a></li>
                        </ul>
                    </li>
                        `)
            $(".mobile_menu > ul").remove();
            $(".navbar > ul").clone().appendTo(".mobile_menu")
        } else {
            $(".navbar > ul").html(`
            <li><a href="sub01_salvationarmy.html">구세군</a></li>
            <li>
                <a href="sub02_participation.html?tab=0">후원하기</a>
                <ul class="submenu">
                    <li><a href="sub02_participation.html?tab=0">후원하기</a></li>
                    <li><a href="sub02_participation.html?tab=1">국내후원</a></li>
                    <li><a href="sub02_participation.html?tab=2">해외후원</a></li>
                    <li><a href="sub02_participation.html?tab=3">캠페인후원</a></li>
                </ul>
            </li>
            <li>
                <a href="sub03_goodPeople.html">좋은 사람들</a>
                <ul class="submenu">
                    <li><a href="sub03_goodPeople.html?tab=0">사관/병사</a></li>
                    <li><a href="sub03_goodPeople.html?tab=1">함께 하는 사람들</a></li>
                    <li><a href="sub03_goodPeople.html?tab=2">홍보대사/자문위원</a></li>
                </ul>
            </li>
            <li>
                <a href="sub04_goodStory.html">좋은 이야기</a>
                <ul class="submenu">
                    <li><a href="sub04_goodStory.html?tab=0">후원소식</a></li>
                    <li><a href="sub04_goodStory.html?tab=1">후원결과보고</a></li>
                    <li><a href="sub04_goodStory.html?tab=2">경영보고</a></li>
                    <li><a href="sub04_goodStory.html?tab=3">윤리경영</a></li>
                </ul>
            </li>
            `)
            $(".mobile_menu >ul").remove();
            $(".navbar > ul").clone().appendTo(".mobile_menu")
        }

    });
    

    $(".toggle").click(function(){
        $(".mobile_menu").css("right",0);
        $(".lang").css("display","flex");
        $(".overLayer").show();
    });

    $(".close").click(function(){
        $(".toggle").removeClass("active");
        $(".mobile_menu").css("right", "-100%");
        $(".overLayer").hide();
        $(".lang").hide();
    });

    $(window).resize(function(){
        $(".toggle").removeClass("active");
        $(".navWrap").removeAttr("style");
        $(".lang").removeAttr("style");
        $(".overLayer").hide();
        $(".header").removeClass("fixed");
        $(".mobile_menu").removeAttr("style")
        $(".header").removeClass("fixed1")
        $(".header").removeClass("onView")

        wSize();
    });
    $(".navbar > ul").clone().appendTo(".mobile_menu")
    const menuElem = $(".mobile_menu > ul > li > a");
    menuElem.click(function(e){
        console.log($(this).parent().index())
        
        if($(this).parent().index() != 0){
            e.preventDefault();       
        }
        menuElem.parent().find(".submenu").slideUp();
            if($(this).hasClass("active")){
                $(this).parent().find(".submenu").slideUp();
                $(this).removeClass("active")
            }else{
                $(this).parent().find(".submenu").slideDown();
                menuElem.removeClass("active")
                $(this).addClass("active")
            }

    })

    function wSize(){
        let wWidth = $(window).width();
        console.log(wWidth);

        if(wWidth > 768){
            $(window).scroll(function(){
                let scrollY = window.pageYOffset;
                console.log(scrollY)
        
                if(scrollY > 200){
                    $(".header").addClass("fixed1").addClass("onView");
                }else{
                    $(".header").removeClass("fixed1").removeClass("onView");
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
    }); //colorbox

    var swiper = new Swiper('.swiper-container',{
        loop: true,
        slidesPerView:2,
        
        navigation: {
            nextEl: '.next2',
            prevEl: '.prev2'
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          spaceBetween: 20,
        breakpoints: {
            768: {
                slidesPerView:3,
                spaceBetween: 0,
               
            }
        }
    }) //swiper

    function view(i) {

        $(".sub-nav li").removeClass("active").eq(i).addClass("active");
        $(".sub-nav-content .depth2").hide().eq(i).show();
    }

    $(".sub-nav li").click(function () {
        let i = $(this).index();

        view(i);
    })
    function searchParam(key) {
        return new URLSearchParams(location.search).get(key);
    };


    view(searchParam('tab'));

    $(".navbar").hover(function () {
        $(".headerWrap").addClass("on")
        $(".header").addClass("onView1")
    }, function () {
        $(".headerWrap").removeClass("on")
        $(".header").removeClass("onView1")
    })


}); // ready
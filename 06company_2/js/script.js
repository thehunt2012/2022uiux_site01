$(document).ready(function(){
    $(".slider").bxSlider();
    $(".nSlider").bxSlider();


    $(".lang div").click(function(){
        let i = $(this).index();
        $(".lang div").removeClass("active");
        $(this).addClass("active");

        if(i == 1){
            //$(".navbar ul li").eq(0).find("a").html("COMPANY")
            $(".navbar ul").html(`
                        <li><a href="#">COMPANY</a></li>
                        <li><a href="#">MANAGE</a></li>
                        <li><a href="#">PRODUCT</a></li>
                        <li><a href="#">COMMUNITY</a></li>
                        <li><a href="#">ONLINE</a></li>
                        `)
        }else{
            //$(".navbar ul li").eq(0).find("a").html("회사소개")
            $(".navbar ul").html(`
                    <li><a href="#">회사소개</a></li>
                    <li><a href="#">윤리경영</a></li>
                    <li><a href="#">제품/기술</a></li>
                    <li><a href="#">홍보채널</a></li>
                    <li><a href="#">인재채용</a></li>
                    `)
        }

    }); // lang


    $(window).scroll(function(){
        let scrollY = window.pageYOffset;
        console.log(scrollY)

        if(scrollY > 200){
            $("#header").addClass("fixed");
        }else{
            $("#header").removeClass("fixed")
        }
    })

        const $toElem = $(".toggle");
        let chk = true;

        $toElem.click(function(){
            console.log("click")

            if(chk == true){
                $(this).addClass("active");
                $(".navbar").css({left:0});
                $(".lang").css("display","flex");
                $(".overLayer").show();
                chk = false;
            }else{
                $(this).removeClass("active");
                $(".navbar").css({left:"-100%"});
                $(".lang").hide();
                $(".overLayer").hide();
                chk = true;
            }
        })

        
        $(window).resize(function(){
            $(".toggle").removeClass("active");
            $(".navbar").removeAttr("style");
            $(".lang").removeAttr("style");
            $(".overLayer").hide();
        })


}); //ready

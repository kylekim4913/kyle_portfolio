$(function(){

    // header
    $('.work').on('click',function(){
        $('.sub_work').toggleClass('act')
    })
    $('.sw_close').on('click',function(){
        $('.sub_work').toggleClass('act')
    })//end of sub work

    $('.about').on('click',function(){
        $('.sub_about').toggleClass('act')
    })
    $('.close').on('click',function(){
        $('.sub_about').toggleClass('act')
    })//end of sub about

    $('.home').on('click',function(){
        $('.hyundai').removeClass('act')
        $('.main_page').addClass('act')
        $(window).scrollTop(0)
    })// end of home


    //main scroll
    $(window).on('scroll',function(){
        var w = $(window).scrollTop()
        console.log(w)
        if (w>300){
            $('.cp_1').addClass('act')
            $('.cp1r_txt').addClass('act')
        }//end of daon
        if (w>1200){
            $('.cp_2').addClass('act')
            $('.cp2l_txt').addClass('act')
        }//end of furoripsta
        if (w>2200){
            $('.dp_1').addClass('act')
            $('.hd_txt_cont').addClass('act')
        }//end of hyundai
        if (w>3000){
            $('.dp_2').addClass('act')
            $('.dge_txt_cont').addClass('act')
        }//end of dge

    })

    //dp1 scroll
    $(window).on('scroll',function(){
        var w=$(window).scrollTop();
        if(w>100){
            $('.hyundai .part1').addClass('act')
        }
        if(w>800){
            $('.p2_1').addClass('act')
        }
        if(w>2200){
            $('.p2_2_left').addClass('act')
        }
        if(w>2200){
            $('.p2_2_mid').addClass('act')
        }
        if(w>2200){
            $('.p2_2_right').addClass('act')
        }
        if(w>3000){
            $('.part3').addClass('act')
        }//end of add

        if(w<10){
            $('.hyundai .part1').removeClass('act')
        }
        if(w<10){
            $('.p2_1').removeClass('act')
        }
        if(w<10){
            $('.p2_2_left').removeClass('act')
        }
        if(w<10){
            $('.p2_2_mid').removeClass('act')
        }
        if(w<10){
            $('.p2_2_right').removeClass('act')
        }
        if(w<10){
            $('.part3').removeClass('act')
        }
    })

    //dp1 onclick
    $('.booth').on('click',function(){
        $('.booth_pu').addClass('act')
    })
    $('.booth_pu').on('click',function(){
        $('.booth_pu').removeClass('act')
    })

    //onclick to subpages
    $('.daon_site').on('click',function(){
        $('.main_page').removeClass('act')
        $('.hyundai').addClass('act')
        $(window).scrollTop(0)
    })
    $('.dp1r_top').on('click',function(){
        $('.main_page').removeClass('act')
        $('.hyundai').addClass('act')
        $(window).scrollTop(0)
    })
    $('.dp2l_top').on('click',function(){
        $('.main_page').removeClass('act')
        $('.hyundai').addClass('act')
        $(window).scrollTop(0)
    })
    //onclick from sidebar to subpages
    $('.dpvm').on('click',function(){
        $('.sub_work').toggleClass('act')
        $('.main_page').removeClass('act')
        $('.hyundai').addClass('act')
        $(window).scrollTop(0)
    })
})
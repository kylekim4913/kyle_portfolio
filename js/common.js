$(function(){
    $('.about').on('click',function(){
        $('.sub_about').toggleClass('act')
    })
    $('.close').on('click',function(){
        $('.sub_about').toggleClass('act')
    })

    $('.home').on('click',function(){
        $('.hyundai').removeClass('act')
        $('.main_page').addClass('act')
        $(window).scrollTop(0)
    })

    $('.cp1r_txt').on('click',function(){
        $('.main_page').removeClass('act')
        $('.hyundai').addClass('act')
        $(window).scrollTop(0)
    })

    $('.cp2_left').on('click',function(){
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
})
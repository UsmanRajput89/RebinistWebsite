$(function(){
    
    $('.burger-slim').on("click", function(){
        $(this).toggleClass('active');
        if($(this).hasClass('active')) {
            $('header .nav_wrapper .menu_wrapper ul').css('right', 0);
        }else {
            $('header .nav_wrapper .menu_wrapper ul').css('right', '-100%');
        }
        
    });
    
    // $('header li.menu-item-has-children').each(function(){
    //     $(this).find('>a').append('<span class="fa fa-angle-down"></span>');
    // });

    // $('header li.menu-item-has-children').on('click', function(evt) {
    //     $(this).find('>ul').slideToggle();
    // });


    // if($(document).width() < 992) {
    //     $('header li.menu-item-has-children>a').on("click", function(evt){
    //         evt.preventDefault();
    //         $(this).closest('li').find('>ul').slideToggle();
    //     });
    // }
    
    // $(window).on('resize', function(){
    //     if($(document).width() > 992) {
    //         $('header .menu_section .container>ul').css('display', 'flex');
    //     }else {
    //         $('header .menu_section .container>ul').css('display', 'none');
    //         $('.burger-slim').removeClass('active');

    //     }
    // });
    
});
$(document).ready(function(){
    /* For the sticky navigation */
    $('.js--section-aboutme').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });

    /* Scroll on buttons */

    let scrollTo = function(loc) {
        $('html, body').animate({scrollTop: $(`.js--section-${loc}`).offset().top}, 1000); 
    }

    $('.js--scroll-to-contact').click(function () {
        scrollTo('contact');
     });
     
     $('.js--scroll-to-aboutme').click(function () {
        scrollTo('aboutme');
     });

     $('.js--scroll-to-skills').click(function () {
        scrollTo('skills');
     });

     $('.js--scroll-to-portfolio').click(function () {
        scrollTo('portfolio');
     });



    
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        let nav = $('.js--main-nav');
        let icon = $('.js--nav-icon ion-icon');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('menu')) {
            $('.menu').replaceWith('<ion-icon name="close" class="close">');
            icon.removeClass('menu');
        } else {
            $('.close').replaceWith('<ion-icon name="menu" class="menu">');
            icon.removeClass('close');
        }        
    });

});
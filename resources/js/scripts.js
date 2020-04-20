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
     $('.js--scroll-to-top').click(function () {
        scrollTo('header');
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

    // Contact Form
    let isValidName = function(){
        let name = $("#name").val();
        if (name === ''){
            document.getElementById("contact_response").innerHTML="Please enter your name.";
            return false;
        } else if (name.length > 21) {
            document.getElementById("contact_response").innerHTML="Please enter a name less than 20 characters.";
            return false;
        } else {
            document.getElementById("contact_response").innerHTML="";
            return true;
        }
    }

});


/*CONTACT FORM*/

let save_detail = function(){
    if (isValidName() && isValidEmail()) {
        let fields = getFields();
        $.ajax({
            url: 'store_detail.php',
            type: "POST",
            data: fields,
            success: function() {
                document.getElementById("contact_response").innerHTML="Thanks for dropping by. We will be in contact soon!";
            }
    });
    }
}

let isValidName = function(){
    let name = $("#name").val();
    if (name === ''){
        document.getElementById("contact_response").innerHTML="Please enter your name.";
        return false;
    } else if (name.length > 21) {
        document.getElementById("contact_response").innerHTML="Please enter a name less than 20 characters.";
        return false;
    } else {
        document.getElementById("contact_response").innerHTML="";
        return true;
    }
}

let isValidEmail = function(){
    let email = $("#email").val();
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true;
    }
    else {
        document.getElementById("contact_response").innerHTML="Please enter a valid email address!";
        return false;
    }
}

let getFields = function(){
    return {
        name: $("#name").val(),
        email: $("#email").val(),
        reason: $("#reason option:selected").val(),
        message: $("#message").val()
    }
}

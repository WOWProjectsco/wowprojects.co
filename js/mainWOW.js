/******************************
* Hide nav menu on scroll down
* and shows it on scroll up
*******************************/
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.navbar-default').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('.navbar-default').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.navbar-default').removeClass('nav-up').addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }
    $(function(){
     var navMain = $("#nav-main");
     var navSubMenu = $("#bs-example-navbar-collapse-1");
     navSubMenu.on("click", "a", null, function () {
         navSubMenu.collapse('hide');
     });
     navMain.on("click", "a", null, function () {
         navMain.collapse('hide');
     });
    });


/***************
* Slogan typed
****************/
    $(function(){
        $(".slogan").typed({
            strings: [
                "Business Development",
                "Digital Marketing",
                "Showcasing your impact to the world!"],
            typeSpeed: 20,
            backDelay: 1300
        });
    });

    $(function(){
        $(".sloganES").typed({
            strings: [
                "Desarrollo de Negocios",
                "Marketing Digital",
                "Showcasing your impact to the world!"],
            typeSpeed: 20,
            backDelay: 1300
        });
    });




/**********************
*  Scrol Nav
**********************/
function scrollNav() {
  $('.nav a').click(function(){
    //Toggle Class
    $(".active").removeClass("active");
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 160
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();


/***************
* Ease the scrolling on navigation
****************/

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


// Checking when is in view, so it applies css3 animation.
function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
    var $elem = $('.title');

    // If the animation has already been started
    if ($elem.hasClass('animationFramesX')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('animationFramesX');
    }
}

// Capture scroll events
$(window).scroll(function(){
    checkAnimation();
});



// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#language-switcher').fadeIn(200);
        $('#return-to-top').fadeIn(200);   // Fade in the arrow
    } else {
        $('#language-switcher').fadeOut(200);
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});

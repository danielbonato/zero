$(function() {
    
    // menu scroll
    $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 60)
        }, 600, 'easeInOutExpo');
        event.preventDefault();
    });

    // SCROLL MAPA HOME
    $(document).ready(function () {

        // set the mouse events to none when doc is ready
        // lock it when mouse up
        //somehow the mouseup event doesn't get call...
        $('#map').addClass('scrolloff');            

        $('#overlay').on("mouseup",function(){      
            $('#map').addClass('scrolloff'); 
        });
        
        // when mouse down, set the mouse events free
        $('#overlay').on("mousedown",function(){    
            $('#map').removeClass('scrolloff');
        });

        // becuase the mouse up doesn't work... 
        // set the pointer events to none when mouse leaves the map area
        // or you can do it on some other event
        $("#map").mouseleave(function () {          
            $('#map').addClass('scrolloff');        
        });
    });

});
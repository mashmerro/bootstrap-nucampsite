$(function () {      // jQuery method for pause & play button
    $(".carousel").carousel( { interval: 2000 } );  // sets the carousel class to an interval of 2000ms (5000ms is the default)
    $("#carouselButton").click(function(){   // 'click': is a jQuery method on mouse clicks. Activates from ID carouselButton
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {  // checks if method has a child node. If it does, then carousel is currently playing...
            $(".carousel").carousel("pause");                               // so pause it  | '.carousel("pause")'': bootstrap carousel method
            $("#carouselButton").children("i").removeClass("fa-pause");     // then remove that <i> element with class "fa-pause"  (font-awesome icon pause)
            $("#carouselButton").children("i").addClass("fa-play");         // replace it with <i> element with class "fa-play" (font-awesome icon play)
            // '.children("insertElementHere")' : method that will look for a child node
            // '.hasClass("className")'  : class of that child node
        } else {    // Else, if carousel is on pause
            $(".carousel").carousel("cycle");   // Play the carousel again
            $("#carouselButton").children("i").removeClass("fa-play");  // Remove the font-icon play
            $("#carouselButton").children("i").addClass("fa-pause");    // Replace it with the font-icon pause
        }
    });

    $("#reserveButton").click(function() {
        $("#reserveModal").modal("show");
    });

    $("#loginButton").click(function() {
        $("#loginModal").modal("show");
    });

});
/**
 * Created by jteng on 1/16/16.
 */
function addEvents() {

    $("#switch").click(function() {
        if ($(this).hasClass("on")) {
            // Turning off lights, triggering night mode.
            $(this).removeClass("on");
            $("#arrow").addClass("night");
            $("#landing-container").addClass("night");
            $("#second-container").addClass("night");
            $(".moon").css("visibility", "visible");
        } else {
            // Turning on lights, exiting night mode.
            $("#arrow").removeClass("night");
            $("#landing-container").removeClass("night");
            $("#second-container").removeClass("night");

            $(this).addClass("on");
            $(".moon").css("visibility", "hidden");
        }
    });

    var $root = $('html, body');

    $('#arrow').click(function(){
        $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });
};

addEvents();
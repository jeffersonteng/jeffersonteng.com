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
        } else {
            // Turning on lights, exiting night mode.
            $("#arrow").removeClass("night");
            $("#landing-container").removeClass("night");
            $(this).addClass("on");
        }
    });
};

addEvents();
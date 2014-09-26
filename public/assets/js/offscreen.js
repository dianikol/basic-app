var offscreen = function () {

    var container = $(".app"),
        canvasDirection,
        direction;

    function hide() {
        container.removeClass("move-left move-right");
        canvasDirection = "";

        setTimeout(function() {
            container.removeClass("offscreen");
        }, 300);
    }

    function toggle(direction) {
        if (direction !== undefined && direction === "rtl") {
            container.addClass("offscreen move-right").removeClass("move-left");
            canvasDirection = "rtl";
        } else {
            container.addClass("offscreen move-left").removeClass("move-right");
            canvasDirection = "ltr";
        }
    }

    function fixSlimScroll() {

        if (!$.browser.mobile && !sublime.checkBreakout()) {
            if (canvasDirection === "ltr") {
                if ($(".offscreen-left").find(".slimScrollDiv").length !== 0) {
                    $(".offscreen-left").find(".main-navigation, .slimscroll").slimScroll({
                        height: 'auto'
                    });
                }
            }
            if (canvasDirection === "rtl") {
                if ($(".offscreen-right").find(".slimScrollDiv").length !== 0) {
                    $(".offscreen-right").find(".main-navigation, .slimscroll").slimScroll({
                        height: 'auto'
                    });
                }
            }
        }
    }

    function events() {

        $("[data-toggle=offscreen]").on("click touchstart", function (e) {

            e.preventDefault();

            e.stopPropagation();

            direction = $(this).data("move");

            if (direction === canvasDirection) {
                hide();
                return;
            }

            toggle(direction);

            fixSlimScroll();

        });

        $(".exit-offscreen").on("click touchstart", function (e) {
            e.preventDefault();

            e.stopPropagation(); 
            
            hide();
        });
    }

    return {
        hide: hide,
        init: function () {
            events();
        }
    };
}();

$(function () {
    "use strict";
    offscreen.init();
});
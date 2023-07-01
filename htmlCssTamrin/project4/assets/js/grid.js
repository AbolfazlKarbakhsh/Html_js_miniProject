

$(document).ready(function () {




    function removeAllSideBarToggleClass() {
        $('#sidebar-toggle-hide').removeClass('d-md-inline')
        $('#sidebar-toggle-hide').removeClass('d-none')
        $('#sidebar-toggle-on').removeClass('d-inline')
        $('#sidebar-toggle-on').removeClass('d-md-none')
    }

    $('#sidebar-toggle-hide').click(function () {
        $('#sidebar').fadeOut(300);
        $('#main-body').animate({ width: "100%" }, 300)
        setTimeout(() => {
            removeAllSideBarToggleClass();
            $('#sidebar-toggle-hide').addClass('d-none')
            $('#sidebar-toggle-on').removeClass('d-none')

        }, 300);
    })

    $('#sidebar-toggle-on').click(function () {
        $('#sidebar').fadeIn(300);
        setTimeout(() => {
            removeAllSideBarToggleClass();
            $('#sidebar-toggle-on').addClass('d-none')
            $('#sidebar-toggle-hide').removeClass('d-none')

        }, 300);
    })

    $('#menu-toggle').click(function () {
        $('#body-header').toggle(300);

    })

    $('#search-toggle').click(function () {
        $('#search-toggle').removeClass('d-md-inline');
        $('#search-area').addClass('d-md-inline');
        $('#search-input').animate({ width: "12rem" }, 300)


    })

    $('#search-area-hide').click(function () {
        $('#search-input').animate({ width: "0" }, 300)

        setTimeout(() => {
            $('#search-toggle').addClass('d-md-inline');
            $('#search-area').removeClass('d-md-inline');
        }, 300);

    })


    $('#header-notic-toggle').click(function () {
        $('#header-notic').fadeToggle();
    })

    $('#header-comment-toggle').click(function () {
        $('#header-comment').fadeToggle();
    })


    $('#header-profile-toggle').click(function () {
        $('#header-profile').fadeToggle();
    })


    $('#fs').click(function () {

        toggleFullScreen();



    })

    function toggleFuleScreen() {
        if ((document.fullScreenElement && document.fullScreenElement !== null) ||
            ((!document.mozfullscreen && !document.webkitIsfullScreen))) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();

            }
            else if (document.documentElement.mozrequestFullscreen) {
                document.documentElement.mozrequestFullscreen();

            }

            else if (document.documentElement.webkitrequestFullscreen) {
                document.documentElement.webkitrequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);

            }
        }
        else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }

        }



    }

    function toggleFullScreen() {
        if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            }
            else if (document.documentElement.mozRequestFullscreen) {
                document.documentElement.mozRequestFullscreen();
            }
            else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
            $('#screen-compress').removeClass('d-none');
            $('#screnn-expand').addClass('d-none');
        }
        else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
            $('#screen-compress').addClass('d-none');
            $('#screnn-expand').removeClass('d-none');
        }
    }

    $('#wtite-toggle').click(function () {
        $('#write').fadeToggle();
        dropdownIcon("#write-show", "#write-hide");
    })
    $('#user-toggle').click(function () {
        $('#user').fadeToggle();
        dropdownIcon("#user-show", "#user-hide");

    })
    $('#setting-toggle').click(function () {
        $('#setting').fadeToggle();
        dropdownIcon("#setting-show", "#setting-hide");

    })

    
    // variablels 
    var a = 0;
    function dropdownIcon(show, hide) {

        if (a == 0) {
            $(show).addClass('d-none');
            $(hide).removeClass('d-none');
            a++;
        } else {
            $(show).removeClass('d-none');
            $(hide).addClass('d-none');
            a--;
        }

    }
});
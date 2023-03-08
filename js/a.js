//#region js landing page

//#region  js cods in Giga Menu In NavBar
{
var GigaMenuFother = document.querySelector(".GigaMenuFother");
var GigaMenu = document.querySelector(".GigaMenuOpen");
var gigaCloseNumber = 0;
if (GigaMenuFother != null && GigaMenu != null) {


    function openNav() {

        if (gigaCloseNumber == 0) {
            GigaMenuFother.style.cssText = "width:100%";
            GigaMenu.style.cssText = "width:290px";
            gigaCloseNumber = 1;
        }

        else if (gigaCloseNumber === 1) {
            function close() {
                GigaMenu.style.cssText = "width:0px";
                setTimeout(() => {
                    GigaMenuFother.style.cssText = "width:0%";
                }, 400);
                gigaCloseNumber = 0;
            }
            close();
        }
    }
    GigaMenuFother.addEventListener("click", openNav, false);
}
}
//#endregion

//#region  js cods in Giga Menu In NavBar Open SubMenmu
{
    var dropdown = document.getElementsByClassName("sub");

    var i;
    var b;
    if (dropdown != null) {

        for (i = 0; i < dropdown.length; i++) {

            dropdown[i].addEventListener("click", function () {
                var dropdownContent = this.nextElementSibling;
                if (dropdown[b] != "notDropDown") {
                    if (dropdownContent.style.display == "block") {
                        dropdownContent.style.display = "none";

                    } else {
                        dropdownContent.style.display = "block";
                    }
                }
            });
        }
    }
}
//********************* ENd js cods in Giga Menu In NavBar Open SubMenmu
//#endregion

//#region visibilt
function visibility(Panel, click, animateIn, secIn, animateOut, secOut, eventIn, eventOut) {

    var Tag_visibilt = document.querySelectorAll(Panel);
    var Tag_clickVisible = document.querySelectorAll(click);
    if (Tag_visibilt != null && Tag_clickVisible != null) {

        function visible(tag, i) {
            tag[i].style.cssText = `animation: ${animateIn} ${secIn}s;`;
        }
        function hideVisible(tag) {
            for (let i = 1; i <= tag.length; i++) {
                tag[i - 1].style.cssText = `animation: ${animateOut} ${secOut}s;transform:scale(0)`;

            };
        }

        for (let i = 1; i <= Tag_visibilt.length; i++) {
            Tag_visibilt[i - 1].addEventListener(eventOut, () => {
                hideVisible(Tag_visibilt);
            });
            Tag_visibilt[i - 1].addEventListener(eventIn, () => {
                visible(Tag_visibilt, i - 1);
            });
            Tag_clickVisible[i - 1].addEventListener(eventIn, () => {
                visible(Tag_visibilt, i - 1);
            });
            Tag_clickVisible[i - 1].addEventListener(eventOut, () => {
                hideVisible(Tag_visibilt);
            });
        };
    }
}

//#endregion

//#region use visibility tag



// sort product

visibility(".visibleit", ".clickVisible", "bounceIn", "1.2", "bounceOut", "0.5", "mouseover", "mouseout");

// offer
visibility(".visibleito", ".clickVisibleo", "bounceIn", "1.2", "bounceOut", "0.5", "mouseover", "mouseout");



//#endregion


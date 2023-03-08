//#region js landing page

//#region  js cods in Giga Menu In NavBar

var gigaCloseNumber = 0;

function openNav(openBtn, closeBtn, widthBtnOrFother, widthPanel, closeFother, closePanel) {

    var GigaMenuFother = document.querySelector(closeBtn);
    var GigaMenu = document.querySelector(openBtn);

    if (gigaCloseNumber == 0) {
        GigaMenuFother.style.cssText = `width:${widthBtnOrFother}`;
        GigaMenu.style.cssText = `width:${widthPanel}`;
        gigaCloseNumber = 1;
    }

    else if (gigaCloseNumber === 1) {
        function close() {
            GigaMenu.style.cssText = `width:${closeFother}`;

            setTimeout(() => {
                GigaMenuFother.style.cssText = `width:${closePanel}`;
            }, 400);
            gigaCloseNumber = 0;
        }
        close();
    }
    GigaMenuFother.addEventListener("click", () => {
        openNav(openBtn, closeBtn, widthBtnOrFother, widthPanel, closeFother, closePanel);
    }, false);

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

//#region start slider pic
{
    let slideIndex = 1;

    function plusSlides(n) {
        if (n != null) {
            showSlides(slideIndex += n);
        }
    }

    function currentSlide(n) {
        if (n != null) {
            showSlides(slideIndex = n);
        }
    }

    function showSlides(n) {
        if (n != null) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            if (slides.length != 0 && dots.length != 0) {
                if (n > slides.length) { slideIndex = 1 }
                if (n < 1) { slideIndex = slides.length }
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                for (i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" active", "");
                }
                slides[slideIndex - 1].style.display = "block";
                dots[slideIndex - 1].className += " active";

            }
        }
    }
    showSlides(slideIndex);
    setInterval(() => {
        plusSlides(1);
    }, 8000);
}

//********************* */ End slider
//#endregion

//#region slider main  
{
    var forward = document.querySelector("#nextPr");
    var backward = document.querySelector("#prevPr");
    if (forward != null && backward != null) {

        var slidejsNumber = document.getElementsByClassName("slidejs").length;
        slidejsNumber -= 1;
        var slidejsTag = document.getElementsByClassName("slidejs");
        var indexSlide = 0;
        var numberinterval = 8000;
        function nextSlide() {

            if (indexSlide < 0) {
                while (slidejsNumber > indexSlide) {
                    indexSlide += 1;
                }
            }

            if (indexSlide > slidejsNumber) {
                while (indexSlide > 0) {
                    indexSlide -= 1;
                }
            }

            for (i = 0; i <= slidejsNumber; i++) {
                slidejsTag[i].style.display = "none";
                slidejsTag[i].style.cssText += "transform: scale(0);  transition: transform 2s ;";
            }
            const slidbarTag = slidejsTag[indexSlide];
            slidbarTag.style.cssText = "transform: scale(1);  transition: transform 2s ";
            slidbarTag.style.display = "flex";




        }

        function backward1() {
            indexSlide -= 1;
            nextSlide();
        }

        function forward1() {
            indexSlide += 1;
            nextSlide();

        }

        forward.addEventListener("click", forward1);
        backward.addEventListener("click", backward1);



    }

}

//#endregion

//#region visibilt
function visibility(Panel, click, animateIn, secIn, animateOut, secOut, eventIn, eventOut) {

    var Tag_visibilt = document.querySelectorAll(Panel);
    var Tag_clickVisible = document.querySelectorAll(click);
    if (Tag_clickVisible != null) {

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

//#region slider main 2 
function sliderMain(next, prev, tag) {

    var forward = document.querySelector(next);
    var backward = document.querySelector(prev);
    if (forward != null && backward != null) {

        var slidejsNumber = document.getElementsByClassName(tag).length;
        slidejsNumber -= 1;
        var slidejsTag = document.getElementsByClassName(tag);
        var indexSlide = 0;
        function nextSlide() {

            if (indexSlide < 0) {
                while (slidejsNumber > indexSlide) {
                    indexSlide += 1;
                }
            }

            if (indexSlide > slidejsNumber) {
                while (indexSlide > 0) {
                    indexSlide -= 1;
                }
            }

            for (i = 0; i <= slidejsNumber; i++) {
                slidejsTag[i].style.display = "none";
                slidejsTag[i].style.cssText += "transform: scale(0);  transition: transform 2s ;";
            }
            const slidbarTag = slidejsTag[indexSlide];
            slidbarTag.style.cssText = "transform: scale(1);  transition: transform 2s ";
            slidbarTag.style.display = "flex";




        }

        function backward1() {
            indexSlide -= 1;
            nextSlide();
        }

        function forward1() {
            indexSlide += 1;
            nextSlide();

        }

        forward.addEventListener("click", forward1);
        backward.addEventListener("click", backward1);
    }

}

//#endregion

//#region slider main use
sliderMain("#nextPr1", "#prevPr2", "slidejs1");
sliderMain("#nextPr4", "#prevPr4", "slidejs4");
sliderMain("#nextPr5", "#prevPr5", "slidejs5");
//#endregion

//#region  visibility use

// sort product

visibility(".visibleit", ".clickVisible", "bounceIn", "0.8", "bounceOut", "0.5", "mouseover", "mouseout");

// offer
visibility(".visibleito", ".clickVisibleo", "bounceIn", "0.5", "bounceOut", "0.5", "mouseover", "mouseout");

//panel sort product
visibility(".visibleTag", ".clickVSort", "fadee", "0", "bounceOut", "0.5", "mouseover", "mouseout");

//sort in to
visibility(".visibleTag1", ".clickVSort1", "bounceIn", "0.5", "bounceOut", "0.5", "click", "click");


//#endregion

//#region  RangePrice 


function getVals() {
    // Get slider values
    let slides = document.getElementsByClassName("input1");
    let slide1 = parseFloat(slides[0].value);
    let slide2 = parseFloat(slides[1].value);
    // Neither slider will clip the other, so make sure we determine which is larger
    if (slide1 > slide2) { let tmp = slide2; slide2 = slide1; slide1 = tmp; }

    let displayElement = document.getElementsByClassName("rangeValues")[0];
    //innerHTML property allows Javascript code to manipulate a website being displayed
    displayElement.innerHTML = `${slide1} <span>تومان<span> &nbsp; تا &nbsp;  ${slide2} <span>تومان<span>`;
}
window.onload = function () {
    // Initialize Sliders
    let sliderSections = document.getElementsByClassName("range-slider");
    for (let x = 0; x < sliderSections.length; x++) {
        let sliders = sliderSections[x].getElementsByTagName("input");
        for (let y = 0; y < sliders.length; y++) {
            if (sliders[y].type === "range") {
                //oninput attribute fires when the value of an <input> element is changed
                sliders[y].oninput = getVals;
                // Manually trigger event first time to display values
                sliders[y].oninput();
            }
        }
    }
}


//#endregion

//#region class Color
function Activer(ftag,chtag){

    var route = ftag+" "+chtag;

    var tag = document.querySelectorAll(route);
    tag.forEach(function(item,index,ary){
        item.addEventListener("click",() => {
            revers(item);
        });
    });
    
    function revers(ab){
        removeClass();
        addClass(ab);
    }

    function addClass(tags){
        tags.classList = "active";

    }

    function removeClass(){
        tag.forEach(function(item,index,ary){
            console.log(item);
            item.classList ="";
        });
    }
    console.log(tag);
}
Activer(".jsActive","li");
//#endregion
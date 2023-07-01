window.addEventListener('load',()=>{
    setInterval(()=>{
        const tag = document.querySelector(".preloader");
        tag.classList.add("hide");
        document.querySelector("body").style.cssText = " overflow-y: scroll;"
    },100)
 
   
})
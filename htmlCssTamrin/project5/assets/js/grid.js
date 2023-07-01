function toggler(t1,t2,t3,t4,state){
    const leftNav = document.querySelector(t1);
    const sign = document.querySelector(t2);
    const login = document.querySelector(t3);
    const home = document.querySelector(t4);

    home.classList.add("d-none");
    leftNav.classList.remove("d-none");

    if(state == "login"){
        login.classList.remove("d-none");
        login.classList.remove("dd-none");
        sign.classList.add("d-none");
        sign.classList.add("dd-none");
        sign.style.cssText = "animation:a .3s;"
    }
    else{
        login.style.cssText = "animation:a .3s;"

        sign.classList.remove("d-none");
        sign.classList.remove("dd-none");
        login.classList.add("d-none");
        login.classList.add("dd-none");


    }
}
const alertDiv = document.querySelector(".boot");
const form = document.querySelector("form");
const text = document.querySelector(".text");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const re = document.querySelector(".re");


function space(name) {
    alertDiv.innerHTML = "";
    alertDiv.classList.remove("disp");
    alertDiv.append(`!لطفا کادر ${name}  را پر کنید`);

    setTimeout(() => {
        alertDiv.innerHTML = "";
        alertDiv.classList.add("disp");
    }, 3500);
}



function submitt() {



    if (text.value == "") { space("نام"); return false; }
    if (email.value == "") { space("ایمیل"); return false; }


    var atposn = email.value.indexOf("@");
    var dotposn = email.value.lastIndexOf(".");
    if (atposn < 1 || (dotposn - atposn < 2)) {
        var textt = "لطفا ایمیل خود را به درستی وارد کنید و از @ و . استفاده کنید";

        alertDiv.innerHTML = "";
        alertDiv.classList.remove("disp");
        alertDiv.classList.add("right");
        alertDiv.append(textt);

        setTimeout(() => {
            alertDiv.innerHTML = "";
            alertDiv.classList.add("disp");
            alertDiv.classList.remove("right");
            email.focus();
        }, 5500);

        return false;
    };

    if (password.value == "") { space("پسورد"); return false; }
    if (re.value == "") { space("تکرار پسورد"); return false; }
    if (password.value != re.value) {

        alertDiv.innerHTML = "";
        alertDiv.classList.remove("disp");
        alertDiv.append("پسورد با تکرار پسورد مطابقت ندارد");

        setTimeout(() => {
            alertDiv.innerHTML = "";
            alertDiv.classList.add("disp");
            email.focus();
        }, 4500);
        return false;
    }

    if (password.value.length < 8) {

        alertDiv.innerHTML = "";
        alertDiv.classList.remove("disp");
        alertDiv.append("تعداد ارقام پسورد باید بیشتر از 8 رقم باشد");

        setTimeout(() => {
            alertDiv.innerHTML = "";
            alertDiv.classList.add("disp");
            email.focus();
        }, 4500);
        return false;
    }
     return( true );
}







// form.addEventListener("submit", () => {
//      return (submitt());
//     // 
// });
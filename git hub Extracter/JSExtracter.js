var btn = document.querySelector(".btnLoad button");
var hide = document.querySelector(".disp");

function extracterInGit() {
    var xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "https://api.github.com/users", true);

    xhr1.onload = function () {
        var users = JSON.parse(xhr1.responseText);
        if (xhr1.status === 200) {
            console.log(users);
            for (let i in users) {

                var ulFother = document.querySelector(".list-group");

                var li = document.createElement("li");
                var img = document.createElement("img");
                var h3 = document.createElement("h3");
                var a = document.createElement("a");

                li.classList = "list-group-item user-item text-left";
                img.classList = "img-circle img-user img-thumbnail";
                img.setAttribute("src", users[i].avatar_url);
                li.append(img);

                a.innerText = users[i].login;
                h3.append(a);
                img.after(h3);

                ulFother.append(li);

            }
        }
    };

    

    

    xhr1.send();
}


btn.addEventListener('click',extracterInGit);
btn.addEventListener('click',function(){
    hide.style.cssText = "display:none !important";
});


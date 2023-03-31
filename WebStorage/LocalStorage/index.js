const userNameTag = document.getElementById('username');

localStorage.setItem('username', 'abolfazl');
localStorage.setItem('ferstname', 'karbakhsh');
localStorage.setItem('item', 'gun');

localStorage.removeItem('item');


let user = localStorage.getItem('username');
user += `  ${localStorage.getItem('ferstname')}`;

user ? userNameTag.innerText = user : userNameTag.innerText = "Not Login";






const button = document.getElementById('btn');
var a= 0;
button.addEventListener('click', () => {

    const input = document.getElementById('input');

    const output = document.getElementById('output');

    localStorage.setItem(a,input.value);
    output.innerHTML +=   ` <br> ${localStorage.getItem(a)}`;


    a += 1;

});

















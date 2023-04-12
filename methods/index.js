const div = document.querySelector(".div");
const span = document.querySelector(".span");
const button = document.querySelector("button");

const ul = document.querySelector('.ul');
const cof = document.querySelector('#cof');
const li = document.createElement('li');
li.textContent = "tea";


button.addEventListener('click', () => {
    div.contains(span) ? console.log("yes has a span") : console.log("dontWonted");
    ul.insertBefore(li, cof);

});

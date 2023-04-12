const userNameTag = document.getElementById('username');

localStorage.setItem('username', 'abolfazl');
localStorage.setItem('ferstname', 'karbakhsh');
localStorage.setItem('item', 'gun');

localStorage.removeItem('item');


let user = localStorage.getItem('username');
user += `  ${localStorage.getItem('ferstname')}`;

user ? userNameTag.innerText = user : userNameTag.innerText = "Not Login";






const button = document.getElementById('btn');
var a = 0;
button.addEventListener('click', () => {

    const input = document.getElementById('input');

    const output = document.getElementById('output');

    localStorage.setItem(a, input.value);
    output.innerHTML += ` <br> ${localStorage.getItem(a)}`;


    a += 1;

});

// // sessionStorage 
// sessionStorage.setItem(a,input.value);
// output.innerHTML +=   ` <br> ${sessionStorage.getItem(a)}`;





let manage = { person: [{ age: '18', name: 'ali' }], family: 'karbakhsh' };


localStorage.setItem('person', JSON.stringify(manage))

const mna = localStorage.getItem('person');
const mmw = JSON.parse(mna);
console.log(mmw.person[0].age);


var ary1 = [{ peice: 100, name: "میخ" }, { peice: 200, name: "انبر" }, { peice: 1000, name: "اره" }];
var ary2 = ["ali", "mohammad","eeeeee","ff"];
console.log(...ary2);
aa(...ary2);
function aa(x, y, z, m) {
    console.log(x + " " + y + " " + z + " " + m);
}

const res = ary1.filter((value) => {
    return value.peice >= 100 && value.peice <= 200;
})

res.forEach((item) => {
    document.write(`
    <div class="ff">
    <p> price : ${item.peice}</p>
    <p> name:  ${item.name}</p>
</div>
    `);
})

var aaa = ary2.splice(1,5,"juhh")
console.log(...ary2)



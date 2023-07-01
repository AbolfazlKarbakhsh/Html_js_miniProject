//#region  dom
setTimeout(() => {
    ///////////////////////////// dom learning
    // location.reload()
    // window.history.back();
    // window.history.forward();
    //  alert(window.innerHeight)
    //  alert(window.innerWidth)
    // window.innerWidth="300px"
    // window.open('www.codeyade.com')
    // window.resizeTo("300px","300px")
    // window.location.assign("https://www.w3schools.com")
}, 2000)
//#endregion

//#region cooke
/////////////////////////////////////////////////////////// cooki learn
// const tag = document.querySelector("#forward");
// const delee = document.querySelector("#delete");
// const edit = document.querySelector("#edit");
// const dat = new Date;
// var year =  365 * 24 * 60 * 60;
// console.log(year);
// tag.addEventListener('click', () => {
//     document.cookie = `user = ali ; max-age = ${year};`
// })

// delee.addEventListener('click', () => {
//     document.cookie = `user = ali ; max-age = 0;`
// })

// edit.addEventListener('click',()=>{
//     document.cookie = `user = mohammad ; max-age = ${year};`

// })
//#endregion

//#region  Map In Object

const objects = {
    id:10,
    name:"ali",
    family:"rezai"
}

const maps = new Map(Object.entries(objects));

console.log(maps , maps.get("id"));
maps.forEach((value,key)=>{

    // if(key == 'name'){
    //     value === "ali"?alert(value):alert("dontWonted")
    // }
    console.log(value , key);
})
console.log(Object.fromEntries(maps));


// const maps = new Map();
// maps.set("id","12")

// console.log(maps , maps.get("id"));
// maps.forEach((value,key)=>{
//     console.log(value , key);
// })
// console.log(objects);

//#endregion

//#region object orinted programing

// object factory 
function creatObject(reduis){
    return{
        reduiss:reduis,
        draw:()=>{
            console.log("draw")
        }
    }
}

const a = creatObject(1);
a.draw();


function Circle(re){
    this.redius = re;
    this.frew = ()=>{
        console.log("ali");
    }
}

const c = new Circle(1);
const cc = new Circle(1);
c.frew();
console.log(c.redius);

// var  a = prompt("say \n hello","lorem");
// a = a;


// (!isNaN(a)) ? alert(a + 10):alert(a + " Not a number");
// var b = "lorem@d";
// b = b.search("@");
// console.log(b);


// console.log(b.include("f"));
// window.addEventListener("keypress",(e)=>{
// console.log(e.keyCode + " " + e.key);

// })

// var a = function asa (){
//     return 10;
// }


// const box = document.querySelector("#reduce");
// var ary = [1,2,3,4,5];

// let output = ary.reduce((toal,curent)=>{
//  return  toal + curent ;
// })

// console.log(output);


// function commit() {
//     console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 4 }
//     console.log(arguments[0]); // 1
// }

// commit(1, 2, 4)



// Object LitralSintacs Dont Choise of cReat object in js 
const circle = {
    radice: 3.2,
    location: {
        x: 10,
        y: 10
    },
    draw: () => {
        console.log(circle.radice);
    },
};

circle.draw();




// factory functon 
function creatCircle(r) {

    return {
        radice: r,

        draw: () => {
            console.log(cir.radice);
        }
    };
}

const cir = creatCircle(1);
const as = creatCircle(2555);
as.draw();
cir.draw();


// function cunstrCTOR 
function Circle(Radius) {
    this.Radius = Radius;
    this.draw = function () {
        return console.log(this.name);
    };
}

const dd = {
    name: "ali"
}

// Circle.apply({},[1,2,3,4]);

// const another = new Circle.call({},0);

// another.draw();
// console.log(another.constructor);

// const aa = new Circle(10);
// aa.draw();

const ob = {
    draw: function (cc) {
        return (this.nam + cc);
    }
}

const pp = {
    nam: "blue"
}




const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
//   document.getElementById("demo").innerHTML += person.fullName.call(person1, "Oslo", "Norway"); 
  document.getElementById("demo").innerHTML += ob.draw.call(pp, " molod"); 

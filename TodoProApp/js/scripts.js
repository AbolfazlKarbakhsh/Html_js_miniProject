// theme switcher 
const BtnThemeSwitcher = document.getElementById('theme-switcher');
const body = document.querySelector("body");
const img = BtnThemeSwitcher.children[0];

// localStorage 
const btnInput = document.getElementById('add-btn');


function main() {
  // theme switcher 
  BtnThemeSwitcher.addEventListener("click", () => {
    body.classList.toggle("light");

    img.setAttribute("src",
      img.getAttribute("src") === "./assets/images/icon-sun.svg" ? "./assets/images/icon-moon.svg" : "./assets/images/icon-sun.svg"
    )
  });

  CreatEl(JSON.parse(localStorage.getItem("todos")))

  // localStorage 
  btnInput.addEventListener("click", () => {
    const input = document.getElementById('addt');
    if (input.value != "") {
      const get = JSON.parse(localStorage.getItem("todos")) ? JSON.parse(localStorage.getItem("todos")) : [];

      let objectCreator = { todo: input.value, isComplete: "false" };
      get.push(objectCreator);
      localStorage.setItem("todos", JSON.stringify(get))
      input.value = "";
      CreatEl(JSON.parse(localStorage.getItem("todos")))
    }

  })
}

function CreatEl(object) {

  if (!object) {
    return null;
  }
  console.log(object);
  object.forEach(item => {
    const tags = `
    <li class="card" draggable="true">
      <div class="cb-container">
        <input type="checkbox" class="cb-input" />
        <span class="check"></span>
      </div>
      <p class="item"> ${item.todo}</p>
      <button class="clear">
        <img src="./assets/images/icon-cross.svg" alt="Clear it" />
      </button>
    </li>`;

    document.querySelector(".todos").innerHTML += tags;
  });

}

document.addEventListener("DOMContentLoaded", main);
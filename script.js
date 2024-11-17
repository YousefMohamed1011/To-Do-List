const inc = document.querySelector(".enter");
const add = document.querySelector(".add");
const task = document.querySelector(".task");

inc.addEventListener(`keyup`, () => {
  if (inc.value.trim() !== "") {
    add.classList.add("active");
  } else {
    add.classList.remove(`active`);
  }
});

add.addEventListener(`click`, () => {
  if (inc.value.trim() !== "") {
    let itemb = document.createElement(`div`);
    itemb.classList.add(`item`);
    itemb.innerHTML = `
            <p>${inc.value}</p> 
        <div class="btn">
        <i class="fa-solid fa-xmark"></i>
        </div>
    `;
    task.appendChild(itemb);
    inc.value = ``;
  } else {
    alert(`Enter Your Task`);
  }
});

task.addEventListener(`click`, (e) => {
  if (e.target.classList.contains(`fa-xmark`)) {
    e.target.closest(".item").remove();
  }
});

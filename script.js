"use strict";

//starting the page up
window.addEventListener("DOMContentLoaded", init);

//==================all my variables==================
let allStages = [];
let allDays = [];

const settings = {
  filter: "all",
  sortDir: "asc",
  displayedArray: [],
  filterValue: "",
};
const scheduleURL = "http://localhost:8080/schedule";

//==================starting off the page==================
function init() {
  loadSchedule();
}

function registerCat() {
  document.querySelectorAll("[data-action='filter']").forEach((button) => button.addEventListener("click", selectFilter));
}

async function loadSchedule() {
  // fetch("http://localhost:8080/schedule")
  //   .then((response) => response.json())
  //   .then((response) => console.log(response))
  //   .catch((err) => console.error(err));
  // displayList();
  const response = await fetch(scheduleURL);
  const scheduleList = await response.json();
  displayList(scheduleList);
}
//==================display the list==================
function displayList(scheduleList) {
  document.querySelector("#scheduleList").innerHTML = "";
  for (const stages of Object.entries(scheduleList)) {
    displaySchedule(stages);
  }
}
//==================display the stages(?) on the list==================

function displaySchedule(stages) {
  const mon = stages[1].mon;
  const tue = stages[1].tue;
  const wed = stages[1].wed;
  const thu = stages[1].thu;
  const fri = stages[1].fri;
  const sat = stages[1].sat;
  const sun = stages[1].sun;

  // const Midgard = stages[1].Midgard;

  // Midgard.forEach((act) => {
  //   const clone = document.querySelector("template#scheduleTemplate").content.cloneNode(true);

  //   clone.querySelector('[data-field="Acts"]').textContent = `${act.act}`;
  //   clone.querySelector('[data-field="Start"]').textContent = act.start;
  //   clone.querySelector('[data-field="End"]').textContent = act.end;

  //   const parent = document.querySelector("#scheduleList");

  //   parent.appendChild(clone);
  // });

  mon.forEach((act) => {
    const clone = document.querySelector("template#scheduleTemplate").content.cloneNode(true);

    clone.querySelector('[data-field="Acts"]').textContent = `${act.act}`;
    clone.querySelector('[data-field="Start"]').textContent = act.start;
    clone.querySelector('[data-field="End"]').textContent = act.end;

    const parent = document.querySelector("#scheduleList");

    parent.appendChild(clone);
  });
  tue.forEach((act) => {
    const clone = document.querySelector("template#scheduleTemplate").content.cloneNode(true);

    clone.querySelector('[data-field="Acts"]').textContent = `${act.act}`;
    clone.querySelector('[data-field="Start"]').textContent = act.start;
    clone.querySelector('[data-field="End"]').textContent = act.end;

    const parent = document.querySelector("#scheduleList");

    parent.appendChild(clone);
  });
  wed.forEach((act) => {
    const clone = document.querySelector("template#scheduleTemplate").content.cloneNode(true);

    clone.querySelector('[data-field="Acts"]').textContent = `${act.act}`;
    clone.querySelector('[data-field="Start"]').textContent = act.start;
    clone.querySelector('[data-field="End"]').textContent = act.end;

    const parent = document.querySelector("#scheduleList");

    parent.appendChild(clone);
  });
  thu.forEach((act) => {
    const clone = document.querySelector("template#scheduleTemplate").content.cloneNode(true);

    clone.querySelector('[data-field="Acts"]').textContent = `${act.act}`;
    clone.querySelector('[data-field="Start"]').textContent = act.start;
    clone.querySelector('[data-field="End"]').textContent = act.end;

    const parent = document.querySelector("#scheduleList");

    parent.appendChild(clone);
  });
  fri.forEach((act) => {
    const clone = document.querySelector("template#scheduleTemplate").content.cloneNode(true);

    clone.querySelector('[data-field="Acts"]').textContent = `${act.act}`;
    clone.querySelector('[data-field="Start"]').textContent = act.start;
    clone.querySelector('[data-field="End"]').textContent = act.end;

    const parent = document.querySelector("#scheduleList");

    parent.appendChild(clone);
  });
  sat.forEach((act) => {
    const clone = document.querySelector("template#scheduleTemplate").content.cloneNode(true);

    clone.querySelector('[data-field="Acts"]').textContent = `${act.act}`;
    clone.querySelector('[data-field="Start"]').textContent = act.start;
    clone.querySelector('[data-field="End"]').textContent = act.end;

    const parent = document.querySelector("#scheduleList");

    parent.appendChild(clone);
  });
  sun.forEach((act) => {
    const clone = document.querySelector("template#scheduleTemplate").content.cloneNode(true);

    clone.querySelector('[data-field="Acts"]').textContent = `${act.act}`;
    clone.querySelector('[data-field="Start"]').textContent = act.start;
    clone.querySelector('[data-field="End"]').textContent = act.end;

    const parent = document.querySelector("#scheduleList");

    parent.appendChild(clone);
  });
}
//==================filtering stages==================

// function selectFilter(event) {
//   settings.filterValue = event.target.dataset.filter;
//   settings.filterType = event.target.dataset.type;

//   console.log(settings.filterValue);
// }

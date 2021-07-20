const icon = document.getElementById("icon");
let menu = document.getElementById("menuList");
let contact = document.querySelector('#contact')

icon.addEventListener("click", () => {
  // console.log('icon successful passed clicked test', icon)

  if (menu.classList.contains("hidden")) {
    menu.classList.add('flex');
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

let about = document.querySelector(".about");
about.addEventListener("click", () => {
  // console.log(about)
  let myabout = document.querySelector("#about");
  let home = document.querySelector("#mobileHome");
  let skills = document.querySelector("#skills");
  let project = document.querySelector("#project");

  if (myabout) {
    home.classList.add("hidden");
    skills.classList.add("hidden");
    project.classList.add("hidden");
    contact.classList.add("hidden");
    myabout.classList.remove("hidden");
  }
  menu.classList.add("hidden");
});

const skills = document
  .querySelector(".skills")
  .addEventListener("click", () => {
    //  console.log('this is skills link address')
    let skill = document.querySelector("#skills");
    //  console.log(skill)
    let myabout = document.querySelector("#about");
    let home = document.querySelector("#mobileHome");
    let project = document.querySelector("#project");

    if (skill) {
      home.classList.add("hidden");
      myabout.classList.add("hidden");
      project.classList.add("hidden");
      contact.classList.add("hidden");
      skill.classList.remove("hidden");
    }
    menu.classList.add("hidden");
  });

const project = document
  .querySelector(".project")
  .addEventListener("click", () => {
    //  console.log('this is project link address')
    let works = document.querySelector("#project");
    //  console.log(works)
    let myabout = document.querySelector("#about");
    let home = document.querySelector("#mobileHome");
    let skills = document.querySelector("#skills");

    if (works) {
      home.classList.add("hidden");
      myabout.classList.add("hidden");
      skills.classList.add("hidden");
      contact.classList.add("hidden");
      works.classList.remove("hidden");
    }
    menu.classList.add("hidden");
  });

const contactM = document
  .querySelector(".contactM")
  .addEventListener("click", () => {
    //  console.log('this is project link address')
    let project = document.querySelector("#project");
    //  console.log(works)
    let myabout = document.querySelector("#about");
    let home = document.querySelector("#mobileHome");
    let skills = document.querySelector("#skills");

    if (contact) {
      home.classList.add("hidden");
      myabout.classList.add("hidden");
      skills.classList.add("hidden");
      project.classList.add("hidden");
      contact.classList.remove("hidden");
    }
    menu.classList.add("hidden");
  });

// For desktop screen interaction

let homeD = document.querySelector(".homeD");
let aboutD = document.querySelector(".aboutD");
let homeDesktop = document.querySelector("#homeDesktop");
let aboutDesktop = document.querySelector("#about");
let skillDesktop = document.querySelector("#skills");
let projectDesktop = document.querySelector("#project");

aboutD.addEventListener("click", () => {
  console.log("this is desktop about", aboutD);
  homeDesktop.classList.add("lg:hidden");
  skillDesktop.classList.add("hidden");
  projectDesktop.classList.add("hidden");
  contact.classList.add("hidden");
  aboutDesktop.classList.remove("hidden");
});

let skillsD = document
  .querySelector(".skillsD")
  .addEventListener("click", () => {
    console.log("this is desktop skills");
    homeDesktop.classList.add("lg:hidden");
    aboutDesktop.classList.add("hidden");
    projectDesktop.classList.add("hidden");
    contact.classList.add("hidden");
    skillDesktop.classList.remove("hidden");
  });

let projectD = document
  .querySelector(".projectD")
  .addEventListener("click", () => {
    console.log("this is desktop project");
    homeDesktop.classList.add("lg:hidden");
    aboutDesktop.classList.add("hidden");
    skillDesktop.classList.add("hidden");
    contact.classList.add("hidden");
    projectDesktop.classList.remove("hidden");
  });

let contactD = document
  .querySelector(".contactD")
  .addEventListener("click", () => {
    console.log("this is desktop project");
    homeDesktop.classList.add("lg:hidden");
    aboutDesktop.classList.add("hidden");
    skillDesktop.classList.add("hidden");
    projectDesktop.classList.add("hidden");
    contact.classList.remove("hidden");
  });

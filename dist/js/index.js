const icon = document.getElementById("icon");
let menu = document.getElementById("menuList");
let hireM = document.querySelector('#hireM');
let hireD = document.querySelector('#hireD');


icon.addEventListener("click", () => {
  // console.log('icon successful passed clicked test', icon)

  if (menu.classList.contains("hidden")) {
    menu.classList.add('flex');
    menu.classList.remove("hidden");
    icon.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="50" height="50"
    viewBox="0 0 172 172"
    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#2ecc71"><path d="M86,6.88c-43.6552,0 -79.12,35.4648 -79.12,79.12c0,43.6552 35.4648,79.12 79.12,79.12c43.6552,0 79.12,-35.4648 79.12,-79.12c0,-43.6552 -35.4648,-79.12 -79.12,-79.12zM86,13.76c39.9368,0 72.24,32.3032 72.24,72.24c0,39.9368 -32.3032,72.24 -72.24,72.24c-39.9368,0 -72.24,-32.3032 -72.24,-72.24c0,-39.9368 32.3032,-72.24 72.24,-72.24zM113.4864,54.99297c-0.90737,0.02145 -1.76951,0.4006 -2.39859,1.05485l-25.08781,25.08781l-25.08781,-25.08781c-0.64765,-0.66575 -1.53698,-1.04135 -2.46578,-1.04141c-1.39982,0.00037 -2.65984,0.84884 -3.18658,2.14577c-0.52674,1.29693 -0.21516,2.7837 0.78799,3.76001l25.08781,25.08781l-25.08781,25.08781c-0.89867,0.86281 -1.26068,2.14404 -0.94641,3.34956c0.31427,1.20552 1.2557,2.14696 2.46122,2.46122c1.20552,0.31427 2.48675,-0.04774 3.34956,-0.94641l25.08781,-25.08781l25.08781,25.08781c0.86281,0.89867 2.14404,1.26068 3.34956,0.94641c1.20552,-0.31427 2.14696,-1.2557 2.46122,-2.46122c0.31427,-1.20552 -0.04774,-2.48675 -0.94641,-3.34956l-25.08781,-25.08781l25.08781,-25.08781c1.02251,-0.98325 1.33669,-2.4933 0.79119,-3.80279c-0.5455,-1.30949 -1.83881,-2.1499 -3.25697,-2.11643z"></path></g></g></svg>
    `
  } else {
    menu.classList.add("hidden");
    icon.innerHTML = `
      <svg class="fill-current bg-green-500 hover:bg-green-400 rounded w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="text-gray-800" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
    `
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
    menu.classList.add("hidden");
    document.getElementById("icon").innerHTML = `
      <svg class="fill-current bg-green-500 hover:bg-green-400 rounded w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="text-gray-800" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
    `
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
      document.getElementById("icon").innerHTML = `
      <svg class="fill-current bg-green-500 hover:bg-green-400 rounded w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="text-gray-800" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
    `
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
      document.getElementById("icon").innerHTML = `
      <svg class="fill-current bg-green-500 hover:bg-green-400 rounded w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="text-gray-800" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
    `
    }
    menu.classList.add("hidden");
  });

const contactM = document
  .querySelector("#hireM")
  .addEventListener("click", () => {
    let project = document.querySelector("#project");
    let myabout = document.querySelector("#about");
    let home = document.querySelector("#mobileHome");
    let skills = document.querySelector("#skills");

    if (hireM) {
      home.classList.add("hidden");
      myabout.classList.add("hidden");
      skills.classList.add("hidden");
      project.classList.add("hidden");
      contact.classList.remove("hidden");
      document.getElementById("icon").innerHTML = `
      <svg class="fill-current bg-green-500 hover:bg-green-400 rounded w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="text-gray-800" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
    `
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
  .querySelector("#hireD")
  .addEventListener("click", () => {
    console.log("this is desktop project");
    homeDesktop.classList.add("lg:hidden");
    aboutDesktop.classList.add("hidden");
    skillDesktop.classList.add("hidden");
    projectDesktop.classList.add("hidden");
    contact.classList.remove("hidden");
  });


  //Project button
  
  const btnView1 = document.querySelector('#btnView1').addEventListener('click', () => {
    console.log('Hello view')
    window.location.replace("https://trade-by-barter.herokuapp.com/");
  })

  const btnGithub1 = document.querySelector('#btnGithub1').addEventListener('click', () => {
    console.log('Hello github')
    window.location.replace("https://github.com/fastbeetech/Trade-by-Barter-be-pjt-77");
  })

  const btnView2 = document.querySelector('#btnView2').addEventListener('click', () => {
    console.log('Hello view')
    window.location.replace("https://movies-livewire.herokuapp.com/");
  })

  const btnGithub2 = document.querySelector('#btnGithub2').addEventListener('click', () => {
    console.log('Hello github')
    window.location.replace("https://github.com/fastbeetech/livewire-movieapp");
  })

  const btnView3 = document.querySelector('#btnView3').addEventListener('click', () => {
    console.log('Hello view')
    window.location.replace("https://fastbeetech.github.io/react-addBook");
  })

  const btnGithub3 = document.querySelector('#btnGithub3').addEventListener('click', () => {
    console.log('Hello github')
    window.location.replace("https://github.com/fastbeetech/react-addBook");
  })

  // hire me handler
//mobile
  document.querySelector('#contactM')
  .addEventListener("click", () => {
    let project = document.querySelector("#project");
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

  //desktop
  document.querySelector('#contactD')
  .addEventListener("click", () => {
    console.log("this is desktop project");
    homeDesktop.classList.add("lg:hidden");
    aboutDesktop.classList.add("hidden");
    skillDesktop.classList.add("hidden");
    projectDesktop.classList.add("hidden");
    contact.classList.remove("hidden");
  });

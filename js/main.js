const btn = document.querySelector(".btn");
const slider1 = document.querySelector(".slider1");
const slider2 = document.querySelector(".slider2");
const slider3 = document.querySelector(".slider3");
const sliderContainer = document.querySelector(".slider-container");
const circle = document.getElementsByClassName("circle");
const background = document.getElementsByClassName("top--gradient");

// const sliderMotioN = () => {
//   let pos1 = slider1.getBoundingClientRect();
//   if (pos1.x == 390) {
//     slider1.style.zIndex = "4";
//     slider2.style.zIndex = "3";
//     slider3.style.zIndex = "4";
//     slider1.style.left = "-500px";
//     slider2.style.left = "1300px";
//     slider3.style.left = "390px";
//   } else if (pos1.x == -500) {
//     slider1.style.zIndex = "3";
//     slider2.style.zIndex = "4";
//     slider3.style.zIndex = "4";
//     slider2.style.left = "390px";
//     slider1.style.left = "1300px";
//     slider3.style.left = "-500px";
//   } else if (pos1.x == 1300) {
//     slider1.style.zIndex = "4";
//     slider2.style.zIndex = "4";
//     slider3.style.zIndex = "3";
//     slider2.style.left = "-500px";
//     slider1.style.left = "390px";
//     slider3.style.left = "1300px";
//   }
// };
const sliderMotioN = function () {
  if (slider1.classList.contains("pos1")) {
    slider2.classList.replace("pos3", "pos2");
    slider1.classList.replace("pos1", "pos3");
    slider3.classList.replace("pos2", "pos1");
  } else if (slider1.classList.contains("pos2")) {
    slider3.classList.replace("pos3", "pos2");
    slider2.classList.replace("pos1", "pos3");
    slider1.classList.replace("pos2", "pos1");
  } else {
    slider2.classList.replace("pos2", "pos1");
    slider1.classList.replace("pos3", "pos2");
    slider3.classList.replace("pos1", "pos3");
  }
};
const gradientChange = function () {
  let backGrdient = document.querySelector(".top--gradient");
  backGrdient.classList.toggle("animate-gradient");
};
setInterval(sliderMotioN, 10000);
slider1.addEventListener("click", () => {
  if (
    slider1.classList.contains("pos1") ||
    slider1.classList.contains("pos3")
  ) {
    gradientChange();
    sliderMotioN();
  }
});
slider2.addEventListener("click", () => {
  if (
    slider2.classList.contains("pos1") ||
    slider2.classList.contains("pos3")
  ) {
    gradientChange();
    sliderMotioN();
  }
});
slider3.addEventListener("click", () => {
  if (
    slider3.classList.contains("pos1") ||
    slider3.classList.contains("pos3")
  ) {
    gradientChange();
    sliderMotioN();
  }
});
// setInterval(() => {
//   setTimeout(() => {
//     for (let i = 0; i < circle.length; i++) {
//       circle[i].style.top = "-10px";
//     }
//   }, 5000);
//   setTimeout(() => {
//     for (let i = 0; i < circle.length; i++) {
//       circle[i].style.top = "120vh";
//     }
//     console.log(2);
//   }, 1000);
// }, 1000);
/* Ellipse 8 */

// for (let i = 0; i < circle.length; i++) {
//   circle[i].style.top = "-10vh";
// }

const serviceRecatangle = document.querySelectorAll(".service--rect");
const serviceBtn = document.querySelectorAll(".service--rect");
serviceRecatangle.forEach((item) => {
  item.addEventListener("mouseover", function handleClick(event) {
    item.classList.add("service-hover");
    item.children[3].style.display = "block";
    item.style.color = "#fff";
  });
});
serviceRecatangle.forEach((item) => {
  item.addEventListener("mouseout", function handleClick(event) {
    item.classList.remove("service-hover");
    item.children[3].style.display = "none";
    item.style.color = "#000";
  });
});
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
const storeEmail = function () {
  let email = document.getElementById("email").value;
  const validate = validateEmail(email);
  if (validate !== null) {
    fetch(`http://manager.hululmfx.com/api/store-emails?email=${email}`).then(
      (response) => {
        if (response.ok === true) {
          Swal.fire(
            "Good job!",
            "Your email registered successfully!",
            "success"
          );
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "your email is already registered",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      }
    );
  } else {
    Swal.fire({
      icon: "error",
      title: "sorry",
      text: "your email should be true email",
      footer: '<a href="">Why do I have this issue?</a>',
    });
  }
  document.getElementById("email").value = "";
};

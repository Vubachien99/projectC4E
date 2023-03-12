// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// form đăng nhập
let login_form = document.querySelector(".button_content4");
let logout_form = document.querySelector(".modal_exit");
let modal = document.querySelector(".modal");
function login() {
  modal.classList.add("open");
}
function logout() {
  modal.classList.remove("open");
}
login_form.addEventListener("click", login);
logout_form.addEventListener("click", logout);

// // check form
// let elem = document.querySelector(".elem");
// elem.id = "notify";
// elem.style.display = "none";
// // form.appendChild(elem);
// let inputUser = document.querySelector(".inputUser");
// inputUser.addEventListener("invalid", function (event) {
//   event.preventDefault();
//   if (!event.target.validity.valid) {
//     elem.textContent =
//       "Username should only contain lowercase letters e.g. john";
//     elem.className = "error";
//     elem.style.display = "block";
//     inputUser.className = "invalid animated shake";
//   }
//   inputUser.addEventListener("input", function (event) {
//     if ("block" === elem.style.display) {
//       inputUser.className = "";
//       elem.style.display = "none";
//     }
//   });
// });

// next_page

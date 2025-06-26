// Tabs Functionality (About Section)
const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");

function openTab(tabName) {
  tabLinks.forEach((link) => link.classList.remove("active-link"));
  tabContents.forEach((content) => content.classList.remove("active-tab"));

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

// Assign event listeners for tabs
tabLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    openTab(this.getAttribute("onclick").split("'")[1]);
  });
});

// Mobile menu toggle (Optional enhancement for mobile menu)
const sideMenu = document.getElementById("sidemenu");

function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-200px";
}

// Google Sheets Form Submission
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyN2OFZhFlalDb1yIXKmv9qZ0k6h3kSvtrmkVRtyuQp0GlD5MHk2vxpn4A6Ty8VLgSXQA/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Successfully!";
      setTimeout(() => (msg.innerHTML = ""), 3000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

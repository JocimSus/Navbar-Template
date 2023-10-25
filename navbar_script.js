const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = () => {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

const links = document.querySelectorAll(".navbar .links li");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    links.forEach(function (el) {
      el.classList.remove("active");
    });

    link.classList.add("active");
  });
});

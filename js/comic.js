/* Title JS */
let title = document.title;
window.addEventListener("blur", () => {
    document.title = "TexnoParka geri dön!";
});
window.addEventListener("focus", () => {
    document.title = title;
});


let toggleBtn = document.querySelector("#navbar-toggle");
let collapse = document.querySelector("#navbar-collapse");

toggleBtn.onclick = () => {
  collapse.classList.toggle("hidden");
  collapse.classList.toggle("flex");
};

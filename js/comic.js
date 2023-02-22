/* Title JS */
let title = document.title;
window.addEventListener("blur", () => {
    document.title = "TexnoParka geri dön!";
});
window.addEventListener("focus", () => {
    document.title = title;
});



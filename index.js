const Open = document.querySelectorAll(".article__box");
const faq = document.querySelector(".faq__sections");
faq.addEventListener("click", function (e) {
  for (check of Open) {
    const Accordion = e.target.closest(".article__box").hasAttribute("open");
    if (!Accordion) check.removeAttribute("open", "");
  }
});

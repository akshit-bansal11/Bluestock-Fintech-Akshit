document.addEventListener("click", e => {
    if (e.target.closest(".faqToggle")) {
        const faq = e.target.closest(".faq");
        const icon = faq.querySelector("i");
        const answer = faq.querySelector(".answer");
    
        icon.classList.toggle("fa-plus");
        icon.classList.toggle("fa-minus");
        answer.classList.toggle("show");
        faq.style.gap = faq.style.gap === "25px" ? "0px" : "25px";
    }
});
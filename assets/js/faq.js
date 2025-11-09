document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll('[data-accordion="faq-item"]');

  faqItems.forEach((item) => {
    const header = item.querySelector(".flex");
    const content = item.querySelector(".accordion-content");
    const plusIcon = item.querySelector(".faq-icon-plus");
    const minusIcon = item.querySelector(".faq-icon-minus");

    header.addEventListener("click", () => {
      const isOpen = content.classList.contains("active");

      faqItems.forEach((otherItem) => {
        const otherContent = otherItem.querySelector(".accordion-content");
        const otherPlus = otherItem.querySelector(".faq-icon-plus");
        const otherMinus = otherItem.querySelector(".faq-icon-minus");

        if (
          otherContent !== content &&
          otherContent.classList.contains("active")
        ) {
          otherContent.classList.remove("active");
          otherContent.style.maxHeight = null;
          otherPlus.style.opacity = "1";
          otherMinus.style.opacity = "1";
        }
      });

      if (isOpen) {
        content.classList.remove("active");
        content.style.maxHeight = null;
        plusIcon.style.opacity = "1";
        minusIcon.style.opacity = "1";
      } else {
        content.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
        plusIcon.style.opacity = "0";
        minusIcon.style.opacity = "1";
      }
    });
  });
});

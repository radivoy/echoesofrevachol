// utils/smoothScroll.js

export const enableSmoothScroll = () => {
  const handleSmoothScroll = (event) => {
    const targetId = event.target.getAttribute("href");
    if (targetId && targetId.startsWith("#")) {
      event.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  const links = document.querySelectorAll(`a[href^="#"]`);
  links.forEach((link) => link.addEventListener("click", handleSmoothScroll));

  return () => {
    links.forEach((link) =>
      link.removeEventListener("click", handleSmoothScroll)
    );
  };
};

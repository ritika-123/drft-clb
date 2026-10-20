const equipButtons = document.querySelectorAll(".equip");
const detail = document.getElementById("equipDetail");

equipButtons.forEach(button => {
  button.addEventListener("click", () => {
    equipButtons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    detail.textContent = button.dataset.detail;
  });
});

const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get("name");
  const phone = data.get("phone");
  const message = data.get("message");
  const text = `Hi DRFT CLB, I'm ${name}.%0APhone: ${phone}%0A%0A${message}`;
  window.open(`https://wa.me/919999999999?text=${text}`, "_blank");
});

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelector(".menu").addEventListener("click", () => {
  const nav = document.querySelector(".nav nav");
  nav.style.display = nav.style.display === "flex" ? "" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "78px";
  nav.style.left = "0";
  nav.style.right = "0";
  nav.style.background = "#0b0b0b";
  nav.style.padding = "24px 6vw";
  nav.style.flexDirection = "column";
});

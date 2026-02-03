(() => {
  // Set year in footer
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Simple contact form (frontend-only demo)
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector("button[type='submit']");
    btn.disabled = true;

    const name = form.querySelector("[name='name']").value.trim();
    const phone = form.querySelector("[name='phone']").value.trim();
    const msg = form.querySelector("[name='message']").value.trim();

    const text = encodeURIComponent(
      `Hello Energy Fitness!%0A%0AName: ${name}%0APhone: ${phone}%0A%0AMessage: ${msg}`
    );

    // Opens WhatsApp with prefilled message (owner number set in HTML)
    const wa = form.getAttribute("data-wa");
    window.open(`https://wa.me/${wa}?text=${text}`, "_blank", "noopener");

    const ok = document.getElementById("formSuccess");
    ok.classList.remove("d-none");

    setTimeout(() => { btn.disabled = false; }, 2500);
  });
})();

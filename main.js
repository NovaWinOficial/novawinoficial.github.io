// -------------------------
// NAVEGAÇÃO DO MENU
// -------------------------

document.getElementById("btn-home")?.addEventListener("click", () => {
  window.location.href = "./index.html";
});

document.getElementById("btn-about")?.addEventListener("click", () => {
  window.location.href = "./about.html";
});

document.getElementById("btn-downloads")?.addEventListener("click", () => {
  window.location.href = "./downloads.html";
});

document.getElementById("btn-tutorials")?.addEventListener("click", () => {
  window.location.href = "./tutorials.html";
});

document.getElementById("btn-settings")?.addEventListener("click", () => {
  window.location.href = "./settings.html";
});

document.getElementById("btn-product")?.addEventListener("click", () => {
  window.location.href = "./produtos.html";
});

// -------------------------
// PAYWALL / PAGAMENTO
// -------------------------

const payModal = document.getElementById("payModal");
const btnPay = document.getElementById("btnPay");
const ctaPay = document.getElementById("ctaPay");
const confirmPay = document.getElementById("confirmPay");
const cancelPay = document.getElementById("cancelPay");
const userRole = document.getElementById("userRole");

function openPayModal() {
  payModal.style.display = "flex";
  payModal.setAttribute("aria-hidden", "false");
}

function closePayModal() {
  payModal.style.display = "none";
  payModal.setAttribute("aria-hidden", "true");
}

btnPay?.addEventListener("click", openPayModal);
ctaPay?.addEventListener("click", openPayModal);
cancelPay?.addEventListener("click", closePayModal);

confirmPay?.addEventListener("click", () => {
  localStorage.setItem("novaWinPaid", "true");
  if (userRole) userRole.innerText = "premium";
  closePayModal();
  alert("Acesso liberado! (Simulação)");
});

if (localStorage.getItem("novaWinPaid") === "true") {
  if (userRole) userRole.innerText = "premium";
}


// -------------------------
// TEMA CLARO / ESCURO
// -------------------------

const themeBtn = document.getElementById("toggleTheme");

if (localStorage.getItem("novaWinTheme") === "dark") {
  document.body.classList.add("dark-theme");
}

themeBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("novaWinTheme", "dark");
  } else {
    localStorage.setItem("novaWinTheme", "light");
  }
});







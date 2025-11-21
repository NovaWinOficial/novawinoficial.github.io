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


// -------------------------
// PAYWALL / PAGAMENTO
// -------------------------

// Captura de elementos
const payModal = document.getElementById("payModal");
const btnPay = document.getElementById("btnPay");
const ctaPay = document.getElementById("ctaPay");
const confirmPay = document.getElementById("confirmPay");
const cancelPay = document.getElementById("cancelPay");
const userRole = document.getElementById("userRole");

// Função para abrir modal
function openPayModal() {
  payModal.style.display = "flex";
  payModal.setAttribute("aria-hidden", "false");
}

// Função para fechar modal
function closePayModal() {
  payModal.style.display = "none";
  payModal.setAttribute("aria-hidden", "true");
}

// Eventos de abrir
btnPay?.addEventListener("click", openPayModal);
ctaPay?.addEventListener("click", openPayModal);

// Evento de cancelar
cancelPay?.addEventListener("click", closePayModal);

// Confirmar pagamento (simulado R$0,00)
confirmPay?.addEventListener("click", () => {
  localStorage.setItem("novaWinPaid", "true"); // salva a compra
  userRole.innerText = "premium"; // atualiza o texto na sidebar
  closePayModal();
  alert("Acesso liberado! (Simulação)");
});

// Carregar estado salvo
if (localStorage.getItem("novaWinPaid") === "true") {
  userRole.innerText = "premium";
}




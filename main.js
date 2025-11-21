// Simple frontend paywall + basic role simulation
(function(){
  const payModal = document.getElementById('payModal');
  const btnPay = document.getElementById('btnPay');
  const btnLogin = document.getElementById('btnLogin');
  const confirmPay = document.getElementById('confirmPay');
  const cancelPay = document.getElementById('cancelPay');
  const ctaPay = document.getElementById('ctaPay');
  const ctaLearn = document.getElementById('ctaLearn');
  const userRoleEl = document.getElementById('userRole');

  function updateUI(){
    const role = localStorage.getItem('novawin_role') || 'guest';
    userRoleEl.textContent = role;
    if(role === 'premium'){
      // hide pay buttons
      document.querySelectorAll('.btn.primary').forEach(b=>b.style.display='none');
    }
  }

  // Open modal
  function openModal(){ payModal.style.display = 'flex'; payModal.setAttribute('aria-hidden','false'); }
  function closeModal(){ payModal.style.display = 'none'; payModal.setAttribute('aria-hidden','true'); }

  btnPay.addEventListener('click', openModal);
  ctaPay.addEventListener('click', openModal);

  confirmPay.addEventListener('click', ()=>{
    // Simulate payment success
    localStorage.setItem('novawin_role','premium');
    alert('Pagamento simulado: Acesso Premium liberado.');
    updateUI();
    closeModal();
  });

  cancelPay.addEventListener('click', ()=>{ closeModal(); });

  btnLogin.addEventListener('click', ()=>{
    const cur = localStorage.getItem('novawin_role') || 'guest';
    if(cur === 'guest'){
      const want = confirm('Você não está logado. Deseja criar uma conta (simulação)?');
      if(want){ localStorage.setItem('novawin_role','premium'); alert('Conta simulada criada e logada como premium.'); updateUI(); }
    } else {
      const want = confirm('Deseja deslogar?');
      if(want){ localStorage.removeItem('novawin_role'); alert('Deslogado.'); updateUI(); }
    }
  });

  ctaLearn.addEventListener('click', ()=>{ window.location.href = 'pages/tutorials.html'; });

  // Close modal when clicking outside content
  payModal.addEventListener('click', (e)=>{ if(e.target === payModal) closeModal(); });

  // Init
  updateUI();
})();


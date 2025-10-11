(function(){
  // Mobile menu toggle
  const btn = document.querySelector('.mobile-menu');
  const nav = document.querySelector('nav');
  if(btn){
    btn.addEventListener('click', ()=>{
      if(nav.style.display === 'flex') nav.style.display = '';
      else nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.background = 'rgba(255,255,255,0.06)';
      nav.style.padding = '12px';
      nav.style.borderRadius = '10px';
    });
  }

  // Contact form validation
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if(!name || !email || !message){
        status.textContent = 'Please fill out all fields.';
        status.style.color = 'crimson';
        return;
      }
      status.textContent = 'Sending message...';
      status.style.color = '#062033';
      setTimeout(()=>{
        status.textContent = 'Thanks — I will get back to you soon!';
        status.style.color = 'green';
        form.reset();
      }, 900);
    });
  }
})();

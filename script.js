document.addEventListener('DOMContentLoaded',function(){
  // Mobile nav toggle
  var btn=document.querySelector('.nav-toggle');
  var nav=document.getElementById('nav');
  if(btn && nav){
    btn.addEventListener('click',function(){
      var expanded = this.getAttribute('aria-expanded') === 'true' || false;
      this.setAttribute('aria-expanded', !expanded);
      nav.style.display = expanded ? '' : 'flex';
    });
  }

  // Smooth scroll for CTA
  var cta=document.getElementById('cta');
  if(cta){
    cta.addEventListener('click',function(e){
      e.preventDefault();
      var target = document.querySelector('#demo');
      if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
    });
  }

  // Optional: simple demo-flow step highlighting on click
  var steps = document.querySelectorAll('.demo-flow li');
  steps.forEach(function(li){
    li.addEventListener('click',function(){
      steps.forEach(s=>s.classList.remove('active'));
      this.classList.add('active');
    });
  });
});

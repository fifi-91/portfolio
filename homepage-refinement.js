// Beyond the Brief: pill navigation and accessible horizontal carousels.
document.addEventListener('DOMContentLoaded',()=>{
 const tabs=[...document.querySelectorAll('.creative-pill')];
 const panels=[...document.querySelectorAll('.creative-panel')];
 tabs.forEach(tab=>tab.addEventListener('click',()=>{
  const key=tab.dataset.category;
  tabs.forEach(t=>{const active=t===tab;t.classList.toggle('is-active',active);t.setAttribute('aria-selected',String(active));});
  panels.forEach(p=>{const active=p.dataset.panel===key;p.classList.toggle('is-active',active);p.querySelectorAll('video').forEach(v=>{if(active){v.play().catch(()=>{});}else{v.pause();}});});
 }));
 document.querySelectorAll('.creative-arrow').forEach(btn=>btn.addEventListener('click',()=>{
  const rail=btn.closest('.creative-panel').querySelector('.creative-rail');
  const card=rail.querySelector('.creative-card');if(!card)return;
  const step=card.getBoundingClientRect().width+16;
  rail.scrollBy({left:(btn.dataset.direction==='next'?1:-1)*step,behavior:'smooth'});
 }));
});

/* property-tech-private.html — original script block 2; execution order preserved */
(function(){const t=document.getElementById('menuToggle'),m=document.getElementById('mobileMenu'),c=document.getElementById('menuClose');t&&t.addEventListener('click',()=>m.classList.add('active'));c&&c.addEventListener('click',()=>m.classList.remove('active'));})();
(function(){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target);}}),{threshold:.06});
let k=0;document.querySelectorAll('.p2-rise').forEach(el=>{const r=el.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0){setTimeout(()=>el.classList.add('is-in'),Math.min(k++,8)*80);}else io.observe(el);});})();
(function(){const tabs=document.querySelectorAll('#processTabs .p2-process-tab'),panels=document.querySelectorAll('.p2-process-panel');
tabs.forEach(t=>t.addEventListener('click',()=>{tabs.forEach(x=>x.setAttribute('aria-selected',x===t));panels.forEach(p=>p.classList.toggle('is-active',p.id===t.dataset.panel));}));})();
(function(){const pills=document.querySelectorAll('#dsPills .p2-ds-pill'),viz=document.getElementById('dsViz');if(!viz)return;
const set=m=>{viz.dataset.mode=m;pills.forEach(p=>p.setAttribute('aria-pressed',p.dataset.mode===m));};
pills.forEach(p=>p.addEventListener('click',()=>set(p.dataset.mode)));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){io.disconnect();let i=0;const seq=['atoms','molecules','organisms','atoms'];const iv=setInterval(()=>{const m=seq[i++];if(!m){clearInterval(iv);return;}set(m);},1100);}}),{threshold:.4});io.observe(viz);})();
(function(){const tg=document.getElementById('biliToggle'),card=document.getElementById('biliCard');
const specs={ltr:['ltr','+ 0%','Western (1, 2, 3)','→'],rtl:['rtl','+ 24%, absorbed by flexible widths','Eastern (١, ٢, ٣)','←']};
const d={ltr:['Riyadh Hills Villa','2,450,000 SAR','An-Narjis · North Riyadh','For sale','View property',['4 beds','3 baths','340 m²']],rtl:['فيلا تلال الرياض','٢٬٤٥٠٬٠٠٠ ر.س','النرجس · شمال الرياض','للبيع','عرض العقار',['٤ غرف','٣ حمامات','٣٤٠ م²']]};
function apply(dir){tg.dataset.dir=dir;card.dataset.dir=dir;tg.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.dir===dir));
const x=d[dir];['cardTitle','cardPrice','cardLoc','cardTag','cardCtaLabel'].forEach((id,i)=>document.getElementById(id).textContent=x[i]);
document.querySelectorAll('#cardFeats > span > span').forEach((s,i)=>s.textContent=x[5][i]);
['specDir','specExp','specNum','specIco'].forEach((id,i)=>document.getElementById(id).textContent=specs[dir][i]);}
tg.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>apply(b.dataset.dir)));})();
(function(){const v=document.querySelector('.p2-hero-video video'),fb=document.getElementById('heroFallback');if(!v||!fb)return;
const f=()=>{v.style.display='none';fb.style.display='flex';};v.addEventListener('error',f);setTimeout(()=>{if(v.readyState===0)f();},2500);})();

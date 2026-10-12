/* property-tech-public.html — original script block 2; execution order preserved */
(function(){const t=document.getElementById('menuToggle'),m=document.getElementById('mobileMenu'),c=document.getElementById('menuClose');t&&t.addEventListener('click',()=>m.classList.add('active'));c&&c.addEventListener('click',()=>m.classList.remove('active'));})();

/* password gate */
(function(){const i=document.getElementById('password-input'),b=document.getElementById('submit-btn'),e=document.getElementById('error-message');
i.addEventListener('input',()=>{b.disabled=!i.value;e.textContent='';});
function go(){if(i.value==="agileakrofi21")location.href="property-tech-private.html";else e.textContent="Incorrect password";}
b.addEventListener('click',go);i.addEventListener('keypress',x=>{if(x.key==='Enter')go();});})();

/* reveal */
(function(){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target);}}),{threshold:.06});
let k=0;document.querySelectorAll('.p2-rise').forEach(el=>{const r=el.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0){setTimeout(()=>el.classList.add('is-in'),Math.min(k++,8)*80);}else io.observe(el);});})();

/* counters */
(function(){function run(el){const to=+el.dataset.to,p=el.dataset.prefix||'',f=el.dataset.format,s=performance.now();
const fmt=n=>f==='comma'?Math.round(n).toLocaleString('en-US'):Math.round(n)+'';
(function tick(now){const t=Math.min(1,(now-s)/1600);el.textContent=p+fmt(to*(1-Math.pow(1-t,3)));if(t<1)requestAnimationFrame(tick);})(s);}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){run(e.target);io.unobserve(e.target);}}),{threshold:.6});
document.querySelectorAll('.p2-count').forEach(el=>io.observe(el));})();

/* before/after */
(function(){const u=document.getElementById('unify'),tg=document.getElementById('unifyToggle'),h=document.getElementById('unifyHint');let touched=false;
const hints={before:'Three products, three logins, no shared journey',after:'One account, one journey, one system underneath'};
function set(s){u.dataset.state=s;tg.dataset.dir=s==='after'?'rtl':'ltr';tg.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.s===s));h.textContent=hints[s];}
tg.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{touched=true;set(b.dataset.s);}));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){setTimeout(()=>{if(!touched)set('after');},1400);io.disconnect();}}),{threshold:.5});io.observe(u);})();

/* synthesis board */
(function(){const box=document.getElementById('aff');if(!box)return;const cur=document.getElementById('affCur');
const th=[['Trust','#fbf1d9','#b98a22','#fff3c9'],['Pricing','#eef0e4','#6c7a5a','#e9eedb'],['Upkeep','#f8e7e1','#b1533f','#fbe0d7'],['Comms','#e8ecf4','#3f5277','#dfe6f3']];
const notes=[["Who do I call when the AC breaks?",2,"P03 · resident"],["Hidden fees at handover",1,"P07 · buyer"],["Not sure the developer is reliable",0,"P01 · buyer"],["Updates only come by phone",3,"P05 · resident"],["Mortgage maths is confusing",1,"P02 · buyer"],["Repairs take weeks",2,"P08 · resident"],["Want proof of build progress",0,"P04 · buyer"],["Each team gives a different answer",3,"P06 · resident"]];
th.forEach((t,i)=>{const s=document.createElement('div');s.className='sp-sec';s.style.left=(3.4+i*23.8)+'cqw';s.style.background=t[1];s.innerHTML='<span style="background:'+t[2]+'">'+t[0]+'</span>';box.appendChild(s);});
const els=notes.map(n=>{const d=document.createElement('div');d.className='sp-st';d.style.background=th[n[1]][3];d.innerHTML=n[0]+'<small>'+n[2]+'</small>';box.appendChild(d);return d;});
const seed=[[6,14,-5],[40,9,4],[70,26,-3],[18,40,5],[52,36,-4],[76,52,6],[30,58,3],[58,57,-4]];
function scatter(){els.forEach((d,i)=>{d.style.left=seed[i][0]+'cqw';d.style.top=seed[i][1]+'cqw';d.style.rotate=seed[i][2]+'deg';});cur.style.left='62%';cur.style.top='78%';}
function cluster(){const c=[0,0,0,0];els.forEach((d,i)=>{const t=notes[i][1];d.style.left=(5.15+t*23.8)+'cqw';d.style.top=(14+c[t]++*18)+'cqw';d.style.rotate=(i%2?1:-1)+'deg';});cur.style.left='44%';cur.style.top='58%';}
scatter();window.__affCluster=()=>{scatter();setTimeout(cluster,500);};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){setTimeout(cluster,600);io.disconnect();}}),{threshold:.4});io.observe(box);})();

/* methodology tabs */
(function(){const tabs=document.querySelectorAll('#processTabs .p2-process-tab'),panels=document.querySelectorAll('.p2-process-panel');
tabs.forEach(t=>t.addEventListener('click',()=>{tabs.forEach(x=>x.setAttribute('aria-selected',x===t));
panels.forEach(p=>{p.classList.remove('is-active');});const p=document.getElementById(t.dataset.panel);void p.offsetWidth;
p.classList.add('is-active');if(t.dataset.panel==='m1')window.__affCluster();}));})();

/* bilingual */
(function(){const tg=document.getElementById('biliToggle'),card=document.getElementById('biliCard');
const specs={ltr:['ltr','+ 0%','Western (1, 2, 3)','→'],rtl:['rtl','+ 24%, absorbed by flexible widths','Eastern (١, ٢, ٣)','←']};
const d={ltr:['Riyadh Hills Villa','2,450,000 SAR','An-Narjis · North Riyadh','For sale','View property',['4 beds','3 baths','340 m²']],rtl:['فيلا تلال الرياض','٢٬٤٥٠٬٠٠٠ ر.س','النرجس · شمال الرياض','للبيع','عرض العقار',['٤ غرف','٣ حمامات','٣٤٠ م²']]};
function apply(dir){tg.dataset.dir=dir;card.dataset.dir=dir;tg.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.dir===dir));
const x=d[dir];['cardTitle','cardPrice','cardLoc','cardTag','cardCtaLabel'].forEach((id,i)=>document.getElementById(id).textContent=x[i]);
document.querySelectorAll('#cardFeats > span > span').forEach((s,i)=>s.textContent=x[5][i]);
['specDir','specExp','specNum','specIco'].forEach((id,i)=>document.getElementById(id).textContent=specs[dir][i]);}
tg.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>apply(b.dataset.dir)));})();

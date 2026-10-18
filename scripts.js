/* Portfolio scripts: one file, page-specific sections and original script order. */

/* Loaded in head and body so early initialization still happens before page interactions. */

(function () {

  const page = document.documentElement.getAttribute("data-portfolio-page");

  const phase = document.currentScript?.dataset.phase || "body";

  if (page === "index" && phase === "body") {

    /* ========== index-script-01.js ========== */
/* index.html — original script block 1; execution order preserved */
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>{document.querySelector('.links').classList.remove('open');document.querySelector('.menu-toggle').setAttribute('aria-expanded','false')}));


    /* ========== homepage-refinement.js ========== */
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


    /* ========== index-script-02.js ========== */
/* index.html — original script block 2; execution order preserved */
document.addEventListener('DOMContentLoaded',function(){
 const wrap=document.querySelector('.youtube-video-link');
 const trigger=wrap?.querySelector('.youtube-activate');
 if(!trigger)return;
 trigger.addEventListener('click',function(event){
  event.preventDefault(); event.stopPropagation();
  const frame=document.createElement('iframe');
  frame.className='youtube-player-frame';
  frame.title='Being a valuable designer in 2027';
  frame.src='https://www.youtube.com/embed/GvJyKsR9K4c?autoplay=1&rel=0&playsinline=1';
  frame.setAttribute('allow','accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  frame.setAttribute('allowfullscreen','');
  frame.referrerPolicy='strict-origin-when-cross-origin';
  wrap.appendChild(frame);
  wrap.classList.add('is-playing');
 });
});


    /* ========== portfolio-shared.js ========== */
document.addEventListener('DOMContentLoaded',()=>{const b=document.querySelector('.portfolio-nav-toggle'),l=document.querySelector('.portfolio-nav-links');if(!b||!l)return;b.addEventListener('click',()=>{const opened=l.classList.toggle('is-open');b.setAttribute('aria-expanded',String(opened))});});


  }

  if (page === "property-tech-public" && phase === "body") {

    /* ========== property-tech-public-script-02.js ========== */
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


    /* ========== property-tech-preview-phones.js ========== */
(function(){
const IMG=id=>`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=700&q=70`;
const P={a:IMG('1580587771525-78b9dba3b914'),b:IMG('1600596542815-ffad4c1539a9'),c:IMG('1613490493576-7fde63acd811'),d:IMG('1602343168117-bb8ffe3e2e9f'),e:IMG('1628012209120-d9db7abf7eab')};
window.SP_IMG=P;
const I={
search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
bell:'<path d="M6 16v-5a6 6 0 1 1 12 0v5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',
heart:'<path d="M12 20s-7-4.4-9-8.6C1.6 8.3 3.6 5 7 5c2 0 3.6 1.2 5 3 1.4-1.8 3-3 5-3 3.4 0 5.4 3.3 4 6.4-2 4.2-9 8.6-9 8.6z"/>',
compass:'<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
wallet:'<rect x="3" y="6" width="18" height="13" rx="3"/><path d="M3 10h18M16 14.5h2"/>',
home:'<path d="M4 11l8-7 8 7v9h-5v-6H9v6H4z"/>',
users:'<circle cx="9" cy="8.5" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17.5" cy="9" r="2.5"/><path d="M16.5 14.2A5 5 0 0 1 22 19"/>',
back:'<path d="M15 5l-7 7 7 7"/>',
menu:'<path d="M5 9h14M5 15h14"/>',
arr:'<path d="M7 17L17 7M9 7h8v8"/>',
bed:'<path d="M3 19v-8h18v8M3 15h18M6 11V8h5v3"/>',
bath:'<path d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M6 12V6.5a2 2 0 0 1 4 0"/>',
area:'<rect x="4" y="4" width="16" height="16" rx="1"/><path d="M4 10h6V4"/>',
cal:'<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>',
drop:'<path d="M12 3.5s6 6.4 6 10.8a6 6 0 0 1-12 0C6 9.9 12 3.5 12 3.5z"/>',
bolt:'<path d="M13 3L5 14h6l-1 7 8-11h-6z"/>',
snow:'<path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9"/>',
mark:'<path d="M12 3v18M4 7.5l16 9M4 16.5l16-9"/>'};
const ic=(n,c='')=>`<svg viewBox="0 0 24 24" class="${c}">${I[n]}</svg>`;
const SB=(lt)=>`<div class="sb${lt?' lt':''}"><b>9:41</b><span class="ic"><svg viewBox="0 0 18 12"><rect x="0" y="8" width="3" height="4" rx=".8"/><rect x="5" y="5.5" width="3" height="6.5" rx=".8"/><rect x="10" y="3" width="3" height="9" rx=".8"/><rect x="15" y="0" width="3" height="12" rx=".8"/></svg><svg viewBox="0 0 16 12"><path d="M8 2.2c2.4 0 4.6.9 6.2 2.5l1.3-1.3A10.6 10.6 0 0 0 8 .3 10.6 10.6 0 0 0 .5 3.4l1.3 1.3A8.7 8.7 0 0 1 8 2.2zm0 3.7c1.4 0 2.7.5 3.6 1.4l1.3-1.3A7 7 0 0 0 8 4 7 7 0 0 0 3.1 6l1.3 1.3c1-.9 2.2-1.4 3.6-1.4zM8 9.5l2.1-2.1a3 3 0 0 0-4.2 0z"/></svg><svg viewBox="0 0 27 12"><rect x=".5" y=".5" width="23" height="11" rx="3.5" fill="none" stroke="currentColor" opacity=".4"/><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="24.5" y="4" width="2" height="4" rx="1" opacity=".4"/></svg></span></div>`;
const TB=(on,ar)=>{const L=ar?['اكتشف','التمويل','منزلي','المجتمع']:['Discover','Finance','Manage','Community'];const N=['compass','wallet','home','users'];
return `<div class="tb">${N.map((n,i)=>`<span class="${i===on?'on':''}">${ic(n)}<i>${L[i]}</i></span>`).join('')}</div>`;};
const bg=u=>`style="background-image:url('${u}')"`;
const S={};

S.discover=()=>`<div class="scr">${SB()}<div class="pad">
<div class="ed-top"><span class="ed-mark">${ic('mark')}</span><span class="ed-menu">${ic('menu')}</span></div>
<span class="ed-eb">Riyadh · Jeddah · Khobar</span>
<b class="ed-h hf">Homes for the next chapter.</b>
<p class="ed-p">Search, finance and move in, all in one place.</p>
<span class="ed-link">Explore communities ${ic('arr')}</span>
<div class="ed-photo" ${bg(P.a)}><span class="fav">${ic('heart')}</span><div class="ed-cap"><small>North Riyadh</small><b>Riyadh Hills</b></div></div>
<div class="ed-stats"><span><b>214</b><i>Homes</i></span><span><b>4</b><i>Cities</i></span><span><b>9.8K</b><i>SAR / mo</i></span></div>
</div>${TB(0)}</div>`;

S.finance=()=>`<div class="scr">${SB()}<div class="pad">
<div class="ed-top"><span class="ed-menu">${ic('back')}</span><span class="ed-eb" style="margin:0">Home finance</span><span class="ed-menu">${ic('bell')}</span></div>
<div class="fi-hero"><span class="ed-eb">Estimated monthly</span><b class="hf">9,850</b><small>SAR / month · Riyadh Hills Villa</small></div>
<div class="fi-sl"><div class="h"><span>Property price</span><b>2.45M</b></div><div class="tr"><i style="width:70%"></i></div></div>
<div class="fi-sl"><div class="h"><span>Down payment</span><b>20%</b></div><div class="tr"><i style="width:20%"></i></div></div>
<div class="fi-sl"><div class="h"><span>Term</span><b>25 yrs</b></div><div class="tr"><i style="width:83%"></i></div></div>
<div class="fi-bank"><span class="bk" style="background:#141414">A</span><div><b>Partner bank A</b><small>4.2% · pre-approval in 24h</small></div></div>
<div class="fi-bank"><span class="bk" style="background:#c98a4b">B</span><div><b>Partner bank B</b><small>4.5% · fixed 5 yrs</small></div></div>
<span class="btn" style="margin-top:auto;flex:none"><i>Get pre-approved</i></span>
</div>${TB(1)}</div>`;

const DT={en:{tag:'Off-plan · Handover 2026',t:'Riyadh Hills Villa',l:'An-Narjis · North Riyadh',p:'2.45M',u:'SAR',f:['4 beds','3 baths','340 m²'],mh:'Estimated monthly',me:'Edit',mv:'9,850 SAR',ms:'25 yrs · 20% down · partner bank',cta:'Book a viewing'},
ar:{tag:'على الخارطة · التسليم ٢٠٢٦',t:'فيلا تلال الرياض',l:'النرجس · شمال الرياض',p:'٢٫٤٥ م',u:'ر.س',f:['٤ غرف','٣ حمامات','٣٤٠ م²'],mh:'القسط الشهري التقديري',me:'تعديل',mv:'٩٬٨٥٠ ر.س',ms:'٢٥ سنة · ٢٠٪ دفعة أولى',cta:'احجز معاينة'}};
S.detail=(lang='en')=>{const d=DT[lang];return `<div class="scr" dir="${lang==='ar'?'rtl':'ltr'}"><div class="dt-img" ${bg(P.c)}>${SB(1)}<span class="tbtn l">${ic('back','flip')}</span><span class="tbtn r fav on" style="top:5.4em">${ic('heart')}</span><div class="pager"><i class="on"></i><i></i><i></i><i></i></div></div>
<div class="sheet"><span class="ed-eb">${d.tag}</span>
<div class="ttl"><div><b class="hf">${d.t}</b><small>${d.l}</small></div><div class="p"><b>${d.p}</b><small>${d.u}</small></div></div>
<div class="ft"><span>${ic('bed')}<i>${d.f[0]}</i></span><span>${ic('bath')}<i>${d.f[1]}</i></span><span>${ic('area')}<i>${d.f[2]}</i></span></div>
<div class="mort"><div class="h"><span>${d.mh}</span><u>${d.me}</u></div><b>${d.mv}</b><div class="bar"><i></i></div><small>${d.ms}</small></div>
<div class="cta"><span class="sq">${ic('cal')}</span><span class="btn"><i>${d.cta}</i></span></div></div></div>`;};

S.manage=()=>`<div class="scr" dir="rtl">${SB()}<div class="pad">
<div class="hdr"><div><small>مساء الخير</small><b class="hf">سارة</b></div><div class="r"><span class="ib dot">${ic('bell')}</span><span class="av"><i>س</i></span></div></div>
<div class="home" ${bg(P.d)}><div class="ov"><small>منزلي</small><b>فيلا ١٢ · تلال الرياض</b><div class="meta"><span>نسبة الإنجاز</span><span>٨٥٪</span></div><div class="bar"><i></i></div></div></div>
<div class="sec"><b>طلبات الصيانة</b><small>عرض الكل</small></div>
<div class="rqs">
<div class="rq"><span class="ic" style="background:#fbe3c4;color:#8a4b12">${ic('snow')}</span><div class="tx"><b>صيانة التكييف</b><small>الثلاثاء · ١٠:٠٠ ص</small></div><span class="pill" style="background:#fbe3c4;color:#8a4b12">قيد التنفيذ</span></div>
<div class="rq"><span class="ic" style="background:#dbeaf1;color:#1f5470">${ic('drop')}</span><div class="tx"><b>تسرب مياه في المطبخ</b><small>تم الإسناد لفني</small></div><span class="pill" style="background:#dbeaf1;color:#1f5470">مجدول</span></div>
<div class="rq"><span class="ic" style="background:#dcefe0;color:#2c6b3d">${ic('bolt')}</span><div class="tx"><b>فحص الكهرباء</b><small>اكتمل ٢ أكتوبر</small></div><span class="pill" style="background:#dcefe0;color:#2c6b3d">مكتمل</span></div>
</div>
<div class="pay"><div><small>القسط القادم · ١ نوفمبر</small><b>٩٬٨٥٠ ر.س</b></div><span><i>ادفع</i></span></div>
</div>${TB(2,1)}</div>`;

const LG={listings:['v1','Listings','#1f55d6','Find your next property','Log in'],finance:['v2','Home Finance','#0e5e45','Apply for a mortgage','Continue'],services:['v3','Resident Services','#e2662d','Request maintenance','Sign in']};
S.login=(k)=>{const b=LG[k];return `<div class="scr">${SB(b[0]==='v2')}<div class="lg ${b[0]}"><span class="lgo" style="background:${b[2]}"><i>${b[0]==='v1'?b[1].toUpperCase():b[1][0]}</i></span><span class="ed-eb">Welcome to</span><b>${b[1]}</b><p>${b[3]}</p>
<div class="fld"><i>Email or mobile</i></div><div class="fld"><i>Password</i></div>
<span class="btn" style="background:${b[2]}"><i>${b[4]}</i></span><span class="alt">New here? Create an account</span></div></div>`;};

document.querySelectorAll('[data-ph]').forEach(el=>{const [n,a]=el.dataset.ph.split(':');el.innerHTML=S[n](a);});
})();


    /* ========== property-tech-public-script-03.js ========== */
/* property-tech-public.html — original script block 3; execution order preserved */
document.addEventListener('DOMContentLoaded',function(){
const header=document.querySelector('.site-header'),button=header?.querySelector('.menu-toggle'),links=header?.querySelector('.nav-links');
if(!button||!links)return;
button.addEventListener('click',function(){const open=links.classList.toggle('open');header.classList.toggle('menu-open',open);button.setAttribute('aria-expanded',String(open));});
});


    /* ========== portfolio-shared.js ========== */
document.addEventListener('DOMContentLoaded',()=>{const b=document.querySelector('.portfolio-nav-toggle'),l=document.querySelector('.portfolio-nav-links');if(!b||!l)return;b.addEventListener('click',()=>{const opened=l.classList.toggle('is-open');b.setAttribute('aria-expanded',String(opened))});});


  }

  if (page === "property-tech-private" && phase === "body") {

    /* ========== property-tech-private-script-02.js ========== */
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


  }

  if (page === "copilot-public" && phase === "body") {

    /* ========== copilot-phones.js ========== */
(function(){
const ic={
send:'<path d="M4 12l16-8-6 16-2-7z"/>',mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
check:'<path d="M5 12l5 5L20 7"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',bell:'<path d="M6 16v-5a6 6 0 1 1 12 0v5l1.5 2h-15z"/>',
menu:'<path d="M4 8h16M4 16h16"/>',plane:'<path d="M3 13l18-7-5 14-4-5z"/>',home:'<path d="M4 11l8-7 8 7v9H4z"/>',
bag:'<path d="M5 8h14l-1 12H6zM9 8a3 3 0 0 1 6 0"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
card:'<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/>',chart:'<path d="M4 19V9M10 19V5M16 19v-7M22 19H2"/>'};
const I=(n)=>`<svg viewBox="0 0 24 24">${ic[n]}</svg>`;
const SB=`<div class="sb"><b>9:41</b><span class="ic"><svg viewBox="0 0 18 12"><rect x="0" y="8" width="3" height="4" rx=".8"/><rect x="5" y="5.5" width="3" height="6.5" rx=".8"/><rect x="10" y="3" width="3" height="9" rx=".8"/><rect x="15" y="0" width="3" height="12" rx=".8"/></svg><svg viewBox="0 0 27 12"><rect x=".5" y=".5" width="23" height="11" rx="3.5" fill="none" stroke="currentColor" opacity=".4"/><rect x="2" y="2" width="20" height="8" rx="2"/></svg></span></div>`;
const orb=(c='')=>`<span class="orb ${c}"></span>`;
const BR={air:['Airline','plane'],ret:['Maison','bag'],bank:['Bank','card']};
const head=(sk)=>`<div class="cp-head"><span class="cp-brand">${I(BR[sk][1])}<b>${BR[sk][0]}</b></span><span class="cp-ai">${orb('sm')}<i>AI assistant</i></span></div>`;
const input=`<div class="ci"><span>Ask me anything</span>${orb('in')}</div>`;
function msg(m){
 if(m.t==='u')return `<div class="cb u">${m.x}</div>`;
 if(m.t==='r')return `<div class="cr">${I('info')}<span>${m.x}</span></div>`;
 if(m.t==='typing')return `<div class="cb a ty">${orb('av')}<span class="dots"><i></i><i></i><i></i></span></div>`;
 if(m.t==='opt')return `<div class="co">${m.x.map(o=>`<div class="opt"><div><small>${o[0]}</small><b>${o[1]}</b><small>${o[2]}</small></div><em>${o[3]}</em></div>`).join('')}</div>`;
 if(m.t==='prod')return `<div class="cpr">${m.x.map(o=>`<div><span class="im" style="background:${o[2]}"></span><b>${o[0]}</b><small>${o[1]}</small></div>`).join('')}</div>`;
 if(m.t==='qr')return `<div class="qr">${m.x.map((q,i)=>`<span class="${i?'y':''}">${q}</span>`).join('')}</div>`;
 if(m.t==='h')return `<div class="hand">${I('user')}<div><b>${m.x[0]}</b><small>${m.x[1]}</small></div></div>`;
 return `<div class="cb a">${orb('av')}<span>${m.x}</span></div>`;
}
window.CP_chat=(sk,msgs)=>`<div class="scr sk-${sk}">${SB}${head(sk)}<div class="cp-msgs">${msgs.map(msg).join('')}</div>${input}</div>`;
const C={
air:[{t:'u',x:'Find me flights to Lisbon in July, under €600.'},{t:'r',x:'Checked profile, dates and fares · 3 sources'},{t:'a',x:'Here are the best options for July 1 to 15:'},{t:'opt',x:[['BER to LIS · Direct','07:45 – 13:45','Premium economy','€510'],['BER to LIS · Direct','12:10 – 18:05','Economy · meal','€380']]},{t:'qr',x:['Other dates','Book €510']}],
ret:[{t:'u',x:'I need a gift for my sister, she loves skincare.'},{t:'a',x:'Lovely. Based on what she likes, these are popular right now:'},{t:'prod',x:[['Glow serum','€48','linear-gradient(135deg,#f3d9c6,#e8b99c)'],['Night cream','€62','linear-gradient(135deg,#e9e2d6,#cbbba3)']]},{t:'r',x:'Personalised from purchase history'},{t:'qr',x:['Show more','Add gift wrap']}],
bank:[{t:'u',x:'Can I afford a €2,000 holiday in August?'},{t:'r',x:'Read-only access to 2 accounts'},{t:'a',x:'Yes. After bills you\'ll have about <b>€3,140</b> spare in August. Setting aside €500 a month gets you there.'},{t:'qr',x:['Not now','Create savings pot']},{t:'h',x:['Prefer to talk it through?','An adviser is available now']}]
};
const home=`<div class="scr sk-air">${SB}<div class="cp-pad">
<div class="hm-top"><span>${I('menu')}</span><span class="cp-brand">${I('plane')}<b>Airline</b></span><span>${I('bell')}</span></div>
<b class="hm-h">Hi Betty,<br>welcome back</b>
<div class="hm-f"><span><small>From</small>New York (JFK)</span><span><small>To</small>Barcelona (BCN)</span><span><small>Depart</small>23/11</span><span><small>Return</small>30/11</span></div>
<span class="hm-btn">Search</span>
<b class="hm-s">Suggested by your assistant</b>
<div class="hm-sug"><span>${I('globe')}<b>Gate B12</b><small>Directions</small></span><span>${I('check')}<b>Check-in open</b><small>Seat 12C</small></span></div>
<div class="hm-j"><div><small>JFK</small><b>7:50</b></div><i></i><div style="text-align:right"><small>BCN</small><b>7:00</b></div></div>
</div><div class="hm-tb"><span>${I('home')}<i>Home</i></span><span>${I('plane')}<i>Trips</i></span><span class="mid">${orb('tb')}</span><span>${I('globe')}<i>Explore</i></span><span>${I('user')}<i>Profile</i></span></div></div>`;
window.CP_C=C;window.CP_home=home;
document.querySelectorAll('[data-cp]').forEach(el=>{const k=el.dataset.cp;el.innerHTML=k==='home'?home:CP_chat(k,C[k]);});
})();


    /* ========== copilot-public-script-02.js ========== */
/* copilot-public.html — original script block 2; execution order preserved */
document.querySelectorAll('[data-chat]').forEach(e=>e.innerHTML=CP_chat('air',JSON.parse(e.dataset.chat)));


    /* ========== copilot-kit.js ========== */
(function(){
/* ---------- icons ---------- */
const P={
db:'<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
docs:'<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17.5" cy="9" r="2.5"/><path d="M16.5 14.2A5 5 0 0 1 22 19"/>',
brand:'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/>',
spark:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
layers:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
brain:'<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a2 2 0 0 0-3-1zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>',
chat:'<path d="M4 5h16v11H9l-5 4z"/><path d="M8 10h8"/>',
shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
loop:'<path d="M20 12a8 8 0 0 1-14 5.3M4 12A8 8 0 0 1 18 6.7"/><path d="M18 3v4h-4M6 21v-4h4"/>',
plane:'<path d="M3 13l18-7-5 14-4-5z"/><path d="M12 15l4-5"/>',
bank:'<path d="M3 9l9-5 9 5M5 9v9M10 9v9M14 9v9M19 9v9M3 20h18"/>',
bag:'<path d="M5 8h14l-1 12H6z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
bell:'<path d="M5 17h14M7 17a5 5 0 0 1 10 0M12 9V7M10 7h4"/><path d="M3 20h18"/>',
palette:'<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2s-1-1.5-1-2.5 1-1.5 2-1.5h2a4 4 0 0 0 4-4c0-4.4-4-8-9-8z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/>',
voice:'<path d="M4 10v4M8 7v10M12 4v16M16 7v10M20 10v4"/>',
bot:'<rect x="5" y="8" width="14" height="11" rx="3"/><path d="M12 4v4M9 13h.01M15 13h.01M3 13v2M21 13v2"/>',
plug:'<path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0zM12 17v4"/>',
rules:'<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2"/>',
hand:'<path d="M7 11V6a1.5 1.5 0 0 1 3 0v4M10 10V4.5a1.5 1.5 0 0 1 3 0V10M13 10V5.5a1.5 1.5 0 0 1 3 0V12M16 9a1.5 1.5 0 0 1 3 0v4a7 7 0 0 1-7 7h-1a6 6 0 0 1-5-3l-2.5-4a1.5 1.5 0 0 1 2.5-1.6L7 13"/>',
check:'<path d="M5 12l5 5L20 7"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',
mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
card:'<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/>',
lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
heart:'<path d="M12 20s-7-4.4-9-8.6C1.6 8.3 3.6 5 7 5c2 0 3.6 1.2 5 3 1.4-1.8 3-3 5-3 3.4 0 5.4 3.3 4 6.4-2 4.2-9 8.6-9 8.6z"/>',
star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
chart:'<path d="M4 19V9M10 19V5M16 19v-7M22 19H2"/>',eye:'<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
gift:'<rect x="3" y="8" width="18" height="4"/><path d="M5 12v9h14v-9M12 8v13M12 8S10 3 7.5 4.5 9 8 12 8zm0 0s2-5 4.5-3.5S15 8 12 8z"/>',
refresh:'<path d="M20 12a8 8 0 1 1-2.3-5.7M20 4v4h-4"/>',phone:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
map:'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',doc:'<path d="M6 3h9l4 4v14H6z"/><path d="M9 12h6M9 16h4"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',share:'<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 11l7.6-4M8.2 13l7.6 4"/>',
crew:'<circle cx="12" cy="7" r="4"/><path d="M5 21v-2a7 7 0 0 1 14 0v2M9 14l3 3 3-3"/>',grid:'<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/>'};
window.CP_I=n=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${P[n]||''}</svg>`;
function icons(root){(root||document).querySelectorAll('i[data-i]').forEach(e=>{e.innerHTML=CP_I(e.dataset.i);e.classList.add('ico');});}
window.CP_icons=icons;

/* ---------- architecture detail ---------- */
const AD={
data:['Enterprise data','CRM records, bookings, transactions and profiles, read through secure connectors.','Personal data is only surfaced when it helps the task, and the customer can see why.'],
know:['Knowledge sources','Policies, FAQs and product content the copilot can cite.','Answers that rely on policy show their source, so customers can check them.'],
ctx:['Context signals','Intent, journey stage, history and preferences.','The same question gets a different answer before and after booking.'],
brand:['Brand & rules','Voice, tone, products and compliance rules per client.','Set once per client as parameters. No UI changes needed.'],
orch:['Agent orchestration','Chooses a single agent, a sequence or parallel agents for each request.','The interface shows progress differently for quick and multi-step work.'],
res:['Resource engine','Retrieval, ranking and grounding in client data.','Grounded answers carry a source chip; ungrounded ones are not shown.'],
reas:['Reasoning engine','LLM reasoning, planning and tool use.','Visible reasoning cards when they build trust; hidden when they add noise.'],
nudge:['Nudging engine','Tone, suggestions and next best actions.','Suggestions are quick replies, never automatic actions.'],
guard:['Guardrails & governance','Safety, privacy, tone and policy checks on every response.','Blocked or uncertain responses fall back to a question or a person.'],
learn:['Learning loop','Feedback, evaluation and analytics.','Thumbs up/down and handoff rates feed back into prompts and rules.'],
v1:['Travel','Trip planning, disruption and loyalty support.','First client skin and reference implementation.'],
v2:['Banking','Account help, transactions and financial guidance.','Stricter handoff thresholds and formal tone.'],
v3:['Retail','Product discovery, orders and personalised offers.','Visual product cards and gifting flows.'],
v4:['Hospitality','Reservations, in-stay support and rewards.','Concierge-style tone and booking cards.']};
const FLOW=[['data','know','ctx','brand'],['orch'],['res'],['reas'],['nudge'],['guard'],['out'],['learn']];
const STEP_T=['Inputs gathered','Agents chosen','Grounding in client data','Reasoning and tool use','Shaping tone and next action','Checking safety and policy','Rendered in every client skin','Logged for evaluation'];
document.querySelectorAll('.cp-arch2').forEach(ar=>{const det=ar.parentElement.querySelector('.cp-adet');ar.classList.add('live','motion');
const outs=[...ar.querySelectorAll('.a-out')];
const ctl=document.createElement('div');ctl.className='a-ctl';ctl.innerHTML=`<button type="button" class="a-play" aria-pressed="true"><span class="pz">❚❚</span><span class="pl">▶</span></button><span class="a-now"></span>`;ar.before(ctl);
const now=ctl.querySelector('.a-now'),btn=ctl.querySelector('.a-play');
let i=0,v=0,timer=null,typ=null;const lb=ar.querySelector('[data-k="learn"] small'),lo=lb?lb.textContent:'';let lc=0;const LM=['Rating logged · tone scored 4.6/5','Answer checked against its source','Handoff reviewed · threshold tuned','Prompts and rules updated for next time'];
function clear(){ar.querySelectorAll('.act,.on,.fed').forEach(n=>n.classList.remove('act','on','fed'));}
function type(){}
function tick(){clear();const ks=FLOW[i];ar.classList.remove('learning');if(lb)lb.textContent=lo;if(ks[0]==='learn'){ar.classList.add('learning');if(lb)lb.textContent=LM[lc++%LM.length];['res','reas','nudge'].forEach(k=>ar.querySelector(`[data-k="${k}"]`).classList.add('fed'));}
if(ks[0]==='out'){outs.forEach((o,n)=>setTimeout(()=>o.classList.add('act'),n*140));ar.querySelectorAll('.a-conn')[1].classList.add('act');}
else ks.forEach(k=>{const n=ar.querySelector(`[data-k="${k}"]`);n&&n.classList.add('act');});
if(i===1)ar.querySelectorAll('.a-conn')[0].classList.add('act');
now.innerHTML=`<b>${String(i+1).padStart(2,'0')}</b>${STEP_T[i]}`;
i++;if(i>=FLOW.length)i=0;}
function play(){if(timer)return;btn.setAttribute('aria-pressed','true');tick();timer=setInterval(tick,1200);}
function pause(){clearInterval(timer);timer=null;btn.setAttribute('aria-pressed','false');}
btn.addEventListener('click',()=>timer?pause():play());
if(det){const set=k=>{pause();clear();const n=ar.querySelector(`[data-k="${k}"]`);n.classList.add('on');const d=AD[k];now.innerHTML='Paused · select ▶ to resume';det.innerHTML=`<div><span>Component</span><b>${d[0]}</b></div><div><span>What it does</span><p>${d[1]}</p></div><div><span>Design decision</span><p>${d[2]}</p></div>`;};
ar.querySelectorAll('[data-k]').forEach(n=>{n.tabIndex=0;n.addEventListener('click',()=>set(n.dataset.k));n.addEventListener('keydown',e=>{if(e.key==='Enter')set(n.dataset.k);});});
const d=AD.reas;det.innerHTML=`<div><span>Component</span><b>Select any part</b></div><div><span>What it does</span><p>Pause the flow and select a component to see what it does.</p></div><div><span>Design decision</span><p>Each part of the engine led to a decision in the interface.</p></div>`;}
else ar.classList.remove('live');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){if(btn.getAttribute('aria-pressed')==='true')play();}else{clearInterval(timer);timer=null;}}),{threshold:.3});io.observe(ar);});
document.querySelectorAll('.cj-uc').forEach(b=>b.addEventListener('click',()=>b.classList.toggle('open')));

/* ---------- configuration ---------- */
const CF={
air:{n:'Airline',sw:['#0b1a2e','#2f5bff','#15294a','#ffffff'],f:['Switzer','Aa'],tone:1,ag:[['plane','Booking',1],['refresh','Disruption',1],['star','Loyalty',1],['card','Finance',0]],ds:[['users','CRM',1],['plane','Bookings',1],['docs','Policies',1],['bag','Catalogue',0],['bank','Accounts',0]],ru:[['Suggest upgrades',1],['Take payments',1],['Rebook without asking',0]],h:55},
ret:{n:'Retail',sw:['#fbf7f1','#1d1a16','#efe6d8','#e8b99c'],f:['Georgia','Aa'],tone:2,ag:[['search','Product search',1],['bag','Orders',1],['gift','Gifting',1],['card','Finance',0]],ds:[['users','CRM',1],['bag','Catalogue',1],['docs','Policies',1],['plane','Bookings',0],['bank','Accounts',0]],ru:[['Recommend products',1],['Apply discounts',1],['Give skin-health advice',0]],h:40},
bank:{n:'Banking',sw:['#121212','#e0312b','#1f1f1f','#ffffff'],f:['Switzer','Aa'],tone:0,ag:[['bank','Accounts',1],['chart','Savings',1],['chat','Support',1],['spark','Investing',0]],ds:[['users','CRM',1],['bank','Accounts',1],['docs','Policies',1],['bag','Catalogue',0],['plane','Bookings',0]],ru:[['Show balances',1],['Create savings pots',1],['Give investment advice',0]],h:75}};
const TONES=['Formal','Warm','Playful'];
document.querySelectorAll('.cp-cfg').forEach(w=>{const ctl=w.querySelector('.cfg-ctl'),ph=w.querySelector('.ph');
function set(k){const c=CF[k];w.querySelectorAll('.cfg-pre button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.k===k));
ctl.innerHTML=`<div class="cfg-g"><span class="cfg-h"><i data-i="palette"></i>Brand tokens</span><div class="cfg-sw">${c.sw.map(s=>`<i style="background:${s}"></i>`).join('')}<b style="font-family:${c.f[0]},serif">${c.f[1]}</b></div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="voice"></i>Tone of voice</span><div class="cfg-seg">${TONES.map((t,i)=>`<span class="${i===c.tone?'on':''}">${t}</span>`).join('')}</div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="bot"></i>Agents enabled</span><div class="cfg-ag">${c.ag.map(a=>`<span class="${a[2]?'':'off'}"><i data-i="${a[0]}"></i>${a[1]}<em></em></span>`).join('')}</div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="plug"></i>Data sources</span><div class="cfg-ds">${c.ds.map(a=>`<span class="${a[2]?'on':''}"><i data-i="${a[0]}"></i>${a[1]}</span>`).join('')}</div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="rules"></i>Content behaviour</span><div class="cfg-ru">${c.ru.map(r=>`<span class="${r[1]?'y':'n'}"><i data-i="${r[1]?'check':'x'}"></i>${r[0]}</span>`).join('')}</div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="hand"></i>Human handoff threshold</span><div class="cfg-sl"><span><i style="width:${c.h}%"></i><b style="left:${c.h}%"></b></span><em>Hands over to a person when confidence drops below ${c.h}%</em></div></div>`;
icons(ctl);ph.innerHTML=CP_chat(k,CP_C[k]);}
w.querySelectorAll('.cfg-pre button').forEach(b=>b.addEventListener('click',()=>set(b.dataset.k)));set('air');});

/* ---------- simulator ---------- */
const INTS={insp:['Trip inspiration','Ideas when you don\'t know where to go'],seat:['Manage booking','Seats, meals, changes'],disr:['Disruption support','Cancellations and delays'],fin:['Finance check','Budgets and payment'],nav:['Navigate airport','Gates, lounges, shops'],hotel:['Hotel booking','Find and book a stay']};
const S={
insp:{q:'I want to go kitesurfing this summer.',conf:[72,'#e2a23b'],rows:[['Customer data','CRM','ok','Name, home airport (BER)'],['Preferences','Customer profile','ok','Business class, window seat'],['Trip details','Language model','miss','Duration and dates missing'],['Destinations','Editorial content','ok','Kitesurf spots, July weather'],['Fares','Booking API','miss','Waiting on dates']],
pat:'Parallel',graph:[['Request'],['Destinations','Fares'],['Merge'],['Reply']],dec:['Ask','One clarifying question','Missing trip length'],guard:'Tone matches the airline brand: friendly, not too casual.',
store:[['Intent','Trip inspiration'],['Missing data asked','Trip length'],['Turns to resolve','2 (target ≤3)']],
chat:[{t:'u',x:'I want to go kitesurfing this summer.'},{t:'a',x:'That sounds like a great idea. How about two weeks in June or July?'},{t:'qr',x:['No','Yes']}]},
seat:{q:'Can you move me to a window seat?',conf:[94,'#2f9e5b'],rows:[['Customer data','CRM','ok','Booking ref, passenger'],['Preferences','Customer profile','ok','Prefers window'],['Trip details','Language model','ok','Outbound flight, Fri'],['Seat map','Booking API','ok','12A and 14F free']],
pat:'Single',graph:[['Request'],['Seat agent'],['Reply']],dec:['Act','With confirmation','All data present'],guard:'Change is reversible. Customer confirms before it is applied.',
store:[['Intent','Manage booking'],['Action','Seat 12C → 12A'],['Resolved without a person','Yes']],
chat:[{t:'u',x:'Can you move me to a window seat?'},{t:'r',x:'Checked booking and seat map'},{t:'a',x:'Seat 12A is free on Friday\'s flight, at no extra cost. Shall I switch you from 12C?'},{t:'qr',x:['Keep 12C','Switch to 12A']}]},
disr:{q:'My flight was cancelled and I\'m stuck at the airport.',conf:[48,'#c94235'],rows:[['Customer data','CRM','ok','Booking ref, status Gold'],['Trip details','Language model','ok','Cancelled flight today'],['Rebooking options','Booking API','ok','2 options tonight'],['Customer sentiment','Language model','no','Distressed · high stakes']],
pat:'Sequential',graph:[['Request'],['Rebooking'],['Summary'],['Human agent']],dec:['Hand over','To a human agent','High stakes, low confidence'],guard:'Empathetic tone. Full history passed to the agent so the customer doesn\'t repeat themselves.',
store:[['Intent','Disruption support'],['Handoff reason','Sentiment + stakes'],['Context passed','Booking, options, transcript']],
chat:[{t:'u',x:'My flight was cancelled and I\'m stuck at the airport.'},{t:'a',x:'I\'m sorry, that\'s stressful. I\'ve found two flights tonight and I\'m connecting you to an agent who can confirm one.'},{t:'h',x:['Connecting to an agent','Your booking is shared · ~2 min']}]},
fin:{q:'Can I afford to upgrade to business class?',conf:[81,'#2f9e5b'],rows:[['Customer data','CRM','ok','Linked payment card'],['Fare difference','Booking API','ok','€640 upgrade'],['Miles balance','Loyalty','ok','42,000 miles'],['Budget','Language model','miss','No budget stated']],
pat:'Sequential',graph:[['Request'],['Fares'],['Loyalty'],['Reply']],dec:['Suggest','Options, not advice','Payment needs consent'],guard:'No financial advice. Shows options and costs; the customer decides.',
store:[['Intent','Finance check'],['Offer shown','Miles + €210'],['Conversion','Tracked for cross-sell']],
chat:[{t:'u',x:'Can I afford to upgrade to business class?'},{t:'r',x:'Checked fare and miles balance'},{t:'a',x:'The upgrade is €640, or 30,000 miles plus €210. You have 42,000 miles.'},{t:'qr',x:['Pay €640','Use miles']}]},
nav:{q:'Where\'s my gate, and do I have time for the lounge?',conf:[90,'#2f9e5b'],rows:[['Trip details','Booking API','ok','Gate B12, boards 08:30'],['Location','Device','ok','Terminal 2, security'],['Walking time','Airport map','ok','11 minutes'],['Lounge access','Loyalty','ok','Gold · free entry']],
pat:'Parallel',graph:[['Request'],['Gate','Lounge'],['Merge'],['Reply']],dec:['Act','Answer with directions','All data present'],guard:'Location is used only for this answer and not stored.',
store:[['Intent','Navigate airport'],['Location stored','No'],['Follow-up','Boarding reminder set']],
chat:[{t:'u',x:'Where\'s my gate, and do I have time for the lounge?'},{t:'r',x:'Gate, walking time and lounge checked'},{t:'a',x:'Gate B12 is 11 minutes away. You have about 50 minutes in the lounge. I\'ll remind you at 08:05.'},{t:'qr',x:['Directions','Remind me']}]}};
const LAB={ok:'Ready',miss:'Missing',no:'Escalate'};
document.querySelectorAll('.cp-sim').forEach(w=>{const ids=(w.dataset.scn||'insp,seat,disr').split(','),N=+(w.dataset.steps||3);
const ph=w.querySelector('.ph'),pane=w.querySelector('.cp-pane'),scn=w.querySelector('.cp-scn'),st=w.querySelector('.cp-steps');
const SN=['Intent','Data & agents','Decide & respond','Analyse & store'];
scn.innerHTML=ids.map((id,i)=>`<button data-s="${id}">${INTS[id][0]}</button>`).join('');
st.style.gridTemplateColumns=`repeat(${N},1fr)`;st.innerHTML=SN.slice(0,N).map((n,i)=>`<button data-k="${i}"><i>${i+1}</i>${n}</button>`).join('');
let s=ids[0],k=0;
function render(){const d=S[s];
scn.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.s===s));st.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',+b.dataset.k===k));
const chat=k===0?[d.chat[0],{t:'typing'}]:k===1?[d.chat[0],{t:'r',x:'Checking what I know…'},{t:'typing'}]:d.chat;ph.innerHTML=CP_chat('air',chat);
const graph=N>3?`<div class="cp-graph"><span class="lab">${d.pat} pattern</span><div>${d.graph.map(g=>`<div class="col">${g.map(n=>`<span>${n}</span>`).join('')}</div>`).join('<i class="ar"></i>')}</div></div>`:`<div class="cp-guard"><b>Agent pattern</b>&nbsp;${d.pat}</div>`;
if(k===0)pane.innerHTML=`<h4>Message to intent</h4><p>The request is matched against the client's library of supported intents.</p><div class="cp-in"><b>User:</b> "${d.q}"</div><div class="cp-ints">${Object.keys(INTS).map(i=>`<div class="cp-int ${i===s?'on':''}"><b>${INTS[i][0]}</b><small>${i===s?'Matched':INTS[i][1]}</small></div>`).join('')}</div>`;
if(k===1)pane.innerHTML=`<h4>Required data &amp; agents</h4><p>Each intent needs specific data. The copilot checks what it already has before calling agents.</p><table class="cp-tbl"><tr><th>Status</th><th>Data</th><th>Source</th><th>Detail</th></tr>${d.rows.map(r=>`<tr><td><span class="st ${r[2]}">${LAB[r[2]]}</span></td><td>${r[0]}</td><td>${r[1]}</td><td>${r[3]}</td></tr>`).join('')}</table>${graph}`;
if(k===2)pane.innerHTML=`<h4>Decide &amp; respond</h4><p>Confidence and guardrails decide whether the copilot asks, acts or hands over.</p><div class="cp-conf"><span>Confidence</span><span class="bar"><i style="width:${d.conf[0]}%;background:${d.conf[1]}"></i></span><b>${d.conf[0]}%</b></div><div class="cp-dec"><div><small>Decision</small><b>${d.dec[0]}</b></div><div><small>How</small><b>${d.dec[1]}</b></div><div><small>Why</small><b>${d.dec[2]}</b></div></div><div class="cp-guard"><b>Guardrail</b>&nbsp;${d.guard}</div>`;
if(k===3)pane.innerHTML=`<h4>Analyse &amp; store</h4><p>Every conversation is logged for evaluation. These signals feed the learning loop and each client's dashboard.</p><div class="cp-dec">${d.store.map(x=>`<div><small>${x[0]}</small><b>${x[1]}</b></div>`).join('')}</div><div class="cp-eval"><span>Evaluated on</span>${['Grounded in data','On-brand tone','Task completed','Customer rating'].map(e=>`<em>${CP_I('check')}${e}</em>`).join('')}</div>`;}
scn.addEventListener('click',e=>{const b=e.target.closest('button');if(b){s=b.dataset.s;k=0;render();}});
st.addEventListener('click',e=>{const b=e.target.closest('button');if(b){k=+b.dataset.k;render();}});render();});

/* ---------- tabs ---------- */
document.querySelectorAll('[data-tabs]').forEach(w=>{const bs=w.querySelectorAll('.cp-tab'),ps=w.querySelectorAll('.cp-tp');
const set=i=>{bs.forEach((b,j)=>b.setAttribute('aria-pressed',i===j));ps.forEach((p,j)=>p.hidden=i!==j);};bs.forEach((b,i)=>b.addEventListener('click',()=>set(i)));set(0);});

/* ---------- zoom stepper over real artefacts ---------- */
document.querySelectorAll('.cp-zoom').forEach(z=>{const steps=JSON.parse(z.dataset.steps),nw=+z.dataset.w,nh=+z.dataset.h;
const fr=z.querySelector('.zf'),img=fr.querySelector('img'),cap=z.querySelector('.zc'),dots=z.querySelector('.zd');let i=0;
dots.innerHTML=steps.map((s,j)=>`<button aria-label="Step ${j+1}"><b>${String(j+1).padStart(2,'0')}</b><span>${s[4]}</span></button>`).join('');
function fit(){const fw=fr.clientWidth,fh=fr.clientHeight,[x,y,w,h]=steps[i],cw=w*nw,ch=h*nh,sc=Math.min(fw/cw,fh/ch)*.94;
img.style.width=nw*sc+'px';img.style.transform=`translate(${fw/2-(x+w/2)*nw*sc}px,${fh/2-(y+h/2)*nh*sc}px)`;}
function set(j){i=(j+steps.length)%steps.length;dots.querySelectorAll('button').forEach((b,k)=>b.setAttribute('aria-pressed',k===i));cap.textContent=steps[i][5]||'';fit();}
dots.addEventListener('click',e=>{const b=e.target.closest('button');if(b)set([...dots.children].indexOf(b));});
z.querySelector('.zp').addEventListener('click',()=>set(i-1));z.querySelector('.zn').addEventListener('click',()=>set(i+1));
new ResizeObserver(fit).observe(fr);img.complete?set(0):img.addEventListener('load',()=>set(0));});

icons();
})();


    /* ========== copilot-public-script-03.js ========== */
/* copilot-public.html — original script block 3; execution order preserved */
(function(){const t=document.getElementById('menuToggle'),m=document.getElementById('mobileMenu'),c=document.getElementById('menuClose');t&&t.addEventListener('click',()=>m.classList.add('active'));c&&c.addEventListener('click',()=>m.classList.remove('active'));})();
(function(){const i=document.getElementById('password-input'),b=document.getElementById('submit-btn'),e=document.getElementById('error-message');
i.addEventListener('input',()=>{b.disabled=!i.value;e.textContent='';});
function go(){if(i.value==="agileakrofi21")location.href="copilot-private.html";else e.textContent="Incorrect password";}
b.addEventListener('click',go);i.addEventListener('keypress',x=>{if(x.key==='Enter')go();});})();


    /* ========== portfolio-shared.js ========== */
document.addEventListener('DOMContentLoaded',()=>{const b=document.querySelector('.portfolio-nav-toggle'),l=document.querySelector('.portfolio-nav-links');if(!b||!l)return;b.addEventListener('click',()=>{const opened=l.classList.toggle('is-open');b.setAttribute('aria-expanded',String(opened))});});


  }

  if (page === "copilot-private" && phase === "body") {

    /* ========== copilot-private-script-02.js ========== */
/* copilot-private.html — original script block 2; execution order preserved */
(function(){const t=document.getElementById('menuToggle'),m=document.getElementById('mobileMenu'),c=document.getElementById('menuClose');t&&t.addEventListener('click',()=>m.classList.add('active'));c&&c.addEventListener('click',()=>m.classList.remove('active'));})();


    /* ========== copilot-phones.js ========== */
(function(){
const ic={
send:'<path d="M4 12l16-8-6 16-2-7z"/>',mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
check:'<path d="M5 12l5 5L20 7"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',bell:'<path d="M6 16v-5a6 6 0 1 1 12 0v5l1.5 2h-15z"/>',
menu:'<path d="M4 8h16M4 16h16"/>',plane:'<path d="M3 13l18-7-5 14-4-5z"/>',home:'<path d="M4 11l8-7 8 7v9H4z"/>',
bag:'<path d="M5 8h14l-1 12H6zM9 8a3 3 0 0 1 6 0"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
card:'<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/>',chart:'<path d="M4 19V9M10 19V5M16 19v-7M22 19H2"/>'};
const I=(n)=>`<svg viewBox="0 0 24 24">${ic[n]}</svg>`;
const SB=`<div class="sb"><b>9:41</b><span class="ic"><svg viewBox="0 0 18 12"><rect x="0" y="8" width="3" height="4" rx=".8"/><rect x="5" y="5.5" width="3" height="6.5" rx=".8"/><rect x="10" y="3" width="3" height="9" rx=".8"/><rect x="15" y="0" width="3" height="12" rx=".8"/></svg><svg viewBox="0 0 27 12"><rect x=".5" y=".5" width="23" height="11" rx="3.5" fill="none" stroke="currentColor" opacity=".4"/><rect x="2" y="2" width="20" height="8" rx="2"/></svg></span></div>`;
const orb=(c='')=>`<span class="orb ${c}"></span>`;
const BR={air:['Airline','plane'],ret:['Maison','bag'],bank:['Bank','card']};
const head=(sk)=>`<div class="cp-head"><span class="cp-brand">${I(BR[sk][1])}<b>${BR[sk][0]}</b></span><span class="cp-ai">${orb('sm')}<i>AI assistant</i></span></div>`;
const input=`<div class="ci"><span>Ask me anything</span>${orb('in')}</div>`;
function msg(m){
 if(m.t==='u')return `<div class="cb u">${m.x}</div>`;
 if(m.t==='r')return `<div class="cr">${I('info')}<span>${m.x}</span></div>`;
 if(m.t==='typing')return `<div class="cb a ty">${orb('av')}<span class="dots"><i></i><i></i><i></i></span></div>`;
 if(m.t==='opt')return `<div class="co">${m.x.map(o=>`<div class="opt"><div><small>${o[0]}</small><b>${o[1]}</b><small>${o[2]}</small></div><em>${o[3]}</em></div>`).join('')}</div>`;
 if(m.t==='prod')return `<div class="cpr">${m.x.map(o=>`<div><span class="im" style="background:${o[2]}"></span><b>${o[0]}</b><small>${o[1]}</small></div>`).join('')}</div>`;
 if(m.t==='qr')return `<div class="qr">${m.x.map((q,i)=>`<span class="${i?'y':''}">${q}</span>`).join('')}</div>`;
 if(m.t==='h')return `<div class="hand">${I('user')}<div><b>${m.x[0]}</b><small>${m.x[1]}</small></div></div>`;
 return `<div class="cb a">${orb('av')}<span>${m.x}</span></div>`;
}
window.CP_chat=(sk,msgs)=>`<div class="scr sk-${sk}">${SB}${head(sk)}<div class="cp-msgs">${msgs.map(msg).join('')}</div>${input}</div>`;
const C={
air:[{t:'u',x:'Find me flights to Lisbon in July, under €600.'},{t:'r',x:'Checked profile, dates and fares · 3 sources'},{t:'a',x:'Here are the best options for July 1 to 15:'},{t:'opt',x:[['BER to LIS · Direct','07:45 – 13:45','Premium economy','€510'],['BER to LIS · Direct','12:10 – 18:05','Economy · meal','€380']]},{t:'qr',x:['Other dates','Book €510']}],
ret:[{t:'u',x:'I need a gift for my sister, she loves skincare.'},{t:'a',x:'Lovely. Based on what she likes, these are popular right now:'},{t:'prod',x:[['Glow serum','€48','linear-gradient(135deg,#f3d9c6,#e8b99c)'],['Night cream','€62','linear-gradient(135deg,#e9e2d6,#cbbba3)']]},{t:'r',x:'Personalised from purchase history'},{t:'qr',x:['Show more','Add gift wrap']}],
bank:[{t:'u',x:'Can I afford a €2,000 holiday in August?'},{t:'r',x:'Read-only access to 2 accounts'},{t:'a',x:'Yes. After bills you\'ll have about <b>€3,140</b> spare in August. Setting aside €500 a month gets you there.'},{t:'qr',x:['Not now','Create savings pot']},{t:'h',x:['Prefer to talk it through?','An adviser is available now']}]
};
const home=`<div class="scr sk-air">${SB}<div class="cp-pad">
<div class="hm-top"><span>${I('menu')}</span><span class="cp-brand">${I('plane')}<b>Airline</b></span><span>${I('bell')}</span></div>
<b class="hm-h">Hi Betty,<br>welcome back</b>
<div class="hm-f"><span><small>From</small>New York (JFK)</span><span><small>To</small>Barcelona (BCN)</span><span><small>Depart</small>23/11</span><span><small>Return</small>30/11</span></div>
<span class="hm-btn">Search</span>
<b class="hm-s">Suggested by your assistant</b>
<div class="hm-sug"><span>${I('globe')}<b>Gate B12</b><small>Directions</small></span><span>${I('check')}<b>Check-in open</b><small>Seat 12C</small></span></div>
<div class="hm-j"><div><small>JFK</small><b>7:50</b></div><i></i><div style="text-align:right"><small>BCN</small><b>7:00</b></div></div>
</div><div class="hm-tb"><span>${I('home')}<i>Home</i></span><span>${I('plane')}<i>Trips</i></span><span class="mid">${orb('tb')}</span><span>${I('globe')}<i>Explore</i></span><span>${I('user')}<i>Profile</i></span></div></div>`;
window.CP_C=C;window.CP_home=home;
document.querySelectorAll('[data-cp]').forEach(el=>{const k=el.dataset.cp;el.innerHTML=k==='home'?home:CP_chat(k,C[k]);});
})();


    /* ========== copilot-private-script-03.js ========== */
/* copilot-private.html — original script block 3; execution order preserved */
document.querySelectorAll('[data-chat]').forEach(e=>e.innerHTML=CP_chat('air',JSON.parse(e.dataset.chat)));


    /* ========== copilot-kit.js ========== */
(function(){
/* ---------- icons ---------- */
const P={
db:'<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
docs:'<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17.5" cy="9" r="2.5"/><path d="M16.5 14.2A5 5 0 0 1 22 19"/>',
brand:'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/>',
spark:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
layers:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
brain:'<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a2 2 0 0 0-3-1zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>',
chat:'<path d="M4 5h16v11H9l-5 4z"/><path d="M8 10h8"/>',
shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
loop:'<path d="M20 12a8 8 0 0 1-14 5.3M4 12A8 8 0 0 1 18 6.7"/><path d="M18 3v4h-4M6 21v-4h4"/>',
plane:'<path d="M3 13l18-7-5 14-4-5z"/><path d="M12 15l4-5"/>',
bank:'<path d="M3 9l9-5 9 5M5 9v9M10 9v9M14 9v9M19 9v9M3 20h18"/>',
bag:'<path d="M5 8h14l-1 12H6z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
bell:'<path d="M5 17h14M7 17a5 5 0 0 1 10 0M12 9V7M10 7h4"/><path d="M3 20h18"/>',
palette:'<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2s-1-1.5-1-2.5 1-1.5 2-1.5h2a4 4 0 0 0 4-4c0-4.4-4-8-9-8z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/>',
voice:'<path d="M4 10v4M8 7v10M12 4v16M16 7v10M20 10v4"/>',
bot:'<rect x="5" y="8" width="14" height="11" rx="3"/><path d="M12 4v4M9 13h.01M15 13h.01M3 13v2M21 13v2"/>',
plug:'<path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0zM12 17v4"/>',
rules:'<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2"/>',
hand:'<path d="M7 11V6a1.5 1.5 0 0 1 3 0v4M10 10V4.5a1.5 1.5 0 0 1 3 0V10M13 10V5.5a1.5 1.5 0 0 1 3 0V12M16 9a1.5 1.5 0 0 1 3 0v4a7 7 0 0 1-7 7h-1a6 6 0 0 1-5-3l-2.5-4a1.5 1.5 0 0 1 2.5-1.6L7 13"/>',
check:'<path d="M5 12l5 5L20 7"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',
mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
card:'<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/>',
lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
heart:'<path d="M12 20s-7-4.4-9-8.6C1.6 8.3 3.6 5 7 5c2 0 3.6 1.2 5 3 1.4-1.8 3-3 5-3 3.4 0 5.4 3.3 4 6.4-2 4.2-9 8.6-9 8.6z"/>',
star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
chart:'<path d="M4 19V9M10 19V5M16 19v-7M22 19H2"/>',eye:'<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
gift:'<rect x="3" y="8" width="18" height="4"/><path d="M5 12v9h14v-9M12 8v13M12 8S10 3 7.5 4.5 9 8 12 8zm0 0s2-5 4.5-3.5S15 8 12 8z"/>',
refresh:'<path d="M20 12a8 8 0 1 1-2.3-5.7M20 4v4h-4"/>',phone:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
map:'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',doc:'<path d="M6 3h9l4 4v14H6z"/><path d="M9 12h6M9 16h4"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',share:'<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 11l7.6-4M8.2 13l7.6 4"/>',
crew:'<circle cx="12" cy="7" r="4"/><path d="M5 21v-2a7 7 0 0 1 14 0v2M9 14l3 3 3-3"/>',grid:'<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/>'};
window.CP_I=n=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${P[n]||''}</svg>`;
function icons(root){(root||document).querySelectorAll('i[data-i]').forEach(e=>{e.innerHTML=CP_I(e.dataset.i);e.classList.add('ico');});}
window.CP_icons=icons;

/* ---------- architecture detail ---------- */
const AD={
data:['Enterprise data','CRM records, bookings, transactions and profiles, read through secure connectors.','Personal data is only surfaced when it helps the task, and the customer can see why.'],
know:['Knowledge sources','Policies, FAQs and product content the copilot can cite.','Answers that rely on policy show their source, so customers can check them.'],
ctx:['Context signals','Intent, journey stage, history and preferences.','The same question gets a different answer before and after booking.'],
brand:['Brand & rules','Voice, tone, products and compliance rules per client.','Set once per client as parameters. No UI changes needed.'],
orch:['Agent orchestration','Chooses a single agent, a sequence or parallel agents for each request.','The interface shows progress differently for quick and multi-step work.'],
res:['Resource engine','Retrieval, ranking and grounding in client data.','Grounded answers carry a source chip; ungrounded ones are not shown.'],
reas:['Reasoning engine','LLM reasoning, planning and tool use.','Visible reasoning cards when they build trust; hidden when they add noise.'],
nudge:['Nudging engine','Tone, suggestions and next best actions.','Suggestions are quick replies, never automatic actions.'],
guard:['Guardrails & governance','Safety, privacy, tone and policy checks on every response.','Blocked or uncertain responses fall back to a question or a person.'],
learn:['Learning loop','Feedback, evaluation and analytics.','Thumbs up/down and handoff rates feed back into prompts and rules.'],
v1:['Travel','Trip planning, disruption and loyalty support.','First client skin and reference implementation.'],
v2:['Banking','Account help, transactions and financial guidance.','Stricter handoff thresholds and formal tone.'],
v3:['Retail','Product discovery, orders and personalised offers.','Visual product cards and gifting flows.'],
v4:['Hospitality','Reservations, in-stay support and rewards.','Concierge-style tone and booking cards.']};
const FLOW=[['data','know','ctx','brand'],['orch'],['res'],['reas'],['nudge'],['guard'],['out'],['learn']];
const STEP_T=['Inputs gathered','Agents chosen','Grounding in client data','Reasoning and tool use','Shaping tone and next action','Checking safety and policy','Rendered in every client skin','Logged for evaluation'];
document.querySelectorAll('.cp-arch2').forEach(ar=>{const det=ar.parentElement.querySelector('.cp-adet');ar.classList.add('live','motion');
const outs=[...ar.querySelectorAll('.a-out')];
const ctl=document.createElement('div');ctl.className='a-ctl';ctl.innerHTML=`<button type="button" class="a-play" aria-pressed="true"><span class="pz">❚❚</span><span class="pl">▶</span></button><span class="a-now"></span>`;ar.before(ctl);
const now=ctl.querySelector('.a-now'),btn=ctl.querySelector('.a-play');
let i=0,v=0,timer=null,typ=null;const lb=ar.querySelector('[data-k="learn"] small'),lo=lb?lb.textContent:'';let lc=0;const LM=['Rating logged · tone scored 4.6/5','Answer checked against its source','Handoff reviewed · threshold tuned','Prompts and rules updated for next time'];
function clear(){ar.querySelectorAll('.act,.on,.fed').forEach(n=>n.classList.remove('act','on','fed'));}
function type(){}
function tick(){clear();const ks=FLOW[i];ar.classList.remove('learning');if(lb)lb.textContent=lo;if(ks[0]==='learn'){ar.classList.add('learning');if(lb)lb.textContent=LM[lc++%LM.length];['res','reas','nudge'].forEach(k=>ar.querySelector(`[data-k="${k}"]`).classList.add('fed'));}
if(ks[0]==='out'){outs.forEach((o,n)=>setTimeout(()=>o.classList.add('act'),n*140));ar.querySelectorAll('.a-conn')[1].classList.add('act');}
else ks.forEach(k=>{const n=ar.querySelector(`[data-k="${k}"]`);n&&n.classList.add('act');});
if(i===1)ar.querySelectorAll('.a-conn')[0].classList.add('act');
now.innerHTML=`<b>${String(i+1).padStart(2,'0')}</b>${STEP_T[i]}`;
i++;if(i>=FLOW.length)i=0;}
function play(){if(timer)return;btn.setAttribute('aria-pressed','true');tick();timer=setInterval(tick,1200);}
function pause(){clearInterval(timer);timer=null;btn.setAttribute('aria-pressed','false');}
btn.addEventListener('click',()=>timer?pause():play());
if(det){const set=k=>{pause();clear();const n=ar.querySelector(`[data-k="${k}"]`);n.classList.add('on');const d=AD[k];now.innerHTML='Paused · select ▶ to resume';det.innerHTML=`<div><span>Component</span><b>${d[0]}</b></div><div><span>What it does</span><p>${d[1]}</p></div><div><span>Design decision</span><p>${d[2]}</p></div>`;};
ar.querySelectorAll('[data-k]').forEach(n=>{n.tabIndex=0;n.addEventListener('click',()=>set(n.dataset.k));n.addEventListener('keydown',e=>{if(e.key==='Enter')set(n.dataset.k);});});
const d=AD.reas;det.innerHTML=`<div><span>Component</span><b>Select any part</b></div><div><span>What it does</span><p>Pause the flow and select a component to see what it does.</p></div><div><span>Design decision</span><p>Each part of the engine led to a decision in the interface.</p></div>`;}
else ar.classList.remove('live');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){if(btn.getAttribute('aria-pressed')==='true')play();}else{clearInterval(timer);timer=null;}}),{threshold:.3});io.observe(ar);});
document.querySelectorAll('.cj-uc').forEach(b=>b.addEventListener('click',()=>b.classList.toggle('open')));

/* ---------- configuration ---------- */
const CF={
air:{n:'Airline',sw:['#0b1a2e','#2f5bff','#15294a','#ffffff'],f:['Switzer','Aa'],tone:1,ag:[['plane','Booking',1],['refresh','Disruption',1],['star','Loyalty',1],['card','Finance',0]],ds:[['users','CRM',1],['plane','Bookings',1],['docs','Policies',1],['bag','Catalogue',0],['bank','Accounts',0]],ru:[['Suggest upgrades',1],['Take payments',1],['Rebook without asking',0]],h:55},
ret:{n:'Retail',sw:['#fbf7f1','#1d1a16','#efe6d8','#e8b99c'],f:['Georgia','Aa'],tone:2,ag:[['search','Product search',1],['bag','Orders',1],['gift','Gifting',1],['card','Finance',0]],ds:[['users','CRM',1],['bag','Catalogue',1],['docs','Policies',1],['plane','Bookings',0],['bank','Accounts',0]],ru:[['Recommend products',1],['Apply discounts',1],['Give skin-health advice',0]],h:40},
bank:{n:'Banking',sw:['#121212','#e0312b','#1f1f1f','#ffffff'],f:['Switzer','Aa'],tone:0,ag:[['bank','Accounts',1],['chart','Savings',1],['chat','Support',1],['spark','Investing',0]],ds:[['users','CRM',1],['bank','Accounts',1],['docs','Policies',1],['bag','Catalogue',0],['plane','Bookings',0]],ru:[['Show balances',1],['Create savings pots',1],['Give investment advice',0]],h:75}};
const TONES=['Formal','Warm','Playful'];
document.querySelectorAll('.cp-cfg').forEach(w=>{const ctl=w.querySelector('.cfg-ctl'),ph=w.querySelector('.ph');
function set(k){const c=CF[k];w.querySelectorAll('.cfg-pre button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.k===k));
ctl.innerHTML=`<div class="cfg-g"><span class="cfg-h"><i data-i="palette"></i>Brand tokens</span><div class="cfg-sw">${c.sw.map(s=>`<i style="background:${s}"></i>`).join('')}<b style="font-family:${c.f[0]},serif">${c.f[1]}</b></div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="voice"></i>Tone of voice</span><div class="cfg-seg">${TONES.map((t,i)=>`<span class="${i===c.tone?'on':''}">${t}</span>`).join('')}</div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="bot"></i>Agents enabled</span><div class="cfg-ag">${c.ag.map(a=>`<span class="${a[2]?'':'off'}"><i data-i="${a[0]}"></i>${a[1]}<em></em></span>`).join('')}</div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="plug"></i>Data sources</span><div class="cfg-ds">${c.ds.map(a=>`<span class="${a[2]?'on':''}"><i data-i="${a[0]}"></i>${a[1]}</span>`).join('')}</div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="rules"></i>Content behaviour</span><div class="cfg-ru">${c.ru.map(r=>`<span class="${r[1]?'y':'n'}"><i data-i="${r[1]?'check':'x'}"></i>${r[0]}</span>`).join('')}</div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="hand"></i>Human handoff threshold</span><div class="cfg-sl"><span><i style="width:${c.h}%"></i><b style="left:${c.h}%"></b></span><em>Hands over to a person when confidence drops below ${c.h}%</em></div></div>`;
icons(ctl);ph.innerHTML=CP_chat(k,CP_C[k]);}
w.querySelectorAll('.cfg-pre button').forEach(b=>b.addEventListener('click',()=>set(b.dataset.k)));set('air');});

/* ---------- simulator ---------- */
const INTS={insp:['Trip inspiration','Ideas when you don\'t know where to go'],seat:['Manage booking','Seats, meals, changes'],disr:['Disruption support','Cancellations and delays'],fin:['Finance check','Budgets and payment'],nav:['Navigate airport','Gates, lounges, shops'],hotel:['Hotel booking','Find and book a stay']};
const S={
insp:{q:'I want to go kitesurfing this summer.',conf:[72,'#e2a23b'],rows:[['Customer data','CRM','ok','Name, home airport (BER)'],['Preferences','Customer profile','ok','Business class, window seat'],['Trip details','Language model','miss','Duration and dates missing'],['Destinations','Editorial content','ok','Kitesurf spots, July weather'],['Fares','Booking API','miss','Waiting on dates']],
pat:'Parallel',graph:[['Request'],['Destinations','Fares'],['Merge'],['Reply']],dec:['Ask','One clarifying question','Missing trip length'],guard:'Tone matches the airline brand: friendly, not too casual.',
store:[['Intent','Trip inspiration'],['Missing data asked','Trip length'],['Turns to resolve','2 (target ≤3)']],
chat:[{t:'u',x:'I want to go kitesurfing this summer.'},{t:'a',x:'That sounds like a great idea. How about two weeks in June or July?'},{t:'qr',x:['No','Yes']}]},
seat:{q:'Can you move me to a window seat?',conf:[94,'#2f9e5b'],rows:[['Customer data','CRM','ok','Booking ref, passenger'],['Preferences','Customer profile','ok','Prefers window'],['Trip details','Language model','ok','Outbound flight, Fri'],['Seat map','Booking API','ok','12A and 14F free']],
pat:'Single',graph:[['Request'],['Seat agent'],['Reply']],dec:['Act','With confirmation','All data present'],guard:'Change is reversible. Customer confirms before it is applied.',
store:[['Intent','Manage booking'],['Action','Seat 12C → 12A'],['Resolved without a person','Yes']],
chat:[{t:'u',x:'Can you move me to a window seat?'},{t:'r',x:'Checked booking and seat map'},{t:'a',x:'Seat 12A is free on Friday\'s flight, at no extra cost. Shall I switch you from 12C?'},{t:'qr',x:['Keep 12C','Switch to 12A']}]},
disr:{q:'My flight was cancelled and I\'m stuck at the airport.',conf:[48,'#c94235'],rows:[['Customer data','CRM','ok','Booking ref, status Gold'],['Trip details','Language model','ok','Cancelled flight today'],['Rebooking options','Booking API','ok','2 options tonight'],['Customer sentiment','Language model','no','Distressed · high stakes']],
pat:'Sequential',graph:[['Request'],['Rebooking'],['Summary'],['Human agent']],dec:['Hand over','To a human agent','High stakes, low confidence'],guard:'Empathetic tone. Full history passed to the agent so the customer doesn\'t repeat themselves.',
store:[['Intent','Disruption support'],['Handoff reason','Sentiment + stakes'],['Context passed','Booking, options, transcript']],
chat:[{t:'u',x:'My flight was cancelled and I\'m stuck at the airport.'},{t:'a',x:'I\'m sorry, that\'s stressful. I\'ve found two flights tonight and I\'m connecting you to an agent who can confirm one.'},{t:'h',x:['Connecting to an agent','Your booking is shared · ~2 min']}]},
fin:{q:'Can I afford to upgrade to business class?',conf:[81,'#2f9e5b'],rows:[['Customer data','CRM','ok','Linked payment card'],['Fare difference','Booking API','ok','€640 upgrade'],['Miles balance','Loyalty','ok','42,000 miles'],['Budget','Language model','miss','No budget stated']],
pat:'Sequential',graph:[['Request'],['Fares'],['Loyalty'],['Reply']],dec:['Suggest','Options, not advice','Payment needs consent'],guard:'No financial advice. Shows options and costs; the customer decides.',
store:[['Intent','Finance check'],['Offer shown','Miles + €210'],['Conversion','Tracked for cross-sell']],
chat:[{t:'u',x:'Can I afford to upgrade to business class?'},{t:'r',x:'Checked fare and miles balance'},{t:'a',x:'The upgrade is €640, or 30,000 miles plus €210. You have 42,000 miles.'},{t:'qr',x:['Pay €640','Use miles']}]},
nav:{q:'Where\'s my gate, and do I have time for the lounge?',conf:[90,'#2f9e5b'],rows:[['Trip details','Booking API','ok','Gate B12, boards 08:30'],['Location','Device','ok','Terminal 2, security'],['Walking time','Airport map','ok','11 minutes'],['Lounge access','Loyalty','ok','Gold · free entry']],
pat:'Parallel',graph:[['Request'],['Gate','Lounge'],['Merge'],['Reply']],dec:['Act','Answer with directions','All data present'],guard:'Location is used only for this answer and not stored.',
store:[['Intent','Navigate airport'],['Location stored','No'],['Follow-up','Boarding reminder set']],
chat:[{t:'u',x:'Where\'s my gate, and do I have time for the lounge?'},{t:'r',x:'Gate, walking time and lounge checked'},{t:'a',x:'Gate B12 is 11 minutes away. You have about 50 minutes in the lounge. I\'ll remind you at 08:05.'},{t:'qr',x:['Directions','Remind me']}]}};
const LAB={ok:'Ready',miss:'Missing',no:'Escalate'};
document.querySelectorAll('.cp-sim').forEach(w=>{const ids=(w.dataset.scn||'insp,seat,disr').split(','),N=+(w.dataset.steps||3);
const ph=w.querySelector('.ph'),pane=w.querySelector('.cp-pane'),scn=w.querySelector('.cp-scn'),st=w.querySelector('.cp-steps');
const SN=['Intent','Data & agents','Decide & respond','Analyse & store'];
scn.innerHTML=ids.map((id,i)=>`<button data-s="${id}">${INTS[id][0]}</button>`).join('');
st.style.gridTemplateColumns=`repeat(${N},1fr)`;st.innerHTML=SN.slice(0,N).map((n,i)=>`<button data-k="${i}"><i>${i+1}</i>${n}</button>`).join('');
let s=ids[0],k=0;
function render(){const d=S[s];
scn.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.s===s));st.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',+b.dataset.k===k));
const chat=k===0?[d.chat[0],{t:'typing'}]:k===1?[d.chat[0],{t:'r',x:'Checking what I know…'},{t:'typing'}]:d.chat;ph.innerHTML=CP_chat('air',chat);
const graph=N>3?`<div class="cp-graph"><span class="lab">${d.pat} pattern</span><div>${d.graph.map(g=>`<div class="col">${g.map(n=>`<span>${n}</span>`).join('')}</div>`).join('<i class="ar"></i>')}</div></div>`:`<div class="cp-guard"><b>Agent pattern</b>&nbsp;${d.pat}</div>`;
if(k===0)pane.innerHTML=`<h4>Message to intent</h4><p>The request is matched against the client's library of supported intents.</p><div class="cp-in"><b>User:</b> "${d.q}"</div><div class="cp-ints">${Object.keys(INTS).map(i=>`<div class="cp-int ${i===s?'on':''}"><b>${INTS[i][0]}</b><small>${i===s?'Matched':INTS[i][1]}</small></div>`).join('')}</div>`;
if(k===1)pane.innerHTML=`<h4>Required data &amp; agents</h4><p>Each intent needs specific data. The copilot checks what it already has before calling agents.</p><table class="cp-tbl"><tr><th>Status</th><th>Data</th><th>Source</th><th>Detail</th></tr>${d.rows.map(r=>`<tr><td><span class="st ${r[2]}">${LAB[r[2]]}</span></td><td>${r[0]}</td><td>${r[1]}</td><td>${r[3]}</td></tr>`).join('')}</table>${graph}`;
if(k===2)pane.innerHTML=`<h4>Decide &amp; respond</h4><p>Confidence and guardrails decide whether the copilot asks, acts or hands over.</p><div class="cp-conf"><span>Confidence</span><span class="bar"><i style="width:${d.conf[0]}%;background:${d.conf[1]}"></i></span><b>${d.conf[0]}%</b></div><div class="cp-dec"><div><small>Decision</small><b>${d.dec[0]}</b></div><div><small>How</small><b>${d.dec[1]}</b></div><div><small>Why</small><b>${d.dec[2]}</b></div></div><div class="cp-guard"><b>Guardrail</b>&nbsp;${d.guard}</div>`;
if(k===3)pane.innerHTML=`<h4>Analyse &amp; store</h4><p>Every conversation is logged for evaluation. These signals feed the learning loop and each client's dashboard.</p><div class="cp-dec">${d.store.map(x=>`<div><small>${x[0]}</small><b>${x[1]}</b></div>`).join('')}</div><div class="cp-eval"><span>Evaluated on</span>${['Grounded in data','On-brand tone','Task completed','Customer rating'].map(e=>`<em>${CP_I('check')}${e}</em>`).join('')}</div>`;}
scn.addEventListener('click',e=>{const b=e.target.closest('button');if(b){s=b.dataset.s;k=0;render();}});
st.addEventListener('click',e=>{const b=e.target.closest('button');if(b){k=+b.dataset.k;render();}});render();});

/* ---------- tabs ---------- */
document.querySelectorAll('[data-tabs]').forEach(w=>{const bs=w.querySelectorAll('.cp-tab'),ps=w.querySelectorAll('.cp-tp');
const set=i=>{bs.forEach((b,j)=>b.setAttribute('aria-pressed',i===j));ps.forEach((p,j)=>p.hidden=i!==j);};bs.forEach((b,i)=>b.addEventListener('click',()=>set(i)));set(0);});

/* ---------- zoom stepper over real artefacts ---------- */
document.querySelectorAll('.cp-zoom').forEach(z=>{const steps=JSON.parse(z.dataset.steps),nw=+z.dataset.w,nh=+z.dataset.h;
const fr=z.querySelector('.zf'),img=fr.querySelector('img'),cap=z.querySelector('.zc'),dots=z.querySelector('.zd');let i=0;
dots.innerHTML=steps.map((s,j)=>`<button aria-label="Step ${j+1}"><b>${String(j+1).padStart(2,'0')}</b><span>${s[4]}</span></button>`).join('');
function fit(){const fw=fr.clientWidth,fh=fr.clientHeight,[x,y,w,h]=steps[i],cw=w*nw,ch=h*nh,sc=Math.min(fw/cw,fh/ch)*.94;
img.style.width=nw*sc+'px';img.style.transform=`translate(${fw/2-(x+w/2)*nw*sc}px,${fh/2-(y+h/2)*nh*sc}px)`;}
function set(j){i=(j+steps.length)%steps.length;dots.querySelectorAll('button').forEach((b,k)=>b.setAttribute('aria-pressed',k===i));cap.textContent=steps[i][5]||'';fit();}
dots.addEventListener('click',e=>{const b=e.target.closest('button');if(b)set([...dots.children].indexOf(b));});
z.querySelector('.zp').addEventListener('click',()=>set(i-1));z.querySelector('.zn').addEventListener('click',()=>set(i+1));
new ResizeObserver(fit).observe(fr);img.complete?set(0):img.addEventListener('load',()=>set(0));});

icons();
})();


  }

  if (page === "accrupay-public" && phase === "body") {

    /* ========== copilot-kit.js ========== */
(function(){
/* ---------- icons ---------- */
const P={
db:'<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
docs:'<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17.5" cy="9" r="2.5"/><path d="M16.5 14.2A5 5 0 0 1 22 19"/>',
brand:'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/>',
spark:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
layers:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
brain:'<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a2 2 0 0 0-3-1zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>',
chat:'<path d="M4 5h16v11H9l-5 4z"/><path d="M8 10h8"/>',
shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
loop:'<path d="M20 12a8 8 0 0 1-14 5.3M4 12A8 8 0 0 1 18 6.7"/><path d="M18 3v4h-4M6 21v-4h4"/>',
plane:'<path d="M3 13l18-7-5 14-4-5z"/><path d="M12 15l4-5"/>',
bank:'<path d="M3 9l9-5 9 5M5 9v9M10 9v9M14 9v9M19 9v9M3 20h18"/>',
bag:'<path d="M5 8h14l-1 12H6z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
bell:'<path d="M5 17h14M7 17a5 5 0 0 1 10 0M12 9V7M10 7h4"/><path d="M3 20h18"/>',
palette:'<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2s-1-1.5-1-2.5 1-1.5 2-1.5h2a4 4 0 0 0 4-4c0-4.4-4-8-9-8z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/>',
voice:'<path d="M4 10v4M8 7v10M12 4v16M16 7v10M20 10v4"/>',
bot:'<rect x="5" y="8" width="14" height="11" rx="3"/><path d="M12 4v4M9 13h.01M15 13h.01M3 13v2M21 13v2"/>',
plug:'<path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0zM12 17v4"/>',
rules:'<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2"/>',
hand:'<path d="M7 11V6a1.5 1.5 0 0 1 3 0v4M10 10V4.5a1.5 1.5 0 0 1 3 0V10M13 10V5.5a1.5 1.5 0 0 1 3 0V12M16 9a1.5 1.5 0 0 1 3 0v4a7 7 0 0 1-7 7h-1a6 6 0 0 1-5-3l-2.5-4a1.5 1.5 0 0 1 2.5-1.6L7 13"/>',
check:'<path d="M5 12l5 5L20 7"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',
mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
card:'<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/>',
lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
heart:'<path d="M12 20s-7-4.4-9-8.6C1.6 8.3 3.6 5 7 5c2 0 3.6 1.2 5 3 1.4-1.8 3-3 5-3 3.4 0 5.4 3.3 4 6.4-2 4.2-9 8.6-9 8.6z"/>',
star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
chart:'<path d="M4 19V9M10 19V5M16 19v-7M22 19H2"/>',eye:'<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
gift:'<rect x="3" y="8" width="18" height="4"/><path d="M5 12v9h14v-9M12 8v13M12 8S10 3 7.5 4.5 9 8 12 8zm0 0s2-5 4.5-3.5S15 8 12 8z"/>',
refresh:'<path d="M20 12a8 8 0 1 1-2.3-5.7M20 4v4h-4"/>',phone:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
map:'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',doc:'<path d="M6 3h9l4 4v14H6z"/><path d="M9 12h6M9 16h4"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',share:'<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 11l7.6-4M8.2 13l7.6 4"/>',
crew:'<circle cx="12" cy="7" r="4"/><path d="M5 21v-2a7 7 0 0 1 14 0v2M9 14l3 3 3-3"/>',grid:'<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/>'};
window.CP_I=n=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${P[n]||''}</svg>`;
function icons(root){(root||document).querySelectorAll('i[data-i]').forEach(e=>{e.innerHTML=CP_I(e.dataset.i);e.classList.add('ico');});}
window.CP_icons=icons;

/* ---------- architecture detail ---------- */
const AD={
data:['Enterprise data','CRM records, bookings, transactions and profiles, read through secure connectors.','Personal data is only surfaced when it helps the task, and the customer can see why.'],
know:['Knowledge sources','Policies, FAQs and product content the copilot can cite.','Answers that rely on policy show their source, so customers can check them.'],
ctx:['Context signals','Intent, journey stage, history and preferences.','The same question gets a different answer before and after booking.'],
brand:['Brand & rules','Voice, tone, products and compliance rules per client.','Set once per client as parameters. No UI changes needed.'],
orch:['Agent orchestration','Chooses a single agent, a sequence or parallel agents for each request.','The interface shows progress differently for quick and multi-step work.'],
res:['Resource engine','Retrieval, ranking and grounding in client data.','Grounded answers carry a source chip; ungrounded ones are not shown.'],
reas:['Reasoning engine','LLM reasoning, planning and tool use.','Visible reasoning cards when they build trust; hidden when they add noise.'],
nudge:['Nudging engine','Tone, suggestions and next best actions.','Suggestions are quick replies, never automatic actions.'],
guard:['Guardrails & governance','Safety, privacy, tone and policy checks on every response.','Blocked or uncertain responses fall back to a question or a person.'],
learn:['Learning loop','Feedback, evaluation and analytics.','Thumbs up/down and handoff rates feed back into prompts and rules.'],
v1:['Travel','Trip planning, disruption and loyalty support.','First client skin and reference implementation.'],
v2:['Banking','Account help, transactions and financial guidance.','Stricter handoff thresholds and formal tone.'],
v3:['Retail','Product discovery, orders and personalised offers.','Visual product cards and gifting flows.'],
v4:['Hospitality','Reservations, in-stay support and rewards.','Concierge-style tone and booking cards.']};
const FLOW=[['data','know','ctx','brand'],['orch'],['res'],['reas'],['nudge'],['guard'],['out'],['learn']];
const STEP_T=['Inputs gathered','Agents chosen','Grounding in client data','Reasoning and tool use','Shaping tone and next action','Checking safety and policy','Rendered in every client skin','Logged for evaluation'];
document.querySelectorAll('.cp-arch2').forEach(ar=>{const det=ar.parentElement.querySelector('.cp-adet');ar.classList.add('live','motion');
const outs=[...ar.querySelectorAll('.a-out')];
const ctl=document.createElement('div');ctl.className='a-ctl';ctl.innerHTML=`<button type="button" class="a-play" aria-pressed="true"><span class="pz">❚❚</span><span class="pl">▶</span></button><span class="a-now"></span>`;ar.before(ctl);
const now=ctl.querySelector('.a-now'),btn=ctl.querySelector('.a-play');
let i=0,v=0,timer=null,typ=null;const lb=ar.querySelector('[data-k="learn"] small'),lo=lb?lb.textContent:'';let lc=0;const LM=['Rating logged · tone scored 4.6/5','Answer checked against its source','Handoff reviewed · threshold tuned','Prompts and rules updated for next time'];
function clear(){ar.querySelectorAll('.act,.on,.fed').forEach(n=>n.classList.remove('act','on','fed'));}
function type(){}
function tick(){clear();const ks=FLOW[i];ar.classList.remove('learning');if(lb)lb.textContent=lo;if(ks[0]==='learn'){ar.classList.add('learning');if(lb)lb.textContent=LM[lc++%LM.length];['res','reas','nudge'].forEach(k=>ar.querySelector(`[data-k="${k}"]`).classList.add('fed'));}
if(ks[0]==='out'){outs.forEach((o,n)=>setTimeout(()=>o.classList.add('act'),n*140));ar.querySelectorAll('.a-conn')[1].classList.add('act');}
else ks.forEach(k=>{const n=ar.querySelector(`[data-k="${k}"]`);n&&n.classList.add('act');});
if(i===1)ar.querySelectorAll('.a-conn')[0].classList.add('act');
now.innerHTML=`<b>${String(i+1).padStart(2,'0')}</b>${STEP_T[i]}`;
i++;if(i>=FLOW.length)i=0;}
function play(){if(timer)return;btn.setAttribute('aria-pressed','true');tick();timer=setInterval(tick,1200);}
function pause(){clearInterval(timer);timer=null;btn.setAttribute('aria-pressed','false');}
btn.addEventListener('click',()=>timer?pause():play());
if(det){const set=k=>{pause();clear();const n=ar.querySelector(`[data-k="${k}"]`);n.classList.add('on');const d=AD[k];now.innerHTML='Paused · select ▶ to resume';det.innerHTML=`<div><span>Component</span><b>${d[0]}</b></div><div><span>What it does</span><p>${d[1]}</p></div><div><span>Design decision</span><p>${d[2]}</p></div>`;};
ar.querySelectorAll('[data-k]').forEach(n=>{n.tabIndex=0;n.addEventListener('click',()=>set(n.dataset.k));n.addEventListener('keydown',e=>{if(e.key==='Enter')set(n.dataset.k);});});
const d=AD.reas;det.innerHTML=`<div><span>Component</span><b>Select any part</b></div><div><span>What it does</span><p>Pause the flow and select a component to see what it does.</p></div><div><span>Design decision</span><p>Each part of the engine led to a decision in the interface.</p></div>`;}
else ar.classList.remove('live');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){if(btn.getAttribute('aria-pressed')==='true')play();}else{clearInterval(timer);timer=null;}}),{threshold:.3});io.observe(ar);});
document.querySelectorAll('.cj-uc').forEach(b=>b.addEventListener('click',()=>b.classList.toggle('open')));

/* ---------- configuration ---------- */
const CF={
air:{n:'Airline',sw:['#0b1a2e','#2f5bff','#15294a','#ffffff'],f:['Switzer','Aa'],tone:1,ag:[['plane','Booking',1],['refresh','Disruption',1],['star','Loyalty',1],['card','Finance',0]],ds:[['users','CRM',1],['plane','Bookings',1],['docs','Policies',1],['bag','Catalogue',0],['bank','Accounts',0]],ru:[['Suggest upgrades',1],['Take payments',1],['Rebook without asking',0]],h:55},
ret:{n:'Retail',sw:['#fbf7f1','#1d1a16','#efe6d8','#e8b99c'],f:['Georgia','Aa'],tone:2,ag:[['search','Product search',1],['bag','Orders',1],['gift','Gifting',1],['card','Finance',0]],ds:[['users','CRM',1],['bag','Catalogue',1],['docs','Policies',1],['plane','Bookings',0],['bank','Accounts',0]],ru:[['Recommend products',1],['Apply discounts',1],['Give skin-health advice',0]],h:40},
bank:{n:'Banking',sw:['#121212','#e0312b','#1f1f1f','#ffffff'],f:['Switzer','Aa'],tone:0,ag:[['bank','Accounts',1],['chart','Savings',1],['chat','Support',1],['spark','Investing',0]],ds:[['users','CRM',1],['bank','Accounts',1],['docs','Policies',1],['bag','Catalogue',0],['plane','Bookings',0]],ru:[['Show balances',1],['Create savings pots',1],['Give investment advice',0]],h:75}};
const TONES=['Formal','Warm','Playful'];
document.querySelectorAll('.cp-cfg').forEach(w=>{const ctl=w.querySelector('.cfg-ctl'),ph=w.querySelector('.ph');
function set(k){const c=CF[k];w.querySelectorAll('.cfg-pre button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.k===k));
ctl.innerHTML=`<div class="cfg-g"><span class="cfg-h"><i data-i="palette"></i>Brand tokens</span><div class="cfg-sw">${c.sw.map(s=>`<i style="background:${s}"></i>`).join('')}<b style="font-family:${c.f[0]},serif">${c.f[1]}</b></div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="voice"></i>Tone of voice</span><div class="cfg-seg">${TONES.map((t,i)=>`<span class="${i===c.tone?'on':''}">${t}</span>`).join('')}</div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="bot"></i>Agents enabled</span><div class="cfg-ag">${c.ag.map(a=>`<span class="${a[2]?'':'off'}"><i data-i="${a[0]}"></i>${a[1]}<em></em></span>`).join('')}</div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="plug"></i>Data sources</span><div class="cfg-ds">${c.ds.map(a=>`<span class="${a[2]?'on':''}"><i data-i="${a[0]}"></i>${a[1]}</span>`).join('')}</div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="rules"></i>Content behaviour</span><div class="cfg-ru">${c.ru.map(r=>`<span class="${r[1]?'y':'n'}"><i data-i="${r[1]?'check':'x'}"></i>${r[0]}</span>`).join('')}</div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="hand"></i>Human handoff threshold</span><div class="cfg-sl"><span><i style="width:${c.h}%"></i><b style="left:${c.h}%"></b></span><em>Hands over to a person when confidence drops below ${c.h}%</em></div></div>`;
icons(ctl);ph.innerHTML=CP_chat(k,CP_C[k]);}
w.querySelectorAll('.cfg-pre button').forEach(b=>b.addEventListener('click',()=>set(b.dataset.k)));set('air');});

/* ---------- simulator ---------- */
const INTS={insp:['Trip inspiration','Ideas when you don\'t know where to go'],seat:['Manage booking','Seats, meals, changes'],disr:['Disruption support','Cancellations and delays'],fin:['Finance check','Budgets and payment'],nav:['Navigate airport','Gates, lounges, shops'],hotel:['Hotel booking','Find and book a stay']};
const S={
insp:{q:'I want to go kitesurfing this summer.',conf:[72,'#e2a23b'],rows:[['Customer data','CRM','ok','Name, home airport (BER)'],['Preferences','Customer profile','ok','Business class, window seat'],['Trip details','Language model','miss','Duration and dates missing'],['Destinations','Editorial content','ok','Kitesurf spots, July weather'],['Fares','Booking API','miss','Waiting on dates']],
pat:'Parallel',graph:[['Request'],['Destinations','Fares'],['Merge'],['Reply']],dec:['Ask','One clarifying question','Missing trip length'],guard:'Tone matches the airline brand: friendly, not too casual.',
store:[['Intent','Trip inspiration'],['Missing data asked','Trip length'],['Turns to resolve','2 (target ≤3)']],
chat:[{t:'u',x:'I want to go kitesurfing this summer.'},{t:'a',x:'That sounds like a great idea. How about two weeks in June or July?'},{t:'qr',x:['No','Yes']}]},
seat:{q:'Can you move me to a window seat?',conf:[94,'#2f9e5b'],rows:[['Customer data','CRM','ok','Booking ref, passenger'],['Preferences','Customer profile','ok','Prefers window'],['Trip details','Language model','ok','Outbound flight, Fri'],['Seat map','Booking API','ok','12A and 14F free']],
pat:'Single',graph:[['Request'],['Seat agent'],['Reply']],dec:['Act','With confirmation','All data present'],guard:'Change is reversible. Customer confirms before it is applied.',
store:[['Intent','Manage booking'],['Action','Seat 12C → 12A'],['Resolved without a person','Yes']],
chat:[{t:'u',x:'Can you move me to a window seat?'},{t:'r',x:'Checked booking and seat map'},{t:'a',x:'Seat 12A is free on Friday\'s flight, at no extra cost. Shall I switch you from 12C?'},{t:'qr',x:['Keep 12C','Switch to 12A']}]},
disr:{q:'My flight was cancelled and I\'m stuck at the airport.',conf:[48,'#c94235'],rows:[['Customer data','CRM','ok','Booking ref, status Gold'],['Trip details','Language model','ok','Cancelled flight today'],['Rebooking options','Booking API','ok','2 options tonight'],['Customer sentiment','Language model','no','Distressed · high stakes']],
pat:'Sequential',graph:[['Request'],['Rebooking'],['Summary'],['Human agent']],dec:['Hand over','To a human agent','High stakes, low confidence'],guard:'Empathetic tone. Full history passed to the agent so the customer doesn\'t repeat themselves.',
store:[['Intent','Disruption support'],['Handoff reason','Sentiment + stakes'],['Context passed','Booking, options, transcript']],
chat:[{t:'u',x:'My flight was cancelled and I\'m stuck at the airport.'},{t:'a',x:'I\'m sorry, that\'s stressful. I\'ve found two flights tonight and I\'m connecting you to an agent who can confirm one.'},{t:'h',x:['Connecting to an agent','Your booking is shared · ~2 min']}]},
fin:{q:'Can I afford to upgrade to business class?',conf:[81,'#2f9e5b'],rows:[['Customer data','CRM','ok','Linked payment card'],['Fare difference','Booking API','ok','€640 upgrade'],['Miles balance','Loyalty','ok','42,000 miles'],['Budget','Language model','miss','No budget stated']],
pat:'Sequential',graph:[['Request'],['Fares'],['Loyalty'],['Reply']],dec:['Suggest','Options, not advice','Payment needs consent'],guard:'No financial advice. Shows options and costs; the customer decides.',
store:[['Intent','Finance check'],['Offer shown','Miles + €210'],['Conversion','Tracked for cross-sell']],
chat:[{t:'u',x:'Can I afford to upgrade to business class?'},{t:'r',x:'Checked fare and miles balance'},{t:'a',x:'The upgrade is €640, or 30,000 miles plus €210. You have 42,000 miles.'},{t:'qr',x:['Pay €640','Use miles']}]},
nav:{q:'Where\'s my gate, and do I have time for the lounge?',conf:[90,'#2f9e5b'],rows:[['Trip details','Booking API','ok','Gate B12, boards 08:30'],['Location','Device','ok','Terminal 2, security'],['Walking time','Airport map','ok','11 minutes'],['Lounge access','Loyalty','ok','Gold · free entry']],
pat:'Parallel',graph:[['Request'],['Gate','Lounge'],['Merge'],['Reply']],dec:['Act','Answer with directions','All data present'],guard:'Location is used only for this answer and not stored.',
store:[['Intent','Navigate airport'],['Location stored','No'],['Follow-up','Boarding reminder set']],
chat:[{t:'u',x:'Where\'s my gate, and do I have time for the lounge?'},{t:'r',x:'Gate, walking time and lounge checked'},{t:'a',x:'Gate B12 is 11 minutes away. You have about 50 minutes in the lounge. I\'ll remind you at 08:05.'},{t:'qr',x:['Directions','Remind me']}]}};
const LAB={ok:'Ready',miss:'Missing',no:'Escalate'};
document.querySelectorAll('.cp-sim').forEach(w=>{const ids=(w.dataset.scn||'insp,seat,disr').split(','),N=+(w.dataset.steps||3);
const ph=w.querySelector('.ph'),pane=w.querySelector('.cp-pane'),scn=w.querySelector('.cp-scn'),st=w.querySelector('.cp-steps');
const SN=['Intent','Data & agents','Decide & respond','Analyse & store'];
scn.innerHTML=ids.map((id,i)=>`<button data-s="${id}">${INTS[id][0]}</button>`).join('');
st.style.gridTemplateColumns=`repeat(${N},1fr)`;st.innerHTML=SN.slice(0,N).map((n,i)=>`<button data-k="${i}"><i>${i+1}</i>${n}</button>`).join('');
let s=ids[0],k=0;
function render(){const d=S[s];
scn.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.s===s));st.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',+b.dataset.k===k));
const chat=k===0?[d.chat[0],{t:'typing'}]:k===1?[d.chat[0],{t:'r',x:'Checking what I know…'},{t:'typing'}]:d.chat;ph.innerHTML=CP_chat('air',chat);
const graph=N>3?`<div class="cp-graph"><span class="lab">${d.pat} pattern</span><div>${d.graph.map(g=>`<div class="col">${g.map(n=>`<span>${n}</span>`).join('')}</div>`).join('<i class="ar"></i>')}</div></div>`:`<div class="cp-guard"><b>Agent pattern</b>&nbsp;${d.pat}</div>`;
if(k===0)pane.innerHTML=`<h4>Message to intent</h4><p>The request is matched against the client's library of supported intents.</p><div class="cp-in"><b>User:</b> "${d.q}"</div><div class="cp-ints">${Object.keys(INTS).map(i=>`<div class="cp-int ${i===s?'on':''}"><b>${INTS[i][0]}</b><small>${i===s?'Matched':INTS[i][1]}</small></div>`).join('')}</div>`;
if(k===1)pane.innerHTML=`<h4>Required data &amp; agents</h4><p>Each intent needs specific data. The copilot checks what it already has before calling agents.</p><table class="cp-tbl"><tr><th>Status</th><th>Data</th><th>Source</th><th>Detail</th></tr>${d.rows.map(r=>`<tr><td><span class="st ${r[2]}">${LAB[r[2]]}</span></td><td>${r[0]}</td><td>${r[1]}</td><td>${r[3]}</td></tr>`).join('')}</table>${graph}`;
if(k===2)pane.innerHTML=`<h4>Decide &amp; respond</h4><p>Confidence and guardrails decide whether the copilot asks, acts or hands over.</p><div class="cp-conf"><span>Confidence</span><span class="bar"><i style="width:${d.conf[0]}%;background:${d.conf[1]}"></i></span><b>${d.conf[0]}%</b></div><div class="cp-dec"><div><small>Decision</small><b>${d.dec[0]}</b></div><div><small>How</small><b>${d.dec[1]}</b></div><div><small>Why</small><b>${d.dec[2]}</b></div></div><div class="cp-guard"><b>Guardrail</b>&nbsp;${d.guard}</div>`;
if(k===3)pane.innerHTML=`<h4>Analyse &amp; store</h4><p>Every conversation is logged for evaluation. These signals feed the learning loop and each client's dashboard.</p><div class="cp-dec">${d.store.map(x=>`<div><small>${x[0]}</small><b>${x[1]}</b></div>`).join('')}</div><div class="cp-eval"><span>Evaluated on</span>${['Grounded in data','On-brand tone','Task completed','Customer rating'].map(e=>`<em>${CP_I('check')}${e}</em>`).join('')}</div>`;}
scn.addEventListener('click',e=>{const b=e.target.closest('button');if(b){s=b.dataset.s;k=0;render();}});
st.addEventListener('click',e=>{const b=e.target.closest('button');if(b){k=+b.dataset.k;render();}});render();});

/* ---------- tabs ---------- */
document.querySelectorAll('[data-tabs]').forEach(w=>{const bs=w.querySelectorAll('.cp-tab'),ps=w.querySelectorAll('.cp-tp');
const set=i=>{bs.forEach((b,j)=>b.setAttribute('aria-pressed',i===j));ps.forEach((p,j)=>p.hidden=i!==j);};bs.forEach((b,i)=>b.addEventListener('click',()=>set(i)));set(0);});

/* ---------- zoom stepper over real artefacts ---------- */
document.querySelectorAll('.cp-zoom').forEach(z=>{const steps=JSON.parse(z.dataset.steps),nw=+z.dataset.w,nh=+z.dataset.h;
const fr=z.querySelector('.zf'),img=fr.querySelector('img'),cap=z.querySelector('.zc'),dots=z.querySelector('.zd');let i=0;
dots.innerHTML=steps.map((s,j)=>`<button aria-label="Step ${j+1}"><b>${String(j+1).padStart(2,'0')}</b><span>${s[4]}</span></button>`).join('');
function fit(){const fw=fr.clientWidth,fh=fr.clientHeight,[x,y,w,h]=steps[i],cw=w*nw,ch=h*nh,sc=Math.min(fw/cw,fh/ch)*.94;
img.style.width=nw*sc+'px';img.style.transform=`translate(${fw/2-(x+w/2)*nw*sc}px,${fh/2-(y+h/2)*nh*sc}px)`;}
function set(j){i=(j+steps.length)%steps.length;dots.querySelectorAll('button').forEach((b,k)=>b.setAttribute('aria-pressed',k===i));cap.textContent=steps[i][5]||'';fit();}
dots.addEventListener('click',e=>{const b=e.target.closest('button');if(b)set([...dots.children].indexOf(b));});
z.querySelector('.zp').addEventListener('click',()=>set(i-1));z.querySelector('.zn').addEventListener('click',()=>set(i+1));
new ResizeObserver(fit).observe(fr);img.complete?set(0):img.addEventListener('load',()=>set(0));});

icons();
})();


    /* ========== accru-kit.js ========== */
(function(){
/* router simulator */
document.querySelectorAll('.ar').forEach(w=>{const ps=[...w.querySelectorAll('.ar-p')],log=w.querySelector('.ar-log'),go=w.querySelector('.ar-go'),st=w.querySelector('.ar-tx .st'),sum=w.querySelector('.ar-sum');
const name=p=>p.querySelector('b').textContent;let busy=false;
ps.forEach(p=>p.querySelector('button').addEventListener('click',()=>{if(busy)return;p.classList.toggle('down');p.querySelector('button').textContent=p.classList.contains('down')?'Outage':'Healthy';p.querySelector('small').textContent=p.classList.contains('down')?'Not responding':p.dataset.role;}));
const add=(c,t)=>{const d=document.createElement('div');d.className=c;d.textContent=t;log.appendChild(d);};
go.addEventListener('click',()=>{if(busy)return;busy=true;log.innerHTML='';ps.forEach(p=>p.classList.remove('try','fail','win'));st.className='st';st.textContent='Routing…';
let t=0,ms=0,tries=0;const steps=[];add('m','POST /charges  amount=249.00 USD');
for(const p of ps){steps.push(()=>{p.classList.add('try');tries++;add('','→ '+name(p));});
if(p.classList.contains('down')){steps.push(()=>{p.classList.remove('try');p.classList.add('fail');ms+=420;add('e','✕ '+name(p)+' timeout · rerouting');});}
else{steps.push(()=>{p.classList.remove('try');p.classList.add('win');ms+=180;add('o','✓ Authorised by '+name(p));st.className='st ok';st.textContent='Paid';});break;}}
if(ps.every(p=>p.classList.contains('down')))steps.push(()=>{add('e','All providers down · queued for retry');st.className='st bad';st.textContent='Queued';});
steps.push(()=>{sum.innerHTML=`<div><small>Attempts</small><b>${tries}</b></div><div><small>Time</small><b>${ms} ms</b></div><div><small>Customer saw</small><b>${st.textContent==='Paid'?'Success':'Retry'}</b></div>`;busy=false;});
steps.forEach(f=>setTimeout(f,(t+=650)));});});
/* two readers */
document.querySelectorAll('.ac-two').forEach(w=>{w.querySelectorAll('.seg button').forEach(b=>b.addEventListener('click',()=>{w.dataset.v=b.dataset.v;w.querySelectorAll('.seg button').forEach(x=>x.setAttribute('aria-pressed',x===b));}));});
/* discovery stepper */
document.querySelectorAll('.ac-disc').forEach(w=>{const bs=[...w.querySelectorAll('.dd-steps button')],sl=[...w.querySelectorAll('.dd-sl')];bs.forEach((b,i)=>b.addEventListener('click',()=>{bs.forEach((x,k)=>x.setAttribute('aria-pressed',k===i));sl.forEach((s,k)=>s.hidden=k!==i);}));});
/* token scales */
const mix=(a,b,t)=>{const p=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16));const A=p(a),B=p(b);return'rgb('+A.map((v,i)=>Math.round(v+(B[i]-v)*t)).join(',')+')';};
document.querySelectorAll('.ac-tok').forEach(w=>{const S=[['primary','#4cb8ff'],['secondary','#d8ef7e'],['info','#7ce4f0'],['success','#7eef9a'],['grey','#6b7280'],['dark','#151517']];
w.innerHTML+=S.map(s=>`<div class="r"><span>$${s[0]}</span>${[.85,.7,.55,.4,.2,0,.15,.3,.45,.6].map((t,i)=>`<i title="${s[0]}.${(i+1)*100}" style="background:${i<5?mix(s[1],'#ffffff',t):i===5?s[1]:mix(s[1],'#000000',t)}"></i>`).join('')}</div>`).join('');});
})();


    /* ========== accrupay-public-script-02.js ========== */
/* accrupay-public.html — original script block 2; execution order preserved */
(function(){const t=document.getElementById('menuToggle'),m=document.getElementById('mobileMenu'),c=document.getElementById('menuClose');t&&t.addEventListener('click',()=>m.classList.add('active'));c&&c.addEventListener('click',()=>m.classList.remove('active'));})();
(function(){const i=document.getElementById('password-input'),b=document.getElementById('submit-btn'),e=document.getElementById('error-message');
i.addEventListener('input',()=>{b.disabled=!i.value;e.textContent='';});
function go(){if(i.value==="agileakrofi21")location.href="accrupay-private.html";else e.textContent="Incorrect password";}
b.addEventListener('click',go);i.addEventListener('keypress',x=>{if(x.key==='Enter')go();});})();


  }

  if (page === "accrupay-private" && phase === "body") {

    /* ========== copilot-kit.js ========== */
(function(){
/* ---------- icons ---------- */
const P={
db:'<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
docs:'<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17.5" cy="9" r="2.5"/><path d="M16.5 14.2A5 5 0 0 1 22 19"/>',
brand:'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/>',
spark:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
layers:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
brain:'<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a2 2 0 0 0-3-1zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>',
chat:'<path d="M4 5h16v11H9l-5 4z"/><path d="M8 10h8"/>',
shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
loop:'<path d="M20 12a8 8 0 0 1-14 5.3M4 12A8 8 0 0 1 18 6.7"/><path d="M18 3v4h-4M6 21v-4h4"/>',
plane:'<path d="M3 13l18-7-5 14-4-5z"/><path d="M12 15l4-5"/>',
bank:'<path d="M3 9l9-5 9 5M5 9v9M10 9v9M14 9v9M19 9v9M3 20h18"/>',
bag:'<path d="M5 8h14l-1 12H6z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
bell:'<path d="M5 17h14M7 17a5 5 0 0 1 10 0M12 9V7M10 7h4"/><path d="M3 20h18"/>',
palette:'<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2s-1-1.5-1-2.5 1-1.5 2-1.5h2a4 4 0 0 0 4-4c0-4.4-4-8-9-8z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/>',
voice:'<path d="M4 10v4M8 7v10M12 4v16M16 7v10M20 10v4"/>',
bot:'<rect x="5" y="8" width="14" height="11" rx="3"/><path d="M12 4v4M9 13h.01M15 13h.01M3 13v2M21 13v2"/>',
plug:'<path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0zM12 17v4"/>',
rules:'<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2"/>',
hand:'<path d="M7 11V6a1.5 1.5 0 0 1 3 0v4M10 10V4.5a1.5 1.5 0 0 1 3 0V10M13 10V5.5a1.5 1.5 0 0 1 3 0V12M16 9a1.5 1.5 0 0 1 3 0v4a7 7 0 0 1-7 7h-1a6 6 0 0 1-5-3l-2.5-4a1.5 1.5 0 0 1 2.5-1.6L7 13"/>',
check:'<path d="M5 12l5 5L20 7"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',
mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
card:'<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/>',
lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
heart:'<path d="M12 20s-7-4.4-9-8.6C1.6 8.3 3.6 5 7 5c2 0 3.6 1.2 5 3 1.4-1.8 3-3 5-3 3.4 0 5.4 3.3 4 6.4-2 4.2-9 8.6-9 8.6z"/>',
star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
chart:'<path d="M4 19V9M10 19V5M16 19v-7M22 19H2"/>',eye:'<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
gift:'<rect x="3" y="8" width="18" height="4"/><path d="M5 12v9h14v-9M12 8v13M12 8S10 3 7.5 4.5 9 8 12 8zm0 0s2-5 4.5-3.5S15 8 12 8z"/>',
refresh:'<path d="M20 12a8 8 0 1 1-2.3-5.7M20 4v4h-4"/>',phone:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
map:'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',doc:'<path d="M6 3h9l4 4v14H6z"/><path d="M9 12h6M9 16h4"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',share:'<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 11l7.6-4M8.2 13l7.6 4"/>',
crew:'<circle cx="12" cy="7" r="4"/><path d="M5 21v-2a7 7 0 0 1 14 0v2M9 14l3 3 3-3"/>',grid:'<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/>'};
window.CP_I=n=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${P[n]||''}</svg>`;
function icons(root){(root||document).querySelectorAll('i[data-i]').forEach(e=>{e.innerHTML=CP_I(e.dataset.i);e.classList.add('ico');});}
window.CP_icons=icons;

/* ---------- architecture detail ---------- */
const AD={
data:['Enterprise data','CRM records, bookings, transactions and profiles, read through secure connectors.','Personal data is only surfaced when it helps the task, and the customer can see why.'],
know:['Knowledge sources','Policies, FAQs and product content the copilot can cite.','Answers that rely on policy show their source, so customers can check them.'],
ctx:['Context signals','Intent, journey stage, history and preferences.','The same question gets a different answer before and after booking.'],
brand:['Brand & rules','Voice, tone, products and compliance rules per client.','Set once per client as parameters. No UI changes needed.'],
orch:['Agent orchestration','Chooses a single agent, a sequence or parallel agents for each request.','The interface shows progress differently for quick and multi-step work.'],
res:['Resource engine','Retrieval, ranking and grounding in client data.','Grounded answers carry a source chip; ungrounded ones are not shown.'],
reas:['Reasoning engine','LLM reasoning, planning and tool use.','Visible reasoning cards when they build trust; hidden when they add noise.'],
nudge:['Nudging engine','Tone, suggestions and next best actions.','Suggestions are quick replies, never automatic actions.'],
guard:['Guardrails & governance','Safety, privacy, tone and policy checks on every response.','Blocked or uncertain responses fall back to a question or a person.'],
learn:['Learning loop','Feedback, evaluation and analytics.','Thumbs up/down and handoff rates feed back into prompts and rules.'],
v1:['Travel','Trip planning, disruption and loyalty support.','First client skin and reference implementation.'],
v2:['Banking','Account help, transactions and financial guidance.','Stricter handoff thresholds and formal tone.'],
v3:['Retail','Product discovery, orders and personalised offers.','Visual product cards and gifting flows.'],
v4:['Hospitality','Reservations, in-stay support and rewards.','Concierge-style tone and booking cards.']};
const FLOW=[['data','know','ctx','brand'],['orch'],['res'],['reas'],['nudge'],['guard'],['out'],['learn']];
const STEP_T=['Inputs gathered','Agents chosen','Grounding in client data','Reasoning and tool use','Shaping tone and next action','Checking safety and policy','Rendered in every client skin','Logged for evaluation'];
document.querySelectorAll('.cp-arch2').forEach(ar=>{const det=ar.parentElement.querySelector('.cp-adet');ar.classList.add('live','motion');
const outs=[...ar.querySelectorAll('.a-out')];
const ctl=document.createElement('div');ctl.className='a-ctl';ctl.innerHTML=`<button type="button" class="a-play" aria-pressed="true"><span class="pz">❚❚</span><span class="pl">▶</span></button><span class="a-now"></span>`;ar.before(ctl);
const now=ctl.querySelector('.a-now'),btn=ctl.querySelector('.a-play');
let i=0,v=0,timer=null,typ=null;const lb=ar.querySelector('[data-k="learn"] small'),lo=lb?lb.textContent:'';let lc=0;const LM=['Rating logged · tone scored 4.6/5','Answer checked against its source','Handoff reviewed · threshold tuned','Prompts and rules updated for next time'];
function clear(){ar.querySelectorAll('.act,.on,.fed').forEach(n=>n.classList.remove('act','on','fed'));}
function type(){}
function tick(){clear();const ks=FLOW[i];ar.classList.remove('learning');if(lb)lb.textContent=lo;if(ks[0]==='learn'){ar.classList.add('learning');if(lb)lb.textContent=LM[lc++%LM.length];['res','reas','nudge'].forEach(k=>ar.querySelector(`[data-k="${k}"]`).classList.add('fed'));}
if(ks[0]==='out'){outs.forEach((o,n)=>setTimeout(()=>o.classList.add('act'),n*140));ar.querySelectorAll('.a-conn')[1].classList.add('act');}
else ks.forEach(k=>{const n=ar.querySelector(`[data-k="${k}"]`);n&&n.classList.add('act');});
if(i===1)ar.querySelectorAll('.a-conn')[0].classList.add('act');
now.innerHTML=`<b>${String(i+1).padStart(2,'0')}</b>${STEP_T[i]}`;
i++;if(i>=FLOW.length)i=0;}
function play(){if(timer)return;btn.setAttribute('aria-pressed','true');tick();timer=setInterval(tick,1200);}
function pause(){clearInterval(timer);timer=null;btn.setAttribute('aria-pressed','false');}
btn.addEventListener('click',()=>timer?pause():play());
if(det){const set=k=>{pause();clear();const n=ar.querySelector(`[data-k="${k}"]`);n.classList.add('on');const d=AD[k];now.innerHTML='Paused · select ▶ to resume';det.innerHTML=`<div><span>Component</span><b>${d[0]}</b></div><div><span>What it does</span><p>${d[1]}</p></div><div><span>Design decision</span><p>${d[2]}</p></div>`;};
ar.querySelectorAll('[data-k]').forEach(n=>{n.tabIndex=0;n.addEventListener('click',()=>set(n.dataset.k));n.addEventListener('keydown',e=>{if(e.key==='Enter')set(n.dataset.k);});});
const d=AD.reas;det.innerHTML=`<div><span>Component</span><b>Select any part</b></div><div><span>What it does</span><p>Pause the flow and select a component to see what it does.</p></div><div><span>Design decision</span><p>Each part of the engine led to a decision in the interface.</p></div>`;}
else ar.classList.remove('live');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){if(btn.getAttribute('aria-pressed')==='true')play();}else{clearInterval(timer);timer=null;}}),{threshold:.3});io.observe(ar);});
document.querySelectorAll('.cj-uc').forEach(b=>b.addEventListener('click',()=>b.classList.toggle('open')));

/* ---------- configuration ---------- */
const CF={
air:{n:'Airline',sw:['#0b1a2e','#2f5bff','#15294a','#ffffff'],f:['Switzer','Aa'],tone:1,ag:[['plane','Booking',1],['refresh','Disruption',1],['star','Loyalty',1],['card','Finance',0]],ds:[['users','CRM',1],['plane','Bookings',1],['docs','Policies',1],['bag','Catalogue',0],['bank','Accounts',0]],ru:[['Suggest upgrades',1],['Take payments',1],['Rebook without asking',0]],h:55},
ret:{n:'Retail',sw:['#fbf7f1','#1d1a16','#efe6d8','#e8b99c'],f:['Georgia','Aa'],tone:2,ag:[['search','Product search',1],['bag','Orders',1],['gift','Gifting',1],['card','Finance',0]],ds:[['users','CRM',1],['bag','Catalogue',1],['docs','Policies',1],['plane','Bookings',0],['bank','Accounts',0]],ru:[['Recommend products',1],['Apply discounts',1],['Give skin-health advice',0]],h:40},
bank:{n:'Banking',sw:['#121212','#e0312b','#1f1f1f','#ffffff'],f:['Switzer','Aa'],tone:0,ag:[['bank','Accounts',1],['chart','Savings',1],['chat','Support',1],['spark','Investing',0]],ds:[['users','CRM',1],['bank','Accounts',1],['docs','Policies',1],['bag','Catalogue',0],['plane','Bookings',0]],ru:[['Show balances',1],['Create savings pots',1],['Give investment advice',0]],h:75}};
const TONES=['Formal','Warm','Playful'];
document.querySelectorAll('.cp-cfg').forEach(w=>{const ctl=w.querySelector('.cfg-ctl'),ph=w.querySelector('.ph');
function set(k){const c=CF[k];w.querySelectorAll('.cfg-pre button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.k===k));
ctl.innerHTML=`<div class="cfg-g"><span class="cfg-h"><i data-i="palette"></i>Brand tokens</span><div class="cfg-sw">${c.sw.map(s=>`<i style="background:${s}"></i>`).join('')}<b style="font-family:${c.f[0]},serif">${c.f[1]}</b></div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="voice"></i>Tone of voice</span><div class="cfg-seg">${TONES.map((t,i)=>`<span class="${i===c.tone?'on':''}">${t}</span>`).join('')}</div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="bot"></i>Agents enabled</span><div class="cfg-ag">${c.ag.map(a=>`<span class="${a[2]?'':'off'}"><i data-i="${a[0]}"></i>${a[1]}<em></em></span>`).join('')}</div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="plug"></i>Data sources</span><div class="cfg-ds">${c.ds.map(a=>`<span class="${a[2]?'on':''}"><i data-i="${a[0]}"></i>${a[1]}</span>`).join('')}</div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="rules"></i>Content behaviour</span><div class="cfg-ru">${c.ru.map(r=>`<span class="${r[1]?'y':'n'}"><i data-i="${r[1]?'check':'x'}"></i>${r[0]}</span>`).join('')}</div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="hand"></i>Human handoff threshold</span><div class="cfg-sl"><span><i style="width:${c.h}%"></i><b style="left:${c.h}%"></b></span><em>Hands over to a person when confidence drops below ${c.h}%</em></div></div>`;
icons(ctl);ph.innerHTML=CP_chat(k,CP_C[k]);}
w.querySelectorAll('.cfg-pre button').forEach(b=>b.addEventListener('click',()=>set(b.dataset.k)));set('air');});

/* ---------- simulator ---------- */
const INTS={insp:['Trip inspiration','Ideas when you don\'t know where to go'],seat:['Manage booking','Seats, meals, changes'],disr:['Disruption support','Cancellations and delays'],fin:['Finance check','Budgets and payment'],nav:['Navigate airport','Gates, lounges, shops'],hotel:['Hotel booking','Find and book a stay']};
const S={
insp:{q:'I want to go kitesurfing this summer.',conf:[72,'#e2a23b'],rows:[['Customer data','CRM','ok','Name, home airport (BER)'],['Preferences','Customer profile','ok','Business class, window seat'],['Trip details','Language model','miss','Duration and dates missing'],['Destinations','Editorial content','ok','Kitesurf spots, July weather'],['Fares','Booking API','miss','Waiting on dates']],
pat:'Parallel',graph:[['Request'],['Destinations','Fares'],['Merge'],['Reply']],dec:['Ask','One clarifying question','Missing trip length'],guard:'Tone matches the airline brand: friendly, not too casual.',
store:[['Intent','Trip inspiration'],['Missing data asked','Trip length'],['Turns to resolve','2 (target ≤3)']],
chat:[{t:'u',x:'I want to go kitesurfing this summer.'},{t:'a',x:'That sounds like a great idea. How about two weeks in June or July?'},{t:'qr',x:['No','Yes']}]},
seat:{q:'Can you move me to a window seat?',conf:[94,'#2f9e5b'],rows:[['Customer data','CRM','ok','Booking ref, passenger'],['Preferences','Customer profile','ok','Prefers window'],['Trip details','Language model','ok','Outbound flight, Fri'],['Seat map','Booking API','ok','12A and 14F free']],
pat:'Single',graph:[['Request'],['Seat agent'],['Reply']],dec:['Act','With confirmation','All data present'],guard:'Change is reversible. Customer confirms before it is applied.',
store:[['Intent','Manage booking'],['Action','Seat 12C → 12A'],['Resolved without a person','Yes']],
chat:[{t:'u',x:'Can you move me to a window seat?'},{t:'r',x:'Checked booking and seat map'},{t:'a',x:'Seat 12A is free on Friday\'s flight, at no extra cost. Shall I switch you from 12C?'},{t:'qr',x:['Keep 12C','Switch to 12A']}]},
disr:{q:'My flight was cancelled and I\'m stuck at the airport.',conf:[48,'#c94235'],rows:[['Customer data','CRM','ok','Booking ref, status Gold'],['Trip details','Language model','ok','Cancelled flight today'],['Rebooking options','Booking API','ok','2 options tonight'],['Customer sentiment','Language model','no','Distressed · high stakes']],
pat:'Sequential',graph:[['Request'],['Rebooking'],['Summary'],['Human agent']],dec:['Hand over','To a human agent','High stakes, low confidence'],guard:'Empathetic tone. Full history passed to the agent so the customer doesn\'t repeat themselves.',
store:[['Intent','Disruption support'],['Handoff reason','Sentiment + stakes'],['Context passed','Booking, options, transcript']],
chat:[{t:'u',x:'My flight was cancelled and I\'m stuck at the airport.'},{t:'a',x:'I\'m sorry, that\'s stressful. I\'ve found two flights tonight and I\'m connecting you to an agent who can confirm one.'},{t:'h',x:['Connecting to an agent','Your booking is shared · ~2 min']}]},
fin:{q:'Can I afford to upgrade to business class?',conf:[81,'#2f9e5b'],rows:[['Customer data','CRM','ok','Linked payment card'],['Fare difference','Booking API','ok','€640 upgrade'],['Miles balance','Loyalty','ok','42,000 miles'],['Budget','Language model','miss','No budget stated']],
pat:'Sequential',graph:[['Request'],['Fares'],['Loyalty'],['Reply']],dec:['Suggest','Options, not advice','Payment needs consent'],guard:'No financial advice. Shows options and costs; the customer decides.',
store:[['Intent','Finance check'],['Offer shown','Miles + €210'],['Conversion','Tracked for cross-sell']],
chat:[{t:'u',x:'Can I afford to upgrade to business class?'},{t:'r',x:'Checked fare and miles balance'},{t:'a',x:'The upgrade is €640, or 30,000 miles plus €210. You have 42,000 miles.'},{t:'qr',x:['Pay €640','Use miles']}]},
nav:{q:'Where\'s my gate, and do I have time for the lounge?',conf:[90,'#2f9e5b'],rows:[['Trip details','Booking API','ok','Gate B12, boards 08:30'],['Location','Device','ok','Terminal 2, security'],['Walking time','Airport map','ok','11 minutes'],['Lounge access','Loyalty','ok','Gold · free entry']],
pat:'Parallel',graph:[['Request'],['Gate','Lounge'],['Merge'],['Reply']],dec:['Act','Answer with directions','All data present'],guard:'Location is used only for this answer and not stored.',
store:[['Intent','Navigate airport'],['Location stored','No'],['Follow-up','Boarding reminder set']],
chat:[{t:'u',x:'Where\'s my gate, and do I have time for the lounge?'},{t:'r',x:'Gate, walking time and lounge checked'},{t:'a',x:'Gate B12 is 11 minutes away. You have about 50 minutes in the lounge. I\'ll remind you at 08:05.'},{t:'qr',x:['Directions','Remind me']}]}};
const LAB={ok:'Ready',miss:'Missing',no:'Escalate'};
document.querySelectorAll('.cp-sim').forEach(w=>{const ids=(w.dataset.scn||'insp,seat,disr').split(','),N=+(w.dataset.steps||3);
const ph=w.querySelector('.ph'),pane=w.querySelector('.cp-pane'),scn=w.querySelector('.cp-scn'),st=w.querySelector('.cp-steps');
const SN=['Intent','Data & agents','Decide & respond','Analyse & store'];
scn.innerHTML=ids.map((id,i)=>`<button data-s="${id}">${INTS[id][0]}</button>`).join('');
st.style.gridTemplateColumns=`repeat(${N},1fr)`;st.innerHTML=SN.slice(0,N).map((n,i)=>`<button data-k="${i}"><i>${i+1}</i>${n}</button>`).join('');
let s=ids[0],k=0;
function render(){const d=S[s];
scn.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.s===s));st.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',+b.dataset.k===k));
const chat=k===0?[d.chat[0],{t:'typing'}]:k===1?[d.chat[0],{t:'r',x:'Checking what I know…'},{t:'typing'}]:d.chat;ph.innerHTML=CP_chat('air',chat);
const graph=N>3?`<div class="cp-graph"><span class="lab">${d.pat} pattern</span><div>${d.graph.map(g=>`<div class="col">${g.map(n=>`<span>${n}</span>`).join('')}</div>`).join('<i class="ar"></i>')}</div></div>`:`<div class="cp-guard"><b>Agent pattern</b>&nbsp;${d.pat}</div>`;
if(k===0)pane.innerHTML=`<h4>Message to intent</h4><p>The request is matched against the client's library of supported intents.</p><div class="cp-in"><b>User:</b> "${d.q}"</div><div class="cp-ints">${Object.keys(INTS).map(i=>`<div class="cp-int ${i===s?'on':''}"><b>${INTS[i][0]}</b><small>${i===s?'Matched':INTS[i][1]}</small></div>`).join('')}</div>`;
if(k===1)pane.innerHTML=`<h4>Required data &amp; agents</h4><p>Each intent needs specific data. The copilot checks what it already has before calling agents.</p><table class="cp-tbl"><tr><th>Status</th><th>Data</th><th>Source</th><th>Detail</th></tr>${d.rows.map(r=>`<tr><td><span class="st ${r[2]}">${LAB[r[2]]}</span></td><td>${r[0]}</td><td>${r[1]}</td><td>${r[3]}</td></tr>`).join('')}</table>${graph}`;
if(k===2)pane.innerHTML=`<h4>Decide &amp; respond</h4><p>Confidence and guardrails decide whether the copilot asks, acts or hands over.</p><div class="cp-conf"><span>Confidence</span><span class="bar"><i style="width:${d.conf[0]}%;background:${d.conf[1]}"></i></span><b>${d.conf[0]}%</b></div><div class="cp-dec"><div><small>Decision</small><b>${d.dec[0]}</b></div><div><small>How</small><b>${d.dec[1]}</b></div><div><small>Why</small><b>${d.dec[2]}</b></div></div><div class="cp-guard"><b>Guardrail</b>&nbsp;${d.guard}</div>`;
if(k===3)pane.innerHTML=`<h4>Analyse &amp; store</h4><p>Every conversation is logged for evaluation. These signals feed the learning loop and each client's dashboard.</p><div class="cp-dec">${d.store.map(x=>`<div><small>${x[0]}</small><b>${x[1]}</b></div>`).join('')}</div><div class="cp-eval"><span>Evaluated on</span>${['Grounded in data','On-brand tone','Task completed','Customer rating'].map(e=>`<em>${CP_I('check')}${e}</em>`).join('')}</div>`;}
scn.addEventListener('click',e=>{const b=e.target.closest('button');if(b){s=b.dataset.s;k=0;render();}});
st.addEventListener('click',e=>{const b=e.target.closest('button');if(b){k=+b.dataset.k;render();}});render();});

/* ---------- tabs ---------- */
document.querySelectorAll('[data-tabs]').forEach(w=>{const bs=w.querySelectorAll('.cp-tab'),ps=w.querySelectorAll('.cp-tp');
const set=i=>{bs.forEach((b,j)=>b.setAttribute('aria-pressed',i===j));ps.forEach((p,j)=>p.hidden=i!==j);};bs.forEach((b,i)=>b.addEventListener('click',()=>set(i)));set(0);});

/* ---------- zoom stepper over real artefacts ---------- */
document.querySelectorAll('.cp-zoom').forEach(z=>{const steps=JSON.parse(z.dataset.steps),nw=+z.dataset.w,nh=+z.dataset.h;
const fr=z.querySelector('.zf'),img=fr.querySelector('img'),cap=z.querySelector('.zc'),dots=z.querySelector('.zd');let i=0;
dots.innerHTML=steps.map((s,j)=>`<button aria-label="Step ${j+1}"><b>${String(j+1).padStart(2,'0')}</b><span>${s[4]}</span></button>`).join('');
function fit(){const fw=fr.clientWidth,fh=fr.clientHeight,[x,y,w,h]=steps[i],cw=w*nw,ch=h*nh,sc=Math.min(fw/cw,fh/ch)*.94;
img.style.width=nw*sc+'px';img.style.transform=`translate(${fw/2-(x+w/2)*nw*sc}px,${fh/2-(y+h/2)*nh*sc}px)`;}
function set(j){i=(j+steps.length)%steps.length;dots.querySelectorAll('button').forEach((b,k)=>b.setAttribute('aria-pressed',k===i));cap.textContent=steps[i][5]||'';fit();}
dots.addEventListener('click',e=>{const b=e.target.closest('button');if(b)set([...dots.children].indexOf(b));});
z.querySelector('.zp').addEventListener('click',()=>set(i-1));z.querySelector('.zn').addEventListener('click',()=>set(i+1));
new ResizeObserver(fit).observe(fr);img.complete?set(0):img.addEventListener('load',()=>set(0));});

icons();
})();


    /* ========== accru-kit.js ========== */
(function(){
/* router simulator */
document.querySelectorAll('.ar').forEach(w=>{const ps=[...w.querySelectorAll('.ar-p')],log=w.querySelector('.ar-log'),go=w.querySelector('.ar-go'),st=w.querySelector('.ar-tx .st'),sum=w.querySelector('.ar-sum');
const name=p=>p.querySelector('b').textContent;let busy=false;
ps.forEach(p=>p.querySelector('button').addEventListener('click',()=>{if(busy)return;p.classList.toggle('down');p.querySelector('button').textContent=p.classList.contains('down')?'Outage':'Healthy';p.querySelector('small').textContent=p.classList.contains('down')?'Not responding':p.dataset.role;}));
const add=(c,t)=>{const d=document.createElement('div');d.className=c;d.textContent=t;log.appendChild(d);};
go.addEventListener('click',()=>{if(busy)return;busy=true;log.innerHTML='';ps.forEach(p=>p.classList.remove('try','fail','win'));st.className='st';st.textContent='Routing…';
let t=0,ms=0,tries=0;const steps=[];add('m','POST /charges  amount=249.00 USD');
for(const p of ps){steps.push(()=>{p.classList.add('try');tries++;add('','→ '+name(p));});
if(p.classList.contains('down')){steps.push(()=>{p.classList.remove('try');p.classList.add('fail');ms+=420;add('e','✕ '+name(p)+' timeout · rerouting');});}
else{steps.push(()=>{p.classList.remove('try');p.classList.add('win');ms+=180;add('o','✓ Authorised by '+name(p));st.className='st ok';st.textContent='Paid';});break;}}
if(ps.every(p=>p.classList.contains('down')))steps.push(()=>{add('e','All providers down · queued for retry');st.className='st bad';st.textContent='Queued';});
steps.push(()=>{sum.innerHTML=`<div><small>Attempts</small><b>${tries}</b></div><div><small>Time</small><b>${ms} ms</b></div><div><small>Customer saw</small><b>${st.textContent==='Paid'?'Success':'Retry'}</b></div>`;busy=false;});
steps.forEach(f=>setTimeout(f,(t+=650)));});});
/* two readers */
document.querySelectorAll('.ac-two').forEach(w=>{w.querySelectorAll('.seg button').forEach(b=>b.addEventListener('click',()=>{w.dataset.v=b.dataset.v;w.querySelectorAll('.seg button').forEach(x=>x.setAttribute('aria-pressed',x===b));}));});
/* discovery stepper */
document.querySelectorAll('.ac-disc').forEach(w=>{const bs=[...w.querySelectorAll('.dd-steps button')],sl=[...w.querySelectorAll('.dd-sl')];bs.forEach((b,i)=>b.addEventListener('click',()=>{bs.forEach((x,k)=>x.setAttribute('aria-pressed',k===i));sl.forEach((s,k)=>s.hidden=k!==i);}));});
/* token scales */
const mix=(a,b,t)=>{const p=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16));const A=p(a),B=p(b);return'rgb('+A.map((v,i)=>Math.round(v+(B[i]-v)*t)).join(',')+')';};
document.querySelectorAll('.ac-tok').forEach(w=>{const S=[['primary','#4cb8ff'],['secondary','#d8ef7e'],['info','#7ce4f0'],['success','#7eef9a'],['grey','#6b7280'],['dark','#151517']];
w.innerHTML+=S.map(s=>`<div class="r"><span>$${s[0]}</span>${[.85,.7,.55,.4,.2,0,.15,.3,.45,.6].map((t,i)=>`<i title="${s[0]}.${(i+1)*100}" style="background:${i<5?mix(s[1],'#ffffff',t):i===5?s[1]:mix(s[1],'#000000',t)}"></i>`).join('')}</div>`).join('');});
})();


    /* ========== accrupay-private-script-02.js ========== */
/* accrupay-private.html — original script block 2; execution order preserved */
(function(){const t=document.getElementById('menuToggle'),m=document.getElementById('mobileMenu'),c=document.getElementById('menuClose');t&&t.addEventListener('click',()=>m.classList.add('active'));c&&c.addEventListener('click',()=>m.classList.remove('active'));})();


  }

  if (page === "partner-preview" && phase === "body") {

    /* ========== copilot-kit.js ========== */
(function(){
/* ---------- icons ---------- */
const P={
db:'<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
docs:'<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17.5" cy="9" r="2.5"/><path d="M16.5 14.2A5 5 0 0 1 22 19"/>',
brand:'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/>',
spark:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
layers:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
brain:'<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a2 2 0 0 0-3-1zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>',
chat:'<path d="M4 5h16v11H9l-5 4z"/><path d="M8 10h8"/>',
shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
loop:'<path d="M20 12a8 8 0 0 1-14 5.3M4 12A8 8 0 0 1 18 6.7"/><path d="M18 3v4h-4M6 21v-4h4"/>',
plane:'<path d="M3 13l18-7-5 14-4-5z"/><path d="M12 15l4-5"/>',
bank:'<path d="M3 9l9-5 9 5M5 9v9M10 9v9M14 9v9M19 9v9M3 20h18"/>',
bag:'<path d="M5 8h14l-1 12H6z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
bell:'<path d="M5 17h14M7 17a5 5 0 0 1 10 0M12 9V7M10 7h4"/><path d="M3 20h18"/>',
palette:'<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2s-1-1.5-1-2.5 1-1.5 2-1.5h2a4 4 0 0 0 4-4c0-4.4-4-8-9-8z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/>',
voice:'<path d="M4 10v4M8 7v10M12 4v16M16 7v10M20 10v4"/>',
bot:'<rect x="5" y="8" width="14" height="11" rx="3"/><path d="M12 4v4M9 13h.01M15 13h.01M3 13v2M21 13v2"/>',
plug:'<path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0zM12 17v4"/>',
rules:'<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2"/>',
hand:'<path d="M7 11V6a1.5 1.5 0 0 1 3 0v4M10 10V4.5a1.5 1.5 0 0 1 3 0V10M13 10V5.5a1.5 1.5 0 0 1 3 0V12M16 9a1.5 1.5 0 0 1 3 0v4a7 7 0 0 1-7 7h-1a6 6 0 0 1-5-3l-2.5-4a1.5 1.5 0 0 1 2.5-1.6L7 13"/>',
check:'<path d="M5 12l5 5L20 7"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',
mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
card:'<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/>',
lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
heart:'<path d="M12 20s-7-4.4-9-8.6C1.6 8.3 3.6 5 7 5c2 0 3.6 1.2 5 3 1.4-1.8 3-3 5-3 3.4 0 5.4 3.3 4 6.4-2 4.2-9 8.6-9 8.6z"/>',
star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
chart:'<path d="M4 19V9M10 19V5M16 19v-7M22 19H2"/>',eye:'<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
gift:'<rect x="3" y="8" width="18" height="4"/><path d="M5 12v9h14v-9M12 8v13M12 8S10 3 7.5 4.5 9 8 12 8zm0 0s2-5 4.5-3.5S15 8 12 8z"/>',
refresh:'<path d="M20 12a8 8 0 1 1-2.3-5.7M20 4v4h-4"/>',phone:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
map:'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',doc:'<path d="M6 3h9l4 4v14H6z"/><path d="M9 12h6M9 16h4"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',share:'<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 11l7.6-4M8.2 13l7.6 4"/>',
crew:'<circle cx="12" cy="7" r="4"/><path d="M5 21v-2a7 7 0 0 1 14 0v2M9 14l3 3 3-3"/>',grid:'<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/>'};
window.CP_I=n=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${P[n]||''}</svg>`;
function icons(root){(root||document).querySelectorAll('i[data-i]').forEach(e=>{e.innerHTML=CP_I(e.dataset.i);e.classList.add('ico');});}
window.CP_icons=icons;

/* ---------- architecture detail ---------- */
const AD={
data:['Enterprise data','CRM records, bookings, transactions and profiles, read through secure connectors.','Personal data is only surfaced when it helps the task, and the customer can see why.'],
know:['Knowledge sources','Policies, FAQs and product content the copilot can cite.','Answers that rely on policy show their source, so customers can check them.'],
ctx:['Context signals','Intent, journey stage, history and preferences.','The same question gets a different answer before and after booking.'],
brand:['Brand & rules','Voice, tone, products and compliance rules per client.','Set once per client as parameters. No UI changes needed.'],
orch:['Agent orchestration','Chooses a single agent, a sequence or parallel agents for each request.','The interface shows progress differently for quick and multi-step work.'],
res:['Resource engine','Retrieval, ranking and grounding in client data.','Grounded answers carry a source chip; ungrounded ones are not shown.'],
reas:['Reasoning engine','LLM reasoning, planning and tool use.','Visible reasoning cards when they build trust; hidden when they add noise.'],
nudge:['Nudging engine','Tone, suggestions and next best actions.','Suggestions are quick replies, never automatic actions.'],
guard:['Guardrails & governance','Safety, privacy, tone and policy checks on every response.','Blocked or uncertain responses fall back to a question or a person.'],
learn:['Learning loop','Feedback, evaluation and analytics.','Thumbs up/down and handoff rates feed back into prompts and rules.'],
v1:['Travel','Trip planning, disruption and loyalty support.','First client skin and reference implementation.'],
v2:['Banking','Account help, transactions and financial guidance.','Stricter handoff thresholds and formal tone.'],
v3:['Retail','Product discovery, orders and personalised offers.','Visual product cards and gifting flows.'],
v4:['Hospitality','Reservations, in-stay support and rewards.','Concierge-style tone and booking cards.']};
const FLOW=[['data','know','ctx','brand'],['orch'],['res'],['reas'],['nudge'],['guard'],['out'],['learn']];
const STEP_T=['Inputs gathered','Agents chosen','Grounding in client data','Reasoning and tool use','Shaping tone and next action','Checking safety and policy','Rendered in every client skin','Logged for evaluation'];
document.querySelectorAll('.cp-arch2').forEach(ar=>{const det=ar.parentElement.querySelector('.cp-adet');ar.classList.add('live','motion');
const outs=[...ar.querySelectorAll('.a-out')];
const ctl=document.createElement('div');ctl.className='a-ctl';ctl.innerHTML=`<button type="button" class="a-play" aria-pressed="true"><span class="pz">❚❚</span><span class="pl">▶</span></button><span class="a-now"></span>`;ar.before(ctl);
const now=ctl.querySelector('.a-now'),btn=ctl.querySelector('.a-play');
let i=0,v=0,timer=null,typ=null;const lb=ar.querySelector('[data-k="learn"] small'),lo=lb?lb.textContent:'';let lc=0;const LM=['Rating logged · tone scored 4.6/5','Answer checked against its source','Handoff reviewed · threshold tuned','Prompts and rules updated for next time'];
function clear(){ar.querySelectorAll('.act,.on,.fed').forEach(n=>n.classList.remove('act','on','fed'));}
function type(){}
function tick(){clear();const ks=FLOW[i];ar.classList.remove('learning');if(lb)lb.textContent=lo;if(ks[0]==='learn'){ar.classList.add('learning');if(lb)lb.textContent=LM[lc++%LM.length];['res','reas','nudge'].forEach(k=>ar.querySelector(`[data-k="${k}"]`).classList.add('fed'));}
if(ks[0]==='out'){outs.forEach((o,n)=>setTimeout(()=>o.classList.add('act'),n*140));ar.querySelectorAll('.a-conn')[1].classList.add('act');}
else ks.forEach(k=>{const n=ar.querySelector(`[data-k="${k}"]`);n&&n.classList.add('act');});
if(i===1)ar.querySelectorAll('.a-conn')[0].classList.add('act');
now.innerHTML=`<b>${String(i+1).padStart(2,'0')}</b>${STEP_T[i]}`;
i++;if(i>=FLOW.length)i=0;}
function play(){if(timer)return;btn.setAttribute('aria-pressed','true');tick();timer=setInterval(tick,1200);}
function pause(){clearInterval(timer);timer=null;btn.setAttribute('aria-pressed','false');}
btn.addEventListener('click',()=>timer?pause():play());
if(det){const set=k=>{pause();clear();const n=ar.querySelector(`[data-k="${k}"]`);n.classList.add('on');const d=AD[k];now.innerHTML='Paused · select ▶ to resume';det.innerHTML=`<div><span>Component</span><b>${d[0]}</b></div><div><span>What it does</span><p>${d[1]}</p></div><div><span>Design decision</span><p>${d[2]}</p></div>`;};
ar.querySelectorAll('[data-k]').forEach(n=>{n.tabIndex=0;n.addEventListener('click',()=>set(n.dataset.k));n.addEventListener('keydown',e=>{if(e.key==='Enter')set(n.dataset.k);});});
const d=AD.reas;det.innerHTML=`<div><span>Component</span><b>Select any part</b></div><div><span>What it does</span><p>Pause the flow and select a component to see what it does.</p></div><div><span>Design decision</span><p>Each part of the engine led to a decision in the interface.</p></div>`;}
else ar.classList.remove('live');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){if(btn.getAttribute('aria-pressed')==='true')play();}else{clearInterval(timer);timer=null;}}),{threshold:.3});io.observe(ar);});
document.querySelectorAll('.cj-uc').forEach(b=>b.addEventListener('click',()=>b.classList.toggle('open')));

/* ---------- configuration ---------- */
const CF={
air:{n:'Airline',sw:['#0b1a2e','#2f5bff','#15294a','#ffffff'],f:['Switzer','Aa'],tone:1,ag:[['plane','Booking',1],['refresh','Disruption',1],['star','Loyalty',1],['card','Finance',0]],ds:[['users','CRM',1],['plane','Bookings',1],['docs','Policies',1],['bag','Catalogue',0],['bank','Accounts',0]],ru:[['Suggest upgrades',1],['Take payments',1],['Rebook without asking',0]],h:55},
ret:{n:'Retail',sw:['#fbf7f1','#1d1a16','#efe6d8','#e8b99c'],f:['Georgia','Aa'],tone:2,ag:[['search','Product search',1],['bag','Orders',1],['gift','Gifting',1],['card','Finance',0]],ds:[['users','CRM',1],['bag','Catalogue',1],['docs','Policies',1],['plane','Bookings',0],['bank','Accounts',0]],ru:[['Recommend products',1],['Apply discounts',1],['Give skin-health advice',0]],h:40},
bank:{n:'Banking',sw:['#121212','#e0312b','#1f1f1f','#ffffff'],f:['Switzer','Aa'],tone:0,ag:[['bank','Accounts',1],['chart','Savings',1],['chat','Support',1],['spark','Investing',0]],ds:[['users','CRM',1],['bank','Accounts',1],['docs','Policies',1],['bag','Catalogue',0],['plane','Bookings',0]],ru:[['Show balances',1],['Create savings pots',1],['Give investment advice',0]],h:75}};
const TONES=['Formal','Warm','Playful'];
document.querySelectorAll('.cp-cfg').forEach(w=>{const ctl=w.querySelector('.cfg-ctl'),ph=w.querySelector('.ph');
function set(k){const c=CF[k];w.querySelectorAll('.cfg-pre button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.k===k));
ctl.innerHTML=`<div class="cfg-g"><span class="cfg-h"><i data-i="palette"></i>Brand tokens</span><div class="cfg-sw">${c.sw.map(s=>`<i style="background:${s}"></i>`).join('')}<b style="font-family:${c.f[0]},serif">${c.f[1]}</b></div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="voice"></i>Tone of voice</span><div class="cfg-seg">${TONES.map((t,i)=>`<span class="${i===c.tone?'on':''}">${t}</span>`).join('')}</div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="bot"></i>Agents enabled</span><div class="cfg-ag">${c.ag.map(a=>`<span class="${a[2]?'':'off'}"><i data-i="${a[0]}"></i>${a[1]}<em></em></span>`).join('')}</div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="plug"></i>Data sources</span><div class="cfg-ds">${c.ds.map(a=>`<span class="${a[2]?'on':''}"><i data-i="${a[0]}"></i>${a[1]}</span>`).join('')}</div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="rules"></i>Content behaviour</span><div class="cfg-ru">${c.ru.map(r=>`<span class="${r[1]?'y':'n'}"><i data-i="${r[1]?'check':'x'}"></i>${r[0]}</span>`).join('')}</div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="hand"></i>Human handoff threshold</span><div class="cfg-sl"><span><i style="width:${c.h}%"></i><b style="left:${c.h}%"></b></span><em>Hands over to a person when confidence drops below ${c.h}%</em></div></div>`;
icons(ctl);ph.innerHTML=CP_chat(k,CP_C[k]);}
w.querySelectorAll('.cfg-pre button').forEach(b=>b.addEventListener('click',()=>set(b.dataset.k)));set('air');});

/* ---------- simulator ---------- */
const INTS={insp:['Trip inspiration','Ideas when you don\'t know where to go'],seat:['Manage booking','Seats, meals, changes'],disr:['Disruption support','Cancellations and delays'],fin:['Finance check','Budgets and payment'],nav:['Navigate airport','Gates, lounges, shops'],hotel:['Hotel booking','Find and book a stay']};
const S={
insp:{q:'I want to go kitesurfing this summer.',conf:[72,'#e2a23b'],rows:[['Customer data','CRM','ok','Name, home airport (BER)'],['Preferences','Customer profile','ok','Business class, window seat'],['Trip details','Language model','miss','Duration and dates missing'],['Destinations','Editorial content','ok','Kitesurf spots, July weather'],['Fares','Booking API','miss','Waiting on dates']],
pat:'Parallel',graph:[['Request'],['Destinations','Fares'],['Merge'],['Reply']],dec:['Ask','One clarifying question','Missing trip length'],guard:'Tone matches the airline brand: friendly, not too casual.',
store:[['Intent','Trip inspiration'],['Missing data asked','Trip length'],['Turns to resolve','2 (target ≤3)']],
chat:[{t:'u',x:'I want to go kitesurfing this summer.'},{t:'a',x:'That sounds like a great idea. How about two weeks in June or July?'},{t:'qr',x:['No','Yes']}]},
seat:{q:'Can you move me to a window seat?',conf:[94,'#2f9e5b'],rows:[['Customer data','CRM','ok','Booking ref, passenger'],['Preferences','Customer profile','ok','Prefers window'],['Trip details','Language model','ok','Outbound flight, Fri'],['Seat map','Booking API','ok','12A and 14F free']],
pat:'Single',graph:[['Request'],['Seat agent'],['Reply']],dec:['Act','With confirmation','All data present'],guard:'Change is reversible. Customer confirms before it is applied.',
store:[['Intent','Manage booking'],['Action','Seat 12C → 12A'],['Resolved without a person','Yes']],
chat:[{t:'u',x:'Can you move me to a window seat?'},{t:'r',x:'Checked booking and seat map'},{t:'a',x:'Seat 12A is free on Friday\'s flight, at no extra cost. Shall I switch you from 12C?'},{t:'qr',x:['Keep 12C','Switch to 12A']}]},
disr:{q:'My flight was cancelled and I\'m stuck at the airport.',conf:[48,'#c94235'],rows:[['Customer data','CRM','ok','Booking ref, status Gold'],['Trip details','Language model','ok','Cancelled flight today'],['Rebooking options','Booking API','ok','2 options tonight'],['Customer sentiment','Language model','no','Distressed · high stakes']],
pat:'Sequential',graph:[['Request'],['Rebooking'],['Summary'],['Human agent']],dec:['Hand over','To a human agent','High stakes, low confidence'],guard:'Empathetic tone. Full history passed to the agent so the customer doesn\'t repeat themselves.',
store:[['Intent','Disruption support'],['Handoff reason','Sentiment + stakes'],['Context passed','Booking, options, transcript']],
chat:[{t:'u',x:'My flight was cancelled and I\'m stuck at the airport.'},{t:'a',x:'I\'m sorry, that\'s stressful. I\'ve found two flights tonight and I\'m connecting you to an agent who can confirm one.'},{t:'h',x:['Connecting to an agent','Your booking is shared · ~2 min']}]},
fin:{q:'Can I afford to upgrade to business class?',conf:[81,'#2f9e5b'],rows:[['Customer data','CRM','ok','Linked payment card'],['Fare difference','Booking API','ok','€640 upgrade'],['Miles balance','Loyalty','ok','42,000 miles'],['Budget','Language model','miss','No budget stated']],
pat:'Sequential',graph:[['Request'],['Fares'],['Loyalty'],['Reply']],dec:['Suggest','Options, not advice','Payment needs consent'],guard:'No financial advice. Shows options and costs; the customer decides.',
store:[['Intent','Finance check'],['Offer shown','Miles + €210'],['Conversion','Tracked for cross-sell']],
chat:[{t:'u',x:'Can I afford to upgrade to business class?'},{t:'r',x:'Checked fare and miles balance'},{t:'a',x:'The upgrade is €640, or 30,000 miles plus €210. You have 42,000 miles.'},{t:'qr',x:['Pay €640','Use miles']}]},
nav:{q:'Where\'s my gate, and do I have time for the lounge?',conf:[90,'#2f9e5b'],rows:[['Trip details','Booking API','ok','Gate B12, boards 08:30'],['Location','Device','ok','Terminal 2, security'],['Walking time','Airport map','ok','11 minutes'],['Lounge access','Loyalty','ok','Gold · free entry']],
pat:'Parallel',graph:[['Request'],['Gate','Lounge'],['Merge'],['Reply']],dec:['Act','Answer with directions','All data present'],guard:'Location is used only for this answer and not stored.',
store:[['Intent','Navigate airport'],['Location stored','No'],['Follow-up','Boarding reminder set']],
chat:[{t:'u',x:'Where\'s my gate, and do I have time for the lounge?'},{t:'r',x:'Gate, walking time and lounge checked'},{t:'a',x:'Gate B12 is 11 minutes away. You have about 50 minutes in the lounge. I\'ll remind you at 08:05.'},{t:'qr',x:['Directions','Remind me']}]}};
const LAB={ok:'Ready',miss:'Missing',no:'Escalate'};
document.querySelectorAll('.cp-sim').forEach(w=>{const ids=(w.dataset.scn||'insp,seat,disr').split(','),N=+(w.dataset.steps||3);
const ph=w.querySelector('.ph'),pane=w.querySelector('.cp-pane'),scn=w.querySelector('.cp-scn'),st=w.querySelector('.cp-steps');
const SN=['Intent','Data & agents','Decide & respond','Analyse & store'];
scn.innerHTML=ids.map((id,i)=>`<button data-s="${id}">${INTS[id][0]}</button>`).join('');
st.style.gridTemplateColumns=`repeat(${N},1fr)`;st.innerHTML=SN.slice(0,N).map((n,i)=>`<button data-k="${i}"><i>${i+1}</i>${n}</button>`).join('');
let s=ids[0],k=0;
function render(){const d=S[s];
scn.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.s===s));st.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',+b.dataset.k===k));
const chat=k===0?[d.chat[0],{t:'typing'}]:k===1?[d.chat[0],{t:'r',x:'Checking what I know…'},{t:'typing'}]:d.chat;ph.innerHTML=CP_chat('air',chat);
const graph=N>3?`<div class="cp-graph"><span class="lab">${d.pat} pattern</span><div>${d.graph.map(g=>`<div class="col">${g.map(n=>`<span>${n}</span>`).join('')}</div>`).join('<i class="ar"></i>')}</div></div>`:`<div class="cp-guard"><b>Agent pattern</b>&nbsp;${d.pat}</div>`;
if(k===0)pane.innerHTML=`<h4>Message to intent</h4><p>The request is matched against the client's library of supported intents.</p><div class="cp-in"><b>User:</b> "${d.q}"</div><div class="cp-ints">${Object.keys(INTS).map(i=>`<div class="cp-int ${i===s?'on':''}"><b>${INTS[i][0]}</b><small>${i===s?'Matched':INTS[i][1]}</small></div>`).join('')}</div>`;
if(k===1)pane.innerHTML=`<h4>Required data &amp; agents</h4><p>Each intent needs specific data. The copilot checks what it already has before calling agents.</p><table class="cp-tbl"><tr><th>Status</th><th>Data</th><th>Source</th><th>Detail</th></tr>${d.rows.map(r=>`<tr><td><span class="st ${r[2]}">${LAB[r[2]]}</span></td><td>${r[0]}</td><td>${r[1]}</td><td>${r[3]}</td></tr>`).join('')}</table>${graph}`;
if(k===2)pane.innerHTML=`<h4>Decide &amp; respond</h4><p>Confidence and guardrails decide whether the copilot asks, acts or hands over.</p><div class="cp-conf"><span>Confidence</span><span class="bar"><i style="width:${d.conf[0]}%;background:${d.conf[1]}"></i></span><b>${d.conf[0]}%</b></div><div class="cp-dec"><div><small>Decision</small><b>${d.dec[0]}</b></div><div><small>How</small><b>${d.dec[1]}</b></div><div><small>Why</small><b>${d.dec[2]}</b></div></div><div class="cp-guard"><b>Guardrail</b>&nbsp;${d.guard}</div>`;
if(k===3)pane.innerHTML=`<h4>Analyse &amp; store</h4><p>Every conversation is logged for evaluation. These signals feed the learning loop and each client's dashboard.</p><div class="cp-dec">${d.store.map(x=>`<div><small>${x[0]}</small><b>${x[1]}</b></div>`).join('')}</div><div class="cp-eval"><span>Evaluated on</span>${['Grounded in data','On-brand tone','Task completed','Customer rating'].map(e=>`<em>${CP_I('check')}${e}</em>`).join('')}</div>`;}
scn.addEventListener('click',e=>{const b=e.target.closest('button');if(b){s=b.dataset.s;k=0;render();}});
st.addEventListener('click',e=>{const b=e.target.closest('button');if(b){k=+b.dataset.k;render();}});render();});

/* ---------- tabs ---------- */
document.querySelectorAll('[data-tabs]').forEach(w=>{const bs=w.querySelectorAll('.cp-tab'),ps=w.querySelectorAll('.cp-tp');
const set=i=>{bs.forEach((b,j)=>b.setAttribute('aria-pressed',i===j));ps.forEach((p,j)=>p.hidden=i!==j);};bs.forEach((b,i)=>b.addEventListener('click',()=>set(i)));set(0);});

/* ---------- zoom stepper over real artefacts ---------- */
document.querySelectorAll('.cp-zoom').forEach(z=>{const steps=JSON.parse(z.dataset.steps),nw=+z.dataset.w,nh=+z.dataset.h;
const fr=z.querySelector('.zf'),img=fr.querySelector('img'),cap=z.querySelector('.zc'),dots=z.querySelector('.zd');let i=0;
dots.innerHTML=steps.map((s,j)=>`<button aria-label="Step ${j+1}"><b>${String(j+1).padStart(2,'0')}</b><span>${s[4]}</span></button>`).join('');
function fit(){const fw=fr.clientWidth,fh=fr.clientHeight,[x,y,w,h]=steps[i],cw=w*nw,ch=h*nh,sc=Math.min(fw/cw,fh/ch)*.94;
img.style.width=nw*sc+'px';img.style.transform=`translate(${fw/2-(x+w/2)*nw*sc}px,${fh/2-(y+h/2)*nh*sc}px)`;}
function set(j){i=(j+steps.length)%steps.length;dots.querySelectorAll('button').forEach((b,k)=>b.setAttribute('aria-pressed',k===i));cap.textContent=steps[i][5]||'';fit();}
dots.addEventListener('click',e=>{const b=e.target.closest('button');if(b)set([...dots.children].indexOf(b));});
z.querySelector('.zp').addEventListener('click',()=>set(i-1));z.querySelector('.zn').addEventListener('click',()=>set(i+1));
new ResizeObserver(fit).observe(fr);img.complete?set(0):img.addEventListener('load',()=>set(0));});

icons();
})();


    /* ========== partner-partner-kit.js ========== */
(function(){
const I=n=>window.CP_I?CP_I(n):'';
/* motion hero */
(function(){const w=document.getElementById('peHx');if(!w)return;const sc=[...w.querySelectorAll('.hx-sc')],bs=[...w.querySelectorAll('#hxSteps button')],cur=document.getElementById('hxCur'),url=document.getElementById('hxUrl'),fc=[...w.querySelectorAll('.hx-fc')];
const URL=['partnerhub.example','partnerhub.example/welcome-back','partnerhub.example/home','partnerhub.example/portfolio'];let i=0,tm=[],reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
const T=f=>tm.push(setTimeout(f.fn,f.t));const clear=()=>{tm.forEach(clearTimeout);tm=[];};
function aim(el){if(!el)return;const r=el.getBoundingClientRect(),R=w.getBoundingClientRect();cur.style.left=(r.left-R.left+r.width*.55)+'px';cur.style.top=(r.top-R.top+r.height*.55)+'px';}
function press(el){el&&el.classList.add('press');setTimeout(()=>el&&el.classList.remove('press'),220);}
const mail=document.getElementById('hxMail'),code=[...w.querySelectorAll('.hx-code i')],s2=w.querySelector('.s2');
function show(k,auto){clear();i=k;sc.forEach((s,j)=>s.classList.toggle('on',j===k));bs.forEach((b,j)=>{b.classList.toggle('on',j===k);b.classList.toggle('past',j<k);});url.textContent=URL[k];
fc.forEach(f=>f.classList.remove('on'));w.querySelectorAll('.done,.hi').forEach(e=>e.classList.remove('done','hi'));
const tgt=w.querySelector('.s'+(k+1)+' [data-t]');
if(k===0){aim(w.querySelector('.hx-bento span:nth-child(2)'));T({t:900,fn:()=>aim(tgt)});T({t:2300,fn:()=>press(tgt)});T({t:1200,fn:()=>fc[0].classList.add('on')});}
if(k===1){s2.classList.remove('otp');mail.textContent='';code.forEach(c=>{c.textContent='';c.classList.remove('f');});aim(w.querySelector('.hx-fld'));const m='amara@northwind.example';[...m].forEach((ch,n)=>T({t:500+n*45,fn:()=>{mail.textContent+=ch;}}));T({t:1700,fn:()=>{s2.classList.add('otp');aim(code[0]);}});'482915'.split('').forEach((d,n)=>T({t:2200+n*170,fn:()=>{code[n].textContent=d;code[n].classList.add('f');}}));T({t:3500,fn:()=>{aim(tgt);press(tgt);}});}
if(k===2){aim(w.querySelector('.hx-gr'));T({t:800,fn:()=>fc[2].classList.add('on')});T({t:1500,fn:()=>aim(tgt)});T({t:2600,fn:()=>{press(tgt);tgt.closest('.hx-row').classList.add('done');tgt.closest('.hx-row').querySelector('em').textContent='Renewed';}});T({t:1000,fn:()=>fc[1].classList.add('on')});}
if(k===3){T({t:700,fn:()=>aim(tgt)});T({t:1600,fn:()=>{tgt.classList.add('hi');}});T({t:900,fn:()=>fc[1].classList.add('on')});}
if(auto&&!reduce)T({t:4200,fn:()=>show((k+1)%sc.length,true)});}
bs.forEach((b,k)=>b.addEventListener('click',()=>{w.style.setProperty('--dur','9s');show(k,false);T({t:9000,fn:()=>{w.style.removeProperty('--dur');show((k+1)%sc.length,true);}});}));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){show(i,true);}else clear();}),{threshold:.25});io.observe(w);})();
/* reauth story */
(function(){const w=document.getElementById('ra');if(!w)return;const as=[...w.querySelectorAll('.ra-a')],ks=[...w.querySelectorAll('.ra-keys button')],nw=w.querySelector('.ra-new'),cd=[...w.querySelectorAll('.ra-new .code i')];let i=0,tm=[];
const clr=()=>{tm.forEach(clearTimeout);tm=[];};
function show(k,auto){clr();i=k;as.forEach((a,j)=>{a.classList.toggle('on',j===k);a.classList.remove('go');});ks.forEach((b,j)=>b.setAttribute('aria-pressed',j===k));w.classList.toggle('hold',!auto);
tm.push(setTimeout(()=>as[k].classList.add('go'),120));
if(k===2){nw.classList.remove('done');cd.forEach(c=>{c.textContent='';c.classList.remove('f');});'730418'.split('').forEach((d,n)=>tm.push(setTimeout(()=>{cd[n].textContent=d;cd[n].classList.add('f');},900+n*160)));tm.push(setTimeout(()=>nw.classList.add('done'),2100));}
if(auto)tm.push(setTimeout(()=>show((k+1)%as.length,true),6000));}
ks.forEach((b,k)=>b.addEventListener('click',()=>show(k,false)));
new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)show(i,true);else clr();}),{threshold:.3}).observe(w);show(0,false);})();
/* sitemap */
const SM={u:{l:'Signed out',root:'Public homepage',n:[['Find a partner',['Partner directory','Become a partner']],['Explore partner programmes',[]],['Support',[]]],r:[]},
a:{l:'Agency, not yet certified',root:'Signed-in home',n:[['Client portfolio',[]],['Tools',['Overview','Tools directory']],['Playbooks',['Learn & activate','Pitch & plan']],['Events',['Upcoming, live & on demand']],['Become a partner',['Overview','Apply for certification','Project sample tips','Partner gallery']],['Agency console',['Track applications']],['Support',[]],['My profile',[]]],r:['Become a partner','Agency console']},
c:{l:'Certified partner practitioner',root:'Signed-in home',n:[['Client portfolio',[]],['Tools',['Overview','Tools directory']],['Playbooks',['Learn & activate','Pitch & plan']],['Events',['Upcoming, live & on demand']],['Grow my partnership',['Brand resources','Sales partner resources','Menu of services','Apply for certification']],['Partner console',['Track applications','Public listing','Partner gallery','Manage users']],['Support',[]],['My profile',[]]],r:['Grow my partnership','Partner console']}};
document.querySelectorAll('.pe-map').forEach(w=>{const seg=w.querySelector('.seg'),sm=w.querySelector('.sm'),note=w.querySelector('.sm-note');
seg.innerHTML=Object.entries(SM).map(([k,v])=>'<button type="button" data-k="'+k+'">'+v.l+'</button>').join('');
function set(k){const d=SM[k];seg.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.k===k));const pct=(50/d.n.length).toFixed(3);
sm.innerHTML='<div class="sm-root">'+d.root+'</div><div class="sm-v"></div><div class="sm-row" style="--l:'+pct+'%">'+d.n.map((n,i)=>'<div class="sm-n'+(d.r.includes(n[0])?' role':'')+'" style="animation-delay:'+(i*45)+'ms"><b>'+n[0].replace('&','&amp;')+'</b>'+(n[1].length?'<ul>'+n[1].map(x=>'<li>'+x.replace('&','&amp;')+'</li>').join('')+'</ul>':'')+'</div>').join('')+'</div>';
const pages=d.n.reduce((a,n)=>a+1+n[1].length,1);note.textContent=pages+' pages · '+(d.r.length?d.r.length+' sections change with this profile':'public pages only');}
seg.addEventListener('click',e=>{const b=e.target.closest('button');if(b)set(b.dataset.k);});set('c');});
/* role switcher */
const NAV=['Home','Client portfolio','Tools','Playbooks','Events','Become a partner','Grow my partnership','Partner console','Manage team','Support','Profile'];
const R={
vis:{l:'Signed-out visitor',ic:'globe',show:['Home','Playbooks','Events','Become a partner','Support'],role:['Become a partner'],q:'Is this the right place for my business, and who can help me?',n:'Public pages only. The way in is finding a partner or becoming one.',h:[['c-blush','Find a partner','Search certified agencies by need'],['c-lav','Become a partner','What it takes and how to apply'],['c-mint','Playbooks','Browse what is possible']]},
ag:{l:'Agency practitioner',ic:'users',show:['Home','Client portfolio','Tools','Playbooks','Events','Become a partner','Support','Profile'],role:['Become a partner'],q:'Which of my clients need me today, and how do we become a partner?',n:'Same structure. The route to partnership sits beside daily client work.',h:[['c-butter','Client issues','2 accounts need attention'],['c-lav','Becoming a partner','3 of 5 requirements met'],['c-mint','Training','Search certification in progress']]},
cp:{l:'Certified partner',ic:'star',show:['Home','Client portfolio','Tools','Playbooks','Events','Grow my partnership','Partner console','Support','Profile'],role:['Grow my partnership','Partner console'],q:'What needs my attention right now, and where did I leave off?',n:'Same structure. Becoming a partner turns into growing the partnership.',h:[['c-butter','Expires in 14 days','Video certification'],['c-lav','In progress','Search certification'],['c-mint','Coming up','Measurement masterclass']]},
ad:{l:'Partner admin',ic:'shield',show:['Home','Client portfolio','Tools','Playbooks','Events','Grow my partnership','Partner console','Manage team','Support','Profile'],role:['Grow my partnership','Partner console','Manage team'],q:'Is my team on track, and who needs access?',n:'Same structure, plus the tools to manage the team.',h:[['c-butter','Team certifications','4 expiring this quarter'],['c-lav','Access requests','2 waiting for approval'],['c-mint','Partnership tier','On track for renewal']]}};
document.querySelectorAll('.pe-roles').forEach(w=>{const seg=w.querySelector('.seg'),nav=w.querySelector('.pe-nav'),v=w.querySelector('.pe-view');
seg.innerHTML=Object.entries(R).map(([k,r])=>`<button type="button" data-k="${k}">${I(r.ic).replace('<svg','<svg class="ico" style="width:16px;height:16px"')}${r.l}</button>`).join('');
function set(k){const r=R[k];seg.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.k===k));
nav.innerHTML=NAV.map(n=>{const on=r.show.includes(n),ro=r.role.includes(n);return `<span class="${ro?'r':''}${on?'':' off'}">${n}${ro?'<em>Role</em>':''}</span>`;}).join('');
v.innerHTML=`<span class="pe-lab">${r.l}</span><q>${r.q}</q><p>${r.n}</p><div class="pe-homecards">${r.h.map(h=>`<div><i class="${h[0]}"></i><b>${h[1]}</b><small>${h[2]}</small></div>`).join('')}</div>`;}
seg.addEventListener('click',e=>{const b=e.target.closest('button');if(b)set(b.dataset.k);});set('cp');});
/* annotated homepage */
document.querySelectorAll('.pe-ann').forEach(w=>{const ks=[...w.querySelectorAll('.pe-keys button')],zs=[...w.querySelectorAll('.pe-zone')];
const set=i=>{ks.forEach((b,j)=>b.setAttribute('aria-pressed',i===j));zs.forEach((z,j)=>z.classList.toggle('on',i===j));};
ks.forEach((b,i)=>b.addEventListener('click',()=>set(i)));zs.forEach((z,i)=>z.addEventListener('click',()=>set(i)));set(1);});
/* generic stepper */
document.querySelectorAll('.pe-flow').forEach(w=>{const ks=[...w.querySelectorAll('.pe-keys button')],ps=[...w.querySelectorAll('.pg')];
const set=i=>{ks.forEach((b,j)=>b.setAttribute('aria-pressed',i===j));ps.forEach((p,j)=>p.hidden=i!==j);};ks.forEach((b,i)=>b.addEventListener('click',()=>set(i)));set(0);});
/* portfolio */
const A=[['Northwind group','a',178700,'3 high · 2 medium',5,9,[['North America','a',67500,'',0,3],['Harbour Outfitters','a',45500,'',0,1]]],['Fenway Home','p',22000,'Link pending',1,2,[]],['Lumen Travel','a',31200,'1 medium',1,4,[]],['Brightside Foods','a',12800,'',0,0,[]]];
document.querySelectorAll('.pe-port').forEach(w=>{const tb=w.querySelector('tbody'),bs=[...w.querySelectorAll('.pe-tabs button')];
const fm=n=>'$'+n.toLocaleString('en-US');
const row=(r,ch)=>`<tr class="${ch?'ch':''}"><td>${r[0]}</td><td><span class="st ${r[1]}">${r[1]==='a'?'Active':'Paused'}</span></td><td>${fm(r[2])}</td><td class="${r[3]?'is':'no'}">${r[3]||'None'}</td><td>${r[5]}</td></tr>`;
const S={issues:(a,b)=>b[4]-a[4],accounts:(a,b)=>a[0].localeCompare(b[0]),spend:(a,b)=>b[2]-a[2],tickets:(a,b)=>b[5]-a[5]};
function set(k){bs.forEach(b=>b.setAttribute('aria-pressed',b.dataset.k===k));tb.innerHTML=[...A].sort(S[k]).map(r=>row(r)+r[6].map(c=>row(c,1)).join('')).join('');}
bs.forEach(b=>b.addEventListener('click',()=>set(b.dataset.k)));set('issues');});
})();


    /* ========== portfolio-shared.js ========== */
document.addEventListener('DOMContentLoaded',()=>{const b=document.querySelector('.portfolio-nav-toggle'),l=document.querySelector('.portfolio-nav-links');if(!b||!l)return;b.addEventListener('click',()=>{const opened=l.classList.toggle('is-open');b.setAttribute('aria-expanded',String(opened))});});


  }

  if (page === "partner-private" && phase === "body") {

    /* ========== copilot-kit.js ========== */
(function(){
/* ---------- icons ---------- */
const P={
db:'<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
docs:'<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17.5" cy="9" r="2.5"/><path d="M16.5 14.2A5 5 0 0 1 22 19"/>',
brand:'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/>',
spark:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
layers:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
brain:'<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a2 2 0 0 0-3-1zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>',
chat:'<path d="M4 5h16v11H9l-5 4z"/><path d="M8 10h8"/>',
shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
loop:'<path d="M20 12a8 8 0 0 1-14 5.3M4 12A8 8 0 0 1 18 6.7"/><path d="M18 3v4h-4M6 21v-4h4"/>',
plane:'<path d="M3 13l18-7-5 14-4-5z"/><path d="M12 15l4-5"/>',
bank:'<path d="M3 9l9-5 9 5M5 9v9M10 9v9M14 9v9M19 9v9M3 20h18"/>',
bag:'<path d="M5 8h14l-1 12H6z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
bell:'<path d="M5 17h14M7 17a5 5 0 0 1 10 0M12 9V7M10 7h4"/><path d="M3 20h18"/>',
palette:'<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2s-1-1.5-1-2.5 1-1.5 2-1.5h2a4 4 0 0 0 4-4c0-4.4-4-8-9-8z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/>',
voice:'<path d="M4 10v4M8 7v10M12 4v16M16 7v10M20 10v4"/>',
bot:'<rect x="5" y="8" width="14" height="11" rx="3"/><path d="M12 4v4M9 13h.01M15 13h.01M3 13v2M21 13v2"/>',
plug:'<path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0zM12 17v4"/>',
rules:'<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2"/>',
hand:'<path d="M7 11V6a1.5 1.5 0 0 1 3 0v4M10 10V4.5a1.5 1.5 0 0 1 3 0V10M13 10V5.5a1.5 1.5 0 0 1 3 0V12M16 9a1.5 1.5 0 0 1 3 0v4a7 7 0 0 1-7 7h-1a6 6 0 0 1-5-3l-2.5-4a1.5 1.5 0 0 1 2.5-1.6L7 13"/>',
check:'<path d="M5 12l5 5L20 7"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',
mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
card:'<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/>',
lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
heart:'<path d="M12 20s-7-4.4-9-8.6C1.6 8.3 3.6 5 7 5c2 0 3.6 1.2 5 3 1.4-1.8 3-3 5-3 3.4 0 5.4 3.3 4 6.4-2 4.2-9 8.6-9 8.6z"/>',
star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
chart:'<path d="M4 19V9M10 19V5M16 19v-7M22 19H2"/>',eye:'<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
gift:'<rect x="3" y="8" width="18" height="4"/><path d="M5 12v9h14v-9M12 8v13M12 8S10 3 7.5 4.5 9 8 12 8zm0 0s2-5 4.5-3.5S15 8 12 8z"/>',
refresh:'<path d="M20 12a8 8 0 1 1-2.3-5.7M20 4v4h-4"/>',phone:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
map:'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',doc:'<path d="M6 3h9l4 4v14H6z"/><path d="M9 12h6M9 16h4"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',share:'<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 11l7.6-4M8.2 13l7.6 4"/>',
crew:'<circle cx="12" cy="7" r="4"/><path d="M5 21v-2a7 7 0 0 1 14 0v2M9 14l3 3 3-3"/>',grid:'<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/>'};
window.CP_I=n=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${P[n]||''}</svg>`;
function icons(root){(root||document).querySelectorAll('i[data-i]').forEach(e=>{e.innerHTML=CP_I(e.dataset.i);e.classList.add('ico');});}
window.CP_icons=icons;

/* ---------- architecture detail ---------- */
const AD={
data:['Enterprise data','CRM records, bookings, transactions and profiles, read through secure connectors.','Personal data is only surfaced when it helps the task, and the customer can see why.'],
know:['Knowledge sources','Policies, FAQs and product content the copilot can cite.','Answers that rely on policy show their source, so customers can check them.'],
ctx:['Context signals','Intent, journey stage, history and preferences.','The same question gets a different answer before and after booking.'],
brand:['Brand & rules','Voice, tone, products and compliance rules per client.','Set once per client as parameters. No UI changes needed.'],
orch:['Agent orchestration','Chooses a single agent, a sequence or parallel agents for each request.','The interface shows progress differently for quick and multi-step work.'],
res:['Resource engine','Retrieval, ranking and grounding in client data.','Grounded answers carry a source chip; ungrounded ones are not shown.'],
reas:['Reasoning engine','LLM reasoning, planning and tool use.','Visible reasoning cards when they build trust; hidden when they add noise.'],
nudge:['Nudging engine','Tone, suggestions and next best actions.','Suggestions are quick replies, never automatic actions.'],
guard:['Guardrails & governance','Safety, privacy, tone and policy checks on every response.','Blocked or uncertain responses fall back to a question or a person.'],
learn:['Learning loop','Feedback, evaluation and analytics.','Thumbs up/down and handoff rates feed back into prompts and rules.'],
v1:['Travel','Trip planning, disruption and loyalty support.','First client skin and reference implementation.'],
v2:['Banking','Account help, transactions and financial guidance.','Stricter handoff thresholds and formal tone.'],
v3:['Retail','Product discovery, orders and personalised offers.','Visual product cards and gifting flows.'],
v4:['Hospitality','Reservations, in-stay support and rewards.','Concierge-style tone and booking cards.']};
const FLOW=[['data','know','ctx','brand'],['orch'],['res'],['reas'],['nudge'],['guard'],['out'],['learn']];
const STEP_T=['Inputs gathered','Agents chosen','Grounding in client data','Reasoning and tool use','Shaping tone and next action','Checking safety and policy','Rendered in every client skin','Logged for evaluation'];
document.querySelectorAll('.cp-arch2').forEach(ar=>{const det=ar.parentElement.querySelector('.cp-adet');ar.classList.add('live','motion');
const outs=[...ar.querySelectorAll('.a-out')];
const ctl=document.createElement('div');ctl.className='a-ctl';ctl.innerHTML=`<button type="button" class="a-play" aria-pressed="true"><span class="pz">❚❚</span><span class="pl">▶</span></button><span class="a-now"></span>`;ar.before(ctl);
const now=ctl.querySelector('.a-now'),btn=ctl.querySelector('.a-play');
let i=0,v=0,timer=null,typ=null;const lb=ar.querySelector('[data-k="learn"] small'),lo=lb?lb.textContent:'';let lc=0;const LM=['Rating logged · tone scored 4.6/5','Answer checked against its source','Handoff reviewed · threshold tuned','Prompts and rules updated for next time'];
function clear(){ar.querySelectorAll('.act,.on,.fed').forEach(n=>n.classList.remove('act','on','fed'));}
function type(){}
function tick(){clear();const ks=FLOW[i];ar.classList.remove('learning');if(lb)lb.textContent=lo;if(ks[0]==='learn'){ar.classList.add('learning');if(lb)lb.textContent=LM[lc++%LM.length];['res','reas','nudge'].forEach(k=>ar.querySelector(`[data-k="${k}"]`).classList.add('fed'));}
if(ks[0]==='out'){outs.forEach((o,n)=>setTimeout(()=>o.classList.add('act'),n*140));ar.querySelectorAll('.a-conn')[1].classList.add('act');}
else ks.forEach(k=>{const n=ar.querySelector(`[data-k="${k}"]`);n&&n.classList.add('act');});
if(i===1)ar.querySelectorAll('.a-conn')[0].classList.add('act');
now.innerHTML=`<b>${String(i+1).padStart(2,'0')}</b>${STEP_T[i]}`;
i++;if(i>=FLOW.length)i=0;}
function play(){if(timer)return;btn.setAttribute('aria-pressed','true');tick();timer=setInterval(tick,1200);}
function pause(){clearInterval(timer);timer=null;btn.setAttribute('aria-pressed','false');}
btn.addEventListener('click',()=>timer?pause():play());
if(det){const set=k=>{pause();clear();const n=ar.querySelector(`[data-k="${k}"]`);n.classList.add('on');const d=AD[k];now.innerHTML='Paused · select ▶ to resume';det.innerHTML=`<div><span>Component</span><b>${d[0]}</b></div><div><span>What it does</span><p>${d[1]}</p></div><div><span>Design decision</span><p>${d[2]}</p></div>`;};
ar.querySelectorAll('[data-k]').forEach(n=>{n.tabIndex=0;n.addEventListener('click',()=>set(n.dataset.k));n.addEventListener('keydown',e=>{if(e.key==='Enter')set(n.dataset.k);});});
const d=AD.reas;det.innerHTML=`<div><span>Component</span><b>Select any part</b></div><div><span>What it does</span><p>Pause the flow and select a component to see what it does.</p></div><div><span>Design decision</span><p>Each part of the engine led to a decision in the interface.</p></div>`;}
else ar.classList.remove('live');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){if(btn.getAttribute('aria-pressed')==='true')play();}else{clearInterval(timer);timer=null;}}),{threshold:.3});io.observe(ar);});
document.querySelectorAll('.cj-uc').forEach(b=>b.addEventListener('click',()=>b.classList.toggle('open')));

/* ---------- configuration ---------- */
const CF={
air:{n:'Airline',sw:['#0b1a2e','#2f5bff','#15294a','#ffffff'],f:['Switzer','Aa'],tone:1,ag:[['plane','Booking',1],['refresh','Disruption',1],['star','Loyalty',1],['card','Finance',0]],ds:[['users','CRM',1],['plane','Bookings',1],['docs','Policies',1],['bag','Catalogue',0],['bank','Accounts',0]],ru:[['Suggest upgrades',1],['Take payments',1],['Rebook without asking',0]],h:55},
ret:{n:'Retail',sw:['#fbf7f1','#1d1a16','#efe6d8','#e8b99c'],f:['Georgia','Aa'],tone:2,ag:[['search','Product search',1],['bag','Orders',1],['gift','Gifting',1],['card','Finance',0]],ds:[['users','CRM',1],['bag','Catalogue',1],['docs','Policies',1],['plane','Bookings',0],['bank','Accounts',0]],ru:[['Recommend products',1],['Apply discounts',1],['Give skin-health advice',0]],h:40},
bank:{n:'Banking',sw:['#121212','#e0312b','#1f1f1f','#ffffff'],f:['Switzer','Aa'],tone:0,ag:[['bank','Accounts',1],['chart','Savings',1],['chat','Support',1],['spark','Investing',0]],ds:[['users','CRM',1],['bank','Accounts',1],['docs','Policies',1],['bag','Catalogue',0],['plane','Bookings',0]],ru:[['Show balances',1],['Create savings pots',1],['Give investment advice',0]],h:75}};
const TONES=['Formal','Warm','Playful'];
document.querySelectorAll('.cp-cfg').forEach(w=>{const ctl=w.querySelector('.cfg-ctl'),ph=w.querySelector('.ph');
function set(k){const c=CF[k];w.querySelectorAll('.cfg-pre button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.k===k));
ctl.innerHTML=`<div class="cfg-g"><span class="cfg-h"><i data-i="palette"></i>Brand tokens</span><div class="cfg-sw">${c.sw.map(s=>`<i style="background:${s}"></i>`).join('')}<b style="font-family:${c.f[0]},serif">${c.f[1]}</b></div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="voice"></i>Tone of voice</span><div class="cfg-seg">${TONES.map((t,i)=>`<span class="${i===c.tone?'on':''}">${t}</span>`).join('')}</div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="bot"></i>Agents enabled</span><div class="cfg-ag">${c.ag.map(a=>`<span class="${a[2]?'':'off'}"><i data-i="${a[0]}"></i>${a[1]}<em></em></span>`).join('')}</div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="plug"></i>Data sources</span><div class="cfg-ds">${c.ds.map(a=>`<span class="${a[2]?'on':''}"><i data-i="${a[0]}"></i>${a[1]}</span>`).join('')}</div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="rules"></i>Content behaviour</span><div class="cfg-ru">${c.ru.map(r=>`<span class="${r[1]?'y':'n'}"><i data-i="${r[1]?'check':'x'}"></i>${r[0]}</span>`).join('')}</div></div>
<div class="cfg-g"><span class="cfg-h"><i data-i="hand"></i>Human handoff threshold</span><div class="cfg-sl"><span><i style="width:${c.h}%"></i><b style="left:${c.h}%"></b></span><em>Hands over to a person when confidence drops below ${c.h}%</em></div></div>`;
icons(ctl);ph.innerHTML=CP_chat(k,CP_C[k]);}
w.querySelectorAll('.cfg-pre button').forEach(b=>b.addEventListener('click',()=>set(b.dataset.k)));set('air');});

/* ---------- simulator ---------- */
const INTS={insp:['Trip inspiration','Ideas when you don\'t know where to go'],seat:['Manage booking','Seats, meals, changes'],disr:['Disruption support','Cancellations and delays'],fin:['Finance check','Budgets and payment'],nav:['Navigate airport','Gates, lounges, shops'],hotel:['Hotel booking','Find and book a stay']};
const S={
insp:{q:'I want to go kitesurfing this summer.',conf:[72,'#e2a23b'],rows:[['Customer data','CRM','ok','Name, home airport (BER)'],['Preferences','Customer profile','ok','Business class, window seat'],['Trip details','Language model','miss','Duration and dates missing'],['Destinations','Editorial content','ok','Kitesurf spots, July weather'],['Fares','Booking API','miss','Waiting on dates']],
pat:'Parallel',graph:[['Request'],['Destinations','Fares'],['Merge'],['Reply']],dec:['Ask','One clarifying question','Missing trip length'],guard:'Tone matches the airline brand: friendly, not too casual.',
store:[['Intent','Trip inspiration'],['Missing data asked','Trip length'],['Turns to resolve','2 (target ≤3)']],
chat:[{t:'u',x:'I want to go kitesurfing this summer.'},{t:'a',x:'That sounds like a great idea. How about two weeks in June or July?'},{t:'qr',x:['No','Yes']}]},
seat:{q:'Can you move me to a window seat?',conf:[94,'#2f9e5b'],rows:[['Customer data','CRM','ok','Booking ref, passenger'],['Preferences','Customer profile','ok','Prefers window'],['Trip details','Language model','ok','Outbound flight, Fri'],['Seat map','Booking API','ok','12A and 14F free']],
pat:'Single',graph:[['Request'],['Seat agent'],['Reply']],dec:['Act','With confirmation','All data present'],guard:'Change is reversible. Customer confirms before it is applied.',
store:[['Intent','Manage booking'],['Action','Seat 12C → 12A'],['Resolved without a person','Yes']],
chat:[{t:'u',x:'Can you move me to a window seat?'},{t:'r',x:'Checked booking and seat map'},{t:'a',x:'Seat 12A is free on Friday\'s flight, at no extra cost. Shall I switch you from 12C?'},{t:'qr',x:['Keep 12C','Switch to 12A']}]},
disr:{q:'My flight was cancelled and I\'m stuck at the airport.',conf:[48,'#c94235'],rows:[['Customer data','CRM','ok','Booking ref, status Gold'],['Trip details','Language model','ok','Cancelled flight today'],['Rebooking options','Booking API','ok','2 options tonight'],['Customer sentiment','Language model','no','Distressed · high stakes']],
pat:'Sequential',graph:[['Request'],['Rebooking'],['Summary'],['Human agent']],dec:['Hand over','To a human agent','High stakes, low confidence'],guard:'Empathetic tone. Full history passed to the agent so the customer doesn\'t repeat themselves.',
store:[['Intent','Disruption support'],['Handoff reason','Sentiment + stakes'],['Context passed','Booking, options, transcript']],
chat:[{t:'u',x:'My flight was cancelled and I\'m stuck at the airport.'},{t:'a',x:'I\'m sorry, that\'s stressful. I\'ve found two flights tonight and I\'m connecting you to an agent who can confirm one.'},{t:'h',x:['Connecting to an agent','Your booking is shared · ~2 min']}]},
fin:{q:'Can I afford to upgrade to business class?',conf:[81,'#2f9e5b'],rows:[['Customer data','CRM','ok','Linked payment card'],['Fare difference','Booking API','ok','€640 upgrade'],['Miles balance','Loyalty','ok','42,000 miles'],['Budget','Language model','miss','No budget stated']],
pat:'Sequential',graph:[['Request'],['Fares'],['Loyalty'],['Reply']],dec:['Suggest','Options, not advice','Payment needs consent'],guard:'No financial advice. Shows options and costs; the customer decides.',
store:[['Intent','Finance check'],['Offer shown','Miles + €210'],['Conversion','Tracked for cross-sell']],
chat:[{t:'u',x:'Can I afford to upgrade to business class?'},{t:'r',x:'Checked fare and miles balance'},{t:'a',x:'The upgrade is €640, or 30,000 miles plus €210. You have 42,000 miles.'},{t:'qr',x:['Pay €640','Use miles']}]},
nav:{q:'Where\'s my gate, and do I have time for the lounge?',conf:[90,'#2f9e5b'],rows:[['Trip details','Booking API','ok','Gate B12, boards 08:30'],['Location','Device','ok','Terminal 2, security'],['Walking time','Airport map','ok','11 minutes'],['Lounge access','Loyalty','ok','Gold · free entry']],
pat:'Parallel',graph:[['Request'],['Gate','Lounge'],['Merge'],['Reply']],dec:['Act','Answer with directions','All data present'],guard:'Location is used only for this answer and not stored.',
store:[['Intent','Navigate airport'],['Location stored','No'],['Follow-up','Boarding reminder set']],
chat:[{t:'u',x:'Where\'s my gate, and do I have time for the lounge?'},{t:'r',x:'Gate, walking time and lounge checked'},{t:'a',x:'Gate B12 is 11 minutes away. You have about 50 minutes in the lounge. I\'ll remind you at 08:05.'},{t:'qr',x:['Directions','Remind me']}]}};
const LAB={ok:'Ready',miss:'Missing',no:'Escalate'};
document.querySelectorAll('.cp-sim').forEach(w=>{const ids=(w.dataset.scn||'insp,seat,disr').split(','),N=+(w.dataset.steps||3);
const ph=w.querySelector('.ph'),pane=w.querySelector('.cp-pane'),scn=w.querySelector('.cp-scn'),st=w.querySelector('.cp-steps');
const SN=['Intent','Data & agents','Decide & respond','Analyse & store'];
scn.innerHTML=ids.map((id,i)=>`<button data-s="${id}">${INTS[id][0]}</button>`).join('');
st.style.gridTemplateColumns=`repeat(${N},1fr)`;st.innerHTML=SN.slice(0,N).map((n,i)=>`<button data-k="${i}"><i>${i+1}</i>${n}</button>`).join('');
let s=ids[0],k=0;
function render(){const d=S[s];
scn.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.s===s));st.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',+b.dataset.k===k));
const chat=k===0?[d.chat[0],{t:'typing'}]:k===1?[d.chat[0],{t:'r',x:'Checking what I know…'},{t:'typing'}]:d.chat;ph.innerHTML=CP_chat('air',chat);
const graph=N>3?`<div class="cp-graph"><span class="lab">${d.pat} pattern</span><div>${d.graph.map(g=>`<div class="col">${g.map(n=>`<span>${n}</span>`).join('')}</div>`).join('<i class="ar"></i>')}</div></div>`:`<div class="cp-guard"><b>Agent pattern</b>&nbsp;${d.pat}</div>`;
if(k===0)pane.innerHTML=`<h4>Message to intent</h4><p>The request is matched against the client's library of supported intents.</p><div class="cp-in"><b>User:</b> "${d.q}"</div><div class="cp-ints">${Object.keys(INTS).map(i=>`<div class="cp-int ${i===s?'on':''}"><b>${INTS[i][0]}</b><small>${i===s?'Matched':INTS[i][1]}</small></div>`).join('')}</div>`;
if(k===1)pane.innerHTML=`<h4>Required data &amp; agents</h4><p>Each intent needs specific data. The copilot checks what it already has before calling agents.</p><table class="cp-tbl"><tr><th>Status</th><th>Data</th><th>Source</th><th>Detail</th></tr>${d.rows.map(r=>`<tr><td><span class="st ${r[2]}">${LAB[r[2]]}</span></td><td>${r[0]}</td><td>${r[1]}</td><td>${r[3]}</td></tr>`).join('')}</table>${graph}`;
if(k===2)pane.innerHTML=`<h4>Decide &amp; respond</h4><p>Confidence and guardrails decide whether the copilot asks, acts or hands over.</p><div class="cp-conf"><span>Confidence</span><span class="bar"><i style="width:${d.conf[0]}%;background:${d.conf[1]}"></i></span><b>${d.conf[0]}%</b></div><div class="cp-dec"><div><small>Decision</small><b>${d.dec[0]}</b></div><div><small>How</small><b>${d.dec[1]}</b></div><div><small>Why</small><b>${d.dec[2]}</b></div></div><div class="cp-guard"><b>Guardrail</b>&nbsp;${d.guard}</div>`;
if(k===3)pane.innerHTML=`<h4>Analyse &amp; store</h4><p>Every conversation is logged for evaluation. These signals feed the learning loop and each client's dashboard.</p><div class="cp-dec">${d.store.map(x=>`<div><small>${x[0]}</small><b>${x[1]}</b></div>`).join('')}</div><div class="cp-eval"><span>Evaluated on</span>${['Grounded in data','On-brand tone','Task completed','Customer rating'].map(e=>`<em>${CP_I('check')}${e}</em>`).join('')}</div>`;}
scn.addEventListener('click',e=>{const b=e.target.closest('button');if(b){s=b.dataset.s;k=0;render();}});
st.addEventListener('click',e=>{const b=e.target.closest('button');if(b){k=+b.dataset.k;render();}});render();});

/* ---------- tabs ---------- */
document.querySelectorAll('[data-tabs]').forEach(w=>{const bs=w.querySelectorAll('.cp-tab'),ps=w.querySelectorAll('.cp-tp');
const set=i=>{bs.forEach((b,j)=>b.setAttribute('aria-pressed',i===j));ps.forEach((p,j)=>p.hidden=i!==j);};bs.forEach((b,i)=>b.addEventListener('click',()=>set(i)));set(0);});

/* ---------- zoom stepper over real artefacts ---------- */
document.querySelectorAll('.cp-zoom').forEach(z=>{const steps=JSON.parse(z.dataset.steps),nw=+z.dataset.w,nh=+z.dataset.h;
const fr=z.querySelector('.zf'),img=fr.querySelector('img'),cap=z.querySelector('.zc'),dots=z.querySelector('.zd');let i=0;
dots.innerHTML=steps.map((s,j)=>`<button aria-label="Step ${j+1}"><b>${String(j+1).padStart(2,'0')}</b><span>${s[4]}</span></button>`).join('');
function fit(){const fw=fr.clientWidth,fh=fr.clientHeight,[x,y,w,h]=steps[i],cw=w*nw,ch=h*nh,sc=Math.min(fw/cw,fh/ch)*.94;
img.style.width=nw*sc+'px';img.style.transform=`translate(${fw/2-(x+w/2)*nw*sc}px,${fh/2-(y+h/2)*nh*sc}px)`;}
function set(j){i=(j+steps.length)%steps.length;dots.querySelectorAll('button').forEach((b,k)=>b.setAttribute('aria-pressed',k===i));cap.textContent=steps[i][5]||'';fit();}
dots.addEventListener('click',e=>{const b=e.target.closest('button');if(b)set([...dots.children].indexOf(b));});
z.querySelector('.zp').addEventListener('click',()=>set(i-1));z.querySelector('.zn').addEventListener('click',()=>set(i+1));
new ResizeObserver(fit).observe(fr);img.complete?set(0):img.addEventListener('load',()=>set(0));});

icons();
})();


    /* ========== partner-partner-kit.js ========== */
(function(){
const I=n=>window.CP_I?CP_I(n):'';
/* motion hero */
(function(){const w=document.getElementById('peHx');if(!w)return;const sc=[...w.querySelectorAll('.hx-sc')],bs=[...w.querySelectorAll('#hxSteps button')],cur=document.getElementById('hxCur'),url=document.getElementById('hxUrl'),fc=[...w.querySelectorAll('.hx-fc')];
const URL=['partnerhub.example','partnerhub.example/welcome-back','partnerhub.example/home','partnerhub.example/portfolio'];let i=0,tm=[],reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
const T=f=>tm.push(setTimeout(f.fn,f.t));const clear=()=>{tm.forEach(clearTimeout);tm=[];};
function aim(el){if(!el)return;const r=el.getBoundingClientRect(),R=w.getBoundingClientRect();cur.style.left=(r.left-R.left+r.width*.55)+'px';cur.style.top=(r.top-R.top+r.height*.55)+'px';}
function press(el){el&&el.classList.add('press');setTimeout(()=>el&&el.classList.remove('press'),220);}
const mail=document.getElementById('hxMail'),code=[...w.querySelectorAll('.hx-code i')],s2=w.querySelector('.s2');
function show(k,auto){clear();i=k;sc.forEach((s,j)=>s.classList.toggle('on',j===k));bs.forEach((b,j)=>{b.classList.toggle('on',j===k);b.classList.toggle('past',j<k);});url.textContent=URL[k];
fc.forEach(f=>f.classList.remove('on'));w.querySelectorAll('.done,.hi').forEach(e=>e.classList.remove('done','hi'));
const tgt=w.querySelector('.s'+(k+1)+' [data-t]');
if(k===0){aim(w.querySelector('.hx-bento span:nth-child(2)'));T({t:900,fn:()=>aim(tgt)});T({t:2300,fn:()=>press(tgt)});T({t:1200,fn:()=>fc[0].classList.add('on')});}
if(k===1){s2.classList.remove('otp');mail.textContent='';code.forEach(c=>{c.textContent='';c.classList.remove('f');});aim(w.querySelector('.hx-fld'));const m='amara@northwind.example';[...m].forEach((ch,n)=>T({t:500+n*45,fn:()=>{mail.textContent+=ch;}}));T({t:1700,fn:()=>{s2.classList.add('otp');aim(code[0]);}});'482915'.split('').forEach((d,n)=>T({t:2200+n*170,fn:()=>{code[n].textContent=d;code[n].classList.add('f');}}));T({t:3500,fn:()=>{aim(tgt);press(tgt);}});}
if(k===2){aim(w.querySelector('.hx-gr'));T({t:800,fn:()=>fc[2].classList.add('on')});T({t:1500,fn:()=>aim(tgt)});T({t:2600,fn:()=>{press(tgt);tgt.closest('.hx-row').classList.add('done');tgt.closest('.hx-row').querySelector('em').textContent='Renewed';}});T({t:1000,fn:()=>fc[1].classList.add('on')});}
if(k===3){T({t:700,fn:()=>aim(tgt)});T({t:1600,fn:()=>{tgt.classList.add('hi');}});T({t:900,fn:()=>fc[1].classList.add('on')});}
if(auto&&!reduce)T({t:4200,fn:()=>show((k+1)%sc.length,true)});}
bs.forEach((b,k)=>b.addEventListener('click',()=>{w.style.setProperty('--dur','9s');show(k,false);T({t:9000,fn:()=>{w.style.removeProperty('--dur');show((k+1)%sc.length,true);}});}));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){show(i,true);}else clear();}),{threshold:.25});io.observe(w);})();
/* reauth story */
(function(){const w=document.getElementById('ra');if(!w)return;const as=[...w.querySelectorAll('.ra-a')],ks=[...w.querySelectorAll('.ra-keys button')],nw=w.querySelector('.ra-new'),cd=[...w.querySelectorAll('.ra-new .code i')];let i=0,tm=[];
const clr=()=>{tm.forEach(clearTimeout);tm=[];};
function show(k,auto){clr();i=k;as.forEach((a,j)=>{a.classList.toggle('on',j===k);a.classList.remove('go');});ks.forEach((b,j)=>b.setAttribute('aria-pressed',j===k));w.classList.toggle('hold',!auto);
tm.push(setTimeout(()=>as[k].classList.add('go'),120));
if(k===2){nw.classList.remove('done');cd.forEach(c=>{c.textContent='';c.classList.remove('f');});'730418'.split('').forEach((d,n)=>tm.push(setTimeout(()=>{cd[n].textContent=d;cd[n].classList.add('f');},900+n*160)));tm.push(setTimeout(()=>nw.classList.add('done'),2100));}
if(auto)tm.push(setTimeout(()=>show((k+1)%as.length,true),6000));}
ks.forEach((b,k)=>b.addEventListener('click',()=>show(k,false)));
new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)show(i,true);else clr();}),{threshold:.3}).observe(w);show(0,false);})();
/* sitemap */
const SM={u:{l:'Signed out',root:'Public homepage',n:[['Find a partner',['Partner directory','Become a partner']],['Explore partner programmes',[]],['Support',[]]],r:[]},
a:{l:'Agency, not yet certified',root:'Signed-in home',n:[['Client portfolio',[]],['Tools',['Overview','Tools directory']],['Playbooks',['Learn & activate','Pitch & plan']],['Events',['Upcoming, live & on demand']],['Become a partner',['Overview','Apply for certification','Project sample tips','Partner gallery']],['Agency console',['Track applications']],['Support',[]],['My profile',[]]],r:['Become a partner','Agency console']},
c:{l:'Certified partner practitioner',root:'Signed-in home',n:[['Client portfolio',[]],['Tools',['Overview','Tools directory']],['Playbooks',['Learn & activate','Pitch & plan']],['Events',['Upcoming, live & on demand']],['Grow my partnership',['Brand resources','Sales partner resources','Menu of services','Apply for certification']],['Partner console',['Track applications','Public listing','Partner gallery','Manage users']],['Support',[]],['My profile',[]]],r:['Grow my partnership','Partner console']}};
document.querySelectorAll('.pe-map').forEach(w=>{const seg=w.querySelector('.seg'),sm=w.querySelector('.sm'),note=w.querySelector('.sm-note');
seg.innerHTML=Object.entries(SM).map(([k,v])=>'<button type="button" data-k="'+k+'">'+v.l+'</button>').join('');
function set(k){const d=SM[k];seg.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.k===k));const pct=(50/d.n.length).toFixed(3);
sm.innerHTML='<div class="sm-root">'+d.root+'</div><div class="sm-v"></div><div class="sm-row" style="--l:'+pct+'%">'+d.n.map((n,i)=>'<div class="sm-n'+(d.r.includes(n[0])?' role':'')+'" style="animation-delay:'+(i*45)+'ms"><b>'+n[0].replace('&','&amp;')+'</b>'+(n[1].length?'<ul>'+n[1].map(x=>'<li>'+x.replace('&','&amp;')+'</li>').join('')+'</ul>':'')+'</div>').join('')+'</div>';
const pages=d.n.reduce((a,n)=>a+1+n[1].length,1);note.textContent=pages+' pages · '+(d.r.length?d.r.length+' sections change with this profile':'public pages only');}
seg.addEventListener('click',e=>{const b=e.target.closest('button');if(b)set(b.dataset.k);});set('c');});
/* role switcher */
const NAV=['Home','Client portfolio','Tools','Playbooks','Events','Become a partner','Grow my partnership','Partner console','Manage team','Support','Profile'];
const R={
vis:{l:'Signed-out visitor',ic:'globe',show:['Home','Playbooks','Events','Become a partner','Support'],role:['Become a partner'],q:'Is this the right place for my business, and who can help me?',n:'Public pages only. The way in is finding a partner or becoming one.',h:[['c-blush','Find a partner','Search certified agencies by need'],['c-lav','Become a partner','What it takes and how to apply'],['c-mint','Playbooks','Browse what is possible']]},
ag:{l:'Agency practitioner',ic:'users',show:['Home','Client portfolio','Tools','Playbooks','Events','Become a partner','Support','Profile'],role:['Become a partner'],q:'Which of my clients need me today, and how do we become a partner?',n:'Same structure. The route to partnership sits beside daily client work.',h:[['c-butter','Client issues','2 accounts need attention'],['c-lav','Becoming a partner','3 of 5 requirements met'],['c-mint','Training','Search certification in progress']]},
cp:{l:'Certified partner',ic:'star',show:['Home','Client portfolio','Tools','Playbooks','Events','Grow my partnership','Partner console','Support','Profile'],role:['Grow my partnership','Partner console'],q:'What needs my attention right now, and where did I leave off?',n:'Same structure. Becoming a partner turns into growing the partnership.',h:[['c-butter','Expires in 14 days','Video certification'],['c-lav','In progress','Search certification'],['c-mint','Coming up','Measurement masterclass']]},
ad:{l:'Partner admin',ic:'shield',show:['Home','Client portfolio','Tools','Playbooks','Events','Grow my partnership','Partner console','Manage team','Support','Profile'],role:['Grow my partnership','Partner console','Manage team'],q:'Is my team on track, and who needs access?',n:'Same structure, plus the tools to manage the team.',h:[['c-butter','Team certifications','4 expiring this quarter'],['c-lav','Access requests','2 waiting for approval'],['c-mint','Partnership tier','On track for renewal']]}};
document.querySelectorAll('.pe-roles').forEach(w=>{const seg=w.querySelector('.seg'),nav=w.querySelector('.pe-nav'),v=w.querySelector('.pe-view');
seg.innerHTML=Object.entries(R).map(([k,r])=>`<button type="button" data-k="${k}">${I(r.ic).replace('<svg','<svg class="ico" style="width:16px;height:16px"')}${r.l}</button>`).join('');
function set(k){const r=R[k];seg.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.k===k));
nav.innerHTML=NAV.map(n=>{const on=r.show.includes(n),ro=r.role.includes(n);return `<span class="${ro?'r':''}${on?'':' off'}">${n}${ro?'<em>Role</em>':''}</span>`;}).join('');
v.innerHTML=`<span class="pe-lab">${r.l}</span><q>${r.q}</q><p>${r.n}</p><div class="pe-homecards">${r.h.map(h=>`<div><i class="${h[0]}"></i><b>${h[1]}</b><small>${h[2]}</small></div>`).join('')}</div>`;}
seg.addEventListener('click',e=>{const b=e.target.closest('button');if(b)set(b.dataset.k);});set('cp');});
/* annotated homepage */
document.querySelectorAll('.pe-ann').forEach(w=>{const ks=[...w.querySelectorAll('.pe-keys button')],zs=[...w.querySelectorAll('.pe-zone')];
const set=i=>{ks.forEach((b,j)=>b.setAttribute('aria-pressed',i===j));zs.forEach((z,j)=>z.classList.toggle('on',i===j));};
ks.forEach((b,i)=>b.addEventListener('click',()=>set(i)));zs.forEach((z,i)=>z.addEventListener('click',()=>set(i)));set(1);});
/* generic stepper */
document.querySelectorAll('.pe-flow').forEach(w=>{const ks=[...w.querySelectorAll('.pe-keys button')],ps=[...w.querySelectorAll('.pg')];
const set=i=>{ks.forEach((b,j)=>b.setAttribute('aria-pressed',i===j));ps.forEach((p,j)=>p.hidden=i!==j);};ks.forEach((b,i)=>b.addEventListener('click',()=>set(i)));set(0);});
/* portfolio */
const A=[['Northwind group','a',178700,'3 high · 2 medium',5,9,[['North America','a',67500,'',0,3],['Harbour Outfitters','a',45500,'',0,1]]],['Fenway Home','p',22000,'Link pending',1,2,[]],['Lumen Travel','a',31200,'1 medium',1,4,[]],['Brightside Foods','a',12800,'',0,0,[]]];
document.querySelectorAll('.pe-port').forEach(w=>{const tb=w.querySelector('tbody'),bs=[...w.querySelectorAll('.pe-tabs button')];
const fm=n=>'$'+n.toLocaleString('en-US');
const row=(r,ch)=>`<tr class="${ch?'ch':''}"><td>${r[0]}</td><td><span class="st ${r[1]}">${r[1]==='a'?'Active':'Paused'}</span></td><td>${fm(r[2])}</td><td class="${r[3]?'is':'no'}">${r[3]||'None'}</td><td>${r[5]}</td></tr>`;
const S={issues:(a,b)=>b[4]-a[4],accounts:(a,b)=>a[0].localeCompare(b[0]),spend:(a,b)=>b[2]-a[2],tickets:(a,b)=>b[5]-a[5]};
function set(k){bs.forEach(b=>b.setAttribute('aria-pressed',b.dataset.k===k));tb.innerHTML=[...A].sort(S[k]).map(r=>row(r)+r[6].map(c=>row(c,1)).join('')).join('');}
bs.forEach(b=>b.addEventListener('click',()=>set(b.dataset.k)));set('issues');});
})();


    /* ========== portfolio-shared.js ========== */
document.addEventListener('DOMContentLoaded',()=>{const b=document.querySelector('.portfolio-nav-toggle'),l=document.querySelector('.portfolio-nav-links');if(!b||!l)return;b.addEventListener('click',()=>{const opened=l.classList.toggle('is-open');b.setAttribute('aria-expanded',String(opened))});});


  }

})();
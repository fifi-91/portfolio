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

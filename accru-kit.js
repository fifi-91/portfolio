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

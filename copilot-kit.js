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

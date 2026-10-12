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

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

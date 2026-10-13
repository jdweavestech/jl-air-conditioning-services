(function(){
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  /* ---------- Gallery data + illustrations ---------- */
  const art = {
    split:(h)=>`<svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice"><rect width="400" height="260" fill="var(--surface-2)"/><rect x="0" y="200" width="400" height="60" fill="var(--line)" opacity=".5"/><rect x="70" y="60" width="260" height="80" rx="18" fill="var(--surface)" stroke="var(--line)" stroke-width="2"/><rect x="90" y="118" width="220" height="10" rx="5" fill="var(--ink)" opacity=".15"/><circle cx="300" cy="82" r="4" fill="var(--ice)"/><g stroke="var(--ice)" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"><path d="M110 150 q10 20 0 40"/><path d="M160 150 q10 24 0 48"/><path d="M210 150 q10 24 0 48"/><path d="M260 150 q10 20 0 40"/></g>${h?`<circle cx="330" cy="200" r="26" fill="var(--sun)"/><text x="330" y="207" font-family="IBM Plex Mono,monospace" font-size="18" text-anchor="middle" fill="var(--on-ice)">${h}</text>`:''}</svg>`,
    window:(h)=>`<svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice"><rect width="400" height="260" fill="var(--surface-2)"/><rect x="40" y="30" width="320" height="200" fill="var(--bg)" stroke="var(--line)" stroke-width="2"/><rect x="120" y="80" width="160" height="110" rx="8" fill="var(--surface)" stroke="var(--ink)" stroke-opacity=".25" stroke-width="2"/><g stroke="var(--ink)" stroke-opacity=".25" stroke-width="3">${[0,1,2,3,4,5].map(i=>`<line x1="135" y1="${96+i*12}" x2="265" y2="${96+i*12}"/>`).join('')}</g><rect x="230" y="170" width="38" height="10" rx="3" fill="var(--ice)"/>${h?`<circle cx="330" cy="200" r="26" fill="var(--sun)"/><text x="330" y="207" font-family="IBM Plex Mono,monospace" font-size="18" text-anchor="middle" fill="var(--on-ice)">${h}</text>`:''}</svg>`,
    condenser:(h)=>`<svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice"><rect width="400" height="260" fill="var(--surface-2)"/><rect x="0" y="210" width="400" height="50" fill="var(--line)" opacity=".5"/><rect x="90" y="60" width="220" height="150" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="2"/><circle cx="170" cy="135" r="52" fill="var(--bg)" stroke="var(--ink)" stroke-opacity=".25" stroke-width="3"/><g class="fan"><g fill="var(--ice)" opacity=".75"><path d="M170 135 C156 116 158 96 170 88 C184 96 186 116 170 135Z"/><path d="M170 135 C156 116 158 96 170 88 C184 96 186 116 170 135Z" transform="rotate(120 170 135)"/><path d="M170 135 C156 116 158 96 170 88 C184 96 186 116 170 135Z" transform="rotate(240 170 135)"/></g><circle cx="170" cy="135" r="8" fill="var(--ink)" opacity=".5"/></g><g stroke="var(--ink)" stroke-opacity=".2" stroke-width="3">${[0,1,2,3,4,5,6].map(i=>`<line x1="245" y1="${85+i*14}" x2="290" y2="${85+i*14}"/>`).join('')}</g>${h?`<circle cx="340" cy="60" r="26" fill="var(--sun)"/><text x="340" y="67" font-family="IBM Plex Mono,monospace" font-size="18" text-anchor="middle" fill="var(--on-ice)">${h}</text>`:''}</svg>`,
    coil:(h)=>`<svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice"><rect width="400" height="260" fill="var(--surface-2)"/><g stroke="var(--ink)" stroke-opacity=".22" stroke-width="2">${Array.from({length:38},(_,i)=>`<line x1="${10+i*10}" y1="20" x2="${10+i*10}" y2="240"/>`).join('')}</g><rect x="0" y="0" width="200" height="260" fill="var(--sun)" opacity=".18"/><rect x="200" y="0" width="200" height="260" fill="var(--ice)" opacity=".12"/><line x1="200" y1="0" x2="200" y2="260" stroke="var(--surface)" stroke-width="4"/><text x="100" y="135" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="15" fill="var(--ink)">BEFORE</text><text x="300" y="135" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="15" fill="var(--ink)">AFTER</text></svg>`,
    tools:(h)=>`<svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice"><rect width="400" height="260" fill="var(--surface-2)"/><circle cx="150" cy="130" r="60" fill="var(--surface)" stroke="var(--ink)" stroke-opacity=".3" stroke-width="3"/><circle cx="260" cy="130" r="60" fill="var(--surface)" stroke="var(--ink)" stroke-opacity=".3" stroke-width="3"/><line x1="150" y1="130" x2="180" y2="95" stroke="var(--ice)" stroke-width="4" stroke-linecap="round"/><line x1="260" y1="130" x2="230" y2="90" stroke="var(--sun)" stroke-width="4" stroke-linecap="round"/><text x="150" y="170" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="12" fill="var(--muted)">LOW PSI</text><text x="260" y="170" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="12" fill="var(--muted)">HIGH PSI</text><path d="M150 190 q50 50 110 0" stroke="var(--ice)" stroke-width="5" fill="none"/></svg>`
  };
  const items = [
    {f:'cleaning',a:'split',h:'1.5',cls:'wide',tag:'Cleaning',title:'Split-type general cleaning',desc:'1.5 HP wall-mounted split-type in a bedroom. Filter wash, blower and coil cleaning, drain flush.'},
    {f:'repair',a:'condenser',h:'',cls:'tall',tag:'Repair',title:'Outdoor fan motor replacement',desc:'Condenser fan stopped spinning, causing high head pressure. Replaced the motor and capacitor.'},
    {f:'cleaning',a:'coil',h:'',cls:'',tag:'Cleaning',title:'Evaporator coil, before and after',desc:'Chemical deep wash on a coil clogged with dust and mold.'},
    {f:'install',a:'window',h:'1.0',cls:'',tag:'Installation',title:'Window-type install',desc:'1.0 HP window-type with a new sleeve and sealing for a home office.'},
    {f:'repair',a:'tools',h:'',cls:'',tag:'Repair',title:'Freon leak test & recharge',desc:'Manifold gauge reading on an R410A split-type before recharge.'},
    {f:'install',a:'split',h:'2.0',cls:'wide',tag:'Installation',title:'Inverter split-type installation',desc:'2.0 HP inverter split-type for a sari-sari store, with 10 ft copper piping and new breaker.'},
    {f:'cleaning',a:'window',h:'',cls:'',tag:'Cleaning',title:'Window-type pull-down cleaning',desc:'Full pull-down of a window-type unit in a clinic waiting area.'},
  ];
  const grid = document.getElementById('gallery-grid');
  grid.innerHTML = items.map((it,i)=>`<button class="g-item ${it.cls}" data-f="${it.f}" data-i="${i}" aria-label="Open ${it.title}">${art[it.a](it.h)}<div class="g-cap">${it.title}<span>${it.tag}</span></div></button>`).join('');

/* ---------- Lightbox ---------- */
const lb = document.getElementById('lightbox');
let cur = 0, lbList = [];

const artSlide = it => ({ html: art[it.a](it.h), tag: it.tag, title: it.title, desc: it.desc });

// Reads the <img> as it is right now, so if the onerror fallback
// swapped in the gray placeholder, the lightbox shows that too.
const photoSlide = el => {
  const im = el.querySelector('img');
  const w = document.createElement('div');
  const c = document.createElement('img');
  c.src = im.getAttribute('src');
  c.alt = im.alt;
  w.appendChild(c);
  return { html: w.innerHTML, tag: el.dataset.tag, title: el.dataset.title, desc: el.dataset.desc };
};

function openLb(list, i) {
  lbList = list; cur = i;
  const it = list[i];
  document.getElementById('lbArt').innerHTML = it.html;
  document.getElementById('lbTag').textContent = it.tag;
  document.getElementById('lbTitle').textContent = it.title;
  document.getElementById('lbDesc').textContent = it.desc;
  lb.hidden = false;
  if (window.gsap) gsap.fromTo('.lb-card', { y: 30, scale: .96, opacity: 0 }, { y: 0, scale: 1, opacity: 1, duration: .4, ease: 'power3.out' });
  document.getElementById('lbClose').focus();
}
function closeLb() { lb.hidden = true; }
function step(d) { openLb(lbList, (cur + d + lbList.length) % lbList.length); }

// Illustrated gallery (no filtering, so every item is in the list)
grid.addEventListener('click', e => {
  const b = e.target.closest('.g-item');
  if (b) openLb(items.map(artSlide), +b.dataset.i);
});

// Photos (delegated, so it works for items created by renderPhotos())
const photoGrid = document.getElementById('photoGrid');
photoGrid.addEventListener('click', e => {
  const b = e.target.closest('.ph-item');
  if (!b) return;
  const all = [...photoGrid.querySelectorAll('.ph-item')];
  openLb(all.map(photoSlide), all.indexOf(b));
});

document.getElementById('lbClose').onclick = closeLb;
document.getElementById('lbPrev').onclick = () => step(-1);
document.getElementById('lbNext').onclick = () => step(1);
lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
document.addEventListener('keydown', e => {
  if (lb.hidden) return;
  if (e.key === 'Escape') closeLb();
  if (e.key === 'ArrowRight') step(1);
  if (e.key === 'ArrowLeft') step(-1);
});

  /* ---------- Filters ---------- */
  document.querySelectorAll('#gallery .filters button').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('#gallery .filters button').forEach(b=>b.setAttribute('aria-pressed',b===btn));
    const f=btn.dataset.f; const els=[...grid.children];
    const show = els.filter(el=>f==='all'||el.dataset.f===f);
    visible = show.map(el=>+el.dataset.i);
    const apply=()=>els.forEach(el=>el.hidden=!show.includes(el));
    if(window.gsap && !reduce){ gsap.to(els,{opacity:0,y:10,duration:.18,onComplete:()=>{apply();gsap.fromTo(show,{opacity:0,y:16},{opacity:1,y:0,duration:.45,stagger:.05,ease:'power2.out'});}}); }
    else apply();
  }));

/* ---------- Pricelist: JL Air Conditioning Services ---------- */
/* Prices include the standard installation package shown in the reference image. */

const units = [
    // American Home
    { t: 'american-home', brand: 'American Home', series: 'MINV Models', hp: '1 HP', price: 23600 },
    { t: 'american-home', brand: 'American Home', series: 'MINV Models', hp: '1.5 HP', price: 25300 },
    { t: 'american-home', brand: 'American Home', series: 'MINV Models', hp: '2 HP', price: 32700 },
    { t: 'american-home', brand: 'American Home', series: 'MINV Models', hp: '2.5 HP', price: 35200 },
    { t: 'american-home', brand: 'American Home', series: 'MINV Models', hp: '3 HP', price: 64000 },

    // TCL
    { t: 'tcl', brand: 'TCL', series: '2025 KEI-S AI Full DC Inverter', hp: '1 HP', price: 26500 },
    { t: 'tcl', brand: 'TCL', series: '2025 KEI-S AI Full DC Inverter', hp: '1.5 HP', price: 27500 },
    { t: 'tcl', brand: 'TCL', series: '2025 KEI-S AI Full DC Inverter', hp: '2 HP', price: 33300 },
    { t: 'tcl', brand: 'TCL', series: '2025 KEI-S AI Full DC Inverter', hp: '2.5 HP', price: 35700 },
    { t: 'tcl', brand: 'TCL', series: '2025 KEI-S AI Full DC Inverter', hp: '3 HP', price: 60000 },

    // Carrier
    { t: 'carrier', brand: 'Carrier', series: 'Nexus Standard Inverter', hp: '1 HP', price: 29000 },
    { t: 'carrier', brand: 'Carrier', series: 'Nexus Standard Inverter', hp: '1.5 HP', price: 31700 },
    { t: 'carrier', brand: 'Carrier', series: 'Nexus Standard Inverter', hp: '2 HP', price: 39300 },
    { t: 'carrier', brand: 'Carrier', series: 'Nexus Standard Inverter', hp: '2.5 HP', price: 44500 },

    // LG
    { t: 'lg', brand: 'LG', series: 'Standard Dual Inverter IBA 2025', hp: '1 HP', price: 28000 },
    { t: 'lg', brand: 'LG', series: 'Standard Dual Inverter IBA 2025', hp: '1.5 HP', price: 30000 },
    { t: 'lg', brand: 'LG', series: 'Standard Dual Inverter IBA 2025', hp: '2 HP', price: 38500 },
    { t: 'lg', brand: 'LG', series: 'Standard Dual Inverter IBA 2025', hp: '2.5 HP', price: 41500 },

    // Samsung
    { t: 'samsung', brand: 'Samsung', series: 'Split AC Standard Digital Inverter', hp: '1 HP', price: 29700 },
    { t: 'samsung', brand: 'Samsung', series: 'Split AC Standard Digital Inverter', hp: '1.5 HP', price: 34200 },
    { t: 'samsung', brand: 'Samsung', series: 'Split AC Standard Digital Inverter', hp: '2 HP', price: 38700 },
    { t: 'samsung', brand: 'Samsung', series: 'Split AC Standard Digital Inverter', hp: '2.5 HP', price: 45900 },

    // Midea
    { t: 'midea', brand: 'Midea', series: 'Split AC Inverter Celestro', hp: '1 HP', price: 24400 },
    { t: 'midea', brand: 'Midea', series: 'Split AC Inverter Celestro', hp: '1.5 HP', price: 27400 },
    { t: 'midea', brand: 'Midea', series: 'Split AC Inverter Celestro', hp: '2 HP', price: 36000 },
    { t: 'midea', brand: 'Midea', series: 'Split AC Inverter Celestro', hp: '2.5 HP', price: 39300 },
    { t: 'midea', brand: 'Midea', series: 'Split AC Inverter Celestro', hp: '3 HP', price: 59500 },

    // Daikin
    { t: 'daikin', brand: 'Daikin', series: 'Split AC Inverter DSMart - Amihan', hp: '1 HP', price: 32000 },
    { t: 'daikin', brand: 'Daikin', series: 'Split AC Inverter DSMart - Amihan', hp: '1.5 HP', price: 33000 },
    { t: 'daikin', brand: 'Daikin', series: 'Split AC Inverter DSMart - Prince', hp: '2 HP', price: 45700 },
    { t: 'daikin', brand: 'Daikin', series: 'Split AC Inverter DSMart - Prince', hp: '2.5 HP', price: 53700 },

    // Matrix
    { t: 'matrix', brand: 'Matrix', series: 'Super DC Inverter', hp: '1 HP', price: 23700 },
    { t: 'matrix', brand: 'Matrix', series: 'Super DC Inverter', hp: '1.5 HP', price: 25600 },
    { t: 'matrix', brand: 'Matrix', series: 'Super DC Inverter', hp: '2 HP', price: 32000 },
    { t: 'matrix', brand: 'Matrix', series: 'Super DC Inverter', hp: '2.5 HP', price: 35000 },
];

const peso = n => '₱' + n.toLocaleString('en-PH');

const priceBody = document.getElementById('priceBody');
const priceCount = document.getElementById('priceCount');

function renderPrices(brand = 'all') {
    const rows = units.filter(u => brand === 'all' || u.t === brand);

    priceBody.innerHTML = rows.map(u => `
        <tr>
            <td class="pbrand">
                <b>${u.brand}</b>
                <small>${u.series}</small>
            </td>
            <td><span class="hp-chip">${u.hp}</span></td>
            <td>
                <span class="amt">${peso(u.price)}</span>
                <span class="amt-sub">with standard installation</span>
            </td>
            <td>
                <button class="inq" data-k="${units.indexOf(u)}">
                    Inquire
                </button>
            </td>
        </tr>
    `).join('');

    priceCount.textContent = `${rows.length} units listed`;

    if (window.gsap && !reduce) {
        gsap.fromTo(
            '#priceBody tr',
            { opacity: 0, x: -14 },
            {
                opacity: 1,
                x: 0,
                duration: 0.4,
                stagger: 0.025,
                ease: 'power2.out'
            }
        );
    }
}

document.querySelectorAll('#priceTabs button').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('#priceTabs button').forEach(b => {
            b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
        });

        renderPrices(btn.dataset.t);
    });
});

priceBody.addEventListener('click', e => {
    const btn = e.target.closest('.inq');
    if (!btn) return;

    const u = units[Number(btn.dataset.k)];

    document.getElementById('fService').value = 'Buy a new unit';
    document.getElementById('fType').value = 'Inverter split-type';
    document.getElementById('fNotes').value =
        `Interested in: ${u.brand} ${u.hp} ${u.series}. ` +
        `Price: ${peso(u.price)}, including standard installation.`;

    document.getElementById('book').scrollIntoView({
        behavior: reduce ? 'auto' : 'smooth'
    });

    setTimeout(() => {
        document.getElementById('fName').focus({ preventScroll: true });
    }, 700);
});

renderPrices('all');

  /* ---------- Nav ---------- */
  const menuBtn=document.getElementById('menuBtn'), links=document.getElementById('navLinks');
  menuBtn.onclick=()=>{const o=links.classList.toggle('open');menuBtn.setAttribute('aria-expanded',o);};
  links.addEventListener('click',e=>{if(e.target.tagName==='A'){links.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');}});

  /* ---------- HP calculator ---------- */
  const area=document.getElementById('area');
  function calc(){ const v=+area.value; document.getElementById('areaVal').textContent=v;
    const rows=[...document.querySelectorAll('#hpTable tbody tr')];
    const row=rows.find(r=>v<=+r.dataset.max)||rows[rows.length-1];
    rows.forEach(r=>r.classList.toggle('hl',r===row));
    const hp=row.cells[0].textContent; document.getElementById('hpOut').textContent=hp;
    document.getElementById('hpNote').textContent = v<=12?'Small bedroom or study. Add 0.5 HP for west-facing rooms or kitchens.':v<=18?'Typical bedroom. Add 0.5 HP for west-facing rooms or kitchens.':v<=25?'Master bedroom or small office. Add 0.5 HP for west-facing rooms or kitchens.':v<=35?'Living room or small shop. Add 0.5 HP if the room has lots of glass.':'Large living area or office. Consider two units for even cooling.';
  }
  area.addEventListener('input',calc); calc();

  /* ---------- Copy buttons ---------- */
  function copyText(text,btn){
    const done=()=>{const o=btn.textContent;btn.textContent='Copied';setTimeout(()=>btn.textContent=o,1500);};
    try{ navigator.clipboard.writeText(text).then(done).catch(()=>selectFallback(btn)); }catch(e){ selectFallback(btn); }
  }
  function selectFallback(btn){ const t=btn.parentElement.querySelector('b,pre,a.val'); if(!t) return; const r=document.createRange(); r.selectNodeContents(t); const s=getSelection(); s.removeAllRanges(); s.addRange(r); btn.textContent='Selected — press Ctrl+C'; }
  document.querySelectorAll('.copy[data-copy]').forEach(b=>b.addEventListener('click',()=>copyText(document.getElementById(b.dataset.copy).textContent,b)));

/* ---------- Booking form (Formspree) ---------- */
const FORMSPREE_URL = 'https://formspree.io/f/myekdqpo'; // <- paste yours
const form = document.getElementById('bookForm'), msg = document.getElementById('formMsg');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const g = id => document.getElementById(id).value.trim();
  const show = html => {
    msg.hidden = false;
    msg.innerHTML = html;
    if (window.gsap && !reduce) gsap.from(msg, { y: 12, opacity: 0, duration: .4 });
  };

  const req = ['fName', 'fPhone', 'fAddr'].filter(id => !g(id));
  if (req.length) {
    show('<span class="err">Please fill in your name, mobile number and address so we can reach you.</span>');
    document.getElementById(req[0]).focus();
    return;
  }

  const btn = form.querySelector('button[type="submit"]');
  const label = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Sending…';

  const data = new FormData(form);
  data.append('_subject', 'Booking request: ' + g('fService')); // email subject line

  try {
    const res = await fetch(FORMSPREE_URL, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' }
    });
    if (res.ok) {
      form.reset();
      show('<b>Thank you!</b> Your booking request was sent. We\'ll contact you shortly.');
    } else {
      throw new Error('Formspree error');
    }
  } catch (err) {
    show('<span class="err">Sorry, something went wrong. Please text or call us at <a href="tel:+639170000000">0917 000 0000</a>.</span>');
  } finally {
    btn.disabled = false;
    btn.textContent = label;
  }
});
  /* ---------- Animations ---------- */

  // Thermostat ticks
  const ticks=document.getElementById('ticks'); let tk='';
  for(let i=0;i<=40;i++){ const a=(135+i*270/40)*Math.PI/180, r1=172, r2=i%5?178:184;
    tk+=`<line x1="${200+r1*Math.cos(a)}" y1="${200+r1*Math.sin(a)}" x2="${200+r2*Math.cos(a)}" y2="${200+r2*Math.sin(a)}" stroke="var(--muted)" stroke-opacity="${i%5?.35:.7}" stroke-width="${i%5?1.2:2}"/>`; }
  ticks.innerHTML=tk;
  const arc=document.getElementById('arc'), knob=document.getElementById('knob'), tempEl=document.getElementById('temp'), lbl=document.getElementById('tempLbl');
  const FULL=706.9; // 270° of r=150
  function setTemp(t){ // range 16..36
    const p=(t-16)/20, len=FULL*p; arc.setAttribute('stroke-dasharray',`${len} 942.5`);
    const a=(135+270*p)*Math.PI/180; knob.setAttribute('cx',200+150*Math.cos(a)); knob.setAttribute('cy',200+150*Math.sin(a));
    const hot = t>28; arc.setAttribute('stroke',hot?'var(--sun)':'var(--ice)'); knob.setAttribute('stroke',hot?'var(--sun)':'var(--ice)');
    tempEl.textContent=Math.round(t); tempEl.style.color = hot?'var(--sun)':'var(--ice)';
  }

  // Preloader: counts 32°C down to 24°C while the page loads, then lifts away.
  const pl=document.getElementById('preloader'), plTemp=document.getElementById('plTemp'), plBar=document.getElementById('plBar'), plLbl=document.getElementById('plLbl');
  let loaded=document.readyState==='complete';
  window.addEventListener('load',()=>{loaded=true;});
  function runPreloader(done){
    if(reduce || !window.gsap){ pl.hidden=true; done(); return; }
    const st={t:32,p:0};
    const count=gsap.to(st,{t:24,p:100,duration:1.6,ease:'power2.inOut',onUpdate(){plTemp.textContent=Math.round(st.t);plBar.style.width=st.p+'%';}});
    const start=Date.now();
    (function wait(){
      if((loaded && !count.isActive()) || Date.now()-start>4000){
        plLbl.textContent='Ready · 24°C';
        gsap.timeline({onComplete(){pl.hidden=true;}})
          .to('.pl-inner',{y:-20,opacity:0,duration:.35,ease:'power2.in'},.25)
          .to(pl,{yPercent:-100,duration:.7,ease:'power4.inOut'},.45)
          .add(done,.75);
      } else requestAnimationFrame(wait);
    })();
  }

  if(!window.gsap || reduce){ runPreloader(()=>{}); setTemp(24); lbl.textContent='Room temp · after service'; return; }
  gsap.registerPlugin(ScrollTrigger);
  setTemp(34);

  // Hero load sequence
  const tl=gsap.timeline({paused:true,defaults:{ease:'power3.out'}});
  runPreloader(()=>tl.play());
  tl.from('.hero-in',{y:28,opacity:0,duration:.8,stagger:.09})
    .from('.thermo',{scale:.9,opacity:0,duration:.9},0.15)
    .to({t:34},{t:24,duration:2.6,ease:'power2.inOut',onUpdate(){setTemp(this.targets()[0].t);},onComplete(){lbl.textContent='Room temp · after service';}},0.9)
    .from('.hero .hot',{rotate:-6,duration:.5,ease:'back.out(3)'},0.6);

  // Airflow
  gsap.to('#flow path',{strokeDashoffset:-48,duration:1.4,ease:'none',repeat:-1});
  gsap.to('#flow',{y:-6,duration:2,yoyo:true,repeat:-1,ease:'sine.inOut'});

  // Brand ticker
  const track=document.getElementById('ticker'); track.innerHTML+=track.innerHTML;
  gsap.to(track,{xPercent:-50,duration:30,ease:'none',repeat:-1});

  // Scroll reveals (start partly visible so content is never hidden)
  gsap.utils.toArray('.reveal').forEach(el=>gsap.from(el,{y:40,opacity:.2,duration:.9,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%'}}));
  gsap.from('.svc',{y:50,opacity:.2,duration:.8,stagger:.08,ease:'power3.out',scrollTrigger:{trigger:'#svcGrid',start:'top 85%'}});
  gsap.from('.svc-ico',{rotate:-20,scale:.6,duration:.7,stagger:.08,ease:'back.out(2)',scrollTrigger:{trigger:'#svcGrid',start:'top 85%'}});
  gsap.from('.step .bar',{scaleX:0,duration:.8,stagger:.25,ease:'power2.inOut',scrollTrigger:{trigger:'.steps',start:'top 85%'}});
  gsap.from('.step h3, .step p',{y:20,opacity:.2,duration:.6,stagger:.06,scrollTrigger:{trigger:'.steps',start:'top 85%'}});
  gsap.from('.g-item',{y:40,opacity:.2,scale:.97,duration:.7,stagger:.07,ease:'power3.out',scrollTrigger:{trigger:'#gallery-grid',start:'top 88%'}});
  gsap.from('.ph-item',{y:40,opacity:.2,duration:.7,stagger:.06,ease:'power3.out',scrollTrigger:{trigger:'#photoGrid',start:'top 88%'}});
  gsap.from('.hp-table tbody tr',{x:-20,opacity:.2,duration:.5,stagger:.07,scrollTrigger:{trigger:'#hpTable',start:'top 88%'}});

  // Process section background parallax-ish heading
  gsap.to('.process h2',{x:20,scrollTrigger:{trigger:'.process',start:'top bottom',end:'bottom top',scrub:true}});

  // Floating button appears after hero
  gsap.set('#floatBtn',{y:100,opacity:0});
  ScrollTrigger.create({trigger:'#services',start:'top 60%',endTrigger:'#book',end:'top 80%',
    onToggle:s=>gsap.to('#floatBtn',{y:s.isActive?0:100,opacity:s.isActive?1:0,duration:.4,ease:'power2.out'})});

  // Magnetic buttons
  if(matchMedia('(hover:hover)').matches){
    document.querySelectorAll('.magnetic').forEach(b=>{
      b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();gsap.to(b,{x:(e.clientX-r.left-r.width/2)*.25,y:(e.clientY-r.top-r.height/2)*.35,duration:.3});});
      b.addEventListener('mouseleave',()=>gsap.to(b,{x:0,y:0,duration:.5,ease:'elastic.out(1,.4)'}));
    });
  }
})();



/* ---------- Photos data ----------
   To add a photo: drop the file in images/ and add one line below.
   tag: 'On the job' or 'Past client'
   src: leave out to show a gray placeholder
   w/h: image size, used to reserve space and avoid layout jumps */
const PHOTOS = [
  // ----- Real photos (download them from Facebook into images/ first) -----
  { src: 'images/work-img-1-1.jpg',  w: 1200, h: 900,  tag: 'Past client',  title: '', desc: '' },
  { src: 'images/work-img-2-1.jpg',  w: 1200, h: 900,  tag: 'Past client', title: '', desc: '' },
  { src: 'images/work-img-3.jpg', w: 900,  h: 1200, tag: 'Past client',  title: '',    desc: '' },
  { src: 'images/work-img-4.jpg', w: 900,  h: 1200, tag: 'Past client', title: '',  desc: '' },
  { src: 'images/work-img-5.jpg',w: 1200, h: 800,  tag: 'Past client',  title: '',desc: '' },
  { src: 'images/work-img-6.jpg', w: 1200, h: 800,  tag: 'Past client', title: '',  desc: '' },
  { src: 'images/work-img-7.jpg',    w: 1200, h: 900,  tag: 'Past client',  title: '', desc: '' },
  { src: 'images/work-img-8.jpg', w: 1200, h: 900,  tag: 'Past client', title: '',desc: '' },
  { src: 'images/work-img-9.jpg', w: 1200, h: 900,  tag: 'Past client', title: '',desc: '' },
  { src: 'images/work-img-10.jpg', w: 1200, h: 900,  tag: 'Past client', title: '',desc: '' },
  { src: 'images/work-img-11.jpg', w: 1200, h: 900,  tag: 'Past client', title: '',desc: '' },
  { src: 'images/work-img-12.jpg', w: 1200, h: 900,  tag: 'Past client', title: '',desc: '' },
  { src: 'images/work-img-13.jpg', w: 1200, h: 900,  tag: 'Past client', title: '',desc: '' },

  // ----- Mock items (no src = gray placeholder) -----
  // { w: 1200, h: 900,  tag: 'Past client',  title: 'Photo title 1', desc: 'Short description of this job.' },
  // { w: 900,  h: 1200, tag: 'Past client', title: 'Photo title 2', desc: 'Short description of this job.' },
  // { w: 1200, h: 800,  tag: 'Past client',  title: 'Photo title 3', desc: 'Short description of this job.' },
  // { w: 1200, h: 900,  tag: 'Past client', title: 'Photo title 4', desc: 'Short description of this job.' },
  // { w: 900,  h: 1200, tag: 'Past client',  title: 'Photo title 5', desc: 'Short description of this job.' },
  // { w: 1200, h: 800,  tag: 'Past client', title: 'Photo title 6', desc: 'Short description of this job.' },
  // { w: 1200, h: 900,  tag: 'Past client',  title: 'Photo title 7', desc: 'Short description of this job.' },
  // { w: 900,  h: 1200, tag: 'Past client', title: 'Photo title 8', desc: 'Short description of this job.' },
];

/* ---------- Render photos ---------- */
const placeholder = (w, h) =>
  'data:image/svg+xml,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"><rect width="${w}" height="${h}" fill="#cfdde6"/></svg>`
  );

function renderPhotos() {
  const grid = document.getElementById('photoGrid');
  if (!grid) return;
  grid.textContent = '';

  PHOTOS.forEach(p => {
    const w = p.w || 1200, h = p.h || 900;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'ph-item';
    btn.dataset.tag = p.tag;
    btn.dataset.title = p.title;
    btn.dataset.desc = p.desc;

    const img = document.createElement('img');
    img.src = p.src || placeholder(w, h);
    img.alt = p.title;
    img.width = w;
    img.height = h;
    img.loading = 'lazy';
    // if a file is missing or the link expired, show the gray block instead of a broken icon
    img.onerror = () => { img.onerror = null; img.src = placeholder(w, h); };

    const cap = document.createElement('span');
    cap.className = 'g-cap';
    cap.append(p.title);
    const tag = document.createElement('span');
    tag.textContent = p.tag;
    cap.append(tag);

    btn.append(img, cap);
    grid.append(btn);
  });
}

renderPhotos();
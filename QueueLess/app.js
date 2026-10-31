const icon = (name) => {
  const icons = {
    bowl: '<svg viewBox="0 0 72 72" aria-hidden="true"><ellipse cx="36" cy="46" rx="25" ry="11" fill="#fff8ec" stroke="#cebea4" stroke-width="2"/><path d="M15 43c2 13 9 20 21 20s19-7 21-20" fill="#d58154" stroke="#b66942" stroke-width="2"/><path d="M19 43c4-9 11-13 17-13 8 0 14 5 17 13" fill="#799d65"/><circle cx="29" cy="39" r="6" fill="#edc970"/><circle cx="44" cy="38" r="5" fill="#d96e58"/><path d="M30 23c2-6 6-9 11-8" stroke="#799d65" stroke-width="3" stroke-linecap="round"/><path d="M37 16c1-5 4-7 8-8" stroke="#799d65" stroke-width="3" stroke-linecap="round"/></svg>',
    cafe: '<svg viewBox="0 0 72 72" aria-hidden="true"><path d="M18 26h34l-3 34H21z" fill="#fffaf2" stroke="#b67b5a" stroke-width="2"/><path d="M51 32h5a7 7 0 0 1 0 14h-6" fill="none" stroke="#b67b5a" stroke-width="3"/><path d="M21 38h28" stroke="#d9a977" stroke-width="4"/><path d="M29 20c-5-6 5-7 1-13m9 13c-5-6 5-7 1-13" fill="none" stroke="#a78968" stroke-width="2" stroke-linecap="round"/><circle cx="29" cy="45" r="4" fill="#db765e"/><path d="m36 43 7 3" stroke="#7da06b" stroke-width="4" stroke-linecap="round"/><ellipse cx="35" cy="62" rx="24" ry="4" fill="#d2c4ad"/></svg>',
    noodle: '<svg viewBox="0 0 72 72" aria-hidden="true"><path d="M14 39h44c-2 14-10 22-22 22S16 53 14 39Z" fill="#fffaf0" stroke="#be9a5c" stroke-width="2"/><ellipse cx="36" cy="39" rx="22" ry="6" fill="#e8bb65"/><path d="M22 35c5-13 22-14 29-1m-24 0c3-9 17-12 24-3" fill="none" stroke="#dfa952" stroke-width="3" stroke-linecap="round"/><path d="m30 34 3-12m7 12 3-15m5 15 5-10" stroke="#729665" stroke-width="3" stroke-linecap="round"/><circle cx="25" cy="35" r="4" fill="#d76f54"/><path d="M28 16 47 8" stroke="#9b7750" stroke-width="2.5" stroke-linecap="round"/><path d="M26 12 45 4" stroke="#9b7750" stroke-width="2.5" stroke-linecap="round"/></svg>',
    wrap: '<svg viewBox="0 0 72 72" aria-hidden="true"><path d="m16 47 17-30c2-4 7-5 10-2l16 11-16 31c-2 4-7 5-10 2L16 47Z" fill="#f0cf8a" stroke="#c39a5b" stroke-width="2"/><path d="m26 42 12-21m-5 29 12-23m-4 30 12-24" stroke="#fff3d7" stroke-width="5"/><path d="m24 38 14 8 11-19" fill="none" stroke="#6e9a65" stroke-width="5" stroke-linecap="round"/><circle cx="31" cy="37" r="3" fill="#d86d57"/><circle cx="43" cy="31" r="3" fill="#d86d57"/></svg>',
    smoothie: '<svg viewBox="0 0 72 72" aria-hidden="true"><path d="M23 27h30l-4 34H27z" fill="#d7a0ad" stroke="#b77d8b" stroke-width="2"/><path d="m25 38 26-5-2 22H28z" fill="#be829c"/><path d="m42 26 8-18" stroke="#758b62" stroke-width="3" stroke-linecap="round"/><path d="M23 28c4-7 22-7 30-1" fill="none" stroke="#fff4ee" stroke-width="3"/><circle cx="30" cy="43" r="3" fill="#f4d475"/><circle cx="43" cy="40" r="3" fill="#e7b6bd"/><path d="M30 51c5 3 10 3 15 0" fill="none" stroke="#f4d7dc" stroke-width="2"/></svg>',
    search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/></svg>',
  };
  return icons[name] || icons.bowl;
};

const defaultSpots = [
  {id:'green-bowl',name:'Green Bowl Kitchen',category:'HEALTHY · GRAIN BOWLS',description:'Build a bowl, feel good after.',wait:4,rating:'4.8',votes:126,price:9.5,item:'Harvest grain bowl',dish:'Bowl of the day',art:'bento',vegetarian:true,open:true,position:[47,51],featured:true},
  {id:'daily-bread',name:'The Daily Bread',category:'BAKERY · COFFEE',description:'A warm pastry kind of day.',wait:7,rating:'4.9',votes:89,price:6.25,item:'Avocado toast',dish:'Toast + iced coffee',art:'cafe',vegetarian:true,open:true,position:[27,40],featured:false},
  {id:'noodle-house',name:'Little Noodle House',category:'ASIAN · COMFORT FOOD',description:'Big slurps, speedy service.',wait:3,rating:'4.7',votes:203,price:8.75,item:'Chili crisp noodles',dish:'Noodles of the day',art:'noodle',vegetarian:false,open:true,position:[69,27],featured:true},
  {id:'field-and-fork',name:'Field & Fork',category:'WRAPS · SALADS',description:'Fresh things, made to go.',wait:9,rating:'4.6',votes:72,price:8.5,item:'Green goddess wrap',dish:'Wrap + side salad',art:'wrap',vegetarian:true,open:true,position:[75,65],featured:false},
  {id:'sunny-side',name:'Sunny Side Smoothies',category:'SMOOTHIES · SNACKS',description:'A little sunshine in a cup.',wait:2,rating:'4.9',votes:57,price:5.75,item:'Berry good smoothie',dish:'Smoothie + energy bite',art:'smoothie',vegetarian:true,open:true,position:[20,70],featured:false},
];

const readSaved = (key, fallback) => {
  try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback; }
  catch { return fallback; }
};
const state = {
  spots: readSaved('ql-spots', defaultSpots),
  basket: readSaved('ql-basket', {vendorId:null,items:[]}),
  order: readSaved('ql-order', null),
  pastOrders: readSaved('ql-past-orders', []),
  impact: readSaved('ql-impact', {savedMinutes:36,orders:4,updates:3}),
  filter:'all', layout:'list', search:'', view:'explore', reportSpot:null, toastTimer:null,
};
const el = (selector, root=document) => root.querySelector(selector);
const els = (selector, root=document) => [...root.querySelectorAll(selector)];
const persist = () => {
  localStorage.setItem('ql-spots', JSON.stringify(state.spots));
  localStorage.setItem('ql-basket', JSON.stringify(state.basket));
  localStorage.setItem('ql-order', JSON.stringify(state.order));
  localStorage.setItem('ql-past-orders', JSON.stringify(state.pastOrders));
  localStorage.setItem('ql-impact', JSON.stringify(state.impact));
};
const money = (amount) => `$${amount.toFixed(2)}`;
const spotById = (id) => state.spots.find((spot) => spot.id === id);
const formatTime = (date) => new Intl.DateTimeFormat('en-US',{hour:'numeric',minute:'2-digit'}).format(date);
const waitClass = (wait) => wait <= 4 ? '' : wait <= 7 ? 'mid' : 'long';

function showToast(message) {
  const toast = el('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

function visibleSpots() {
  const query = state.search.trim().toLowerCase();
  return state.spots.filter((spot) => {
    const matchesFilter = state.filter === 'all' ||
      (state.filter === 'quick' && spot.wait <= 5) ||
      (state.filter === 'vegetarian' && spot.vegetarian) ||
      (state.filter === 'open' && spot.open);
    const matchesSearch = !query || `${spot.name} ${spot.category} ${spot.description} ${spot.item}`.toLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  });
}

function spotCard(spot) {
  const waitTone = waitClass(spot.wait);
  const basketItem = state.basket.vendorId === spot.id ? state.basket.items.reduce((sum,item)=>sum+item.qty,0) : 0;
  return `<article class="spot-card" data-spot-id="${spot.id}">
    <div class="spot-card-top"><div class="spot-art art-${spot.art}">${icon(spot.art)}</div><div class="spot-main"><div class="spot-overline"><span>${spot.category}</span><span class="open-badge">${spot.open?'Open':'Closed'}</span></div><h3 class="spot-name">${spot.name}</h3><p class="spot-description">${spot.description}</p><div class="spot-rating"><span class="rating-star" aria-hidden="true">★</span><b>${spot.rating}</b> <span>(${spot.votes})</span>${spot.vegetarian?'<span> · Veg options</span>':''}</div></div></div>
    <div class="spot-card-bottom"><div class="wait-indicator"><span class="wait-ring ${waitTone}" aria-label="${spot.wait} minute wait">${spot.wait}<small>m</small></span><span class="wait-copy"><strong>~${spot.wait} min wait</strong><small>Next rush around 1:15 pm</small></span></div><div class="spot-actions"><button class="report-mini" data-action="report" data-id="${spot.id}" aria-label="Report the wait at ${spot.name}" title="Update wait time"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21c5-3.1 7.5-7 7.5-11.5A7.5 7.5 0 0 0 12 2a7.5 7.5 0 0 0-7.5 7.5C4.5 14 7 17.9 12 21Z"/><path d="M12 17V8m0 5-3-3m3 1 3-3"/></svg></button><button class="add-item" data-action="add" data-id="${spot.id}" aria-label="Add ${spot.item} for ${money(spot.price)} from ${spot.name}">${basketItem?`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>Added (${basketItem})`:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>Add`} <span class="item-price">${money(spot.price)}</span></button></div></div>
  </article>`;
}

function mapPanel(spots) {
  const markers = spots.map((spot)=>`<button class="map-marker ${waitClass(spot.wait)}" style="left:${spot.position[0]}%;top:${spot.position[1]}%" data-action="map-report" data-id="${spot.id}" aria-label="${spot.name}, ${spot.wait} minute wait. Select to share an update"><span>${spot.wait}m</span><small>${spot.name}</small></button>`).join('');
  return `<div class="map-panel" role="group" aria-label="Campus map with current queue estimates"><div class="map-road road-one"></div><div class="map-road road-two"></div><div class="map-road road-three"></div><div class="map-building build-library">Library</div><div class="map-building build-quad">The Quad</div><div class="map-building build-student">Student Center</div><div class="map-building build-gym">Rec Center</div><span class="map-caption">NORTHSTAR CAMPUS</span><span class="map-legend"><span><i></i> quick</span><span><i class="legend-mid"></i> moderate</span><span><i class="legend-long"></i> longer</span></span>${markers}</div><p class="map-help">Select any wait marker to tell the campus what the line looks like.</p>`;
}

function renderSpots() {
  const spots = visibleSpots();
  const results = el('#spot-results');
  results.innerHTML = state.layout === 'map' && spots.length ? mapPanel(spots) : spots.map(spotCard).join('');
  el('#empty-results').hidden = spots.length > 0;
  results.setAttribute('aria-label', `${spots.length} food spots found`);
  el('#filter-all-count').textContent = state.spots.filter(spot=>spot.open).length;
}

function cartDetails() {
  const spot = spotById(state.basket.vendorId);
  const count = state.basket.items.reduce((total,item)=>total+item.qty,0);
  const subtotal = state.basket.items.reduce((total,item)=>total+item.qty*item.price,0);
  return {spot,count,subtotal};
}

function renderBasket() {
  const {spot,count,subtotal} = cartDetails();
  el('#basket-count').textContent = count;
  el('#basket-total').textContent = money(subtotal);
  el('#checkout-button').disabled = count === 0;
  el('#mobile-basket-dot').hidden = count === 0;
  const target = el('#basket-content');
  if (!count || !spot) {
    target.innerHTML = `<div class="basket-empty"><div class="basket-empty-illustration"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h16l-1 11H5L4 9Z"/><path d="M8 9V6a4 4 0 0 1 8 0v3M8 14h8"/></svg></div><h3>Your lunch plan starts here.</h3><p>Add something delicious and your pickup spot will be ready when you are.</p><div class="basket-suggestion"><small>QUICK PICK RIGHT NOW</small><strong>Little Noodle House</strong><span>Only 3 min in line · from $8.75</span><br><button data-action="add" data-id="noodle-house">Add a noodle bowl&nbsp; →</button></div></div>`;
    return;
  }
  const items = state.basket.items.map((item,index)=>`<div class="basket-item"><span class="basket-item-name">${item.name}</span><span class="basket-item-price">${money(item.price*item.qty)}</span><div class="basket-item-bottom"><span class="basket-item-note">${spot.dish}</span><span class="quantity-control"><button data-action="quantity" data-index="${index}" data-delta="-1" aria-label="Remove one ${item.name}">−</button><span>${item.qty}</span><button data-action="quantity" data-index="${index}" data-delta="1" aria-label="Add one ${item.name}">+</button></span></div></div>`).join('');
  target.innerHTML = `<div class="basket-vendor"><span class="basket-vendor-mark">${icon(spot.art)}</span><span><strong>${spot.name}</strong><small>Pickup in about ${spot.wait+8} min · one stop</small></span></div>${items}<div class="basket-hint"><strong>Good timing.</strong> ${spot.wait <= 4?'The line is moving quickly right now.':'Preordering helps you skip the main queue.'} Pickup estimate updates with the campus wait.</div>`;
}

function renderNavigation() {
  els('[data-view]').forEach((button)=>{
    const active=button.dataset.view===state.view;
    button.classList.toggle('active',active);
    if(active) button.setAttribute('aria-current','page'); else button.removeAttribute('aria-current');
  });
  els('.view').forEach((section)=>section.classList.toggle('active-view',section.id===`${state.view}-view`));
  const breadcrumb={explore:'Explore',pickups:'My pickups',impact:'Your impact'}[state.view];
  el('#breadcrumb-page').textContent=breadcrumb;
  el('.pickup-count').hidden=!state.order||state.order.pickedUp;
}

function changeView(view) {
  state.view=view;
  renderNavigation();
  if(view==='pickups') renderPickups();
  if(view==='impact') renderImpact();
  window.scrollTo({top:0,behavior:'smooth'});
}

function renderPickups() {
  const root=el('#pickup-content');
  const order=state.order;
  if(!order){
    const past=state.pastOrders.length?`<section class="past-orders"><h2>Recently enjoyed</h2>${state.pastOrders.slice(0,4).map((item)=>`<div class="past-order"><span class="past-order-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h16l-1 11H5L4 9Z"/><path d="M8 9V6a4 4 0 0 1 8 0v3"/></svg></span><div><strong>${item.item}</strong><small>${item.venue} · ${item.date}</small></div><span class="past-order-price">${money(item.total)}</span></div>`).join('')}</section>`:'';
    root.innerHTML=`<div class="pickup-empty"><div class="basket-empty-illustration"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h16l-1 11H5L4 9Z"/><path d="M8 9V6a4 4 0 0 1 8 0v3"/></svg></div><h2>No pickup planned yet.</h2><p>Choose a favorite nearby and you can preorder, skip the main line, and find everything here.</p><button class="button button-green" id="pickup-explore">Explore food <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12h15m-6-6 6 6-6 6"/></svg></button></div>${past}`;
    el('#pickup-explore').addEventListener('click',()=>changeView('explore'));
    return;
  }
  const spot=spotById(order.vendorId) || {name:order.venue};
  const phase=order.pickedUp?3:order.status==='ready'?2:1;
  const status=order.pickedUp?'Picked up and enjoyed':order.status==='ready'?'Ready at the counter':'Kitchen is preparing your order';
  const completion=order.pickedUp?'Picked up':order.status==='ready'?'Ready for pickup':`Ready around ${formatTime(new Date(order.readyAt))}`;
  root.innerHTML=`<article class="pickup-card"><div><span class="pickup-status"><i></i>${status}</span><h2>${spot.name}</h2><p class="pickup-sub">${order.items.map((item)=>`${item.qty} × ${item.name}`).join(' · ')} · ${money(order.total)}</p></div><div class="pickup-code-box"><small>YOUR PICKUP CODE</small><strong class="pickup-code">${order.code}</strong><span>Show this at the counter</span></div><div class="pickup-progress"><span class="progress-step ${phase>=1?'complete':''}"><i></i>Order placed</span><span class="progress-step ${phase>=2?'complete':''}"><i></i>In the kitchen</span><span class="progress-step ${phase>=3?'complete':''}"><i></i>Ready</span></div><div class="pickup-actions"><p>${completion} · Demo pickup updates locally.</p>${order.pickedUp?'<button class="text-button" id="new-lunch">Plan another lunch <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12h15m-6-6 6 6-6 6"/></svg></button>':'<button class="button button-green" id="picked-up">I picked it up <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg></button>'}</div></article><div class="community-banner"><span class="community-mark"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21c5-3.1 7.5-7 7.5-11.5A7.5 7.5 0 0 0 12 2a7.5 7.5 0 0 0-7.5 7.5C4.5 14 7 17.9 12 21Z"/><path d="M12 17V8m0 5-3-3m3 1 3-3"/></svg></span><span><strong>Lunch break unlocked.</strong><small>Every pickup saves time for the things you actually came here to do.</small></span></div>`;
  const pickedButton=el('#picked-up');
  if(pickedButton) pickedButton.addEventListener('click',()=>{
    order.pickedUp=true;order.status='picked-up';state.impact.savedMinutes+=Math.max(5,order.waitAtOrder);state.pastOrders.unshift({item:order.items.map((item)=>item.name).join(', '),venue:spot.name,date:new Date().toLocaleDateString('en-US',{month:'short',day:'numeric'}),total:order.total});state.order=order;persist();renderPickups();renderNavigation();showToast('Pickup marked complete. Another little win for your lunch break.');
  });
  const newButton=el('#new-lunch');if(newButton)newButton.addEventListener('click',()=>changeView('explore'));
}

function renderImpact() {
  const root=el('#impact-content');
  const minutes=state.impact.savedMinutes;
  const hours=Math.floor(minutes/60);
  const minutesRemainder=minutes%60;
  const week=[16,22,12,31,24,18,minutes%32+10];
  const max=Math.max(...week);
  root.innerHTML=`<div class="impact-hero"><article class="impact-card impact-card-primary"><span class="eyebrow eyebrow-muted">YOUR TIME, GIVEN BACK</span><div class="impact-big-number">${hours?`${hours}<span>h</span> `:''}${minutesRemainder}<span> min</span></div><h3>More room in your day.</h3><p>You’ve skipped an estimated ${minutes} minutes of waiting by planning ahead with QueueLess.</p></article><article class="impact-card"><span class="eyebrow eyebrow-muted">YOUR LUNCH WEEK</span><h3>One good choice at a time.</h3><div class="impact-chart" role="img" aria-label="Estimated wait time saved this week, shown by day"><div class="impact-bar-wrap"><i class="impact-bar" style="height:${week[0]/max*70}%"></i><small>M</small></div><div class="impact-bar-wrap"><i class="impact-bar" style="height:${week[1]/max*70}%"></i><small>T</small></div><div class="impact-bar-wrap"><i class="impact-bar" style="height:${week[2]/max*70}%"></i><small>W</small></div><div class="impact-bar-wrap"><i class="impact-bar" style="height:${week[3]/max*70}%"></i><small>T</small></div><div class="impact-bar-wrap"><i class="impact-bar" style="height:${week[4]/max*70}%"></i><small>F</small></div><div class="impact-bar-wrap"><i class="impact-bar" style="height:${week[5]/max*70}%"></i><small>S</small></div><div class="impact-bar-wrap"><i class="impact-bar today" style="height:${week[6]/max*70}%"></i><small>S</small></div></div><p>Your busiest lunch day is Thursday. Plan around it for the biggest win.</p></article></div><article class="impact-card"><span class="eyebrow eyebrow-muted">YOUR CONTRIBUTION</span><h3>Good things you’ve helped unlock.</h3><div class="impact-stats"><div class="impact-stat"><strong>${state.impact.orders}</strong><small>planned pickups</small></div><div class="impact-stat"><strong>${state.impact.updates}</strong><small>helpful line updates</small></div><div class="impact-stat"><strong>${Math.max(1,Math.round(state.impact.savedMinutes/12))}</strong><small>lunch breaks reclaimed</small></div></div><div class="badge-row"><span class="impact-badge"><i>✳</i> Lunch-time optimizer</span><span class="impact-badge"><i>↗</i> Campus helper</span><span class="impact-badge"><i>⌁</i> Line dodger</span></div></article><div class="impact-footer-card"><div><strong>Make someone else’s lunch a little easier.</strong><p>Share a quick wait update the next time you pass a line.</p></div><button class="button" id="impact-report">Share a wait update <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12h15m-6-6 6 6-6 6"/></svg></button></div>`;
  el('#impact-report').addEventListener('click',()=>openReport());
}

function openReport(id=null) {
  state.reportSpot=id || state.spots[0]?.id;
  const spot=spotById(state.reportSpot);
  el('#report-title').textContent=spot?'What’s the line like?':'What’s the campus like?';
  el('#report-venue').textContent=spot?`Update ${spot.name}’s estimate. Your update helps someone make a better lunch plan.`:'Your update helps someone make a better lunch plan.';
  el('#report-dialog').showModal();
}

function addToBasket(id) {
  const spot=spotById(id);
  if(!spot)return;
  if(state.basket.vendorId && state.basket.vendorId!==id) {
    const previous=spotById(state.basket.vendorId)?.name || 'your previous spot';
    state.basket={vendorId:id,items:[]};
    showToast(`Basket switched from ${previous} to ${spot.name} — one pickup stop.`);
  }
  state.basket.vendorId=id;
  const existing=state.basket.items.find((item)=>item.name===spot.item);
  if(existing)existing.qty+=1;
  else state.basket.items.push({name:spot.item,price:spot.price,qty:1});
  persist();renderBasket();renderSpots();
  if(window.matchMedia('(max-width: 720px)').matches)toggleBasket(true);
  else showToast(`${spot.item} added to your basket.`);
}

function changeQuantity(index,delta) {
  const item=state.basket.items[index];if(!item)return;
  item.qty+=delta;if(item.qty<=0)state.basket.items.splice(index,1);
  if(!state.basket.items.length)state.basket.vendorId=null;
  persist();renderBasket();renderSpots();
}

function createOrder() {
  const {spot,count,subtotal}=cartDetails();
  if(!spot||!count)return;
  const now=Date.now();
  const order={vendorId:spot.id,venue:spot.name,items:state.basket.items.map(item=>({...item})),total:subtotal,code:String(Math.floor(1000+Math.random()*9000)),placedAt:now,readyAt:now+45*1000,waitAtOrder:spot.wait,status:'preparing',pickedUp:false};
  state.order=order;state.basket={vendorId:null,items:[]};state.impact.orders+=1;
  persist();renderBasket();renderPickups();changeView('pickups');toggleBasket(false);scheduleOrderReady();
  showToast('Pickup planned. Your order and code are ready.');
}

function toggleBasket(open) {
  const panel=el('.basket-panel');
  const shouldOpen=typeof open==='boolean'?open:!panel.classList.contains('open');
  panel.classList.toggle('open',shouldOpen);
  if(shouldOpen)el('#basket-close').focus();
}

els('[data-view]').forEach(button=>button.addEventListener('click',()=>changeView(button.dataset.view)));
el('#brand-home').addEventListener('click',(event)=>{event.preventDefault();changeView('explore');});
el('#account-more').addEventListener('click',()=>showToast('You’re signed in to the QueueLess demo as Asha Singh.'));
els('.view-switch-button').forEach(button=>button.addEventListener('click',()=>{state.layout=button.dataset.layout;els('.view-switch-button').forEach(other=>{const selected=other===button;other.classList.toggle('selected',selected);other.setAttribute('aria-pressed',String(selected));});renderSpots();}));
els('.filter-chip').forEach(button=>button.addEventListener('click',()=>{state.filter=button.dataset.filter;els('.filter-chip').forEach(other=>{const selected=other===button;other.classList.toggle('selected',selected);other.setAttribute('aria-pressed',String(selected));});renderSpots();}));
el('#spot-search').addEventListener('input',(event)=>{state.search=event.target.value;renderSpots();});
el('#spot-search').addEventListener('keydown',(event)=>{if(event.key==='Escape'){event.target.value='';state.search='';renderSpots();}});
window.addEventListener('keydown',(event)=>{if(event.key==='/'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)&&!event.metaKey&&!event.ctrlKey){event.preventDefault();el('#spot-search').focus();}if(event.key==='Escape'&&el('.basket-panel').classList.contains('open'))toggleBasket(false);});
el('#hero-find').addEventListener('click',()=>{el('#spots-section').scrollIntoView({behavior:'smooth',block:'start'});el('#spot-search').focus({preventScroll:true});});
el('#community-report').addEventListener('click',()=>openReport());
el('#checkout-button').addEventListener('click',createOrder);
el('#basket-close').addEventListener('click',()=>toggleBasket(false));
el('#mobile-basket-open').addEventListener('click',()=>toggleBasket());
el('#report-dialog').addEventListener('click',(event)=>{if(event.target===el('#report-dialog'))el('#report-dialog').close();});
el('#report-dialog').addEventListener('close',()=>{state.reportSpot=null;});
els('.report-choice').forEach(button=>button.addEventListener('click',()=>{
  const spot=spotById(state.reportSpot);
  if(spot){const change={shorter:-2,accurate:0,longer:3}[button.dataset.report];spot.wait=Math.max(1,Math.min(18,spot.wait+change));spot.updatedAt=Date.now();}
  state.impact.updates+=1;persist();renderSpots();renderBasket();el('#report-dialog').close();showToast(button.dataset.report==='accurate'?'Thanks — that estimate is helpful.':'Thanks! The campus estimate has been updated.');
}));
document.addEventListener('click',(event)=>{
  const action=event.target.closest('[data-action]');if(!action)return;
  if(action.dataset.action==='add')addToBasket(action.dataset.id);
  if(action.dataset.action==='report'||action.dataset.action==='map-report')openReport(action.dataset.id);
  if(action.dataset.action==='quantity')changeQuantity(Number(action.dataset.index),Number(action.dataset.delta));
} );
el('#theme-toggle').addEventListener('click',()=>{const dark=document.body.classList.toggle('dark');localStorage.setItem('ql-theme',dark?'dark':'light');el('#theme-toggle').setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');showToast(`${dark?'Dark':'Light'} theme enabled.`);});
el('#today-label').textContent=`${new Intl.DateTimeFormat('en-US',{weekday:'long'}).format(new Date()).toUpperCase()} · LUNCHTIME`;

function refreshSummary(){
  const open=state.spots.filter(spot=>spot.open);
  const average=open.length?Math.round(open.reduce((sum,spot)=>sum+spot.wait,0)/open.length):0;
  const savedLabel=state.impact.savedMinutes<60?`${state.impact.savedMinutes} <em>min</em>`:`${(state.impact.savedMinutes/60).toFixed(1)} <em>hrs</em>`;
  el('#average-wait').innerHTML=`${average} <em>min</em>`;el('#open-count').textContent=open.length;el('#shared-time').innerHTML=savedLabel;
  el('#campus-eaters').textContent=String(248+Math.floor(Math.random()*9));
}

function scheduleOrderReady(){
  const order=state.order;
  if(!order||order.pickedUp||order.status!=='preparing')return;
  setTimeout(()=>{
    if(state.order!==order||order.pickedUp)return;
    order.status='ready';persist();
    if(state.view==='pickups')renderPickups();
    showToast('Your pickup is ready at the counter.');
  },Math.max(0,order.readyAt-Date.now()));
}

function boot(){
  if(localStorage.getItem('ql-theme')==='dark'){document.body.classList.add('dark');el('#theme-toggle').setAttribute('aria-label','Switch to light mode');}
  renderNavigation();renderSpots();renderBasket();refreshSummary();
  if(state.view==='pickups')renderPickups();
  if('serviceWorker'in navigator&&location.protocol!=='file:')navigator.serviceWorker.register('./sw.js').catch(()=>{});
  scheduleOrderReady();
}

boot();

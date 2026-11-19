(function(){
  var top=document.getElementById('top'),bg=document.getElementById('burger');
  function zamknij(){top.classList.remove('open');bg.setAttribute('aria-expanded','false');bg.setAttribute('aria-label','Otwórz menu')}
  bg.addEventListener('click',function(){var o=top.classList.toggle('open');bg.setAttribute('aria-expanded',o);bg.setAttribute('aria-label',o?'Zamknij menu':'Otwórz menu')});
  document.querySelectorAll('.menu a').forEach(function(a){a.addEventListener('click',function(){zamknij();if(document.activeElement)document.activeElement.blur()})});
  var tk=false;function sc(){if(tk)return;tk=true;requestAnimationFrame(function(){top.classList.toggle('sc',window.pageYOffset>10);tk=false})}
  addEventListener('scroll',sc,{passive:true});sc();
  var rok=document.getElementById('rok');if(rok)rok.textContent=new Date().getFullYear();

  /* zabiegi: [nazwa, kategorie, grupa, problemy, sciezka] */
  var O='https://instytutimage.pl/oferta/',T=O+'zabiegi/zabiegi-na-twarz/',C=O+'zabiegi/zabiegi-na-cialo/',L=O+'zabiegi/zabiegi-laserowe/',M=O+'medycyna-estetyczna/',K=O+'kosmetyka-dodatkowa/';
  var Z=[
  ['Oczyszczanie - program zabiegów','ks','Oczyszczanie','q t',T+'oczyszczanie/'],
  ['Oczyszczanie medyczne','ks','Oczyszczanie','q t',T+'oczyszczanie/oczyszczanie-medyczne/'],
  ['Oczyszczanie wodorowe','ks','Oczyszczanie','q w',T+'oczyszczanie/oczyszczanie-wodorowe/'],
  ['Oczyszczanie wodorowe anty-ageing','ks','Oczyszczanie','q z',T+'oczyszczanie/oczyszczanie-wodorowe-anty-ageing/'],
  ['Oczyszczanie kawitacyjne Cavicleen Express Beauty','ks','Oczyszczanie','q',T+'oczyszczanie/oczyszczanie-kawitacyjne-cavicleen-express-beauty/'],
  ['Oczyszczanie manualne','ks','Oczyszczanie','q t',T+'oczyszczanie/oczyszczanie-manualne/'],
  ['Złuszczanie - program zabiegów','ks','Złuszczanie','p w',T+'zluszczanie/'],
  ['Piling chemiczny - kwas migdałowy','ks','Złuszczanie','t p',T+'zluszczanie/piling-chemiczny-kwas-migdalowy/'],
  ['Piling chemiczny - kwas salicylowy 15% i migdałowy 15% IBCN','ks','Złuszczanie','t q',T+'zluszczanie/piling-chemiczny-kwas-salicylowy-15-kwas-migdalowy-15-ibcn/'],
  ['Piling chemiczny anty-ageing IBCN','ks','Złuszczanie','z',T+'zluszczanie/piling-chemiczny-anty-ageing-ibcn/'],
  ['Piling chemiczny depigmentant IBCN','ks','Złuszczanie','p',T+'zluszczanie/piling-chemiczny-depigmentant-ibcn/'],
  ['Laserowy piling węglowy Black Doll','ks la','Złuszczanie','q t w',T+'zluszczanie/laserowy-piling-weglowy-black-doll/'],
  ['Oxybrazja','ks','Złuszczanie','q w',T+'zluszczanie/oxybrazja/'],
  ['Wiosenne przebudzenie','ks','Złuszczanie','w',T+'zluszczanie/wiosenne-przebudzenie/'],
  ['Nawilżanie - program zabiegów','ks','Nawilżanie','w',T+'nawilzanie/'],
  ['Mezoterapia igłowa','ks me','Nawilżanie','w z',T+'nawilzanie/mezoterapia-iglowa/'],
  ['Mezoterapia mikroigłowa','ks','Nawilżanie','w z b',T+'nawilzanie/mezoterapia-mikroiglowa/'],
  ['Infuzja tlenowa','ks','Nawilżanie','w',T+'nawilzanie/infuzja-tlenowa/'],
  ['Mezoterapia bezigłowa Meso Skin EPM','ks','Nawilżanie','w',T+'nawilzanie/mezoterapia-beziglowa-meso-skin-epm/'],
  ['Mezoterapia bezigłowa Medium Deep','ks','Nawilżanie','w z',T+'nawilzanie/mezoterapia-beziglowa-medium-deep/'],
  ['Geneo','ks','Nawilżanie','w',T+'nawilzanie/geneo/'],
  ['Ugasić pragnienie','ks','Nawilżanie','w',T+'nawilzanie/ugasic-pragnienie/'],
  ['Algowa regeneracja','ks','Nawilżanie','w',T+'nawilzanie/algowa-regeneracja/'],
  ['Pomidorowy kriolift','ks','Nawilżanie','w z',T+'nawilzanie/pomidorowy-kriolift/'],
  ['Eliksir życia','ks','Nawilżanie','w z',T+'nawilzanie/eliksir-zycia/'],
  ['Odmładzanie - program zabiegów','ks','Odmładzanie','z',T+'odmladzanie/'],
  ['Fotoodmładzanie SSR / IPL','ks la','Odmładzanie','z p n',T+'odmladzanie/fotoodmladzanie-ipl-e-light/'],
  ['Laserowe odmładzanie i ujędrnianie skóry','ks la','Odmładzanie','z',T+'odmladzanie/laserowe-odmladzanie-i-ujedrnianie-skory/'],
  ['Frakcjonowanie mikroigłowe RF','ks','Odmładzanie','z b',T+'odmladzanie/frakcjonowanie-mikroiglowe-rf/'],
  ['Thermalifting skóry RF','ks','Odmładzanie','z',T+'odmladzanie/thermalifting-skory-rf/'],
  ['Termolifting NIR','ks','Odmładzanie','z',T+'odmladzanie/termolifting-nir/'],
  ['Lifting skóry','tp','Programy','z',T+'lifting-skory/'],
  ['SOS dla skóry wrażliwej','tp','Programy','n w',T+'sos-dla-skory-wrazliwej/'],
  ['Popękane naczynia krwionośne','tp','Programy','n',T+'popekane-naczynia-krwionosne/'],
  ['Laserowe zamykanie naczyń krwionośnych','ks la','Naczynka','n',T+'popekane-naczynia-krwionosne/laserowe-zamykanie-naczyn-krwionosnych/'],
  ['Niwelowanie przebarwień','tp','Programy','p',T+'niwelowanie-przebarwien/'],
  ['Usuwanie przebarwień SSR / IPL','ks la','Przebarwienia','p',T+'niwelowanie-przebarwien/usuwanie-przebarwien-ipl-e-light/'],
  ['Zabiegi na trądzik różowaty','tp','Programy','t n',T+'zabiegi-na-tradzik-rozowaty/'],
  ['Usuwanie trądziku różowatego SVR / IPL','ks la','Trądzik różowaty','t n',T+'zabiegi-na-tradzik-rozowaty/usuwanie-tradzika-rozowatego-ipl-e-light/'],
  ['Zabiegi na trądzik pospolity','tp','Programy','t q',T+'zabiegi-na-tradzik-pospolity/'],
  ['Usuwanie trądziku pospolitego SSR / IPL','ks la','Trądzik pospolity','t',T+'zabiegi-na-tradzik-pospolity/usuwanie-tradzika-pospolitego-ipl-e-light/'],
  ['Zabiegi na blizny potrądzikowe','tp','Programy','b t',T+'zabiegi-na-blizny-potradzikowe/'],
  ['Mezoterapia mikroigłowa - blizny i rozstępy','ks','Blizny','b',T+'zabiegi-na-blizny-potradzikowe/mezoterapia-mikroiglowa-blizny-i-rozstepy/'],
  ['Pielęgnacja okolic oka','tp','Programy','z w',T+'pielegnacja-okolic-oka/'],
  ['Zabiegi bankietowe','tp','Programy','w',T+'zabiegi-bankietowe/'],
  ['Zabiegi dla kobiet w ciąży','tp','Programy','w',T+'zabiegi-dla-kobiet-w-ciazy/'],
  ['Zabiegi dla pacjentów onkologicznych','tp','Programy','w',T+'zabiegi-dla-pacjentow-onkologicznych/'],
  ['Masaż Kobido UP','sp','Masaż twarzy','z m',T+'masaz-kobido-up/'],
  ['Terapia enzymatyczna','ks','Pielęgnacja','q w',T+'terapia-enzymatyczna/'],
  ['EMR Young','ks','Odmładzanie','z',T+'emr-young/'],
  ['Modelowanie sylwetki - program','ms','Modelowanie sylwetki','c',C+'modelowanie-sylwetki/'],
  ['Rzeźbienie mięśni Magnetic Sculp','ms','Modelowanie sylwetki','c',C+'modelowanie-sylwetki/rzezbienie-miesni-magnetic-sculp/'],
  ['Fala uderzeniowa DJ Medical','ms','Modelowanie sylwetki','c',C+'modelowanie-sylwetki/fala-uderzeniowa-dj-medical/'],
  ['Lipodermologia Elite Shape','ms','Modelowanie sylwetki','c',C+'modelowanie-sylwetki/lipodermologia-elite-shape/'],
  ['Kriolipoliza Lipo Freeze 4D','ms','Modelowanie sylwetki','c',C+'modelowanie-sylwetki/kriolipoliza-lipo-freeze-4-d/'],
  ['Thermalipoliza ciała RF','ms','Modelowanie sylwetki','c',C+'modelowanie-sylwetki/thermalipoliza-ciala-rf/'],
  ['Lipokawitacja Lipo X','ms','Modelowanie sylwetki','c',C+'modelowanie-sylwetki/lipokawitacja-lipo-x/'],
  ['Maderoterapia','ms','Modelowanie sylwetki','c m',C+'modelowanie-sylwetki/maderoterapia/'],
  ['Redukcja cellulitu','tp','Programy','c',C+'redukcja-cellulitu/'],
  ['Winne drenowanie','ms','Cellulit','c m',C+'redukcja-cellulitu/winne-drenowanie/'],
  ['Redukcja tkanki tłuszczowej','tp','Programy','c',C+'redukcja-tkanki-tluszczowej/'],
  ['Redukcja rozstępów i blizn','tp','Programy','b',C+'redukcja-rozstepow-blizn/'],
  ['Ujędrnianie ciała','tp','Programy','z c',C+'ujedrnianie-ciala/'],
  ['Likwidacja obrzęków','tp','Programy','c',C+'likwidacja-obrzekow/'],
  ['Masaże ciała','sp','Masaże','m',C+'masaze-ciala/'],
  ['Masaż relaksacyjny','sp','Masaże','m',C+'masaze-ciala/masaz-relaksacyjny/'],
  ['Masaż Lomi Lomi z aromatyczną świecą','sp','Masaże','m',C+'masaze-ciala/masaz-lomi-lomi-aromatyczna-swieca/'],
  ['Masaż ciepłymi stemplami winogronowymi','sp','Masaże','m',C+'masaze-ciala/masaz-cieplymi-stemplami-winogronowymi/'],
  ['Masaż ajurwedyjski','sp','Masaże','m',C+'masaze-ciala/masaz-ajurwedyjski/'],
  ['Epilacja laserowa','la','Depilacja','o',C+'epilacja-laserowa/'],
  ['Depilacja woskiem','kd','Depilacja','o',C+'depilacja-woskiem/'],
  ['Laser frakcyjny CO2','la','Lasery','z b',L+'laser-frakcyjny-co-2/'],
  ['Laser tulowy','la','Lasery','z p w',L+'laser-tulowy/'],
  ['Resurfacing laserem pikosekundowym','la','Lasery','p z b',L+'resurfacing-laserm-pikosekundowym/'],
  ['Laserowe usuwanie tatuażu i makijażu permanentnego','la','Lasery','r',L+'laserowe-usuwanie-tatuazu-i-makijazu-permanentnego/'],
  ['Zmarszczki mimiczne - toksyna botulinowa','me','Medycyna estetyczna','z',M+'zmarszczki-mimiczne-botox/'],
  ['Lifting wolumetryczny i wypełnianie zmarszczek','me','Medycyna estetyczna','z',M+'lifting-volumetryczny/'],
  ['Modelowanie ust','me','Medycyna estetyczna','z w',M+'modelowanie-ust/'],
  ['Osocze bogatopłytkowe','me','Medycyna estetyczna','z w',M+'osocze-bogatoplytkowe/'],
  ['Fibryna bogatopłytkowa','me','Medycyna estetyczna','z',M+'fibryna-bogatoplytkowa/'],
  ['Stymulatory tkankowe','me','Medycyna estetyczna','z',M+'stymulatory-tkankowe/'],
  ['Leczenie nadpotliwości','me','Medycyna estetyczna','',M+'leczenie-nadpotliwosci/'],
  ['Henna brwi i rzęs','kd','Brwi i rzęsy','r',K+'henna-brwi-i-rzes/'],
  ['Henna pudrowa z geometrią brwi','kd','Brwi i rzęsy','r',K+'henna-pudrowa-z-geometria-brwi/'],
  ['Laminacja brwi','kd','Brwi i rzęsy','r',K+'laminacja-brwi/'],
  ['Lifting, botox i laminacja rzęs','kd','Brwi i rzęsy','r',K+'lifting-botox-laminacja-rzes/'],
  ['Przebicie uszu','kd','Kosmetyka','',K+'przebicie-uszu/']
  ];
  var NK={me:'Medycyna estetyczna',la:'Zabiegi laserowe',ks:'Kosmetologia',ms:'Modelowanie sylwetki',sp:'Relaks i SPA',kd:'Kosmetyka dodatkowa',tp:'Twój problem'};
  var st={k:'',p:'',q:'',all:false},lista=document.getElementById('lista'),wynik=document.getElementById('wynik'),wiecej=document.getElementById('wiecej'),q=document.getElementById('q');
  var tabs=[].slice.call(document.querySelectorAll('#tabs button')),chips=[].slice.call(document.querySelectorAll('#chips button'));
  function norm(s){return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ł/g,'l')}
  function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;')}
  tabs.forEach(function(b){var k=b.dataset.k;if(k){var n=Z.filter(function(z){return z[1].split(' ').indexOf(k)>-1}).length;b.insertAdjacentHTML('beforeend',' <i>'+n+'</i>')}});
  function rysuj(){
    var nq=norm(st.q.trim());
    var w=Z.filter(function(z){return (!st.k||z[1].split(' ').indexOf(st.k)>-1)&&(!st.p||z[3].split(' ').indexOf(st.p)>-1)&&(!nq||norm(z[0]+' '+z[2]).indexOf(nq)>-1)});
    var lim=(st.all||st.k||st.p||nq)?w.length:Math.min(w.length,matchMedia('(max-width:860px)').matches?6:9);
    var h='';for(var i=0;i<lim;i++){var z=w[i];h+='<a href="'+z[4]+'" target="_blank" rel="noopener"><b>'+esc(z[0])+'</b><span>'+NK[z[1].split(' ')[0]]+' · '+esc(z[2])+'</span></a>'}
    lista.innerHTML=h||'<div class="brak">Brak zabiegów dla tego wyboru. Zadzwoń: +48 662 497 510 - doradzimy na konsultacji kosmetologicznej.</div>';
    wynik.textContent='Wyświetlono '+lim+' z '+w.length+(w.length===1?' zabiegu':' zabiegów');
    wiecej.hidden=lim>=w.length;wiecej.textContent='Pokaż wszystkie ('+w.length+')';
  }
  function ustawK(k){st.k=k;tabs.forEach(function(b){b.setAttribute('aria-selected',b.dataset.k===k)});rysuj()}
  tabs.forEach(function(b){b.addEventListener('click',function(){ustawK(b.dataset.k)})});
  chips.forEach(function(b){b.addEventListener('click',function(){var p=b.dataset.p;st.p=st.p===p?'':p;chips.forEach(function(c){c.setAttribute('aria-pressed',c.dataset.p===st.p)});rysuj()})});
  q.addEventListener('input',function(){st.q=q.value;rysuj()});
  wiecej.addEventListener('click',function(){st.all=true;rysuj()});
  document.querySelectorAll('a[data-k]').forEach(function(a){a.addEventListener('click',function(){ustawK(a.dataset.k)})});
  rysuj();

  if('IntersectionObserver' in window){
    var links=[].slice.call(document.querySelectorAll('.menu>a[href^="#"]:not(.btn),.menu>.mm>a'));
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(l){l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});
    ['start','la','kategorie','voucher','o-nas','zespol','blog','kontakt'].forEach(function(id){var t=document.getElementById(id);if(t)io.observe(t)});
    var mob=document.getElementById('mob');
    new IntersectionObserver(function(es){mob.classList.toggle('widac',!es[0].isIntersecting&&es[0].boundingClientRect.top<0)},{threshold:0}).observe(document.querySelector('.hero .cta'));
    var m=document.getElementById('mapa');
    var mo=new IntersectionObserver(function(es){if(es[0].isIntersecting){var f=document.createElement('iframe');f.src=m.dataset.src;f.title=m.dataset.t;f.loading='lazy';f.referrerPolicy='no-referrer-when-downgrade';m.appendChild(f);mo.disconnect()}},{rootMargin:'300px'});mo.observe(m);
  }

  document.querySelectorAll('[data-tor]').forEach(function(tor){
    var down=false,sx=0,sl=0,moved=false;
    function step(){var k=tor.children[0];return k?k.getBoundingClientRect().width+parseFloat(getComputedStyle(tor).columnGap||0):300}
    tor.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse'||tor.scrollWidth<=tor.clientWidth+2)return;down=true;moved=false;sx=e.clientX;sl=tor.scrollLeft});
    addEventListener('pointermove',function(e){if(!down)return;var dx=e.clientX-sx;if(Math.abs(dx)>4){moved=true;tor.classList.add('drag')}tor.scrollLeft=sl-dx});
    addEventListener('pointerup',function(){if(!down)return;down=false;tor.classList.remove('drag');if(moved){var w=step();tor.scrollTo({left:Math.round(tor.scrollLeft/w)*w,behavior:'smooth'})}setTimeout(function(){moved=false},0)});
    tor.addEventListener('click',function(e){if(moved){e.preventDefault();e.stopPropagation();moved=false}},true);
    tor.addEventListener('dragstart',function(e){e.preventDefault()});
    var nav=document.querySelector('[data-nav="'+tor.id+'"]');
    if(nav){var bs=nav.querySelectorAll('button');
      bs.forEach(function(b){b.addEventListener('click',function(){tor.scrollBy({left:step()*(+b.dataset.k),behavior:'smooth'})})});
      function vis(){nav.style.visibility=tor.scrollWidth>tor.clientWidth+4?'visible':'hidden'}vis();addEventListener('resize',vis)}
  });


  var ct=[].slice.call(document.querySelectorAll('#ctabs button')),cp=[].slice.call(document.querySelectorAll('.cpanel'));
  ct.forEach(function(b){b.addEventListener('click',function(){ct.forEach(function(x){x.setAttribute('aria-selected',x===b)});cp.forEach(function(p){p.hidden=p.id!==b.getAttribute('aria-controls')})})});
  var vf=document.getElementById('vform');
  if(vf){var vk=document.getElementById('vkw'),vz=document.getElementById('vzab'),vt=document.getElementById('vtyp');
    function vtyp(){var z=vt.value==='z';vk.hidden=z;vz.hidden=!z}vt.addEventListener('change',vtyp);vtyp();
    vf.addEventListener('submit',function(e){e.preventDefault();var n='IMG-'+new Date().getFullYear()+'-'+String(Math.floor(Math.random()*90000)+10000);document.getElementById('vmsg').textContent='Podgląd: płatność jest tu wyłączona. Na stronie docelowej po opłaceniu voucher nr '+n+' z imieniem, nazwiskiem i telefonem osoby obdarowanej trafi na e-mail kupującego, a recepcja dostanie powiadomienie z tymi danymi.'})}
  var lb=document.getElementById('lb'),lbi=document.getElementById('lbi');
  document.querySelectorAll('[data-lb]').forEach(function(b){b.addEventListener('click',function(){lbi.src=b.dataset.lb;lb.classList.add('on')})});
  lb.addEventListener('click',function(){lb.classList.remove('on')});
  addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('on')});
})();

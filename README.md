# SE6-demo

Hi 

## HTML ja CSS tööleht

Ava `index.html` brauseris. Algne veebileht ja pildid taastati Gitist.
Varasem kohalik punktitabel on säilitatud failis `punktitabel.html`.

### Ülesannete järjekord
1. Git ja kasutaja nimi/e-post olid juba seadistatud. Repositoorium oli kloonitud.
2. `index.html` ühendati sama kausta failiga `style.css` (`link` elemendiga).
3. Iga CSS-alamülesanne 2a–2g on eraldi commit'is: eraldi stiilifail,
   pealkirjad, tekst, pildi raam/vari, tabel, taust ning kaks tulpa.
4. CSS Grid jagab põhisisu kaheks võrdseks tulbaks. Alla 700 px laiuses
   kuvatakse üks tulp; telefonis kerimine on ootuspärane.
5. W3C CSS Validator: 0 viga, 0 hoiatust (27.10.2026).
   Teenuse vastus on failis `validation/css-validation.xml`.
6. Lisaülesanded avanevad lehe all olevast paneelist. Avatud paneel võib
   vajada kerimist. Loendur ja ülesanded on mälus ning lehe uuesti laadimisel lähtestuvad.

### Vastused küsimustele
**1. Milliseid viise on sisu kaheks tulbaks jagamiseks?**
CSS Grid: `display: grid; grid-template-columns: 1fr 1fr` loob kaks võrdset
veergu. Flexbox: `display: flex` koos laste `flex: 1` reegliga asetab kaks
plokki kõrvuti. `column-count: 2` voolab ühe teksti kahte ajalehelaadsesse
veergu. Ajalooliselt kasutati ka `float`-i, kuid Grid ja Flexbox on
lehe paigutuse jaoks tavaliselt lihtsamad. Selles töös on kasutusel Grid.

**2. Miks on inline-stiil suuremal veebilehel halb tava?**
HTML peaks kirjeldama sisu ja struktuuri, CSS kujundust. Inline-stiilid
korduvad, muudavad ühise kujunduse muutmise töömahukaks ja raskendavad
ülekirjutamist oma kõrge prioriteedi tõttu. Eraldi CSS-fail võimaldab samu
reegleid taaskasutada ning hoida kujunduse järjepideva ja hooldatavana.
Algses taastatud avalehes inline-stiile ei olnud, seega polnud neid vaja teisaldada.

### Lisaülesannete mõistmine
- CSS `transition` muudab olekuvahetuse sujuvaks, `transform` liigutab pilti
  või nuppu. Vähendatud liikumise eelistust arvestatakse.
- Loendur: `click` sündmus suurendab muutujat ja uuendab `textContent`-i.
- Galerii: massiiv sisaldab kahte pilti; indeks liigub edasi/tagasi ning
  jääktehe tagab ringi liikumise. Pildi vahetumisel on lühike hajumine.
- Ülesanded: vormi saatmine loob uue loendirea; eemaldamise nupp kustutab
  just selle rea. `textContent` hoiab sisestatud teksti tekstina.
- Küpsiste mäng on vabatahtlik lisapunkti võimalus; siin on tavaline loendur.

Õppimiseks: proovi muuta pealkirja värvi, veergude laiuste suhet ja galerii
animatsiooni kestust ning selgita, milline reegel või muutuja tulemust muudab.

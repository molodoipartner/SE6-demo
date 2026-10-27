// 1. Muutuja hoiab klikkide arvu; sündmus uuendab nupu teksti.
let clicks = 0;
const counter = document.querySelector('#click-counter');
counter.addEventListener('click', () => {
    clicks += 1;
    counter.textContent = `Vajutusi: ${clicks}`;
    document.querySelector('#counter-status').textContent = `Vajutasid nuppu ${clicks} korda.`;
});

// 2. Massiiv hoiab pilte; jääktehe viib viimase pildi järel algusesse.
const pictures = [
    { src: 'image.jpg', alt: 'Kaks sportlast võistlevad käesurumises' },
    { src: 'image.png', alt: 'Teine käesurumise teemaline pilt eelmisest seminarist' }
];
let pictureIndex = 0;
function changePicture(direction) {
    pictureIndex = (pictureIndex + direction + pictures.length) % pictures.length;
    const image = document.querySelector('#gallery-image');
    image.src = pictures[pictureIndex].src;
    image.alt = pictures[pictureIndex].alt;
    document.querySelector('#gallery-status').textContent = `Pilt ${pictureIndex + 1} / ${pictures.length}`;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        image.animate([{ opacity: 0.25 }, { opacity: 1 }], { duration: 250 });
    }
}
document.querySelector('#previous-image').addEventListener('click', () => changePicture(-1));
document.querySelector('#next-image').addEventListener('click', () => changePicture(1));

// 3. Kasutaja tekst lisatakse textContent abil, mitte HTML-koodina.
const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');
const todoStatus = document.querySelector('#todo-status');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = input.value.trim();
    if (!title) { input.value = ''; input.focus(); return; }
    const item = document.createElement('li');
    const label = document.createElement('span');
    label.textContent = title;
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.textContent = 'Eemalda';
    remove.setAttribute('aria-label', `Eemalda ülesanne: ${title}`);
    remove.addEventListener('click', () => {
        item.remove();
        todoStatus.textContent = `Ülesanne eemaldatud. Alles: ${list.children.length}.`;
        input.focus();
    });
    item.append(label, remove);
    list.append(item);
    todoStatus.textContent = `Ülesanne lisatud. Kokku: ${list.children.length}.`;
    form.reset();
    input.focus();
});

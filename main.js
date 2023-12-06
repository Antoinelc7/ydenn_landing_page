import './style.css'

const open = document.querySelector('#selector-open');
const close = document.querySelector('#selector-close');

const openSpan = document.querySelector('#selector-open span');
const closeSpan = document.querySelector('#selector-close span');

const selectorImage = document.querySelectorAll('.selector-image img');
const selectorTexte = document.querySelector('.selector-texte');

open.addEventListener('click', () => {
    selectorTexte.innerText = '';
    selectorTexte.innerText = "Une open room est une room dans laquelle une discussion à lieu avec un nombre d’utilisateurs définis pouvant interagir et le reste des utilisateurs non inscrit peuvent quant à eux assister à l'échange sans écrire et cette fois sans limite.";
    openSpan.style.backgroundColor = '#72CCA4';
    closeSpan.style.backgroundColor = '#C4C4C4';
    selectorImage[0].src = './open_room1.png';
    selectorImage[1].src = './open_room2.png';
});

close.addEventListener('click', () => {
    selectorTexte.innerText = '';
    selectorTexte.innerText = "Une private room est une room privé lancé par un utilisateur et ses abonnées. Seuls ces derniers y ont accès. Le but, créer des espaces d’échanges entre amis sur des thèmes et créneaux choisis.";
    openSpan.style.backgroundColor = '#C4C4C4';
    closeSpan.style.backgroundColor = '#72CCA4';
    selectorImage[0].src = './private_room1.png';
    selectorImage[1].src = './private_room2.png';
});
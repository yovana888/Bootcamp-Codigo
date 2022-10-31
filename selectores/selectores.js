import {data}  from './data.js';

/******* Declaracion de Constantes  ****** */

const imageRandom = document.getElementById('image-random');
const btnRandom = document.getElementById('btn-random');
const spanTheme = document.getElementById('theme');

/******* Funciones para el section append child ****** */

const showData  = (dataCard) => {
  const cardElement = document.createElement('div');
  cardElement.className = "cards_item";
  
  const templateCard =
  `<div class="card" id="${dataCard.id}">
    <div class="card_image"><img src="${dataCard.download_url}"></div>
    <div class="card_content">
    <h2 class="card_title">${dataCard.author}</h2>
      <p class="card_text">${dataCard.description}</p>
      <button class="btn btn-outline">Read More</button>
    </div>
  </div>`;
 
  cardElement.innerHTML = templateCard;

  cardElement.addEventListener('click', () => {
    let id = cardElement.firstChild.id;
    showMessage(id);
  })
  return cardElement;

}

function showMessage(id){
  alert(`Su Id es: ${id}` )
}

/******* Funcion para generar la imagen random ****** */

const generateImageRandom = () => {
  btnRandom.addEventListener('click', () => {
    const id=Math.floor(Math.random() * 100) + 1;
    imageRandom.src=`https://picsum.photos/300/300?random=${id}`;
  })
}

let themeLight=true; 
const changeTheme = () => {
  spanTheme.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('darkTheme');
    spanTheme.innerText=themeLight?"Modo Oscuro 🌙":"Modo Claro 🌞"
    themeLight=!themeLight;
  });
}

/******* Funcion inicializar ****** */

const init  = () => {
    const containerCards = document.querySelector('.cards');
    for (let key in data) {
      containerCards.appendChild(showData(data[key]));
    } 

    generateImageRandom();
    changeTheme();    
}


document.addEventListener('DOMContentLoaded', init())
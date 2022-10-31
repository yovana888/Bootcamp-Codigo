import {data}  from './data.js';

const showData  = (dataCard) => {
  const cardElement = document.createElement('div');
  cardElement.className = "cards_item";
  
  const templateCard =
  `<div class="card" id="${dataCard.id}">
    <div class="card_image"><img src="${dataCard.download_url}"></div>
    <div class="card_content">
    <h2 class="card_title">${dataCard.author}</h2>
      <p class="card_text">${dataCard.description}</p>
      <button class="btn card_btn">Read More</button>
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

const init  = () => {
    const containerCards = document.querySelector('.cards');
    for (let key in data) {
      containerCards.appendChild(showData(data[key]));
    } 
}


document.addEventListener('DOMContentLoaded', init())

const form = document.getElementById('memeGenerator');
const cards = document.getElementById('cards');


const topText = document.querySelector('input[id=topText]');
const bottomText = document.querySelector('input[id=bottomText]')
const image = document.getElementById('Image');

form.addEventListener('submit', function(e){
    e.preventDefault();
   
    let newCard = document.createElement('div');
    
    let bImage = document.createElement('img');
    bImage.src = image.value;
    
    let top = document.createElement('div');
    top.innerHTML = topText.value;
    let bottom = document.createElement('div');
    bottom.innerHTML = bottomText.value;


    let remove = document.createElement('button');
    remove.innerText = ('remove');
    remove.addEventListener('click', function(e) {
        e.target.parentElement.remove();
    });

    cards.appendChild(newCard);
    newCard.setAttribute('class', 'newCard');
    
    newCard.appendChild(bImage);

    newCard.appendChild(top);
    top.setAttribute('class', 'top');
    newCard.appendChild(bottom);
    bottom.setAttribute('class', 'bottom');
    newCard.appendChild(remove);

});
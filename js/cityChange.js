let cityChange = document.querySelector('.city-change-preset');
let dropBox = document.querySelector('.choose-city');
let mask = document.querySelector('.city-change__mask');
let closeButton = document.querySelector('.choose-city__close');

cityChange.onclick = function(){
    dropBox.classList.remove('hidden');
    mask.classList.remove('hidden');
};

closeButton.onclick = function(){
    dropBox.classList.add('hidden');
    mask.classList.add('hidden');
};
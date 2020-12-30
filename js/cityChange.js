let cityChange = document.querySelector('.city-change-preset');
let dropBox = document.querySelector('.city-change-dropdown')

cityChange.onclick = function(){
    dropBox.classList.remove('hidden');
    dropBox.classList.add('shown');
};
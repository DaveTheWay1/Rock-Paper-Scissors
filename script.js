const computerOptions = ['Rock', 'Paper', 'Scissors'];
const playerOptions = document.querySelectorAll('main > button');
playerOptions.forEach(function(option){
    option.addEventListener('click', handleClick);
})

function handleClick(e){
    console.log(e.target);
}
const computerChoice = Math.floor(Math.random()*3);
console.log(computerOptions[computerChoice]);
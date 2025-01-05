let Score=JSON.parse(localStorage.getItem('Score')) || {
    wins : 0,
    Loss : 0,
    Tie : 0
   } ; 

updateScoreElement();

// if(Score === null)
// {
//    Score={
//     wins : 0,
//     Loss : 0,
//     Tie : 0
//    } 
// }

function pickComputerMove()
{
const randomNumber= Math.random();
let computerMove='';
if(randomNumber >=0 && randomNumber <1/3)
{
computerMove='Rock';
}
else if(randomNumber >= 1/3 && randomNumber < 2/3)
{
computerMove='Paper';
}
else if(randomNumber >=2/3 && randomNumber<1)
{
computerMove='Scissors';
}
return computerMove;
}

function reset_score()
{
Score.wins=0;
Score.Loss=0;
Score.Tie=0;
localStorage.removeItem('Score');
updateScoreElement();
}

function playGame(playermove)
{
computerMove = pickComputerMove();

if(playermove==='Scissors')
{
if(computerMove === 'Rock')
{
result='You Lose';
}
else if(computerMove === 'Paper')
{
result='You Won';
}
else if(computerMove === 'Scissors')
{
result = 'Tie';
} 
}

if(playermove ==='Paper')
{
if(computerMove === 'Rock')
{
result='You Won';
}
else if(computerMove === 'Paper')
{
result='Tie';
}
else if(computerMove === 'Scissors')
{
result = 'You Lose';
}
}

if(playermove === 'Rock')
{

if(computerMove === 'Rock')
{
result = 'Tie';
}
else if(computerMove === 'Paper')
{
result = 'You Lose'
}
else if(computerMove === 'Scissors')
{
result = 'You Won';
}
}

//score calculator
if(result==='You Won')
{
Score.wins+=1;
}
else if(result==='You Lose')
{
Score.Loss++;
}
else if(result==='Tie')
{
Score.Tie++;
}

localStorage.setItem('Score',JSON.stringify(Score));

updateScoreElement();

showResult(playermove,computerMove);

}

function updateScoreElement() {
document.querySelector('.js-score')
.innerHTML = `Wins : ${Score.wins} , Looses : ${Score.Loss} , Tie's : ${Score.Tie}`;
}

function showResult(playermove,computerMove)
{
document.querySelector('.js-result').innerHTML = result ;

document.querySelector('.js-moves').innerHTML=`You Move ${playermove} Computer Move ${computerMove}`;
}
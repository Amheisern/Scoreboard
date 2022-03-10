import './style.css'

// let teamOneScore = 0

// // let TeamTwoScore = 0
// function addOneScore(event: MouseEvent) {
//   //
//   const thingClickedOne = event.target
//   teamOneScore++
//   const addingScoreOne = document.querySelector('.team1, .add')

//   if (addingScoreOne instanceof HTMLElement) {
//   }
//   addingScoreOne?.addEventListener('click', addOneScore)
// }
// gavin review
const teamOnePlusButton = document.querySelector('i.add')
const teamOneMinusButton = document.querySelector('i.subtract')
const teamOneScore = document.querySelector('section.team1 h3')
//
// Must have a function to deal with an event listener
//console click to check code
//
function handleClickOnTeamOnePlusButton() {
  console.log('click Plus')
}

teamOnePlusButton?.addEventListener('click', handleClickOnTeamOnePlusButton)

// mimic the plus button function above
function handleClickOnTeamOneMinusButton() {
  console.log('click Minus')
}

teamOneMinusButton?.addEventListener('click', handleClickOnTeamOneMinusButton)

const teamTwoPlusButton = document.querySelector('section.team2 i.add')
const teamTwoMinusButton = document.querySelector('section.team2 i.subtract')
const teamTwoScore = document.querySelector('section.team2 h3')
console.log(teamTwoMinusButton)
console.log(teamTwoPlusButton)
console.log(teamTwoScore)
console.log(teamOneScore)
console.log(teamOnePlusButton)
console.log(teamOneMinusButton)

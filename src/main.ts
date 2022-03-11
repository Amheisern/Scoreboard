import './style.css'
console.clear()
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
const teamOnePlusButton = document.querySelector('.team1 i.add')
const teamOneMinusButton = document.querySelector('.team1 i.subtract')
const teamOneScoreNumber = document.querySelector('.team1 h3')
const fieldTeamOne = document.querySelector('.team1 input')
const teamOneText = document.querySelector('.team1 h2')

let teamOneScore = 0

//
// Must have a function to deal with an event listener
//console click to check code
//
function handleClickOnTeamOnePlusButton() {
  // can use teamOneScore + 1 or  teamOneScore++
  teamOneScore = teamOneScore + 1

  console.log(event)
  if (teamOneScoreNumber instanceof HTMLElement) {
    teamOneScoreNumber.textContent = `${teamOneScore}`
  }
  console.log(teamOneScore)
  // testing step
  // console.log('Plus click')
}

teamOnePlusButton?.addEventListener('click', handleClickOnTeamOnePlusButton)

// mimic the plus button function above
function handleClickOnTeamOneMinusButton() {
  // can use teamOneScore - 1 or  teamOneScore--
  // adding a guard clause to prevent score from going zero
  if (teamOneScore === 0) {
    console.debug('You shall not pass!')
    return
  }

  teamOneScore = teamOneScore - 1

  if (teamOneScoreNumber instanceof HTMLElement) {
    teamOneScoreNumber.textContent = `${teamOneScore}`
  }
  console.log(teamOneScore)
  // console.log('click Minus')
}

teamOneMinusButton?.addEventListener('click', handleClickOnTeamOneMinusButton)

// -------------------------------- teams one---------------------------
//  variable targets for query selectors... first step with console log for testing
const teamTwoPlusButton = document.querySelector('section.team2 i.add')
const teamTwoMinusButton = document.querySelector('section.team2 i.subtract')
const teamTwoScoreNumber = document.querySelector('section.team2 h3')
const fieldTeamTwo = document.querySelector('section.team2 input')
const teamTwoText = document.querySelector('.team2 h2')

function updateTeamTwoName() {
  // console.log('Write')
}
fieldTeamTwo?.addEventListener('input', updateTeamTwoName)

let teamTwoScore = 0

function handleClickOnTeamTwoPlusButton() {
  // can use teamOneScore + 1 or  teamOneScore++
  teamTwoScore = teamTwoScore + 1

  if (teamTwoScoreNumber instanceof HTMLElement) {
    teamTwoScoreNumber.textContent = `${teamTwoScore}`
  }
  console.log(teamTwoScore)
  // testing step
  // console.log('Plus click')
}

teamTwoPlusButton?.addEventListener('click', handleClickOnTeamTwoPlusButton)

// mimic the plus button function above
function handleClickOnTeamTwoMinusButton() {
  // can use teamOneScore - 1 or  teamOneScore--
  // adding a guard clause to prevent score from going zero
  if (teamTwoScore === 0) {
    console.debug('You shall not pass!')
    return
  }

  teamTwoScore = teamTwoScore - 1

  if (teamTwoScoreNumber instanceof HTMLElement) {
    teamTwoScoreNumber.textContent = `${teamTwoScore}`
  }
  console.log(teamTwoScore)
  // console.log('click Minus')
}
teamTwoMinusButton?.addEventListener('click', handleClickOnTeamTwoMinusButton)

console.log(teamOneText)
console.log(teamTwoText)
console.log(fieldTeamTwo)
console.log(fieldTeamOne)
console.log(teamTwoMinusButton)
console.log(teamTwoPlusButton)
console.log(teamTwoScoreNumber)
console.log(teamOneScoreNumber)
console.log(teamOnePlusButton)
console.log(teamOneMinusButton)

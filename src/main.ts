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
const teamOneScoreNumber = document.querySelector('.team1 h3')!
const fieldTeamOne = document.querySelector('.team1 input')
const teamOneText = document.querySelector('.team1 h2')!
const freshInputs = document.querySelectorAll('input')!
const winMessage = document.querySelector('h1')!

freshInputs.forEach((input) => (input.value = ''))

function updateTeamOneName(event: Event) {
  const elementChanges = event.target

  if (elementChanges instanceof HTMLInputElement) {
    const currentInputValue = elementChanges.value
    teamOneText.innerHTML = currentInputValue
  }
  // console.log('Write')
}
fieldTeamOne?.addEventListener('input', updateTeamOneName)
let teamOneScore = 0

//
// Must have a function to deal with an event listener
//console click to check code
//
function handleClickOnTeamOnePlusButton() {
  // can use teamOneScore + 1 or  teamOneScore++
  if (teamOneScore === 21) {
    console.debug('You shall not pass!')
    winMessage.textContent = `Team Blue Won!`
    return
  }
  teamOneScore = teamOneScore + 1
  // console.log(event)
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

function handleResetScore() {
  teamOneScoreNumber.textContent = '0'
  console.log('reset')
}
teamOneScoreNumber?.addEventListener('dblclick', handleResetScore)

// -------------------------------- teams one---------------------------
//  variable targets for query selectors... first step with console log for testing
const teamTwoPlusButton = document.querySelector('section.team2 i.add')
const teamTwoMinusButton = document.querySelector('section.team2 i.subtract')
const teamTwoScoreNumber = document.querySelector('section.team2 h3')!
const fieldTeamTwo = document.querySelector('section.team2 input')
const teamTwoText = document.querySelector('.team2 h2')!
// const freshInputTeamTwo = document.querySelector('section.team2 input')!
// freshInputTeamTwo.value = ''
function updateTeamTwoName(event: Event) {
  const elementChanges = event.target

  if (elementChanges instanceof HTMLInputElement) {
    const currentInputValue = elementChanges.value
    teamTwoText.innerHTML = currentInputValue
  }
  // console.log('Write')
}
fieldTeamTwo?.addEventListener('input', updateTeamTwoName)

let teamTwoScore = 0

function handleClickOnTeamTwoPlusButton() {
  if (teamTwoScore === 21) {
    console.debug('You shall not pass!')
    winMessage.textContent = `Team Red Won!`
    return
  }
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

function handleResetScoreTeamTwo() {
  teamTwoScoreNumber.textContent = '0'
  console.log('reset')
}
teamTwoScoreNumber?.addEventListener('dblclick', handleResetScoreTeamTwo)

console.log(winMessage)
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

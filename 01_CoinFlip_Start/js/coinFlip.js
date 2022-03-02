const heads = document.getElementById("heads")
const tails = document.getElementById("tails")
const result = document.getElementById("result")

const flipcoin = () => {
  let coinResult = Math.floor(Math.random() * 2)
  if (coinResult) {
    heads.setAttribute("src", "./img/heads.svg")
    return "heads" 
  } else {
    tails.setAttribute("src", "./img/tails.svg")
    return "tails"
  }
}

const compare = selection => {
  heads.setAttribute("src", "./img/heads_BW.svg")
  tails.setAttribute("src", "./img/tails_BW.svg")
  let outcome = flipcoin()

  if (outcome == selection) {
    result.innerHTML = `${outcome.toUpperCase()} YOU WON`
  } else {
    result.innerHTML = `${outcome.toUpperCase()} YOU LOST`
  }
}


heads.addEventListener("click", () => {
  compare("heads")
});

tails.addEventListener("click", () => {
  compare("tails")
});
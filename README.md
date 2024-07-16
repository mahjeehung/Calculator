# Calculator
A TOP calculator project 

16/7/24 - Today I learnt the LONG way that for some reason unbeknowst to me, 

function changeGlobal(newVal) {
  myGlobal = newVal;
}

works, but,

function changeGlobal(myGlobal,newVal) {
  myGlobal = newVal;
}

will not work.

2. Also learnt that while replacing DOM text,

let display = document.getElementById("display").textContent
display = 'hi'

will replace display with 'hi', so instead need to,

let display = document.getElementById("display")
display.textContent = 'hi'
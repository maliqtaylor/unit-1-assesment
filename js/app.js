/*------------------------ Cached Element References ------------------------*/
let displayNum = document.querySelector('h1')
let operation = document.querySelector('#operationRow')
let opInput = document.querySelector('#opInput')
/*----------------------------- Event Listeners -----------------------------*/
operation.addEventListener('click', e => doMath(e))
/*---------------------------- Variables----------------------------*/
let total = displayNum.innerText
/*-------------------------------- Functions --------------------------------*/
function doMath(e) {
    if (e.target.id === 'add') addNum(e)
    if (e.target.id === 'sub') subNum(e)
}

function subNum() {
    let operand = opInput.value
    if (isNaN(operand)) return
    total = Number(total);
    operand = Number(operand);
    total -= operand
    displayNum.innerText = total
    if (total < 0) displayNum.className = 'negative'
}

function addNum() {
    let operand = opInput.value
    if (isNaN(operand)) return
    total = Number(total);
    operand = Number(operand);
    total += operand
    displayNum.innerText = total
    if (total < 0) displayNum.className = 'negative'
    if (total >= 0) displayNum.className = ''
}
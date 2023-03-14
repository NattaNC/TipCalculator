const cincoPorcento = document.querySelector('#five-percent').addEventListener('click', somarcinco)

function somarcinco(){
    const bill = document.querySelector('#bill-price').value
    const tipAmount = document.querySelector('#value-tip-amount')
    

    fivePercent = bill * 0.05
    tipAmount.innerHTML = fivePercent.toFixed(2)
}

const dezPorcento = document.querySelector('#ten-percent').addEventListener('click', somardez)

function somardez(){
    const bill = document.querySelector('#bill-price').value
    const tipAmount = document.querySelector('#value-tip-amount')
    

    fivePercent = bill * 0.1
    tipAmount.innerHTML = fivePercent.toFixed(2)
}

const quinzePorcento = document.querySelector('#five-teen-percent').addEventListener('click', somarquinze)

function somarquinze(){
    const bill = document.querySelector('#bill-price').value
    const tipAmount = document.querySelector('#value-tip-amount')
    

    fivePercent = bill * 0.15
    tipAmount.innerHTML = fivePercent.toFixed(2)
}

const vintecincoPorcento = document.querySelector('#twenty-five-percent').addEventListener('click', somarvintecinco)

function somarvintecinco(){
    const bill = document.querySelector('#bill-price').value
    const tipAmount = document.querySelector('#value-tip-amount')
    

    fivePercent = bill * 0.25
    tipAmount.innerHTML = fivePercent.toFixed(2)
}

const cincoCinquenta = document.querySelector('#fifty-percent').addEventListener('click', somarcinquenta)

function somarcinquenta(){
    const bill = document.querySelector('#bill-price').value
    const tipAmount = document.querySelector('#value-tip-amount')
    

    fivePercent = bill * 0.50
    tipAmount.innerHTML = fivePercent.toFixed(2)
}


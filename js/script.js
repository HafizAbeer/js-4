let equation = ""



function toDisplay(value) {
    equation = document.getElementById("display").value += value
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    const result = eval(equation)
    document.getElementById('display').value = result
}

function toRemove(){
    let afterDel = equation.slice(0 , equation.length - 1)
    equation = afterDel
    document.getElementById('display').value = equation
}
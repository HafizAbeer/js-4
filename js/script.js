let equation = ""
let isEvaluated = false;


function toDisplay(value) {
    equation = document.getElementById("display").value += value
}

function clearDisplay() {
    document.getElementById("display").value = "";
    isEvaluated = false
}

function calculate() {
    const result = eval(equation)
    isEvaluated = true;
    document.getElementById('display').value = result
}

function toRemove(){
    if(isEvaluated) {
        clearDisplay( )
    } else {
        let afterDel = equation.slice(0 , equation.length - 1)
        equation = afterDel
        document.getElementById('display').value = equation
    }
}
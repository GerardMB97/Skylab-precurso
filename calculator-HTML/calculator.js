let answer = false;

function forClear(){
    document.getElementById("output").innerHTML = "0";
}

function deleteZero(){
    let value = document.getElementById("output").innerHTML;
    if (value === "0"){
        value = " "
        document.getElementById("output").innerHTML = value;
    }
}

function deleteAnswerIfNeeded(clickedId){
    if(clickedId === "numberbutton"){
    if(answer === true){
        document.getElementById("output").innerHTML = ""
        answer = false;
    }
}else {
    answer = false;
}
}

function squareRoot(){
    var value = document.getElementById("output").innerHTML;
    value = Math.sqrt(+value)

    document.getElementById("output").innerHTML = value;
    answer = true;
}

function forDisplay(value , clickedId){
    deleteZero();
    deleteAnswerIfNeeded(clickedId);
    document.getElementById("output").innerHTML += value;
}

function solve(){
    deleteZero();
    let equation = document.getElementById("output").innerHTML;
    let solution = eval(equation);

    document.getElementById("output").innerHTML = solution;
    answer = true;
}

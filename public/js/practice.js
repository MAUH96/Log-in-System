//alert(prompt("compose your text: ").slice(0,140)); 
//var dogAge = prompt("age of your dog: ");
//var HumanAge = ((dogAge-2)*4)+21;

function add(a, b){
    return a+b;

    
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b ){

    return a*b;
}

function divide(a,b){
    return a/b;
}
function modulo(a,b){

    return a%b;
}



/**
 * Task: NHS BMI Calculator 
 * @param {weight} weight 
 * @param {*height} height 
 */
function getBMI(weight, height){


    var heightSq =  Math.pow(height,2);
    var BMI = Math.round(weight/heightSq);
    return BMI;
}

//0var a = prompt("weight: ");
//var b = prompt("height: ");
    //alert ("your BMI is: " + getBMI(a,b));
   


//task was to ask the name of the user and welcome him with his name
// TASK: the first letter of the name must be capital, so it looks good 
 
/**
 * var a = prompt("Hey! What is you name? ");
    var b = a.toUpperCase().slice(0,1);
    var c = a.toLowerCase().slice(1)
    var name = (b+c);
 */




 document.querySelector(".login").classList.add("invisible");
 document.querySelector(".login").classList.toggle("invisible");
 











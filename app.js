const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let generate = document.getElementById("generate");
generate.addEventListener("click", generatePassword);
let firstPassword = document.getElementById("first-password");
let secondPassword = document.getElementById("second-password");
firstPassword.addEventListener("click", function() {
    document.execCommand("copy");
  });
firstPassword.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", firstPassword.textContent);
      console.log(event.clipboardData.getData("text"))
    }
  });

let length = document.getElementById("set-length");
length.addEventListener("keydown", assignValue);
let passwordLength;

function assignValue(event){
    console.log(event)
    if (event.key == "Enter"){
        passwordLength = document.getElementById("set-length").value;
        document.getElementById("set-length").value= "";
    }

}

let optionNumbers = document.getElementById("option-numbers");
optionNumbers.addEventListener("click", addNumbers);
let optionSymbols = document.getElementById("option-symbols");
optionSymbols.addEventListener("click", addSymbols);

let hasNumbers = false;
let hasSymbols = false;

function addNumbers(){
    hasNumbers = true;
    return hasNumbers;
}
function addSymbols(){
    hasSymbols = true
    return hasSymbols;
}
function generatePassword () {
    firstPassword.textContent = "";
    secondPassword.textContent = "";

    let result;
    if(hasNumbers === true && hasSymbols === true){
        result = characters.concat(numbers, symbols);
    }else if(hasNumbers === true){
        result = characters.concat(numbers);
    }else if(hasSymbols === true){
        result = characters.concat(symbols);
    }

    for(let i = 0; i < passwordLength; i++){
        let randomIndex = Math.floor(Math.random () * result.length)
        firstPassword.textContent += result[randomIndex];
    }

    for(let i = 0; i < passwordLength; i++){
        let randomIndex = Math.floor(Math.random () * result.length)
        secondPassword.textContent += result[randomIndex];
    }
}

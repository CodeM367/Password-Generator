const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

// selectors
const passBox = document.querySelector("#passBox")
const passLength = document.querySelector("#passLength")
const upperInput = document.querySelector("#containUpperCase")
const lowerInput = document.querySelector("#containLowerCase")
const numberInput = document.querySelector("#containNumber")
const symbolInput = document.querySelector("#containSymbols")
const btn = document.querySelector("button");


const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet)
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet)
    }
    if(password.length < passLength.value){
      return generatePassword(password);
    }
    console.log(password);
    
    passBox.innerText = equalPassword(password,passLength.value);
    }

function equalPassword(str,num){
    if(str.length > num){
        let substr = str.substring(0,num);
        return substr;
    }
    else{
        return str;
    }
}
btn.addEventListener("click",() =>{
    
        generatePassword();
    
})
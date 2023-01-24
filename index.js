const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passEl1 = document.getElementById("pass1")
let passEl2 = document.getElementById("pass2")

function generatePassword(){
        passEl1.textContent = ""
        passEl2.textContent = ""
    for (let i = 0; i < 15; i++){
        let num1 = Math.floor(Math.random() * characters.length)
        let num2 = Math.floor(Math.random() * characters.length)
        passEl1.textContent += characters[num1]
        passEl2.textContent += characters[num2] 
    }
}





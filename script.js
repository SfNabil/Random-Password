function generatePassword(lenght,includeLowercase,includeUppercase,includeNumbers,includeSymbol){
    const lowercaseChars = "abcdefghijklmonpqrstuvwxyz";
    const uppercaseChars = "ABCDEFHIJKLMONPQRSTUVWXYZ"
    const numberChars = "0123456789"
    const symbolChars = "&é'(-è__çà=$^*ù!:;,£¨%µ§/.@^\`|[{#~"

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars :"";
    allowedChars += includeUppercase ? uppercaseChars :"";
    allowedChars += includeNumbers ? numberChars :"";
    allowedChars += includeSymbol ? symbolChars :"";

    if(lenght <= 0){
        return`(password lenght must be at least 1)`;
    }
    if(allowedChars.lenght === 0){
        return`(at least 1 set of character needs to be selected)`;
    }
    
    for(let i = 0; i <lenght; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    
    return password;

}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbol = true;


const password = generatePassword(passwordLength,includeLowercase,
                                  includeUppercase,includeNumbers,
                                  includeSymbol);

                                  
console.log(`generated password:${password}`);


// Mise en page


    // document.getElementById("passwordGenerated").innerHTML = password;


    function btngen(){
        document.getElementById("passwordGenerated").innerHTML = password;
        
    }
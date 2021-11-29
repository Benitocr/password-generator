// Assignment code here
// Defining  variables
var promptlength;
var lowerUperCase;
var promptNumber;
var promptSpecialChr;

// fuction to generate a random string
function getRandomString(length, randomChars ) {
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}





function generatePassword(){
    characterLength();
    chooseLowUpCase();
    chooseNumber();
    chooseSpecialCharacter();

    if (promptSpecialChr === 2 && promptNumber === 2){
        switch (lowerUperCase) {
            case 1:
                
                var randomChars = 'abcdefghijklmnopqrstuvwxyz';
                var passwd = getRandomString(promptlength, randomChars);
                  
                return passwd;
                break;
            case 2:
                
                var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                var passwd = getRandomString(promptlength, randomChars);
                 
                return passwd;
                break;
            case 3:
            
                var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                var passwd = getRandomString(promptlength, randomChars);
                
                return passwd;
                break;
            default:
              
              break;
          }
    }// condition to consider Special Character and No number
    else if(promptSpecialChr === 1 && promptNumber === 2){
        switch (lowerUperCase) {
            case 1:
                var randomChars = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()!@#$%^&*()!@#$%^&*()';
                var passwd = getRandomString(promptlength, randomChars);
                  
                return passwd;
                break;
            case 2:
                
                var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()!@#$%^&*()!@#$%^&*()';
                var passwd = getRandomString(promptlength, randomChars);
                 
                return passwd;
                break;
            case 3:
                var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()!@#$%^&*()!@#$%^&*()!@#$%^&*()';
                var passwd = getRandomString(promptlength, randomChars);
                
                return passwd;
                break;
            default:
              
              break;
          }
        

    } // condition to consider special character and number
    else if(promptSpecialChr === 1 && promptNumber === 1){
        switch (lowerUperCase) {
            case 1:
                
                var randomChars = 'abcdefghijk!@#$%^&*()1234567890lmnopqrstuvwxyz!@#$%^&*()1234567890!@#$%^&*()1234567890';
                var passwd = getRandomString(promptlength, randomChars);
                  
                return passwd;
                break;
            case 2:
                
                var randomChars = 'ABCDEFGHI!@#$%^&*()1234567890JKLMNOPQRSTUVWXYZ!@#$%^&*()1234567890!@#$%^&*()1234567890';
                var passwd = getRandomString(promptlength, randomChars);
                 
                return passwd;
                break;
            case 3:
            
                var randomChars = 'ABCDEFGHIJ!@#$%^&*()1234567890KL!@#$%^&*()1234567890MNOPQRSTUVWXYZabcdef!@#$%^&*()1234567890ghijklmnopqrstuvwxyz';
                var passwd = getRandomString(promptlength, randomChars);
                
                return passwd;
                break;
            default:
              
              break;
          }
    }else if(promptSpecialChr === 2 && promptNumber === 1){
        switch (lowerUperCase) {
            case 1:
                
                var randomChars = 'abcdefghijklmnopqrstuvwxyz123456789012345678901234567890';
                var passwd = getRandomString(promptlength, randomChars);
                  
                return passwd;
                break;
            case 2:
 
                var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789012345678901234567890';
                var passwd = getRandomString(promptlength, randomChars);
                 
                return passwd;
                break;
            case 3:
          
                var randomChars = 'ABCDEFGHI1234567890JKLMNOPQRSTUVWXYZ1234567890abcde1234567890fghijklmnopqrstuvwxyz1234567890';
                var passwd = getRandomString(promptlength, randomChars);
                
                return passwd;
                break;
            default:
              
              break;
          }
    };




    


}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// fuction to ask for the leght of characters
function characterLength(){
    promptlength = window.prompt("Choose a length of at least 8 characters and no more than 128 characters");
    if (promptlength ===""||promptlength === null){
        window.alert("You need to provide a valid answer! Please try again.");
        return characterLength();
    }
    console.log(characterLength);
    if (promptlength < 8 || promptlength> 128){
        window.alert("You choose either less than 8 characters or more than 128 long! Please provide a valid length");
        return characterLength();
    }
}
//fuction to choose lowercase, upercase or both type of characters
function chooseLowUpCase(){
    lowerUperCase = window.prompt("Choose 1 for lowercase characters,   Choose 2 for Upercase characters, Choose 3 for both lowercase and Upercase characters");
    if (lowerUperCase ===""||lowerUperCase === null){
        window.alert("You need to provide a valid answer! Please try again.");
        return chooseLowUpCase();
    }
     // convert answer from prompt to an actual number
    lowerUperCase = parseInt(lowerUperCase);
    switch (lowerUperCase) {
        case 1:
            window.alert("Password will contain only lowercase characters");  
            break;
        case 2:
            window.alert("Password will contain only Upercase characters");
          break;
        case 3:
          window.alert("Password will contain both Lower and Upper Case characters");
          break;
        default:
          window.alert("You did not pick a valid option. Try again.");
          chooseLowUpCase();
          break;
      }

}

//fuction to chose if password will contain Numbers or not
function chooseNumber(){
    promptNumber  = window.prompt("Choose 1 to include Numbers, Choose 2 not to include Numbers");
    if (promptNumber ===""||promptNumber === null){
        window.alert("You need to provide a valid answer! Please try again.");
        return chooseNumber();
    }



    // convert answer from prompt to an actual number
    promptNumber = parseInt(promptNumber);
    switch (promptNumber) {
        case 1:
            window.alert("Password will consider to contain Numbers");  
            break;
        case 2:
            window.alert("Password will not contain Numbers");
          break;
        default:
          window.alert("You did not pick a valid option. Try again.");
          chooseNumber();
          break;
      }


}


//fuction to chose if password will contain special characters or not
function chooseSpecialCharacter(){
    promptSpecialChr  = window.prompt("Choose 1 to include Special Characters, Choose 2 not to include Special Characters");
    if (promptSpecialChr === "" ||promptSpecialChr === null){
        window.alert("You need to provide a valid answer! Please try again.");
        return chooseSpecialCharacter();
    }

    // convert answer from prompt to an actual number
    promptSpecialChr = parseInt(promptSpecialChr);
    switch (promptSpecialChr) {
        case 1:
            window.alert("Password will consider to include Special Characters");  
            break;
        case 2:
            window.alert("Password will not contain Special Characters");
          break;
        default:
          window.alert("You did not pick a valid option. Try again.");
          chooseSpecialCharacter();
          break;
      }


}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

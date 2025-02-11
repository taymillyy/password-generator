function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbersChars = "0123456789";
    let symbolsChars = "!@#$%^&*()-_=+[{]};:'\",<.>/?";

    let allowedChar = "";
    let password = "";

    if (includeLowerCase) allowedChar += lowercaseChars;
    if (includeUpperCase) allowedChar += uppercaseChars;
    if (includeNumbers) allowedChar += numbersChars;
    if (includeSymbols) allowedChar += symbolsChars;

    if (length <= 0) {
        return "Password length must be at least 1.";
    }
    if (allowedChar.length === 0) {
        return "At least one character type must be selected.";
    }

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allowedChar.length);
        password += allowedChar[randomIndex];
    }
    return password;
}

function generateAndDisplayPassword() {
    let length = parseInt(document.querySelector("#passwordLength").value);
    let includeLowerCase = document.querySelector("#includeLowerCase").checked;
    let includeUpperCase = document.querySelector("#includeUpperCase").checked;
    let includeNumbers = document.querySelector("#includeNumbers").checked;
    let includeSymbols = document.querySelector("#includeSymbols").checked;

    let password = generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
    
    document.querySelector("#passwordDisplay").value = password;
}

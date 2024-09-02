function matchesCharClass(string) {
    //match the char
const digitPattern= string.match(/\d/g);
const  upperCasePattern=string.match(/[A-Z]/g);
const lowerCasePattern= string.match(/[a-z]/g);
const specialCharPattern=string.match(/[!@#$%^&*(),.?":{}|<>]/g
);

return{
   digit: digitPattern,
   upperCase:upperCasePattern,
   loweCase:lowerCasePattern,
   specialChars:specialCharPattern
}
    



}

console.log(matchesCharClass('Sujoy@123#Karm')); 



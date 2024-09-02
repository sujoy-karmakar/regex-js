function checkRegex(pattern, string){
    let regex = new RegExp(pattern);
return regex.test(string)

}
console.log(checkRegex( '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', 'ksujoy29@gmail.com'));

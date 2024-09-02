function checkExtraRegexPart(pattern, string) {
    let regex = new RegExp(pattern);
    let match = string.match(regex);

    if (match) {
        // Return an object with the captured groups
        return {
            day: match[1],
            month: match[2],
            year: match[3]
        };
    } else {
        return null
        ; // No match found
    }
}

let pattern = /(\d{2})-(\d{2})-(\d{4})/;
let dateString = " 05-09-2024.";

console.log(checkExtraRegexPart(pattern, dateString));

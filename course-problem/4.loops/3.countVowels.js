function countVowels(string) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (const element of string) {
        if (vowels.includes(element)) {
            count++;
        }
    }
    return count;

}

const string = prompt("Enter any String:");
console.log(countVowels(string.toLowerCase()));
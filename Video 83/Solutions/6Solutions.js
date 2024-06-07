

// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.


function vowelCounter(str) {
    let a = "aeiouAEIOU";
    let vowels = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (a.includes(str[i])) {
            vowels++
        }
    }

    return vowels

}

console.log(vowelCounter("Anni English"));


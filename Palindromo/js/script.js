const userWord = prompt('Inserisci una parola:');
console.log('userWord', userWord, userWord.length, typeof userWord);

const result = checkPalindrome(userWord)
console.log('result', result, typeof result)
if (result) {
    alert('La parola è palindroma!');
    console.log('La parola è palindroma!')
}
else {
    alert('La parola Non è palindroma...');
    console.log('La parola NON è palindroma...');
}


function checkPalindrome(word) {
    const reverseWord = reverseWord(word);
    if (word == reverseWord) {
        return true;
    }
    else {
        return false;
    }
}
function reverseWord(wordTobeReversed) {
    let reverseWord = '';
    for(let i =word.leght - 1; i >= 0; i--) {
        console.log(word[i]);

        reverseWord = reverseWord + word[i];
    }
    console.log('reverseWord', reverseWord, reverseWord.length, typeof reverseWord);
    return reverseWord;
}
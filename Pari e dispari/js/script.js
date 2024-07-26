const userChoice = prompt('Scegli P o D:')
console.log('userChoice', userChoice, typeof userChoice);

const userNumber = parseInt(prompt('Scegli un numero tra 1 e 5 (compresi):'))
console.log('userNumber', userNumber, typeof userNumber);

const pcNumber = generateRandomNumber();
console.log('pcNumber', pcNumber, typeof pcNumber);

const sum = userNumber + pcNumber;

if (userChoice == 'P' && evenOrOdd() == 'pari') {
    alert('Hai vinto!');
}
else if (userChoice == 'D' && evenOrOdd() == 'dispari') {
    alert('Hai vinto!');
}
else {
    alert('Hai perso...');
}


function generateRandomNumber() {
    const num = Math.floor(Math.random() * 5) + 1;

    return num;
}
function evenOrOdd() {
    if (sum % 2 == 0) {
        return 'pari';
    }
    else {
        return 'dispari';
    }
}
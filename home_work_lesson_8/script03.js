
function userMessage() {
    let userInput;

    for (let i = 1; i <= 10; i++) {
        userInput  = prompt('Введіть число більше за 100: ');

        let userNumber = Number(userInput);

        if (userNumber === 100) {
            alert('Ви порались!');
            break;
        } else if (userNumber > 100 || isNaN(userNumber)) {
            break;
        }
    };
    
    console.log(`Останнім ви ввели: ${userInput}`);
};

userMessage();
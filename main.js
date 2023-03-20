let name = prompt ("Hey! Welcome to Goose's Guaranteed Winning Lottery Number Generator! Please enter your name to continue:");
let answer = confirm("Hello, " + name + "!" + " Are you ready to make the first step toward partying on super yachts, and snorting preposterous amounts of Cocaine off the perfectly tanned asses of high end escorts? ");

let generatingNumbers = false;

if (answer) {
    generatingNumbers = confirm ("Wonderful, " + name + ", just give me a moment whilst I consult The High Goose, and retrieve your winning numbers. In order to receive your winning ticket, you must agree to worship The High Goose for eternity. Do you agree to these terms?");
}

if (generatingNumbers) {
    const numBalls = 6
    const ballRange = 59;

    let lotteryNumbers = [];

    while (lotteryNumbers.length < numBalls) {
        let randomNumber = Math.floor(Math.random() * ballRange) +1;

        if (lotteryNumbers.includes(randomNumber)) {
            continue;
        } else {
            lotteryNumbers.push(randomNumber);
        }
    }

    lotteryNumbers.sort(function(a, b) {
        return a - b;
    });

    alert("The High Goose thanks you for surrendering your soul to her for all eternity. Here are your winning lottery numbers: " + lotteryNumbers.join(", "));
    console.log("Here are your winning lottery numbers:" + lotteryNumbers.join(", "));
} else {
    alert("Sorry, you must agree to worship The High Goose for eternity to receive your winning ticket.");
}
const objectCounter = {
    papir: 0,
    kamen: 0,
    nuzky: 0,
}

function startGame() {
    let playerVal = "";
    let randomNumber = Math.floor(Math.random() * 3);
    let compVal = "";
    let playerScoreVal = parseInt(
        document.getElementById("playerScoreVal").innerHTML
    );
    let botScoreVal = parseInt(
        document.getElementById("botScoreVal").innerHTML
    );
    let result = "";

    alert("Hra začala!");

    console.log(randomNumber);
    playerInput = prompt(
        "Napište K pro kámen, N pro nůžky nebo P pro papír."
    );

    playerVal = playerInput.toUpperCase();

    if (playerVal == "P") {
        objectCounter.papir++;
    } else if (playerVal == "N") {
        objectCounter.nuzky++;
    } else if (playerVal == "K") {
        objectCounter.kamen++;
    }

    if (randomNumber == 0) {
        compVal = "K";
        if (playerVal == "P") {
            playerScoreVal++
            result = "Vyhrál jsi!";
        };
        if (playerVal == "N") {
            botScoreVal++;
            result = "Prohrál jsi!";
        };
        if (playerVal == "K") {
            result = "Remíza!";
        };
    }
    if (randomNumber == 1) {
        compVal = "P";
        if (playerVal == "N") {
            playerScoreVal++
            result = "Vyhrál jsi!";
        };
        if (playerVal == "K") {
            botScoreVal++;
            result = "Prohrál jsi!";
        };
        if (playerVal == "P") {
            result = "Remíza!";
        };
    }
    if (randomNumber == 2) {
        compVal = "N";
        if (playerVal == "K") {
            playerScoreVal++
            result = "Vyhrál jsi!";
        };
        if (playerVal == "P") {
            botScoreVal++;
            result = "Prohrál jsi!";
        };
        if (playerVal == "N") {
            result = "Remíza!";
        };
    }


    alert(`Počítač zvolil ${compVal}, ${result}`);

    let prevLap = [compVal, playerVal, result]

    console.log(prevLap)
    console.log(objectCounter)

    document.getElementById("playerScoreVal").innerHTML = playerScoreVal
    document.getElementById("botScoreVal").innerHTML = botScoreVal

    console.log(playerVal)
}
const objectCounter = {
    papir: 0,
    kamen: 0,
    nuzky: 0,
}

function startGame() {
    let selectedObject = "";
    let numberGen = Math.floor(Math.random() * 3);
    let enemySelection = "";
    let playerScoreVal = parseInt(
        document.getElementById("playerScoreVal").innerHTML
    );
    let botScoreValue = parseInt(
        document.getElementById("botScoreVal").innerHTML
    );
    let result = "";

    alert("Hra začala!");

    console.log(numberGen);
    selectedObject = prompt(
        "Napište K pro kámen, N pro nůžky nebo P pro papír."
    );

    if (numberGen == 0) {
        enemySelection = "kámen"
        objectCounter.kamen++

        if (selectedObject === "N" || selectedObject === "n") {
            objectCounter.nuzky++
            result = "Prohrál jsi!"
            alert(`Počítač zvolil ${enemySelection}, ${result}`)
            botScoreVal++
        } else if (selectedObject === "P" || selectedObject === "p") {
            objectCounter.papir++
            result = "Vyhrál jsi!"
            alert(`Počítač zvolil ${enemySelection}, ${result}`)
            playerScoreVal++
        } else if (selectedObject === "K" || selectedObject === "k") {
            objectCounter.kamen++
            result = "Remíza!"
            alert(`Počítač zvolil ${enemySelection}, ${result}`)
        } else {
            alert("Nenapsali jste správný výraz.")
        }
    }
    if (numberGen == 1) {
        enemySelection = "papír"
        objectCounter.papir++

        if (selectedObject == "N" || selectedObject === "n") {
            objectCounter.nuzky++
            result = "Vyhrál jsi!"
            alert(`Počítač zvolil ${enemySelection}, ${result}`)
            playerScoreVal++
        } else if (selectedObject == "P" || selectedObject === "p") {
            objectCounter.papir++
            result = "Remíza!"
            alert(`Počítač zvolil ${enemySelection}, ${result}`)
        } else if (selectedObject == "K" || selectedObject === "k") {
            objectCounter.kamen++
            result = "Prohrál jsi!"
            alert(`Počítač zvolil ${enemySelection}, ${result}`)
            botScoreVal++
        } else {
            alert("Nenapsali jste správný výraz.")
        }
    }
    if (numberGen == 2) {
        enemySelection = "nůžky"
        objectCounter.nuzky++

        if (selectedObject == "N" || selectedObject === "n") {
            objectCounter.nuzky++
            result = "Remíza!"
            alert(`Počítač zvolil ${enemySelection}, ${result}`)
        } else if (selectedObject == "P" || selectedObject === "p") {
            objectCounter.papir++
            result = "Prohrál jsi!"
            alert(`Počítač zvolil ${enemySelection}, ${result}`)
            botScoreVal++
        } else if (selectedObject == "K" || selectedObject === "k") {
            objectCounter.kamen++
            result = "Vyhrál jsi!"
            alert(`Počítač zvolil ${enemySelection}, ${result}`)
            playerScoreVal++
        } else {
            alert("Napište správně jednu z možností K, P, N")
        }
    }
    let prevLap = [enemySelection, selectedObject, result]

    console.log(prevLap)
    console.log(objectCounter)

    document.getElementById("playerScoreVal").innerHTML = playerScoreVal
    document.getElementById("botScoreVal").innerHTML = botScoreVal

    console.log(selectedObject)
}
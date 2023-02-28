const HangedImage = document.getElementById("draw-game-image")
const Button = document.getElementById("boton")
const LoseText = document.getElementById("lose-msg")
const LetterSelectResults = document.getElementById("check-results")
const LetterSelects = document.getElementById("letters-entered")
const LetterInput = document.getElementById("letter-input")
const dash = document.getElementById("wordDashes")
const arrayWords = ['Platillo', 'Orientarse', 'Piso', 'Escuchar', 'Vara', 'Tablero', 'Desfilar', 'Vena', 'Microondas', 'Fotos', 'Forjar', 'Azules', 'Joya', 'Esparcir', 'Bacteria', 'Berenjena', 'Alcantarilla', 'Vino', 'Lagarto', 'Copiar', 'Arriba', 'Miel', 'Encargado',
                    'Sabanas', 'Surcar', 'Lapicera', 'Uniforme', 'Palmada', 'Comunista', 'Molestar']


const word = ChosenWord();
const wordDash = word.toString().replace(/,/g, "");
var count = 0;
var acertadas = 0;
var guiones = "";
var stringLetters = [];
var LetrasIntroducidas = new Set([])
var contadorRepetidas = 0;


function PrintGameInfo() {
    const GameInfo = document.getElementById("draw-game-info")
    GameInfo.innerHTML = '<h2>Elige una letra para comenzar</h2>'
}
function PrintHangedImage () {
    HangedImage.innerHTML = ''
}
function StartGame () {    
    PrintGameInfo()
    PrintHangedImage()
    PrintDash()
}
function ChosenWord () {
    let nWord = Math.floor(Math.random() * 30)
    var choice = arrayWords[nWord]
    var wordSelected = choice.toUpperCase().split('')
    return wordSelected
}    
function Fallo() {
    count ++
        if (count == 1) {
            HangedImage.innerHTML = `<img src="img/Pos_01.png">` 
        }else if(count == 2) {
            HangedImage.innerHTML = `<img src="img/Pos_02.png">`
        } else if(count == 3) {
            HangedImage.innerHTML = `<img src="img/Pos_03.png">`
        }else if(count == 4) {
            HangedImage.innerHTML = `<img src="img/Pos_04.png">`
        }else if (count == 5) {
            HangedImage.innerHTML = `<img src="img/Pos_05.png">`
        }else if(count == 6) {
            HangedImage.innerHTML = `<img src="img/Pos_06.png">`
        }else if (count == 7) {
            HangedImage.innerHTML = `<img src="img/Pos_07.png">`
        }else {
            HangedImage.innerHTML = `<img src="img/Pos_08.png">`
            LoseText.innerHTML = (`<h1>¡¡¡Has perdido!!!</h1><br><h3>La palabra es: ${wordDash}`)
        }  
}
function GetLetter () {
    var chooseLetter = document.getElementById("letter-input").value.toUpperCase()
    if(chooseLetter == "") {
        LetterSelectResults.innerHTML = '¡Introduce una letra!'
    }else{
        ValidateLetter(chooseLetter)
    }
    console.log('La palabra es: ' + wordDash)
}
function ValidateLetter(letter) {
             if (LetrasIntroducidas.has(letter)){
                contadorRepetidas++
                  console.log("Contador repetidas: " + contadorRepetidas)
                  LetterSelectResults.innerHTML = '¡Has repetido letra, introduce otra!'
                  /*Al no ser un for, no recorre valor por valor y hace que no se siga 
                  ejeutando el código y esperar una nueva letra*/
                }else{
                  CheckLetter(letter)  
                }
                LetrasIntroducidas.add(letter);
             }
    
    console.log('Nº letras introducidas: ' + LetrasIntroducidas.size)

function CheckLetter (letter) {
    console.log('letter: ' + letter) 
    let CheckLetterAcertadas = 0;
  for (let i = 0; i < word.length; i++) {
        if (letter == word[i]) {
            CheckLetterAcertadas++, acertadas++;
        }
    }
        if (CheckLetterAcertadas > 0) {
            LetterSelectResults.innerHTML = '¡Has acertado!'
        }else {
            Fallo() //Cambiar 
            LetterSelectResults.innerHTML = '¡Has fallado!'
        }
    CheckWinner()
    CheckLetterDash(letter)
    LetterInput.value = ""
    LetterInput.focus()

    console.log('Nº letras acertadas: ' + acertadas)
}
function CheckWinner () {
    if (acertadas == word.length) {
        LoseText.innerHTML = `<h1>¡¡¡Has ganado!!!</h1>`
}}
function PrintDash () {
    for (let i = 0; i < word.length; i++) {
        guiones = guiones + "_ "
        dash.innerHTML = guiones
}
}
function CheckLetterDash (letter) {
    let cadenaDash = "";
    for (let i = 0; i < wordDash.length; i++) {
        if (letter == wordDash[i]) {
            cadenaDash = cadenaDash + wordDash[i] + " ";
        }else {
            cadenaDash = cadenaDash + guiones[i*2] + " ";
            //Explicación: https://www.youtube.com/watch?v=VfqNCyzR38M&list=PLdLhegjjdnsDacBRRIZkHGDNP9X-4xlWo&index=9
        }
    }
        guiones = cadenaDash;
        dash.innerHTML = guiones;
}


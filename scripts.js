/**
 * Created by Logan on 11/1/2016.
 */

var wordsArray = ["HEALTH CARE", "LIVING ROOM", "LAW ENFORCEMENT", "PARKING LOT", "FAMILY MEMBERS", "EXECUTIVE DIRECTOR", "INTEREST RATES", "ICE CREAM", "DINING ROOM", "PHONE CALLS",
"BREAST CANCER", "HEALTH INSURANCE", "CELL PHONE", "BLOOD PRESSURE", "STOCK MARKET", "COMMUNITY COLLEGE", "HEART DISEASE", "DEATH PENALTY", "CREDIT CARD", "PHONE CALL", "POLICE OFFICERS",
"HEART ATTACK", "DRUG USE", "COLLEGE STUDENTS", "CLIMATE CHANGE", "PRESS CONFERENCE", "SCHOOL STUDENTS", "POLICE OFFICER", "NEWS CONFERENCE", "PUBLIC OPINION", "LEMON JUICE",
"TASK FORCE", "CARBON DIOXIDE", "SIDE EFFECTS", "LAW SCHOOL", "CHILD CARE", "PHONE NUMBER", "COMMUNITY COLLEGES", "NURSING HOME", "GOVERNMENT OFFICIALS", "SUBJECT MATTER", "SCHOOL SYSTEM",
"LAW FIRM", "STATUS QUO", "TEASPOON SALT", "INSURANCE COMPANIES", "GROCERY STORE", "SCHOOL YEAR", "SCHOOL DISTRICT", "CREDIT CARDS", "SCHOOL DISTRICTS", "BACK DOOR", "WORK FORCE",
"PEACE PROCESS", "INCOME TAX", "TAX CUT", "KITCHEN TABLE", "TALK SHOW", "SCHOOL BOARD", "GOLF COURSE", "MUSIC EDUCATION", "FACULTY MEMBERS", "TAX CUTS", "ROOM TEMPERATURE", "HEALTH PROBLEMS",
"EDUCATION PROGRAMS", "SUBSTANCE ABUSE", "DISTRICT ATTORNEY"];

var randNum = Math.floor(Math.random() * wordsArray.length);
var randWord = wordsArray[randNum];
var counter = 0;
var letters = [];


function makeArray(){
    var charArray = randWord.split("");
    return charArray;
}

function findSpace(){
    var index = randWord.indexOf(' ');
    return index;
}

function getBlankWord(){
    var index = findSpace();
    var arr = [];
    var guess = "";
    var char = "";

    for(i = 0; i < randWord.length; i++){
        if(i == index){
            arr[index] = "&nbsp&nbsp&nbsp";
        }else{
            arr[i] = "_ ";
        }

    }
    guess = arr.join("");
    document.getElementById("blankWord").innerHTML= guess;

    return arr;
}

function guessedLetter() {
    var letter = document.getElementById("letter").value;
    var upperLetter = letter.toUpperCase();
    var newWord = "";
    var word = getBlankWord();
    var wordArray = makeArray();
    var a = wordArray.indexOf(upperLetter);
    var b = letters.indexOf(upperLetter);

    if (b != -1) {
        counter++;
        document.getElementById("errorGuess").innerHTML = "You have already guessed that letter.";
    } else if (a == -1) {
        letters.push(upperLetter);
        counter++;
        document.getElementById("errorGuess").innerHTML = "That was an incorrect guess.";
    } else if (a != -1) {
        letters.push(upperLetter);
        word[a] = upperLetter;
        do {
            a = wordArray.indexOf(upperLetter, a + 1);
            if(a != -1){
                word[a] = upperLetter;
            }
        } while(a != -1)
        document.getElementById("errorGuess").innerHTML = "That was a correct guess.";
    }
    newWord = word.join("");
    document.getElementById("blankWord").innerHTML = newWord;
    if(counter == 1){
        document.getElementById("hangPic").src = "FinalProjectImages/hangmanHead.png"
    }else if(counter == 2){
        document.getElementById("hangPic").src = "FinalProjectImages/hangmanBody.png"
    }else if(counter == 3) {
        document.getElementById("hangPic").src = "FinalProjectImages/hangmanLeftArm.png"
    }else if(counter == 4) {
        document.getElementById("hangPic").src = "FinalProjectImages/hangmanRightArm.png"
    }else if(counter == 5) {
        document.getElementById("hangPic").src = "FinalProjectImages/hangmanLeftLeg.png"
    }else if(counter == 6) {
        document.getElementById("hangPic").src = "FinalProjectImages/hangmanComplete.png"
        gameOverLose();
    }
    gameOverWin(newWord, randWord);
}

function gameOverLose(){
    alert("You have lost. Game over!");
}

function gameOverWin(theirs, mine){
    if(theirs == mine){
        alert("You win!");
    }
}







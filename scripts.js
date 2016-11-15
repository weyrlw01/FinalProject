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
}
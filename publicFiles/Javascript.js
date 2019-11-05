var previousGIFS = [];
var nextGIFS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29];


var SurveyResponse = 0;

var indexOfQuestion = -1;

var questions  = ["You feel nervous or scared…","You have trouble falling asleep…","You feel disinterest or apathy….","You have trouble concentrating…","You feel weak or sleepy…", "You engage in dangerous behaviour…", " You have physical outbursts…","You feel unsafe or uncomfortable…","You have frequent thoughts of death or suicide...","You feel tense or irritable..."," You have unexplained headaches or stomach aches…","You have heightened activity or reactivity...","You accuse or blame others…","You cry or yell...","You sleep restlessly...","You want to rest in solitude…","You feel left out…","You are afraid of your future….","You find yourself in dangerous activities…","You feel under pressure…"];

var questionTypes = ["anxiety", "depression",  "repressed anger", "anxiety",  "hopelessness", "hopelessness",  "physical anger", "anxiety",  "hopelessness", "repressed anger",  "repressed anger", "physical anger",  "physical anger", "physical anger",  "loneliness", "loneliness",  "loneliness", "hopelessness",  "repressed anger","anxiety"];
var typeMoods = ["anxiety", "hopelessness", "loneliness", "repressed anger", "physical anger"];
var typeMoodsNum = [0,0,0,0,0]

let listOfSymptoms = [] ;



var mentalProblems = [];
var solutions = [];
var connections = ["g", 3];
var x  = ["You feel nervous or scared…","You have trouble falling asleep…","You feel disinterest or apathy….","You have trouble concentrating…","You feel weak or sleepy…", "You engage in dangerous behaviour…", " You have physical outbursts…","You feel unsafe or uncomfortable…","You have frequent thoughts of death or suicide...","You feel tense or irritable..."," You have unexplained headaches or stomach aches…","You have heightened activity or reactivity...","You accuse or blame others…","You cry or yell...","You sleep restlessly...","You want to rest in solitude…","You feel left out…","You are afraid of your future….","You find yourself in dangerous activities…","You feel under pressure…"];
var problems =  ["anxiety", "hopelessness", "loneliness", "regressed anger", "physical anger"];
var solutions = ["Name three things you see around you, name three sounds you hear and finally, move three parts of your body (ex: finger, tongue, toe).", "Revisit past experiences in which you won.", "Fight loneliness by cutting out negative self-talk and replacing it with positive affirming messages.", "Make every effort to focus on the positive side of the situation, and stay in the present.", "Avoid channeling feelings of distress and anger into physical outbursts. Try breathing exercises and relaxing the mind."];



function setUp() {
    
    //var listOfSymptoms = ["anxiety", "hopelessness"];
    // var slider = document.getElementById("myRange");
    // var output = document.getElementById("demo");
    // output.innerHTML = slider.value;
    //
    // slider.oninput = function() {
    //     output.innerHTML = this.value;
    // };

    solutions = findKeys(listOfSymptoms);
    var tempProblems = "";
    for (i = 0; i < listOfSymptoms.length; i++) {
        tempProblems+= listOfSymptoms[i] + ", ";
    }
   // console.log(listOfSymptoms);

    tempProblems = tempProblems.substring(0, tempProblems.length - 2);
    document.getElementById("problems").innerHTML = "You may be experiencing:";

    document.getElementById("symptoms").innerHTML = tempProblems;
    for(i = 1; i < listOfSymptoms.length + 1;i++) {
       
        document.getElementById("h" + i).innerHTML = listOfSymptoms[i - 1];
        document.getElementById("h" + i).style.visibility = "visible";
        document.getElementById("p" + i).innerHTML = solutions[i - 1];
        document.getElementById("p" + i).style.visibility = "visible";
    }
    //findValue("Depression");

}

//expecting String parameter
//returning list of type String. Strings are values of they keys passed in of the links dictionairy




function findKeys(symptoms) {
    var sol =[];
    for (i = 0; i < symptoms.length; i++) {
        for (j = 0; j < problems.length; j++) {
            if (symptoms[i] == problems[j]) {
                sol.push(solutions[i]);
            }
        }
    }
    return sol;
}





function firstGIF(){



    var randomNumber = Math.floor(Math.random() * nextGIFS.length);


    var img = document.getElementById("gif")

    img.src = "GIFSfiles/G" + nextGIFS[randomNumber].toString() + ".gif";
    previousGIFS.push(nextGIFS[randomNumber]);
    nextGIFS.splice(randomNumber, 1);



}

function previousGIF(){

    var num = previousGIFS.length - 2;
    var img = document.getElementById("gif")

    img.src = "GIFSfiles/G" + previousGIFS[num].toString() + ".gif";
    nextGIFS.push(previousGIFS[num]);
    previousGIFS.splice(num, 1);


}

function nextGIF(){
    var randomNumber = Math.floor(Math.random() * nextGIFS.length);

    var img = document.getElementById("gif")

    img.src = "GIFSfiles/G" + nextGIFS[randomNumber].toString() + ".gif";
    previousGIFS.push(nextGIFS[randomNumber]);
    nextGIFS.splice(randomNumber, 1);

}

function afterSurvey() {

    var temp = 8;
    for(i = 0; i< 5;i++){

        if(typeMoodsNum[i]>=temp){

            listOfSymptoms.push(typeMoods[i]) ;

        }

    }
    
    window.location.href = "index3.html";



}


function computeSurvey(){
    document.getElementById("go").innerHTML = "Next";
 document.getElementById("options").style.visibility = 'visible';
    if(indexOfQuestion == 18) {

        afterSurvey();

       
        // listOfSymptoms = ["anxiety", "hopelessness"]

    }else if(indexOfQuestion == 17){
        document.getElementById("go").innerHTML = "Submit";
    }


document.getElementById("h1").innerHTML = indexOfQuestion+2 + "/20"

    if(document.getElementById("radio1").checked == true){

        SurveyResponse = 4;


    }else if(document.getElementById("radio2").checked == true){

        SurveyResponse = 3;

    }else if(document.getElementById("radio3").checked == true){

        SurveyResponse = 2;

    }else if(document.getElementById("radio4").checked == true){

        SurveyResponse = 1;

    }else if(document.getElementById("radio5").checked == true){

        SurveyResponse = 0;

    }




    for(i = 0; i< 5; i++){
        if(questionTypes[indexOfQuestion-1] == typeMoods[i]){
            typeMoodsNum[i] = typeMoodsNum[i] + SurveyResponse;
        }
    }




    document.getElementsByClassName("funkyradio-default").checked = false;
    document.getElementsByClassName("funkyradio-primary").checked = false;
    document.getElementsByClassName("funkyradio-success").checked = false;
    document.getElementsByClassName("funkyradio-danger").checked = false;
    document.getElementsByClassName("funkyradio-warning").checked = false;





    indexOfQuestion++;


    document.getElementById("question").innerHTML = questions[indexOfQuestion];

    SurveyResponse = 0;





}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
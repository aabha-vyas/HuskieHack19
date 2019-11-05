//

var mentalProblems = [];
var solutions = [];
var connections = ["g", 3];
var x  = ["You feel nervous or scared…","You have trouble falling asleep…","You feel disinterest or apathy….","You have trouble concentrating…","You feel weak or sleepy…", "You engage in dangerous behaviour…", " You have physical outbursts…","You feel unsafe or uncomfortable…","You have frequent thoughts of death or suicide...","You feel tense or irritable..."," You have unexplained headaches or stomach aches…","You have heightened activity or reactivity...","You accuse or blame others…","You cry or yell...","You sleep restlessly...","You want to rest in solitude…","You feel left out…","You are afraid of your future….","You find yourself in dangerous activities…","You feel under pressure…"];
var problems =  ["anxiety", "hopelessness", "loneliness", "regressed anger", "physical anger"];
var solutions = ["Name three things you see around you, name three sounds you hear and finally, move three parts of your body (ex: finger, tongue, toe).", "Revisit past experiences in which you won.", "Fight loneliness by cutting out negative self-talk and replacing it with positive affirming messages.", "Make every effort to focus on the positive side of the situation, and stay in the present.", "Avoid channeling feelings of distress and anger into physical outbursts. Try breathing exercises and relaxing the mind."];
var listOfSymptoms = ["anxiety", "hopelessness"];

function setUp() {
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


// function findValue(key) {
//     for (i = 0; i < links.length; i++) {
//         if(links[i].key == "Depression") {
//             alert(links[i].value);
//         }
//     }
//
//
//}
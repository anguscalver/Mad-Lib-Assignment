//HTML INTERACTIONS
'use strict';
// EVENT LISTENERS 
    document.getElementById('button') .addEventListener ('click', showMadLib);

// EVENT FUNCTIONS
function showMadLib() {
    
    let word1 = document.getElementById('word1').value;
    let word2 = document.getElementById('word2').value;
    let word3 = document.getElementById('word3').value;
    let word4 = document.getElementById('word4').value;
    let word5 = document.getElementById('word5').value;
    
    let madLibMessage = "There are too many " + word1 + ' ' + word2 + ' '  + "on this " + word3 + ' '+ "boat! " + "Somebody must " + word4 + ' ' + "on the " + word5 + ' ' + "to solve this problem! " 
    document.getElementById('paragraph').innerHTML = madLibMessage;
}

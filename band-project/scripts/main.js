var adjectives = ['Enticing', 'Confusing', 'Gyrating', 'Stolen', 'Forbidden'] // array of adjectives
var nouns = ['Antelope', 'Wristwatch', 'Geranium', 'Clef', 'Moon', 'Mountain'] // array of nouns

function randomWord(array) { // this function is to avoid having to make vars with Math.random every time
    var word = array[Math.floor(Math.random() * array.length)];
    return word; // return word makes it come back with a word/variable after running the function
}

var checkBoxAdjective = document.getElementById("adj-only");
var checkBoxNouns = document.getElementById("nouns-only");

function myGenerate() {
    if (checkBoxAdjective.checked == true){
    document.getElementById("word-one").innerHTML = randomWord(adjectives);
    document.getElementById("word-two").innerHTML = randomWord(adjectives);
    } else if (checkBoxNouns.checked == true){
        document.getElementById("word-one").innerHTML = randomWord(nouns);
        document.getElementById("word-two").innerHTML = randomWord(nouns);
        }
        else {
            document.getElementById("word-one").innerHTML = randomWord(adjectives);
            document.getElementById("word-two").innerHTML = randomWord(nouns);
        }
} // this function replaces Word One and Two with random ones from the array above
// Added if and else so checkboxes can modify the results/arrays used

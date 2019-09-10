var adjectives = ['Enticing', 'Confusing', 'Gyrating', 'Stolen', 'Forbidden'] // array of adjectives
var nouns = ['Antelope', 'Wristwatch', 'Geranium', 'Clef', 'Moon', 'Mountain'] // array of nouns

function randomWord(array) {
    var word = array[Math.floor(Math.random() * array.length)];
    return word;
}

function myGenerate() {
    var rand1 = randomWord(adjectives);
    var rand2 = randomWord(nouns);
    document.getElementById("word-one").innerHTML = rand1;
    document.getElementById("word-two").innerHTML = rand2;
} // this function replaces Word One and Two with random ones from the array above

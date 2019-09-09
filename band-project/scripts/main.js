// this is the start of the file
var adjectives = ['Enticing', 'Confusing', 'Gyrating', 'Stolen', 'Forbidden'] // array of adjectives
var nouns = ['Antelope', 'Wristwatch', 'Geranium', 'Clef', 'Moon', 'Mountain'] // array of nouns

function myGenerate() {
    var rand1 = adjectives[Math.floor(Math.random() * adjectives.length)]; // this gives me a var which is a random one of var adjectives
    var rand2 = nouns[Math.floor(Math.random() * nouns.length)]; // same as above
    document.getElementById("word-one").innerHTML = rand1;
    document.getElementById("word-two").innerHTML = rand2;
} // this function replaces Word One and Two with random ones from the array above
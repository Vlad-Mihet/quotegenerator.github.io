const json = require('./quotes.json');

function getQuote() {
    randomQuote = Math.floor(Math.random() * json.length)
        /* console.log(randomQuote);
        console.log(json[randomQuote].quoteText + '\n' + json[randomQuote].quoteAuthor); */
    author = document.getElementById('author');
    quote = document.getElementById('quote');
    quote.innerText = json[randomQuote].quoteText;
    author.innerText = json[randomQuote].quoteAuthor;
}

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
    document.getElementById('quoteDiv').style.color = bgColor;
}

var button = document.getElementById('nextQuoteButton');
button.onclick = getQuote();

random_bg_color();
getQuote();
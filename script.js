import { json } from './quotes.js';

function getQuote() {
    randomQuote = Math.floor(Math.random() * json.length)
        /* console.log(randomQuote);
        console.log(json[randomQuote].quoteText + '\n' + json[randomQuote].quoteAuthor); */
    author = document.getElementById('author');
    quote = document.getElementById('quote');
    quote.innerText = json[randomQuote].quoteText;
    author.innerText = json[randomQuote].quoteAuthor;
}

function random_bg() {
    let randomBg = Math.floor(Math.random() * 7);
    document.body.style.backgroundImage = `url(./photos/photo${randomBg})`;
    document.getElementById('quoteDiv').style.color = bgColor;
}

var button = document.getElementById('nextQuoteButton');
button.addEventListener('click', getQuote);
button.addEventListener('click', random_bg);

random_bg_color();
getQuote();
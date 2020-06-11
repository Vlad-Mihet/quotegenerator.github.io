import { json } from './quotes.js';

function getQuote() {
    randomQuote = Math.floor(Math.random() * json.length)
    author = document.getElementById('author');
    quote = document.getElementById('quote');
    quote.innerText = json[randomQuote].quoteText;
    author.innerText = json[randomQuote].quoteAuthor;
}

function random_bg() {
    let randomBg = Math.floor(Math.random() * 5);
    document.body.style.backgroundImage = `url(./photos/photo${randomBg}.jpg)`;
    document.body.style.backgroundSize = "cover";
    document.body.style.opacity = '0.85';
}

var button = document.getElementById('nextQuoteButton');
button.addEventListener('click', getQuote);

random_bg();
getQuote();
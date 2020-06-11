import { json } from './quotes.js';

let randomQuote = Math.floor(Math.random() * json.length);
const author = document.getElementById('author');
const quote = document.getElementById('quote');
quote.innerText = json[randomQuote].quoteText;
author.innerText = json[randomQuote].quoteAuthor;

function getQuote() {
    randomQuote = Math.floor(Math.random() * json.length);
    quote.innerText = json[randomQuote].quoteText;
    quote.classList.add('text-focus-in');
    author.innerText = json[randomQuote].quoteAuthor;
    author.classList.add('text-focus-in');
}

function newQuote() {
    quote.classList.remove('text-focus-in'),
    author.classList.remove('text-focus-in');
    quote.classList.add('text-blur-out'),
    author.classList.add('text-blur-out');
    setTimeout(function(){
        quote.classList.remove('text-blur-out'),
        author.classList.remove('text-blur-out');
        randomQuote = Math.floor(Math.random() * json.length);
        quote.innerText = json[randomQuote].quoteText;
        quote.classList.add('text-focus-in'),
        author.classList.add('text-focus-in');
        /* quote.classList.remove('text-blur-out'),
        quote.classList.add('text-focus-in'); */
        author.innerText = json[randomQuote].quoteAuthor;
    }, 600)
}

function random_bg() {
    let randomBg = Math.floor(Math.random() * 5);
    document.body.style.backgroundImage = `url(./photos/photo${randomBg}.jpg)`;
    document.body.style.backgroundSize = "cover";
    document.body.style.opacity = '0.85';
}

var button = document.getElementById('nextQuoteButton');
button.addEventListener('click', newQuote);

random_bg();
getQuote();
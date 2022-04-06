const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const next = document.querySelector('.next');

const getQuote = () => {
    fetch('https://api.quotable.io/random')
    .then((res) => res.json())
    .then((data) => {
        quote.innerHTML = data.content;
        author.innerHTML = data.author;
    });
}

next.addEventListener('click', () => getQuote());
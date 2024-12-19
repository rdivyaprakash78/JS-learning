const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Act as if what you do makes a difference. It does. - William James",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "If you can dream it, you can achieve it. - Zig Ziglar",
  "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
];

const quoteArea = document.getElementById("quote");
let visitedIndex = new Set();

function handleClick() {
  while (true) {
    if (visitedIndex.size >= quotes.length) visitedIndex.clear();
    let randomIndex = Math.floor(Math.random() * 10);

    if (visitedIndex.has(randomIndex)) continue;

    visitedIndex.add(randomIndex);
    quoteArea.innerHTML = quotes[randomIndex];
    break;
  }
}

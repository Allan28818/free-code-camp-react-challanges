import { useState } from "react";

import "./App.css";

import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const quotesList = [
  {
    quote:
      "You have power over your mind - not outside events. Realize this, and you will find strength.",
    author: "Marcus Aurelius",
    color: "#8e44ad",
  },
  {
    quote: "We suffer more often in imagination than in reality.",
    author: "Seneca",
    color: "#27ae60",
  },
  {
    quote:
      "It's not what happens to you, but how you react to it that matters.",
    author: "Epictetus",
    color: "#d35400",
  },
  {
    quote:
      "The happiness of your life depends upon the quality of your thoughts.",
    author: "Marcus Aurelius",
    color: "#18dcff",
  },
  {
    quote: "He who is brave is free.",
    author: "Seneca",
    color: "#7d5fff",
  },
];

function getRandomQuoteIndex(quotesList) {
  const quotesAmount = quotesList.length;
  const randomIndex = Math.floor(Math.random() * quotesAmount);

  return randomIndex;
}

function App() {
  const [currentQuote, setQuote] = useState(
    quotesList[getRandomQuoteIndex(quotesList)]
  );

  function handleSetNewQuote() {
    const randomQuoteIndex = getRandomQuoteIndex(quotesList);
    const newQuote = quotesList[randomQuoteIndex];

    setQuote(newQuote);
  }

  return (
    <div
      className="wrapper"
      style={{
        background: `linear-gradient(135deg, #2c3e50, 80%, ${currentQuote.color}`,
      }}>
      <div id="quote-box">
        <div className="main-content">
          <FaQuoteLeft className="quote-left" />
          <span id="text">{currentQuote.quote}</span>
          <FaQuoteRight className="quote-right" />
          <span id="author">{currentQuote.author}</span>
        </div>
        <div className="buttons">
          <a
            id="tweet-quote"
            target="_blank"
            rel="noreferrer"
            href={
              "https://twitter.com/intent/tweet?text=" +
              encodeURI(currentQuote.quote)
            }>
            <FaTwitter className="twitter-icon" />
          </a>
          <button id="new-quote" onClick={handleSetNewQuote}>
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

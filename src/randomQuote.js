import React from 'react';
import './App.css';

const Quote = ({quote,author,random}) => {
    return (
    <div id="quote-box">
      <p id="text">{quote}</p>
      <p id="author">~{author}</p>
      <button id="new-quote" className="btn btn-secondary" onClick={random}>New Quote</button>
      <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet</a>
    </div>
  );
}

export default Quote;
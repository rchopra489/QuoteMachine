import React,{useState} from 'react';
import './App.css';
import './randomQuote';
import Quote from './randomQuote';

const quotes = require('./quotes.json');

function randomQuote(){
  let quote = quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)].quote;
  let author = quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)].author;
  return[quote,author];
}

const App = () => {

  let [quote,author] = randomQuote();

  const [quotes, setQuotes] = useState(quote);
  const [authors, setAuthors] = useState(author);

  function newQuote(){
    setQuotes(
      randomQuote()[0]
    );
    setAuthors(
      randomQuote()[1]
    );
  }
  
  return (
    <Quote quote={quote} author={author} random={newQuote}/>
  );
  }

export default App;

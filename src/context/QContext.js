import React, { useState } from 'react'
import Quotes from "../Quotes.json"

const QContext = React.createContext(null)

function QProvider(props) {
  // ? Array, contents all the Quotes to use
  const quotesList = Quotes.quotes
  const [quoteId, setQuoteId] = useState(randQuoteid)
  const [colourTheme, setColourTheme] = useState(randColour);

  // ? Randomize a number to be used as an ColourValue
  function randColour() {
    var letters = '0123456789ABCDEF'.split('');
    var colour = '#';
    for (var i = 0; i < 6; i++) {
      colour += letters[Math.floor(Math.random() * 15)];
    }
    return colour;
  }
  // ? Randomize a number to be used as an Quote ID
  function randQuoteid() {
    return (Math.floor(Math.random() * 101))
  }
  // ? Share any Quote in Twitter Page
  function shareInTwitter(text) {
    return (
      window.open(`https://twitter.com/intent/tweet?text=${quotesList[quoteId].quote} : ${quotesList[quoteId].author}`)
    )
  }
  // Randomize the Quote, then gets the new colourTheme
  const randQuote = () => {
    setQuoteId(randQuoteid)
    setColourTheme(randColour)
  };
  // console.log(colourTheme)
  // console.log(quoteId)
  return (
    <QContext.Provider value={{
      colourTheme,
      setColourTheme,
      quoteId,
      setQuoteId,
      randQuote,
      quotesList,
      shareInTwitter,
    }}>
      {props.children}
    </QContext.Provider>
  );
}

export { QContext, QProvider }
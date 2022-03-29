import React, { useContext } from 'react'
import { QContext } from '../context/QContext';

const Quote = () => {
  const {
    quoteId,
    quotesList
  } = useContext(QContext)

  return (
    <div>
      <h4 className="quote"> {quotesList[quoteId].quote} </h4>
      <h5 className="author">
        {quotesList[quoteId].author}
      </h5>
    </div>
  )
}

export { Quote }
import React, { useContext } from 'react'
import { Icon } from './Icon'
import { Quote } from './Quote'
import { Footer } from './Footer'
import { QContext } from '../context/QContext'
const QuoteBox = () => {
  const {
    randQuote
  } = useContext(QContext)

  return (
    <div className="container">
      <Icon></Icon>
      <Quote></Quote>
      <Footer
        onQuoteChange={() => randQuote}></Footer>
    </div>
  )
}

export { QuoteBox }
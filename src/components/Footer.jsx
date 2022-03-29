import React, { useContext } from 'react'
import { QContext } from '../context/QContext';
import { Button } from './Button'

const Footer = () => {
  const {
    shareInTwitter,
    randQuote,
  } = useContext(QContext)

  return (
    <div className="footer">
      <div>
        <Button text="Next quote" icon="" onClickButton={randQuote} type="QuoteChange"></Button>
      </div>
      <div>
        <Button icon="FiTwitter" onClickButton={shareInTwitter} type="Twitter"></Button>
      </div>
    </div >
  )
}

export { Footer }
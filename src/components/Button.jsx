import React, { useContext } from 'react'
import { QContext } from '../context/QContext';
import { FiTwitter } from "react-icons/fi";
import { FiSkipForward } from "react-icons/fi";


const Button = (props) => {
  const {
    colourTheme
  } = useContext(QContext)

  return (
    <button
      onClick={props.onClickButton}
      style={{ backgroundColor: colourTheme }}
    >
      {props.text} {props.icon ? <FiTwitter /> : <FiSkipForward />}
    </button>
  )
}

export { Button }
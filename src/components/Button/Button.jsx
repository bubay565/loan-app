import React from 'react'
import styles from './Button.module.css'

export default function Button (props) {
  const {
    onClick = () => console.log('You clicked me! Now what???'),
    cta = "invest",
    type = "button"
  } = props

  return (
    <button
      onClick={onClick}
      name="investBtn"
      className={styles.buttonStyles}
      type={type}
      id="button"
    >
      {cta}
    </button>
  )
}

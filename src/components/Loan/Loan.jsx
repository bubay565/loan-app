import React from 'react'
import Button from '../Button/Button'
import styles from './Loan.module.css'

export default function Loan (props) {
  const {
    loan : {
      id,
      title,
      amount,
      annualised_return,
      available,
      ltv,
      term_remaining,
      invested = false
    }, onInvest } = props

  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
      <div className={styles.child}>
        <div>
          <div>Available to invest: £{new Intl.NumberFormat().format(Number(available.replace(/,/g, "")))}</div>
          <div>Life-time value: {ltv}</div>
          <div>Annual return: {annualised_return}%</div>
        </div>
        <div>
          {invested && <div>invested</div>}
          <Button onClick={(e) => onInvest(id)} />
        </div>
      </div>
    </div>
  )
}

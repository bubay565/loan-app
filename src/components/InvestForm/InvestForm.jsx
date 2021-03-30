import { useState } from 'react'
import Button from '../Button/Button'
import styles from './InvestForm.module.css'

export default function InvestForm({
  id,
  available,
  onSubmitHandler
}) {
  const [ amount, setAmount ] = useState('')
  const [ errMessage, setErrMessage ] = useState('')

  const isValidAmount = () => {
    if (amount.match(/^[0-9]+$/)) {
      if(amount <= Number(available.replace(/,/g, ""))) {
        setErrMessage('')
        return true
      }
      setErrMessage('Amount entered is greater than available')
      return false
    }
    setErrMessage('Enter a valid numeric amount')
    return false
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    isValidAmount() && onSubmitHandler(id, amount)
  }

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit} data-testid="investForm">
        <div className={styles.inputWrapper}>
          <label htmlFor="investAmt">
            Investment amount (£)
            <abbr title="This field is mandatory" aria-label="required" className={styles.errorMessage}>*</abbr>
          </label>
          {errMessage && <div className={styles.errorMessage}>{errMessage}</div>}
          <input
            id="investAmt"
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            onBlur={isValidAmount}
            className={`${styles.formInput} ${errMessage && styles.inputError}`}
            placeholder="Enter investment amount"
            dir="rtl"
          />
        </div>
        <Button onClick={handleSubmit} type="submit"/>
      </form>
    </div>
  )
}

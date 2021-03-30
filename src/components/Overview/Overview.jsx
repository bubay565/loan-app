import React, { useState } from 'react'
import Loan from '../Loan/Loan'
import Popup from '../Popup/Popup'
import styles from './Overview.module.css'
import currentLoans from '../../current-loans.json'

function getTotalAvailable (loans) {
  let total = 0;
  loans?.map(loan => (
    total += Number(loan?.available.replace(/,/g, ""))
  ))
  return total;
}

function updateAvailableToInvest (loans, id, amount = 1000) {
  const updatedLoans = loans.map(loan => {
    if(loan.id === id) {
      loan.available = (Number(loan?.available.replace(/,/g, "")) - amount).toString()
      loan.invested = true
    }
    return loan
  })
  return updatedLoans
}

export default function Overview() {
  const { loans } = currentLoans
  const [loanData, setLoanData] = useState(loans)
  const [totalAvailable, setTotalAvailable] = useState(getTotalAvailable(loanData))
  const [popupId, setPopupId] = useState('')

  const openPopup = (id) => setPopupId(id)

  const closePopup = () => setPopupId('')

  const onInvestHandler = (id, amount) => {
    setPopupId('')
    setLoanData(updateAvailableToInvest(loanData, id, amount))
    setTotalAvailable(getTotalAvailable(loanData))
  }

  return (
    <>
      <div id="blur" className={`${styles.wrapper} ${popupId ? styles.popupOpen : ''}`}>
        <h1>Current Loans</h1>
        {loanData.map((loan, index) => (
          <Loan
            key={index}
            loan={loan}
            onInvest={openPopup}
          />
        ))}
        <div className={styles.total}>Total amount available for investments: <strong>£{new Intl.NumberFormat().format(Number(totalAvailable))}</strong></div>
      </div>
      { popupId &&
        <Popup
          onSubmitHandler={onInvestHandler}
          onClose={closePopup}
          loan={loanData.filter(loan => loan.id === popupId)}
        />
      }
    </>
  )
}

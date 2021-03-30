import InvestForm from '../InvestForm/InvestForm'
import styles from './Popup.module.css'

function formatDate(secs) {
  if(isNaN(secs)) return
  secs = Number(secs);
  return Math.floor(secs / (24*60*60))
}

export default function Popup({
  loan,
  onClose,
  onSubmitHandler
}) {
  const {
    id,
    title,
    available,
    term_remaining
  } = loan[0]
  return (
    <div id={styles.popup}>
      <div>
        <button className={styles.linkBtn} onClick={onClose}>Close</button>
      </div>
      <div>
        <div><h2>Invest in loan: {title}</h2></div>
        <div>Amount available: <strong>£{available}</strong></div>
        <div>Loan ends in: <strong>{formatDate(term_remaining)} days</strong></div>
      </div>
      <InvestForm id={id} available={available} onSubmitHandler={onSubmitHandler}/>
    </div>
  )
}

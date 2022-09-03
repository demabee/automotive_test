import styles from './Card.module.css';
import { FiChevronRight } from 'react-icons/fi';

const Card = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <div className={styles.badge}>
          <small className={styles.badge_text}>{props.status}</small>
        </div>
        <img
          src={props.image} 
          className={styles.image}
          alt={props.altImage}
          />
      </div>
      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.address}>{props.address}</p>
      <div className={styles.progress_bar}>
        <div className={styles.progress_bar_background}>
          <div className={styles.progress_bar_result} style={{ width: `${props.progress}%` }}></div>
        </div>
        {/* <progress id="file" value={props.progress} max="100">
          {props.progress}
        </progress> */}
        <div className={styles.progressbar_text_container}>
          <p className={styles.progress_text}>Progress:</p>
          <p className={styles.progress_text}>{props.progress}/100</p>
        </div>
      </div>
      <div className={styles.payout_container}>
        <div className={styles.payout_left}>
          <div className={styles.payout_title_container}>
            <h3 className={styles.payout_title}>Projected IRR</h3>
            <div className={styles.information}>!</div>
          </div>
          <h1 className={styles.payout_text}>{props.projected_irr}</h1>
        </div>
        <div className={styles.payout_right}>
          <div className={styles.payout_title_container}>
            <h3 className={styles.payout_title}>Cash Payout</h3>
            <div className={styles.information}>!</div>
          </div>
          <h1 className={styles.payout_text}>{props.cash_payout}</h1>
        </div>
      </div>
      <div className={styles.button_container}>
        <button className={styles.button_primary}>PURCHASE</button>
        <button className={styles.button_secondary}>
          View Details
          <FiChevronRight className={styles.icon} size={30} />
        </button>
      </div>
    </div>
  );
};

export default Card;
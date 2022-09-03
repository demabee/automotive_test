import Card from '../../components/Card/Card';
import styles from './Marketplace.module.css';
import HouseImage from '../../assets/images/house.png';
import { FiFilter } from 'react-icons/fi';
import { MARKETPLACE_ITEMS } from '../../helpers/mockup-data';

const MarketPlace = () => {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Marketplace</h1>
        <div className={styles.button_container}>
          <button className={styles.button_secondary}>
            <FiFilter className={styles.icon} color="#81eef3" size={15} />
            Filter
          </button>
        </div>
      </div>
      <div className={styles.card_container}>
        {MARKETPLACE_ITEMS.map((data, index) => {
          return (<Card
            title={data.title}
            address={data.address}
            status={data.status}
            image={data.image} 
            progress={data.progress}
            projected_irr={data.projected_irr}
            cash_payout={data.cash_payout}
          />)
        })
        }
      </div>
    </>
  );
};

export default MarketPlace;
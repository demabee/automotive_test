import Card from '../../components/Card/Card';
import styles from './Marketplace.module.css';
import HouseImage from '../../assets/images/house.png';
import { FiFilter } from 'react-icons/fi';

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
        <Card
          title="Project #0"
          address="San Francisco, CA"
          status="Available"
          image={HouseImage} 
          progress="60"
          projected_irr="18.6%"
          cash_payout="6.44%" />
        <Card
          title="Project #1"
          address="San Jose, CA"
          status="Sold"
          image={HouseImage} 
          progress="90"
          projected_irr="18.6%"
          cash_payout="6.44%" />
      </div>
    </>
  );
};

export default MarketPlace;
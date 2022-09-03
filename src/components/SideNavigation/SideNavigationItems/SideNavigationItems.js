import { AiFillHome } from 'react-icons/ai';
import House from '../../Icons/House/House';
import styles from './SideNavigationItems.module.css';
const SideNavigationItems = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`${styles.container} ${props.isActive ? styles.active : ''}`}>
        {props.isActive ?
          <div className={styles.svg_container}>
            <House width={30} height={30} fill="currentColor" color="#81eef3" />
          </div>
          :
          <AiFillHome className={styles.icon} color={props.isActive ? "#81eef3" : "#081f5c"} size={20} />
        }
      <p className={props.isActive ? styles.text : styles.text_gray}>{props.text}</p>
    </div>
  );
};

export default SideNavigationItems;
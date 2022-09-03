import { useNavigate, useLocation } from 'react-router-dom';
import styles from './SideNavigation.module.css';
import SideNavigationItems from './SideNavigationItems/SideNavigationItems';

const SideNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onNavigate = (text) => {
    switch (text) {
      case 'Home':
        navigate('/');
        break;
      case 'Marketplace':
        navigate('/marketplace');
        break;
      default:
        navigate('/');
    };
  };

  return (
    <>
      <div className={styles.container}>
        <SideNavigationItems text="Home" onClick={() => onNavigate('Home')} isActive={location.pathname === "/"} />
        <SideNavigationItems text="Marketplace" onClick={() => onNavigate('Marketplace')} isActive={location.pathname === "/marketplace"} />
      </div>
    </>
  );
};

export default SideNavigation;
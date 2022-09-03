import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <h1 className={styles.title}>Home</h1>
      <h3 className={styles.text}>Welcome to our marketplace!</h3>
      <p className={styles.text}>We are glad that you are here.</p>
    </>
  );
};

export default Home;
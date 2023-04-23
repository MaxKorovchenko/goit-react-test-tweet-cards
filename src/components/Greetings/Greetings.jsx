import styles from './Greetings.module.css';

export const Greetings = () => {
  return (
    <section>
      <h1 className={styles.mainTitle}>Welcome to the Tweet-Cards App</h1>
      <h2 className={styles.title}>Good Evening!</h2>
      <h2 className={styles.title}>We are from Ukraine!</h2>
    </section>
  );
};

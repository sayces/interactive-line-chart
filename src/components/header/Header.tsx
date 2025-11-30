import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>A/B/C тест: динамика конверсии в январе 2025</h1>
      <p className={styles.description}>
        Конверсия = количество конверсий / визитов × 100%. Пропуски в данных =
        вариация отключена в этот день.
      </p>
    </header>
  );
};

export default Header;

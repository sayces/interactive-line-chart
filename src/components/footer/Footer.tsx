import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Победитель теста —{" "}
        <strong style={{ color: "#8b5cf6" }}>Variation C</strong> (в пике до
        ~35–40% конверсии против 8–12% у Original)
      </p>
    </footer>
  );
};

export default Footer;

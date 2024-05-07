import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/assets/logo.png" alt="logo" />
        <span>PhotoFolio</span>
      </div>
    </div>
  );
}

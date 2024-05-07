import styles from "./carousel.module.css";

export default function Carousel() {
  return (
    <div className={styles.carousel}>
      <button>x</button>
      <button>{"<"}</button>
      <img src="" alt="title" />
      <button>{">"}</button>
    </div>
  );
}

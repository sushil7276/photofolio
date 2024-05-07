import styles from "./albumsList.module.css";
import AlbumForm from "../albumForm/AlbumForm";

export default function AlbumList() {
  return (
    <>
      <AlbumForm />
      <div>
        <div className={styles.top}>
          <h3>Your album</h3>
          <button className={styles.active}>Add album</button>
        </div>
        <div className={styles.albumList}>
          <div className={styles.album}>
            <img src="/assets/photos.png" alt="images" />
            <span>Album Name</span>
          </div>
        </div>
      </div>
    </>
  );
}

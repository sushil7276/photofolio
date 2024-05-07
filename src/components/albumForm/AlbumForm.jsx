import styles from "./albumForm.module.css";
import { useRef } from "react";

export default function AlbumForm() {
  const albumNameInput = useRef();
  return (
    <div className={styles.albumForm}>
      <span>Create an Album</span>
      <form>
        <input required placeholder="Album Name" ref={albumNameInput} />
        <button type="button">Clear</button>
        <button>Create</button>
      </form>
    </div>
  );
}

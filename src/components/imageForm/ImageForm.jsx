import { useRef } from "react";
import styles from "./imageForm.module.css";

export default function ImageForm() {
  const imageTitleInput = useRef();
  const imageUrlInput = useRef();

  return (
    <div className={styles.imageForm}>
      <span>Image Name</span>
      <form>
        <input required placeholder="Title" ref={imageTitleInput} />
        <input required placeholder="Image URL" ref={imageUrlInput} />
        <div className={styles.action}>
          <button type="button">Clear</button>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}

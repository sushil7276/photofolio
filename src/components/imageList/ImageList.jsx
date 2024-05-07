import styles from "./imageList.module.css";
import ImageForm from "../imageForm/ImageForm";

export default function ImageList() {
  return (
    <>
      {/* <ImageForm /> */}

      {/* Image List Top side */}
      <div className={styles.top}>
        {/* back Button */}
        <span>
          <img src="/assets/back.png" alt="back" />
        </span>
        <h3>Image in {"Album Name"}</h3>
        {/* Search Button */}
        <div className={styles.search}>
          <input placeholder="Search..." autoFocus={true} />
          <img src="/assets/search.png" alt="clear" />
        </div>
        {/* Add Button OR Cancel Button*/}
        <button className={styles.active}>Cancel</button>
        <button className={styles.active}>Add image</button>
      </div>
      {/* End Image List Top side */}

      <div className={styles.imageList}>
        <div className={styles.image}>
          {/* Update Button */}
          <div className={styles.update}>
            <img src="/assets/edit.png" alt="update" />
          </div>

          {/* Delete Button */}
          <div className={styles.delete}>
            <img src="/assets/trash-bin.png" alt="delete" />
          </div>
          <img src="/assets/warning.png" alt="Images Url" />
          <span>Image Title</span>
        </div>
      </div>
    </>
  );
}

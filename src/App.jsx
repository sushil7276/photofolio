// css module import
import styles from "./App.module.css";

// Components Import
import NavBar from "./components/navbar/NavBar";
// import AlbumList from "./components/albumList/AlbumList";

// Fire Data Base import
// import { addDoc, collection, onSnapshot, doc } from "firebase/firestore";
// import { db } from "./FireBaseStore";

// React Toasts
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageList from "./components/imageList/ImageList";

function App() {
  return (
    <div className={styles.App}>
      <ToastContainer />
      <NavBar />

      <div className={styles.content}>
        {/* <AlbumList /> */}
        <ImageList />
      </div>
    </div>
  );
}

export default App;

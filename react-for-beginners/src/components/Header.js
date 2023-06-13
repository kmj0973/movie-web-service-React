import { useState } from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
function Header() {
  function onClickMenu() {
    setMenu((menu) => !menu);

    console.log(menu);
  }
  const [menu, setMenu] = useState(false);
  return (
    <nav className={styles.header}>
      <div className={styles.header__title}>
        <div>NETFLIX</div>
      </div>

      <ul className={`${styles.header__options} ${menu ? styles.flex : ""}`}>
        <li>
          <a href="#">Romance</a>
        </li>
        <li>
          <a href="#">Thriller</a>
        </li>
        <li>
          <a href="#">Action</a>
        </li>
      </ul>

      <ul className={`${styles.header__about_us} ${menu ? styles.flex : ""}`}>
        <li>
          <FontAwesomeIcon icon={faTwitter} />
        </li>
        <li>
          <FontAwesomeIcon icon={faInstagram} />
        </li>
      </ul>

      <a href="#" className={styles.header__menu} onClick={onClickMenu}>
        <FontAwesomeIcon icon={faBars} />
      </a>
    </nav>
  );
}

export default Header;

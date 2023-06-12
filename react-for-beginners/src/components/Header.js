import { useState } from "react";
import styles from "./Header.module.css";

function Header() {
  function onClickMenu() {
    setMenu((menu) => !menu);

    console.log(menu);
  }
  const [menu, setMenu] = useState(true);
  return (
    <header class={styles.header}>
      <div class={styles.header__title}>
        <div>NETFLIX</div>
      </div>
      {menu ? (
        ""
      ) : (
        <div class={styles.header__options}>
          <div>Romance</div>
          <div>Thriller</div>
          <div>Action</div>
        </div>
      )}
      {menu ? (
        ""
      ) : (
        <div class={styles.header__about_us}>
          <div>twitter</div>
          <div>instagram</div>
        </div>
      )}
      <div class={styles.header__menu} onClick={onClickMenu}>
        menu
      </div>
    </header>
  );
}

export default Header;

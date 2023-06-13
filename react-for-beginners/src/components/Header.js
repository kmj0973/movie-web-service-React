import { useState } from 'react';
import styles from './Header.module.css';

function Header() {
    function onClickMenu() {
        setMenu((menu) => !menu);

        console.log(menu);
    }
    const [menu, setMenu] = useState(false);
    return (
        <header className={styles.header}>
            <div className={styles.header__title}>
                <div>NETFLIX</div>
            </div>

            <ul className={menu ? styles.header__options : styles.none}>
                <li>
                    <a href="">Romance</a>
                </li>
                <li>
                    <a href="">Thriller</a>
                </li>
                <li>
                    <a href="">Action</a>
                </li>
            </ul>
            <ul className={menu ? styles.header__about_us : styles.none}>
                <li>twitter</li>
                <li>instagram</li>
            </ul>
            {/* {menu ? (
        ""
      ) : (
        <div className={(styles.header__about_us, styles.none)}>
          <div>twitter</div>
          <div>instagram</div>
        </div>
      )} */}
            <a href="#" className={styles.header__menu} onClick={onClickMenu}>
                menu
            </a>
        </header>
    );
}

export default Header;

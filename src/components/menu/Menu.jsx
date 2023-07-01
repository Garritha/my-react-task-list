import React from "react";
import { Link } from "react-router-dom";
import styles from "../menu/Menu.module.css"; 
function Menu() {
  return (
    <nav className={styles.nav}> 
      <ul>
        <li>
          <Link to="/" className={styles.a}>Home</Link> 
        </li>
        <li>
          <Link to="/about" className={styles.a}>About</Link> 
        </li>
        <li>
          <Link to="/tasks" className={styles.a}>List Tasks</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;

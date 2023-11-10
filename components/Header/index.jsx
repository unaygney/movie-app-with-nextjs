import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import Link from "next/link";
import styles from "./styles.module.css";

function index() {
  return (
    <header className={`${styles.header} custom-container fluid`}>
      <div className={styles.headerWrapper}>
        <Link className={styles.logo} href="/">
          <FaPlayCircle />
          NETFLIMS
        </Link>

        <nav className={styles.navigationMenu}>
          <Link href="#">Movies</Link>
          <Link href="#">Series</Link>
          <Link href="#">Kids</Link>
        </nav>
      </div>
    </header>
  );
}

export default index;

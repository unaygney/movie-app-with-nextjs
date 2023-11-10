import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://twitter.com/_mehmetpekcan" target="_blank">
        Güney Unay
      </Link>
    </footer>
  );
}

export default Footer;

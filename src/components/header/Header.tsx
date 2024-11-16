import React from "react";
import styles from "./header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <h2>Frontend</h2>
      <NavLink to={"/"}>Lessons</NavLink>
    </header>
  );
}

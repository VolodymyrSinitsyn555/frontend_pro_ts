import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import styles from './layout.module.css'


export default function Layout() {
  return (
    <>
      <Header />
      <main className={styles.mane}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

import styles from "./Sidebar.module.css";
import Logo from "../components/Logo";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}></footer>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
      </p>
    </div>
  );
};

export default Sidebar;

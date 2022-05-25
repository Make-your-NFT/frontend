import Footer from "./footer/footer";
import Header from "./header/header";
import styles from "components/layout.module.css";

interface layoutProps {
  children: React.ReactNode;
}
const Layout = (props: layoutProps) => {
  return (
    <div style={{ height: "100%" }}>
      <Header />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

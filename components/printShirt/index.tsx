import Layout from "@components/layout";
import styles from "components/printShirt/index.module.css";
import BuyShirt from "./buyShirt";
import ShirtModeling from "./shirtModeling";

const Index = () => {
  return (
    <Layout>
      <div className={styles.layout}>
        <ShirtModeling />
        <BuyShirt />
      </div>
    </Layout>
  );
};

export default Index;

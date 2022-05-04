import Layout from "@components/layout";
import styles from "components/explore/index.module.css";
import Filter from "./filter";

const Index = () => {
  return (
    <Layout>
      <div className={styles.layout}>
        <Filter />
      </div>
    </Layout>
  );
};

export default Index;

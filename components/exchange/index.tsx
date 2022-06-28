import Layout from "@components/layout";
import styles from "components/exchange/index.module.css";
import Chart from "./chart";
import Title from "./title";
import TransactionDetails from "./transactionDetails";

const Index = () => {
  return (
    <Layout>
      <div className={styles.flexLayout}>
        <div className={styles.infoLayout}>
          <Title />
          <Chart />
          <TransactionDetails />
        </div>
      </div>
    </Layout>
  );
};

export default Index;

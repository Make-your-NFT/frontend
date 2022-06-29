import Layout from "@components/layout";
import styles from "components/exchange/index.module.css";
import Chart from "./chart";
import GameList from "./gameList";
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
        <div className={styles.infoLayout}>
          <GameList />
        </div>
      </div>
    </Layout>
  );
};

export default Index;

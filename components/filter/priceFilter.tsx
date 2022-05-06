import styles from "components/filter/priceFilter.module.css";

const PriceFilter = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.priceLayout}>
        <div className={styles.priceInputDiv}>
          <input className={styles.priceInput} placeholder="최소 가격" />
        </div>
        <span
          style={{
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          ~
        </span>
        <div className={styles.priceInputDiv}>
          <input className={styles.priceInput} placeholder="최대 가격" />
        </div>
      </div>
      <button className={styles.applyButton}>적용</button>
    </div>
  );
};

export default PriceFilter;

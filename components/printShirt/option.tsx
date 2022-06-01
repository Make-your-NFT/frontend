import styles from "components/printShirt/option.module.css";

const Option = () => {
  return (
    <div className={styles.layout}>
      <span className={styles.title}>옷 옵션 설정</span>
      <div className={styles.optionLayout}>
        <div className={styles.optionBarLayout}>
          <div className={styles.optionFlexLayout} style={{ gap: "5vw" }}>
            <div className={styles.optionFlexLayout}>
              <span className={styles.optionText}>형태</span>
              <form className={styles.optionFlexLayout}>
                <label className={styles.optionLabel}>
                  <input
                    className={styles.radioOption}
                    type="radio"
                    name="shirtType"
                    id="long"
                    value="long"
                    defaultChecked
                  />
                  긴팔
                </label>

                <label className={styles.optionLabel}>
                  <input
                    className={styles.radioOption}
                    type="radio"
                    name="shirtType"
                    id="short"
                    value="short"
                  />
                  반팔
                </label>
              </form>
            </div>
            <div className={styles.optionFlexLayout}>
              <span className={styles.optionText}>사이즈</span>
              <form className={styles.optionFlexLayout}>
                <label className={styles.optionLabel}>
                  <input
                    className={styles.radioOption}
                    type="radio"
                    name="shirtSize"
                    id="long"
                    value="long"
                  />
                  S
                </label>

                <label className={styles.optionLabel}>
                  <input
                    className={styles.radioOption}
                    type="radio"
                    name="shirtSize"
                    id="short"
                    value="short"
                  />
                  M
                </label>
                <label className={styles.optionLabel}>
                  <input
                    className={styles.radioOption}
                    type="radio"
                    name="shirtSize"
                    id="short"
                    value="short"
                    defaultChecked
                  />
                  L
                </label>
                <label className={styles.optionLabel}>
                  <input
                    className={styles.radioOption}
                    type="radio"
                    name="shirtSize"
                    id="short"
                    value="short"
                  />
                  XL
                </label>
                <label className={styles.optionLabel}>
                  <input
                    className={styles.radioOption}
                    type="radio"
                    name="shirtSize"
                    id="short"
                    value="short"
                  />
                  XXL
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
      <span className={styles.title}>NFT 옵션 설정</span>
      <div className={styles.optionBarLayout}>
        <div className={styles.optionFlexLayout} style={{ gap: "5vw" }}>
          <span className={styles.optionTitle}>사이즈</span>
          <form className={styles.optionFlexLayout}>
            <input
              className={styles.sizeBar}
              type="range"
              id="sizeBar"
              name="sizeBar"
            />
            <input type="number" id="sizePercentage" min="0" max="100" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Option;

import styles from "components/printShirt/option.module.css";
import { ChangeEvent, useEffect, useRef, useState } from "react";

const Option = () => {
  // const [size, setSize] = useState<number | null>(null);
  const sizeInputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   sizeInputRef.current!.value = "100";
  // }, []);

  // const handleSize = (e: ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   // setSize(Number(e.target.value) * 2);
  //   sizeInputRef.current!.value = `${Number(e.target.value) * 2}`;
  // };

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
      <div className={styles.optionBarLayout}>
        <div className={styles.optionFlexLayout} style={{ gap: "5vw" }}>
          <span className={styles.optionTitle}>위치</span>
          <div className={styles.optionFlexLayout}>
            <button className={styles.positionButton}>전면 전체</button>
            <button className={styles.positionButton}>앞쪽</button>
            <button className={styles.positionButton}>앞쪽</button>
            <button className={styles.positionButton}>앞쪽</button>
            <button className={styles.positionButton}>앞쪽</button>
            <button className={styles.positionButton}>앞쪽</button>
          </div>
          {/* <form className={styles.optionFlexLayout}>
            <input
              className={styles.sizeBar}
              type="range"
              id="sizeBar"  
              name="sizeBar"
              onChange={handleSize}
              defaultValue="50"
            />
            <input
              ref={sizeInputRef}
              type="number"
              id="sizePercentage"
              min="1"
              max="200"
              onChange={handleSize}
            />
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default Option;

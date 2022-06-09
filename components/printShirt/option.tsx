import styles from "components/printShirt/option.module.css";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { optionState, optionTypes } from "recoil/option";
import { MouseEvent } from "react";

const Option = () => {
  const [shirtSize, setShirtSize] = useState<string | null>(null);
  const [shirtShape, setShirtShape] = useState<string | null>(null);
  const [NFTSize, setNFTSize] = useState<number | null>(null);
  const [position, setPosition] = useState<number | null>(null);
  const sizeInputRef = useRef<HTMLInputElement>(null);
  const [option, setOption] = useRecoilState<optionTypes>(optionState);

  useEffect(() => {
    sizeInputRef.current!.value = "100";
  }, []);

  const handleNFTSize = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    sizeInputRef.current!.value = `${Number(e.target.value) * 2}`;
    setOption({
      ...option,
      NFTSize: Number(e.target.value) * 2,
    });
  };

  const handleshirtSize = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setOption({
      ...option,
      shirtSize: e.target.value,
    });
  };

  const handleshirtShape = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setOption({
      ...option,
      shirtShape: e.target.value,
    });
  };

  const handlePosition = (e: MouseEvent<HTMLButtonElement>) => {
    setOption({
      ...option,
      position: e.currentTarget.innerText,
    });
  };

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
            <button onClick={handlePosition} className={styles.positionButton}>
              전면 전체
            </button>
            <button onClick={handlePosition} className={styles.positionButton}>
              전면 왼쪽 가슴
            </button>
            <button onClick={handlePosition} className={styles.positionButton}>
              전면 오른쪽 가슴
            </button>
            <button onClick={handlePosition} className={styles.positionButton}>
              후면 전체
            </button>
            <button onClick={handlePosition} className={styles.positionButton}>
              후면 목 아래
            </button>
          </div>
        </div>
      </div>
      <div className={styles.optionBarSpaceLayout}>
        <form className={styles.optionFlexLayout}>
          <span className={styles.optionTitle}>NFT크기</span>

          <input
            className={styles.sizeBar}
            type="range"
            id="sizeBar"
            name="sizeBar"
            onChange={handleNFTSize}
            defaultValue="50"
          />
          <input
            ref={sizeInputRef}
            type="number"
            id="sizePercentage"
            min="1"
            max="200"
            onChange={handleNFTSize}
          />
        </form>
      </div>
    </div>
  );
};

export default Option;

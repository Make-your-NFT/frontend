import styles from "components/filter/filterBox.module.css";
import { useState } from "react";
import PriceFilter from "./priceFilter";
interface filterBoxProps {
  name: string;
}

const FilterBox = (props: filterBoxProps) => {
  const [detail, setDetail] = useState(false);

  const handleDetail = () => {
    detail ? setDetail(false) : setDetail(true);
  };

  return (
    <div >
      <div className={styles.layout} onClick={handleDetail}>
        <span className={styles.name}>{props.name}</span>
      </div>
      {detail ? <PriceFilter /> : null}
    </div>
  );
};

export default FilterBox;

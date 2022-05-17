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
    <div onClick={handleDetail}>
      <div className={styles.layout}>
        <span className={styles.name}>{props.name}</span>
      </div>
      {detail ? <PriceFilter /> : null}
    </div>
  );
};

export default FilterBox;

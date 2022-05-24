import styles from "components/filter/filterBox.module.css";
import { ReactNode, useState } from "react";
import BrandFilter from "./brandFilter";
import PriceFilter from "./priceFilter";
interface filterBoxProps {
  name: string;
  children: ReactNode;
}

const FilterBox = (props: filterBoxProps) => {
  const [detail, setDetail] = useState(false);
  const filterList = {
    price: <PriceFilter />,
    brand: <BrandFilter />,
  };
  const handleDetail = () => {
    detail ? setDetail(false) : setDetail(true);
  };

  return (
    <div>
      <div className={styles.layout} onClick={handleDetail}>
        <span className={styles.name}>{props.name}</span>
      </div>
      {detail ? props.children : null}
    </div>
  );
};

export default FilterBox;

import styles from "components/filter/filter.module.css";
import filterBoxStyles from "components/filter/filterBox.module.css";
import FilterBox from "./filterBox";
import { MdFilterAlt } from "react-icons/md";

const Filter = () => {
  return (
    <div className={styles.layout}>
      <div className={filterBoxStyles.layout}>
        <MdFilterAlt style={{ marginLeft: "20px" }} size={25} />
        <span className={filterBoxStyles.name}>Filter</span>
      </div>
      <FilterBox name="가격1" />
      <FilterBox name="가격2" />
      <FilterBox name="가격3" />
      <FilterBox name="가격4" />
    </div>
  );
};

export default Filter;

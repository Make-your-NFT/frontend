import styles from "components/profile/menu.module.css";

interface menuProps {
  tag: string;
}
const Menu = (props: menuProps) => {
  return (
    <div className={styles.layout}>
      <div>{props.tag}</div>
    </div>
  );
};

export default Menu;

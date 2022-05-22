import styles from "components/profile/menu.module.css";

interface menuProps {
  tag: string;
  children: JSX.Element;
}
const Menu = (props: menuProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.menuLayout}>
        {props.children}
        <div className={styles.menuName}>{props.tag}</div>
      </div>
    </div>
  );
};

export default Menu;

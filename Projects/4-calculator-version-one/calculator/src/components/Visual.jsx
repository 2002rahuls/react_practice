import styles from "./Visual.module.css";
const Visual = ({ displayValue }) => {
  return (
    <input
      className={styles.display}
      type="text"
      value={displayValue}
      readOnly
    />
  );
};
export default Visual;

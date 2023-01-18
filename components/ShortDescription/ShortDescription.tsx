import Button from "../Button/Button";
import styles from "./shortDescription.module.scss";

const ShortDescription = () => {
  return (
    <section className={styles.root}>
      <h1 className={styles.firstWordHeader}>Front-End</h1>
      <h1 className={styles.secondWordHeader}>Developer</h1>
      <h3 className={styles.thirdWordHeader}>Courses</h3>
      <div className={styles.description}>
        Make UIs and websites beautiful, functional, and fast. Cover all the
        topics that expensive bootcamps teach (and more).
      </div>
      <div className={styles.action}>
        <Button>Start my career change</Button>
      </div>
    </section>
  );
};

export default ShortDescription;

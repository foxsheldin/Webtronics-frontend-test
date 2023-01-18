import styles from "./aboutCompany.module.scss";

const AboutCompany = () => {
  return (
    <section className={styles.root}>
      <h2>About Us</h2>
      <div className={styles.content}>
        <div className={styles.content__mentor}>
          <h3>Mentors</h3>
        </div>
        <div className={styles.content__description}>
          Front-end engineers work closely with designers to make websites
          beautiful, functional, and fast. This Career Path will teach you not
          only the necessary languages and technologies, but how to think like a
          front-end engineer, too.
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;

import Technology from "../Technology/Technology";
import styles from "./programmingTechnologies.module.scss";

const ProgrammingTechnologies = () => {
  const techonologiesList = [
    { name: "Angular", imageSource: "/angular-icon.png" },
    { name: "React", imageSource: "/react-icon.png" },
    { name: "Vue", imageSource: "/vue-icon.png" },
    { name: "JavaScript", imageSource: "/javascript-icon.png" },
  ];

  return (
    <section className={styles.root}>
      <h2 className={styles.header}>Programming Technologies</h2>
      <p className={styles.description}>
        By the end, you’ll have the portfolio and interview skills you need to
        start your new career.
      </p>
      <div className={styles.technologies}>
        {techonologiesList.map((item) => (
          <Technology
            title={item.name}
            imageSource={item.imageSource}
            key={item.name}
          />
        ))}
      </div>
    </section>
  );
};

export default ProgrammingTechnologies;

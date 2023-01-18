import Image from "next/image";
import styles from "./techonology.module.scss";

type TTechnologyProps = {
  title: string;
  imageSource: string;
};

const Technology = ({ title, imageSource }: TTechnologyProps) => {
  return (
    <div className={styles.root}>
      <Image
        src={imageSource}
        alt={`${title} image`}
        width={162}
        height={136}
      />
      <h4>{title}</h4>
    </div>
  );
};

export default Technology;

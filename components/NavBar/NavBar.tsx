import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.scss";

const NavBar = () => {
  const linksData = [
    { link: "about", title: "About" },
    { link: "programs", title: "Programs" },
    { link: "steps", title: "Steps" },
    { link: "faq", title: "Questions" },
    { link: "contact", title: "Get in touch" },
  ];

  return (
    <div className={styles.root}>
      <Image
        src={"webtronics-logo.svg"}
        width={160}
        height={30}
        alt="Webtronics logo"
        className={styles.logo}
      />
      <nav className={styles.menu__list}>
        {linksData.map((item) => (
          <Link
            href={`#${item.link}`}
            key={item.link}
            className={styles.menu__item}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;

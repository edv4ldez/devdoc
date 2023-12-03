import Image from "next/image";
import styles from "./page.module.css";
import frontend from "../mocks/frontend.json";

export default function Home() {
  console.log(frontend.technologies);
  return (
    <main className={styles.main}>
      <h1>Frontend</h1>
      <ul className={styles.content}>
        {frontend.technologies.map((technology) => (
          <a href={technology.documentation} target="_blank">
            <li className={styles.card} key={technology.name}>
              <Image
                className={styles.image}
                src={technology.image}
                alt={technology.name}
                width={192}
                height={100}
              />
              <h2 className={styles.name}>{technology.name}</h2>
            </li>
          </a>
        ))}
      </ul>
    </main>
  );
}

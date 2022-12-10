import { Header } from "../components/Header";
import portfolioImg from "../assets/portfolio.svg";
import styles from "../styles/pages/portfolio.module.css";
import projetofinalImg from "../assets/projeto-final-pretalab.png";
import nlwImg from "../assets/nlw.png";
import primeiroportfolioImg from "../assets/primeiro-portfolio.png";
import Lista from "./Lista";

export function Portfolio() {
  return (
    <>
      <Header text="Meus projetos" image={portfolioImg} />

      <h2 className={styles.cardTitle}> Meus Projetos</h2>

      <div className={styles.cardContainer}>
        <h2 className={styles.cardTitle}>Meu Portfólio em React</h2>
        <img className={styles.image} src={projetofinalImg} />
        <p className={styles.cardText}>
          Um site em react para demonstrar meu portfólio.
        </p>
        <a
          className={styles.projectButton}
          href="https://meu-projeto-final-pretalab.vercel.app/"
          target="_blank"
        >
          Ver projeto
        </a>
      </div>

      <div className={styles.cardContainer}>
        <h2 className={styles.cardTitle}>NLW eSports</h2>
        <img className={styles.image} src={nlwImg} />
        <p className={styles.cardText}>
          Projeto construído no evento Next Level Week da Rocketseat.
        </p>
        <a
          className={styles.projectButton}
          href="https://nextlevelweek.netlify.app/"
          target="_blank"
        >
          Ver projeto
        </a>
      </div>


      <div className={styles.cardContainer}>
        <h2 className={styles.cardTitle}>Meu primeiro Portfólio</h2>
        <img className={styles.image} src={primeiroportfolioImg} />
        <p className={styles.cardText}>
        Portfólio profissional criado durante o módulo de HTML e CSS do Preta Lab.
        </p>
        <a
          className={styles.projectButton}
          href="https://portfoliosarahrios.netlify.app/"
          target="_blank"
        >
          Ver projeto
        </a>
      </div>


      <h2 className={styles.cardTitle}> Outros projetos no meu Github</h2>

      <Lista></Lista>
    </>
  );
}

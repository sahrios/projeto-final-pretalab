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
      <div className={styles.headerContainer}>
        <Header text="Meus projetos" image={portfolioImg} />
      </div>

      <div className={styles.projectsContainer}>
        <h2 className={styles.projectsTitle}> Meus Projetos</h2>

        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h1>Meu Portfólio em React</h1>
            <img className={styles.cardImage} src={projetofinalImg} />
            <p className={styles.cardText}>
              Um site em react para demonstrar meu portfólio.
            </p>
            <a
              className={styles.cardLink}
              href="https://meu-projeto-final-pretalab.vercel.app/"
              target="_blank"
            >
              Ver projeto
            </a>
          </div>

          <div className={styles.card}>
            <h1>NLW eSports</h1>
            <img className={styles.cardImage} src={nlwImg} />
            <p>Projeto construído no evento Next Level Week da Rocketseat.</p>
            <a
              className={styles.cardLink}
              href="https://nextlevelweek.netlify.app/"
              target="_blank"
            >
              Ver projeto
            </a>
          </div>

          <div className={styles.card}>
            <h1>Meu primeiro Portfólio</h1>
            <img className={styles.cardImage} src={primeiroportfolioImg} />
            <p>
              Portfólio profissional criado durante o módulo de HTML e CSS do
              Preta Lab.
            </p>
            <a
              className={styles.cardLink}
              href="https://portfoliosarahrios.netlify.app/"
              target="_blank"
            >
              Ver projeto
            </a>
          </div>
        </div>
      </div>

      <div className={styles.projectsContainer}>
        <h2 className={styles.projectsTitle}>Outros projetos no meu Github</h2>
        <div className={styles.projectsContainer}>
          <div className={styles.cardRepoContainer}>
            <div>
              <Lista></Lista>
            </div>
            </div>
          </div>
      </div>

    
    </>
  );
}

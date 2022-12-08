import { Header } from "../components/Header";
import portfolioImg from "../assets/portfolio.svg";
import styles from "../styles/pages/portfolio.module.css";



export function Portfolio() {
    return (
      <>
        <Header text="Meus projetos" image={portfolioImg} />

        <div className={styles.homeContainer}>

        <div className={styles.cardContainer}>
          <h2 className={styles.cardTitle}>Meus Projetos</h2>
        </div>

        </div>

        <div className={styles.cardContainer}>
          <h2 className={styles.cardTitle}>Meu Portfólio</h2>
          <p className={styles.cardText}>Mostro meu portfólio. Tudo o que aprendi até o momento dando destaque para alguns dos projetos que criei enquanto estudo programação.</p>
        </div>



      </>
    )
  }
  
import sobreImg from "../assets/sobre.svg";
import { Header } from "../components/Header";
import { Smiley } from "phosphor-react"; 'phosphor-react'
import styles from "../styles/pages/sobre.module.css";

export function Sobre() {
  return (
    <>
      <Header text="Minha história" image={sobreImg} />

      <div className={styles.sobreContainer}>
        <div className={styles.cardContainer}/> 
            <Smiley size={250} color="#686AAC" weight="thin" />
          <h2 className={styles.cardTitle}>Um pouco sobre mim</h2>
          <p className={styles.cardText}>Sou carioca, moro no Rio de Janeiro, tenho 24 anos, sou graduada em Psicologia, mas estou fazendo transição de carreira para área de tecnologia. 
        </p>

        

        </div>
    </>
  )
}

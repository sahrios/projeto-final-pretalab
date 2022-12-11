import sobreImg from "../assets/sobre.svg";
import pizzaImg from "../assets/pizza.png"
import { Header } from "../components/Header";
import { Smiley } from "phosphor-react";
import styles from "../styles/pages/sobre.module.css";

export function Sobre() {
  return (
    <>
      <Header text="Minha história" image={sobreImg} />

      <div className={styles.sobreContainer}>

        <div className={styles.imageContainer}> 
        <img className={styles.image} src={pizzaImg} />
        </div>

        <div className={styles.cardContainer}> 
          <h2 className={styles.cardTitle}>Sarah Rios Rodrigues, prazer! <Smiley size= {40} color="#004aad"/>
          </h2>
          <p className={styles.cardText}>Sou carioca, moro no Rio de Janeiro, tenho 24 anos,
          sou graduada em Psicologia e tenho formação em TCC (Terapia cognitivo-comportamental). Comecei minha transição de carreira para área de tecnologia através do PrograMaria e do PretaLab, onde pude aprender 
          sobre desenvolvimento front-end (HTML, CSS, JavaScript e ReactJs) e soft skills. 
          Em breve, estarei iniciando minha segunda graduação em Sistemas de Computação na UFF (Universidade Federal Fluminense). 
           
        </p>
        </div>

       </div>
    </>
  )
}

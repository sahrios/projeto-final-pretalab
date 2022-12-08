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
          sou graduada em Psicologia, mas estou fazendo transição de carreira para área de tecnologia. 
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ut omnis debitis dolores recusandae. 
          Illo, dolorem officiis! Odit soluta culpa reprehenderit quo laboriosam veniam vel iusto! Illo nesciunt molestiae consequuntur?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Eligendi culpa non sapiente voluptas nulla natus assumenda laboriosam eum ad accusamus, voluptatum enim corporis! Perspiciatis voluptatum voluptatem laudantium, quis nulla fuga.
        </p>
        </div>

       </div>
    </>
  )
}

import { useEffect, useState } from 'react'
import styles from "../styles/pages/portfolio.module.css";

function Lista() {
    const [ repositories, setRepositories] = useState ([])
  
    useEffect ( () => {
      fetch ("https://api.github.com/users/sahrios/repos")
      .then(response => response.json ())
      .then(data => setRepositories(data))
    }, [] )
    
  
    return (
      <div className={styles.projectsContainer}>
        <ul className={styles.cardRepoContainer}>
          {repositories.map(repository => {
            return (
                <li key={repository.id} className ={styles.cardRepo}>
                    <h3 className={styles.cardRepoText}>{repository.name} </h3>
                    <p className={styles.cardRepoText}>{repository.description}</p>
                    <a href={repository.html_url} target="_blank" className={styles.cardRepoLink}> Ver projeto</a>
                </li>     
            )
          })}
        </ul>
      </div>
    )
}
  
export default Lista






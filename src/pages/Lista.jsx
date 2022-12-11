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
      <>
        <div >
        <ul>
          {repositories.map(repository => {
            return (
                <div className={styles.cardRepo}>
                <li key={repository.id} className ={styles.cardRepoText}>
                    <h3>{repository.name}</h3>
                    <p >{repository.description}</p>
                    <a href={repository.html_url} target="_blank" className={styles.cardRepoLink}> Ver projeto</a>
                </li>
              </div>
            
            )
          })}
        </ul>
      </div>
      </>
  
    )
}
  
export default Lista





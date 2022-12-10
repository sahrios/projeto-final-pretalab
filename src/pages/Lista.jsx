import { useEffect, useState } from 'react'
import styles from '../styles/pages/lista.module.css'

function Lista() {
    const [ repositories, setRepositories] = useState ([])
  
    useEffect ( () => {
      fetch ("https://api.github.com/users/sahrios/repos")
      .then(response => response.json ())
      .then(data => setRepositories(data))
    }, [] )
    
  
    return (
      <>
        <div>
        <ul>
          {repositories.map(repository => {
            return (
  
              <li className={styles.cardRepoContainer} key={repository.id}>
                <h3 className={styles.cardName}>{repository.name}</h3>
                <p>{repository.description}</p>
                <a href={repository.html_url} target="_blank"> Ver projeto</a>
              </li>
            
            )
          })}
        </ul>
      </div>
      </>
  
    )
}
  
export default Lista





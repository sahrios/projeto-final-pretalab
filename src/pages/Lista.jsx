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
                    <a href={repository.html_url} target="_blank" rel="noreferrer"> 
                        <svg xmlns="http://www.w3.org/2000/svg"
                        width="32" height="32" fill="#fff" viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none">
                        </rect>
                        <polyline points="160 128 208 176 160 224" 
                        fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" 
                        stroke-width="16">
                        </polyline>
                        <polyline points="64 32 64 176 208 176" 
                        fill="none" stroke="#fff" stroke-linecap="round" 
                        stroke-linejoin="round" stroke-width="16">
                        </polyline>
                        </svg>
                    </a>
                </li>     
            )
          })}
        </ul>
      </div>
    )
}
  
export default Lista






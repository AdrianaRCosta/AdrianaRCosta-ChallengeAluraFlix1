import logo from './logo.png';
import styles from './Rodape.module.css'


function Rodape() {
    return (
        <footer className={styles.rodape}>
            <img src={logo} alt="Logo aluraflix"></img>
        </footer>
    )
}

export default Rodape;
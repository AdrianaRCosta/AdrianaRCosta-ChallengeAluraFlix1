// Cabecalho.js
import { Link } from "react-router-dom";
import logo from './logo.png';
import styles from './Cabecalho.module.css';
import CabecalhoLink from "../CabecalhoLink";

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <div className={styles.logoContainer}>
                <Link to="./">
                    <img src={logo} alt="Logo aluraflix"></img>
                </Link>
            </div>
            <nav>
                <CabecalhoLink className={styles.CabecalhoLink} url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./NovoVideo">
                    Novo Video
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;

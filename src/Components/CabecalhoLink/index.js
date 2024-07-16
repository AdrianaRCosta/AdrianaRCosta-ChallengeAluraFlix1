import { Link } from 'react-router-dom';
import styles from './CabecalhoLink.module.css';

function CabecalhoLink({ url, children }) {
    return (
        <Link to={url} className={styles.buttonLink}>
            {children}
        </Link>
    )
}

export default CabecalhoLink;
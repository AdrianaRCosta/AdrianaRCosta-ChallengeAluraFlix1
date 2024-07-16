import React from 'react';
import styles from './Banner.module.css';

function Banner({ imagem }) {
    return (
        <div className={styles.capa}
        style={{backgroundImage: `url('/imagens/${imagem}.jpg')`}} ></div>
    )
}

export default Banner;
import React, { useContext } from 'react';
import styles from './Categoria.module.css';
import VideoList from '../VideoLista/VideoList';
import { VideoContext } from '../Contexts/VideoContext';

function Categoria() {
  const { videos, deleteVideo } = useContext(VideoContext);

  if (!videos || videos.length === 0) {
    return <div>Carregando vídeos...</div>;
  }

  return (
    <div className={styles['main-card']}>
      <div className={styles.topic}>
        <h2 className={styles.frontend}>FRONT END</h2>
        <VideoList strokeColor="#6BD1FF" category="frontend" onDelete={deleteVideo} />
      </div>
      <div className={styles.topic}>
        <h2 className={styles.backend}>BACK END</h2>
        <VideoList strokeColor="#00C86F" category="backend" onDelete={deleteVideo} />
      </div>
      <div className={styles.topic}>
        <h2 className={styles.gestao}>GESTÃO</h2>
        <VideoList strokeColor="#FFBA05" category="gestao" onDelete={deleteVideo} />
      </div>
      <div className={styles.topic}>
        <h2 className={styles.mobile}>MOBILE</h2>
        <VideoList strokeColor="#FFBA05" category="mobile" onDelete={deleteVideo} />
      </div>
    </div>
  );
}

export default Categoria;

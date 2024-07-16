import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { VideoContext } from '../Contexts/VideoContext';
import VideoList from '../VideoLista/VideoList';
import Categoria from '../Categoria';
import './Main.module.css';




function Main() {
    const { videos } = useContext(VideoContext);

    console.log("Videos in Main:", videos);
  
    if (!videos || videos.length === 0) {
      return <div>Carregando vídeos...</div>;
    }
  
    return (
      <div className="main-card">
         <Link to="/novovideo">Adicionar Novo Vídeo</Link>
        {videos.map((video, index) => (
          <div key={index} className="topic">
            <Categoria id={video.categoryId} title={video.categoryTitle} />
            <VideoList strokeColor={video.strokeColor} category={video.category} />
          </div>
        ))}
      </div>
    );
  }
  export default Main;
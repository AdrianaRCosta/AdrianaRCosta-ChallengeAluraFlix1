import React, { useState } from 'react';
import Card from './Card';
import EditarCard from './EditarCard';


const videoData = [
  { id: 1, imagem: 'image1.jpg', titulo: 'Video 1', categoria: 'Front End', video: 'video1.mp4', descricao: 'Descrição 1' },
  { id: 2, imagem: 'image2.jpg', titulo: 'Video 2', categoria: 'Back End', video: 'video2.mp4', descricao: 'Descrição 2' },
  
];

const VideoManager = () => {
  const [showEditarCard, setShowEditarCard] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleEdit = (video) => {
    setCurrentVideo(video);
    setShowEditarCard(true);
  };

  const handleClose = () => {
    setShowEditarCard(false);
    setCurrentVideo(null);
  };

  return (
    <div>
      {videoData.map(video => (
        <Card
          key={video.id}
          id={video.id}
          image={video.imagem}
          strokeColor="#000"
          onDelete={() => console.log('Deletar', video.id)}
          onEdit={() => handleEdit(video)}
          onView={() => console.log('Ver', video.id)}
        />
      ))}
      <EditarCard
        show={showEditarCard}
        handleClose={handleClose}
        videoData={currentVideo}
      />
    </div>
  );
};

export default VideoManager;

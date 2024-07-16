import React, { useState } from 'react';
import './App.css';
import AppRoutes from './routers';
import Modal from './Components/Modal';
import VideoList from './Components/VideoLista/VideoList';
import Main from './Components/Main';
import EditarCard from './Components/EditarCard';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleOpenModal = (video) => {
    setCurrentVideo(video);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentVideo(null);
  };

  const handleUpdateVideo = (updatedVideo) => {
    console.log('Vídeo atualizado:', updatedVideo);
    handleCloseModal(); 
  };

  return (
    <div className="App">
      <AppRoutes />
      <Main />

      <h1>Gerenciador de Vídeos</h1>

      <VideoList onEdit={handleOpenModal} />

      {showModal && currentVideo && (
        <Modal
          isOpen={showModal}
          onClose={handleCloseModal}
          videoData={currentVideo}
          onUpdate={handleUpdateVideo}
        />
      )}

      
      {showModal && currentVideo && (
        <EditarCard
          show={showModal}
          handleClose={handleCloseModal}
          videoData={currentVideo}
          onUpdate={handleUpdateVideo}
        />
      )}
    </div>
  );
}

export default App;





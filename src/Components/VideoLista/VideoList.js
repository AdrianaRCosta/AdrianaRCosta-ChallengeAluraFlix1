
import React, { useState, useContext } from 'react';
import Card from '../Card';
import Modal from '../Modal';
import styles from './VideoList.module.css';
import { VideoContext } from '../Contexts/VideoContext';

function VideoList({ strokeColor, category, onEdit }) {
  const { videos, deleteVideo, updateVideo } = useContext(VideoContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const filteredVideos = videos.filter(video => video.category === category);

  const handleEditClick = (video) => {
    setCurrentVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
  };

  const handleUpdate = (updatedVideo) => {
    updateVideo(updatedVideo.id, updatedVideo); 
    closeModal();
  };

  const handleView = (id) => {
    console.log(`Visualizando vídeo: ${id}`);
  };

  return (
    <div className={styles.videoList}>
      {filteredVideos.map(video => (
        <Card
          key={video.id}
          id={video.id}
          imagem={video.imagem}
          category={video.category}
          strokeColor={strokeColor}
          onDelete={() => deleteVideo(video.id)}
          onEdit={() => handleEditClick(video)}
          onView={() => handleView(video.id)}
        />
      ))}
      {isModalOpen && currentVideo && (
        <Modal
          isOpen={isModalOpen} 
          onClose={closeModal}
          videoData={currentVideo} 
          onUpdate={handleUpdate} 
        >
          <form onSubmit={handleUpdate}>
            <div>
              <label>Título</label>
              <input
                type="text"
                value={currentVideo.title}
                onChange={(e) => setCurrentVideo({ ...currentVideo, title: e.target.value })}
                placeholder="Digite o título do vídeo"
              />
            </div>
            <div>
              <label>Categoria</label>
              <select
                value={currentVideo.category}
                onChange={(e) => setCurrentVideo({ ...currentVideo, category: e.target.value })}
              >
                <option value="">Selecione uma categoria</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="mobile">Mobile</option>
                <option value="gestao">Gestão</option>
              </select>
            </div>
            <div>
              <label>Imagem</label>
              <input
                type="text"
                value={currentVideo.imagem}
                onChange={(e) => setCurrentVideo({ ...currentVideo, imagem: e.target.value })}
                placeholder="Digite o link da imagem"
              />
            </div>
            <div>
              <label>Vídeo</label>
              <input
                type="text"
                value={currentVideo.video}
                onChange={(e) => setCurrentVideo({ ...currentVideo, video: e.target.value })}
                placeholder="Digite o link do vídeo"
              />
            </div>
            <div>
              <label>Descrição</label>
              <textarea
                value={currentVideo.description}
                onChange={(e) => setCurrentVideo({ ...currentVideo, description: e.target.value })}
                placeholder="Digite a descrição do vídeo"
              ></textarea>
            </div>
            <button type="submit">Salvar</button>
          </form>
        </Modal>
      )}
    </div>
  );
}

export default VideoList;

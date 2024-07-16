import React, { useState } from 'react';
import styles from './Modal.module.css';

function Modal({ videoData, onUpdate, onClose, isOpen }) {
  const [title, setTitle] = useState(videoData?.title || '');
  const [category, setCategory] = useState(videoData?.category || '');
  const [image, setImage] = useState(videoData?.imagem || '');
  const [video, setVideo] = useState(videoData?.video || '');
  const [description, setDescription] = useState(videoData?.description || '');

  if (!isOpen || !videoData) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedVideo = {
      id: videoData.id,
      title,
      category,
      imagem: image,
      video,
      description,
    };
    onUpdate(updatedVideo);
    onClose();
  };

  const handleClear = () => {
    setTitle('');
    setCategory('');
    setImage('');
    setVideo('');
    setDescription('');
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>EDITAR CARD</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Título</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Digite o título do vídeo"
            />
          </div>
          <div>
            <label>Categoria</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
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
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Digite o link da imagem"
            />
          </div>
          <div>
            <label>Vídeo</label>
            <input
              type="text"
              value={video}
              onChange={(e) => setVideo(e.target.value)}
              placeholder="Digite o link do vídeo"
            />
          </div>
          <div>
            <label>Descrição</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Digite a descrição do vídeo"
            ></textarea>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.submitButton} type="submit">
              Salvar
            </button>
            <button className={styles.clearButton} type="button" onClick={handleClear}>
              Limpar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;

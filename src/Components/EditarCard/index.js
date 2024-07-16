import React, { useState } from 'react';
import styles from './EditarCard.module.css';





const EditarCard = ({ show, handleClose, videoData }) => {
  const [title, setTitle] = useState(videoData?.titulo || '');
  const [category, setCategory] = useState(videoData?.categoria || '');
  const [image, setImage] = useState(videoData?.imagem || '');
  const [video, setVideo] = useState(videoData?.video || '');
  const [description, setDescription] = useState(videoData?.descricao || '');

  const handleSave = () => {
    console.log('Dados salvos', { title, category, image, video, description });
    handleClose();
  };

  const handleClear = () => {
    setTitle('');
    setCategory('');
    setImage('');
    setVideo('');
    setDescription('');
  };

  if (!show) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Editar Card</h2>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="category">Categoria</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Front End">Front End</option>
              <option value="Back End">Back End</option>
              <option value="Mobile">Mobile</option>
              <option value="Gestão">Gestão</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="image">Imagem</label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="video">Vídeo</label>
            <input
              type="text"
              id="video"
              value={video}
              onChange={(e) => setVideo(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className={styles.buttonGroup}>
            <button type="button" onClick={handleSave}>Guardar</button>
            <button type="button" onClick={handleClear}>Limpar</button>
          </div>
        </form>
        <button className={styles.closeButton} onClick={handleClose}>X</button>
      </div>
    </div>
  );
};

export default EditarCard;

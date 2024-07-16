import React from 'react';
import iconeDeletar from './VectorDel.png';
import iconeEditar from './VetorEditar.png';
import styles from './Card.module.css';

function Card({ id, imagem, category, onDelete, onEdit, onView }) {
  const handleDeleteClick = () => {
    if (window.confirm('Você tem certeza que deseja remover este item?')) {
      onDelete(id); 
    }
  };

  const handleImageClick = () => {
    console.log('Imagem clicada, ID:', id);
    onView();
  };

  


  const getBorderColor = (category) => {
    switch (category) {
      case 'frontend':
        return '#2271D1'; // Blue for frontend
      case 'backend':
        return '#FF5733'; // Orange for backend
      case 'mobile':
        return '#28A745'; // Green for mobile
      case 'gestao':
        return '#FFC107'; // Yellow for gestao
      default:
        return '#6BD1FF'; // Default color
    }
  };

  return (
    < div className={styles.videoCard} style={{ borderColor: getBorderColor(category) }}>
      <img src={imagem} alt="Video" className={styles.videoImagem} onClick={handleImageClick} />
      <div className={styles.videoControls}>
        <button className={`${styles.videoControl} ${styles.delete}`} onClick={handleDeleteClick}>
          <img src={iconeDeletar} alt="Delete" />
          DELETAR
        </button>
        <button className={`${styles.videoControl} ${styles.edit}`} onClick={onEdit}>
          <img src={iconeEditar} alt="Edit" />
          EDITAR
        </button>
      </div>
    </div>
  );
}



export default Card;

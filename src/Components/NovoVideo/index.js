import React, { useContext, useState } from 'react';
import styles from './NovoVideo.module.css';
import { useNavigate } from 'react-router-dom';
import { VideoContext } from '../Contexts/VideoContext';

function NovoVideo() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [imagem, setImage] = useState('');
  const [video, setVideo] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();
  const { addVideo } = useContext(VideoContext); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVideo = { title, category, imagem, video, description };
    console.log("Submitting video:", newVideo);
    addVideo(newVideo);  
    navigate('/');
  };

  const handleClear = () => {
    setTitle('');
    setCategory('');
    setImage('');
    setVideo('');
    setDescription('');
  };

  return (
    <div className={styles.novovideo}>
      <h2>Novo Vídeo</h2>
      <p>Complete o formulário para criar um novo vídeo</p>
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
            value={imagem}
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
        <div className={styles.formButtons}>
          <button type="submit">Guardar</button>
          <button type="button" onClick={handleClear}>Limpar</button>
        </div>
      </form>
    </div>
  );
}

export default NovoVideo;
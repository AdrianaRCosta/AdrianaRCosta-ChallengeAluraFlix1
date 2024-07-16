
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  // Função para buscar os vídeos do servidor
  const fetchVideos = async () => {
    try {
      const response = await axios.get('http://localhost:3001/videos');
      setVideos(response.data);
    } catch (error) {
      console.error('Erro ao buscar vídeos', error);
    }
  };

  // Carrega os vídeos ao montar o componente
  useEffect(() => {
    fetchVideos();
  }, []);

  // Adiciona um novo vídeo
  const addVideo = async (newVideo) => {
    try {
      const response = await axios.post('http://localhost:3001/videos', newVideo);
      setVideos([...videos, response.data]);
    } catch (error) {
      console.error('Erro ao adicionar vídeo', error);
    }
  };

  // Remove um vídeo pelo ID
  const deleteVideo = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/videos/${id}`);
      setVideos(videos.filter(video => video.id !== id));
    } catch (error) {
      console.error('Erro ao deletar vídeo', error);
    }
  };

  // Atualiza um vídeo existente
  const updateVideo = async (id, updatedVideo) => {
    try {
      const response = await axios.put(`http://localhost:3001/videos/${id}`, updatedVideo);
      setVideos(prevVideos => prevVideos.map(video =>
        video.id === id ? response.data : video
      ));
    } catch (error) {
      console.error('Erro ao atualizar vídeo', error);
    }
  };

  return (
    <VideoContext.Provider value={{ videos, addVideo, deleteVideo, updateVideo }}>
      {children}
    </VideoContext.Provider>
  );
};

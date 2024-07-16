import React from 'react';
import Banner from "../../Components/Banner";
import EditarCard from '../../Components/EditarCard';
import VideoList from '../../Components/VideoLista/VideoList';
import Categoria from '../../Components/Categoria';


//import videos from '../../json/db.json'; 

    function Inicio() {
    
    return (
        <>
            <Banner imagem="banner" />   
            <Categoria />
            <EditarCard />
            <VideoList/>   
        </>
    )
}

export default Inicio;
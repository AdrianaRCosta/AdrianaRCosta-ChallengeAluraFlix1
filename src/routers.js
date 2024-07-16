import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import NovoVideo from "./Components/NovoVideo";
import Cabecalho from "./Components/Cabecalho";
import Rodape from "./Components/Ropape";
import { VideoProvider } from "./Components/Contexts/VideoContext";







function AppRoutes() {
    return (
        <BrowserRouter>
         <Cabecalho />
       
           
            
            
                <VideoProvider>
                    <Routes>
                        <Route path="/" element={<Inicio/>}></Route>
                        <Route path="/novovideo" element={<NovoVideo />}></Route>
                        
                    </Routes>  
                </VideoProvider>      
            <Rodape />     
        </BrowserRouter>    
       
    )
}

export default AppRoutes;
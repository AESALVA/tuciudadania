/* eslint-disable */
import "./css/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/views/Main";
import PaginaContacto from "./Components/views/PaginaContacto";
import NavbarMain from "./Components/common/NavbarMain";
import Error404 from "./Components/common/Error404";
import Footer from "./Components/common/Footer"
import Search from "./Components/views/Search";
import ArticleDetail from "./Components/views/news/ArticleDetail";
import { useState, useEffect } from "react";
import { consultarAPI } from "./Components/helpers/queries";
import Login from "./Components/views/Login";
import Registro from "./Components/views/Registro";
import RutasProtegidas from "./Components/routes/Rutasprotegidas";
import RutasAdmin from "./Components/routes/RutasAdmin";
import Category from "./Components/views/Category";


function App() {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogueado")) || '';
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);
  const [searchState, setSearchState] = useState('');
  const [nuevo, setNuevo] = useState([]);
  const [category, setCategory] = useState([]);
  
  useEffect(() => {
    consultarAPI().then((respuesta) => {setNuevo(respuesta)})}, [searchState]);

  return (
<BrowserRouter>
      <Container fluid className="d-flex flex-column min-vh-100 px-0">
        <NavbarMain searchState={searchState} setSearchState={setSearchState} usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado} category={category} setCategory={setCategory}/>
          <Routes>
            <Route exact path="/" element={<Main searchState={searchState} setSearchState={setSearchState } setCategory={setCategory}/>} />
            <Route exact path="/PaginaContacto" element={<PaginaContacto />} />
            {/* <Route exact path="/Servicios" element={<Servicios />} /> */}
            <Route path="*" element={<Error404 />} />
            <Route
                    path="/Administrar/*"
                    element={
                        <RutasProtegidas>
                            <RutasAdmin></RutasAdmin>
                        </RutasProtegidas>
                    }
            />
            <Route path="/ArticleDetail/:id"  element={<ArticleDetail/>} />
            <Route exact path="/usuario/login" element={!usuarioLogueado ? (<Login setUsuarioLogueado={setUsuarioLogueado}/>) : (<Main searchState={searchState} setSearchState={setSearchState } setCategory={setCategory}/>)}/>
            <Route exact path="/usuario/registro" element={<Registro setUsuarioLogueado={setUsuarioLogueado} />} />
            <Route exact path="/search" element={<Search nuevo={nuevo} searchState={searchState} setSearchState={setSearchState} />} />
            <Route exact path="/category" element={<Category nuevo={nuevo} category={category} setCategory={setCategory} />} /> 
          </Routes >
          <Footer />
      </Container>
</BrowserRouter>
  );
}
export default App;
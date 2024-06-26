import React from "react";
import { Container} from 'react-bootstrap';
import Header from "./Header";  
import Articles from "./news/Articles";
import { useState, useEffect } from "react";
import { consultarAPI } from "../helpers/queries";

const Main = ({setSearchState, searchState, setCategory}) => {
  const [News, setNews] = useState([]);

    useEffect(() => {
        consultarAPI().then((respuesta) => {
            setNews(respuesta);
        });
    }, []);
  return (
    <>
      <Header setSearchState={setSearchState} searchState={searchState} setCategory={setCategory}/>
      <Container>
      <h1 className="display-3 py-3 text-center">Servicios</h1>
      <hr />
      <div className="cards">
        {News.map((Art)=> <Articles key={Art._id} Art={Art}></Articles>)}
      </div>
    </Container>
    </>
  );
};
export default Main;

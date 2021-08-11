import React from "react";
import styled from "@emotion/styled";
import Frase from "./components/Frase";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f547e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  margin: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: all 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  const [frase, setFrase] = React.useState({});

  const consultarAPI = async () => {
    try {
      const api = await fetch(
        "http://breaking-bad-quotes.herokuapp.com/v1/quotes"
      );

      const frase = await api.json();
      setFrase(frase[0]);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <Contenedor>
      <Frase frase={frase} />
      <Boton onClick={() => consultarAPI()}>Obtener Frase</Boton>
    </Contenedor>
  );
}

export default App;

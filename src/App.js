import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Sentence from "./components/Sentence";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 310px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 3px solid black;
  transition: background-size 0.5s ease;
  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  const [quote, setQuote] = useState({});

  const askAPI = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const quote = await api.json();
    setQuote(quote[0]);
  };

  useEffect(() => {
    askAPI();
  }, []);

  return (
    <Contenedor>
      <Sentence quote={quote} />
      <Button onClick={askAPI}>Obtener Frase</Button>
    </Contenedor>
  );
}
export default App;

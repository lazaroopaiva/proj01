import './Home.css';
import { useState, useEffect } from 'react';
import CelCard from '../layouts/CelCard';

export default function Home() {
  const [celulares, setCel] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/celulares', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCel(data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <>
      <div className="div_cards">
        <h1 className="tittle">Todos os celulares</h1>
        <div className="cards">
          {celulares.length > 0 &&
            celulares.map((celular) => (
              <CelCard
                imagem={celular.imagem}
                marca={celular.marca}
                modelo={celular.modelo}
                preco={celular.preco}
                specs={celular.specs}
                key={celular.id}
                id={celular.id}
              />
            ))}
        </div>
      </div>
    </>
  );
}

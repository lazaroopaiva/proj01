import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Celular.css';
import CelCard from '../layouts/CelCard';

export default function Celular() {
  const { id } = useParams();

  const [celular, setCelular] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/celulares/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCelular(data);
        console.log(celular);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="details_main">
      <div className="details_imagem">
        <img
          className="details_img_imagem"
          src={celular.imagem}
          alt={'...'}
        ></img>
      </div>
      <div className="details_specs">
        <h2 className="details_modelo">{celular.modelo}</h2>
        <p className="details_marca">{celular.marca}</p>
        <p className="details_preco">
          {(celular.preco * 1).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
        <p className="details_vista">
          à vista (10% de desconto) Economize{' '}
          {(celular.preco * 0.1 * 1).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
        <p className="details_specs">{celular.specs}</p>
        <div className="details_parcelas">
          <p>
            Até 12x sem juros <i class="bi bi-credit-card-2-back-fill"></i>
          </p>
          <p>1x de R${celular.preco * 1} ( sem juros )</p>
          <p>2x de R${((celular.preco / 2) * 1).toFixed(2)} ( sem juros )</p>
          <p>3x de R${((celular.preco / 3) * 1).toFixed(2)} ( sem juros )</p>
          <p>6x de R${((celular.preco / 6) * 1).toFixed(2)} ( sem juros )</p>
          <p>10x de R${((celular.preco / 10) * 1).toFixed(2)} ( sem juros )</p>
          <p>12x de R${((celular.preco / 12) * 1).toFixed(2)} ( sem juros )</p>
        </div>
        <p className="frete">
          <i class="bi bi-truck"></i> Frete gratis
        </p>
        <p className="seguro">
          <i class="bi bi-shield-shaded"></i> Seguro
        </p>
      </div>
    </div>
  );
}

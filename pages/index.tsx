import Link from "next/link";
import { Cartao } from "../components/Cartao";
import styles from '../styles/Formulario.module.css'
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";

export default function Formulario() {

  const [qtdPortas, setQtdPortas] = useState(3)
  const [portaComPresente, setPortaComPresente] = useState(1)
  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="red">
        <h1 style={{flex: "1", margin: "10px"}}>Cartão Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Qtd de portas..."
          value={qtdPortas} 
          onChange={novaQtd => setQtdPortas(novaQtd)} />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica text="Porta com presentes..."
            value={portaComPresente}
            onChange={novaPortaComPresente => setPortaComPresente(novaPortaComPresente)} />
        </Cartao>
        <Cartao bgcolor="green">
          <Link href={`/jogo/${qtdPortas}/${portaComPresente}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}

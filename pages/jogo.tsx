import { useState } from 'react';

import styles from '../styles/Jogo.module.css';

import { criarPortas, atualizarPortas } from '../functions/portas';
import Porta from '../model/porta';

export default function Jogo() {
  const [portas, setPortas] = useState(criarPortas(3, 1));

  function renderizarPortas() {
    return portas.map((porta) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(novaPorta) =>
            setPortas(atualizarPortas(portas, novaPorta))
          }
        />
      );
    });
  }

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>{renderizarPortas()}</div>
      <div className={styles.botoes}></div>
    </div>
  );
}


import Link from 'next/link';
import { useEffect, useState } from 'react';
import { atualizarPortas, criarPortas } from '../../../functions/portas';
import { useRouter } from 'next/router';
import styles from '../../../styles/Jogo.module.css'
import Porta from '../../../components/Porta';


export default function Jogo() {
  const [portas, setPortas] = useState(criarPortas(10, 1));
  const router = useRouter()

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente
    setPortas(criarPortas(portas, temPresente))
  }, [router?.query])

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
        <Link href="/">
          <div className={styles.botoes}>
            <button>Reiniciar</button>
          </div>
        </Link>
    </div>
  );
}

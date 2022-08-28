import React, { useState } from 'react'
import styles from "./Atividade03.module.css"
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
function Atividade03() {

  const [contador, setContador] = useState(0);
 

  return (
    <div className={styles.container}>
        <div className={styles.box} >
      <p>Você clicou {contador} vezes</p>
      
      <button onClick={() => setContador(contador + 1)}>Aperte-me</button>
      </div>
      <Link className={styles.voltar} to="/">
        <IoIosArrowRoundBack />
      </Link>
    </div>
  )
}

export default Atividade03
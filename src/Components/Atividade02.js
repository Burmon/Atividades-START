import styles from "./Atividade02.module.css"
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

 function Atividade02() {

    return(
        <div className={styles.container}>
            <div className={styles.box}>
                <h1>Olá, mundo REACT</h1>
                <h2>Esse é o meu componente de classe.</h2>
            </div>
            <Link className={styles.voltar} to="/">
              <IoIosArrowRoundBack />
            </Link>
        </div>


    )


}
export default Atividade02
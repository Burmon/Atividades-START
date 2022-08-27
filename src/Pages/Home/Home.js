import styles from "./Home.module.css"
import { Link } from "react-router-dom";
 function Home() {

    return(
        <div className={styles.container}>
            <div className={styles.box}>
                <h1 className={styles.titulo}>Atividades START</h1>
                    <div className={styles.botoes}>
                         <Link className={styles.botao} to="/atividade01">Atividade 01</Link>
                    </div>
          </div>
        </div>


    )


}
export default Home

import { Link } from "react-router-dom";
import styles from "./Atividade01.module.css"
import Corujinha from "../../imgs/fotoCorujinha.jpg"
import { IoIosArrowRoundBack } from "react-icons/io";

 function Atividade01() {

    return(
        <div className={styles.container}>
            <div className={styles.box}>
                <h1 className={styles.titulo}>Por que as corujas são símbolos da sabedoria? </h1>
                    <div className={styles.coluna}>
                         <img src={Corujinha} alt="CORUJINHA CAMINHANDO"/>
                         <p>Através de referências da cultura pop, como o Ursinho Pooh, 
                            e através do folclore, todos nós associamos corujas com sabedoria
                            em algum momento ou outro. Em vez de
                            sabedoria intelectual, porém, as corujas estão conectadas
                            com a sabedoria da alma. No entanto, existem outras qualidades 
                            que a coruja possui. As corujas são muitas vezes vistas como misteriosas, 
                            principalmente porque muitas corujas são estritamente noturnas e os humanos 
                            sempre acharam a noite cheia de mistério e desconhecido. As corujas vivem na 
                            escuridão, que inclui magia, mistério e conhecimento antigo. Relacionada à 
                            noite está a lua, à qual as corujas também estão conectadas. Torna-se um 
                            símbolo do feminino e da fertilidade, com os ciclos de renovação da lua.
                            Até a mitologia relaciona a coruja com essa sabedoria e feminilidade. A 
                            coruja era um símbolo de Atena, deusa da sabedoria e da estratégia, 
                            antes que os gregos dessem ao seu panteão formas humanas. Segundo o mito, 
                            uma coruja sentou-se no lado cego de Atena, para que ela pudesse ver toda 
                            a verdade. Na Grécia Antiga, a coruja era um símbolo de uma sabedoria superior 
                            e também era uma guardiã da Acrópole. Diana, a resposta romana a Atena, estava 
                            fortemente associada à lua e também à coruja. Os Pawnee e os Sioux viam a 
                            coruja como uma mensageira (akicita) para a primeira de todas as criaturas 
                            malignas (Unktehi). Enquanto a tribo Lakota tinha uma “Sociedade da Coruja”, 
                            onde os guerreiros lutavam principalmente à noite e pintavam anéis escuros ao 
                            redor dos olhos porque acreditavam que isso lhes permitiria ter a visão aguda 
                            de uma coruja.
                            Existem muitas superstições em torno da coruja, 
                            muitas das quais se concentram na morte. Na Europa e na América, a 
                            coruja era vista como um prenúncio da morte. Isso se deveu a certos povos, 
                            como os Dakota, e algumas tribos germânicas e vikings escandinavos, que 
                            sinalizavam a aproximação do ataque com o pio de uma coruja. Este foi e 
                            ainda continua sendo o canto de pássaro mais fácil de imitar. Os maias 
                            chamavam a coruja de Yucatan de “o pássaro gemido” e acreditavam que 
                            isso significava morte.
                            Existem mitos e lendas de todo o mundo, das Américas ao Extremo 
                            Oriente. As corujas, como sempre, continuam sendo uma fonte de 
                            sabedoria, espiritual e intelectual.</p>
                    </div>
          </div>
          <Link className={styles.voltar} to="/">
              <IoIosArrowRoundBack />
            </Link>
        </div>


    )


}
export default Atividade01
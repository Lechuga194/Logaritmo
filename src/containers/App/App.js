import React, {useState} from 'react';
import styles from './app.module.css'
import Button from '../../components/Button'
import Input from '../../components/Input'
import formula1 from '../../static/formula1.png'

const montoValues = [15000,50000,4000];
const capitalValues = [1000,2000,3000];
const interesValues = [10,20,30];

function App() {
  const [page, setPage] = useState('home');
  const [monto, setMonto] = useState(0);
  const [capital, setCapital] = useState(0);
  const [interes, setInteres] = useState(0);

  const redirect = () => setPage('resultados');
  const back = () => setPage('home');
  const changeMonto = (monto) => setMonto(monto.target.value);
  const changeCapital = (capital) => setCapital(capital.target.value);
  const changeInteres = (interes) => setInteres(interes.target.value);

  return (
    page === 'home' ? 
      <div className={styles.home}>
        <div className={styles.bannerHome}>
          <p id={styles.title}>LOGARITMO</p>
          <p id={styles.subtitle}>Ejemplificando su aplicación</p>
          <p id={styles.textHome}>Sigue paso a paso el procedimiento matemático para resolver la fórmula del interés compuesto.</p>
        </div>
        <div className={styles.contentHome}>
          <div className={styles.formula}>
            <p className={styles.text}>Recordemos la fórmula del interés compuesto</p>
            <img src={formula1} alt="M=C(1+i)^n"></img>
            <p className={styles.text}>Introduce los datos deseados para encontrar el numero de años </p>
          </div>
          <div id={styles.inputs}>
            <Input text="Monto" values={montoValues} signo="$" changeValue={changeMonto}/>
            <Input text="Capital" values={capitalValues} signo="$" changeValue={changeCapital}/>
            <Input text="Tasa de interés" values={interesValues} signo="%" changeValue={changeInteres}/>
          </div>
          <Button redirect={redirect} text={"Iniciar"}></Button>
        </div>
      </div>
    :
      <div className={styles.resultados}>
        <div className={styles.bannerResultados}><p id={styles.title}>LOGARITMO</p></div>
        <div className={styles.contentResultados}>
          <div className={styles.leftPanel}>
            <div className={styles.datacontainer}>
              <p id={styles.description}>Datos introducidos</p>
              <div className={styles.data}>
                <Input text="Monto&nbsp;&nbsp;:" values={montoValues} signo="$" changeValue={changeMonto} value={monto} isResult={true}/>
                <Input text="Capital:&nbsp;" values={capitalValues} signo="$" changeValue={changeCapital} value={capital} isResult={true}/>
                <Input text="Interes:&nbsp;&nbsp;&nbsp;&nbsp;" values={interesValues} signo="%" changeValue={changeInteres} value={interes} isResult={true}/>
              </div>
            </div>
            <Button redirect={back} text={"Regresar"}></Button>
          </div>
          <div></div>
        </div>
      </div>
  );
}

export default App;

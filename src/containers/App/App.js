import React, {useState, useEffect} from 'react';
import styles from './app.module.css'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Despejes from '../../components/Despejes'
import formula1 from '../../static/formula1.png'
import btnback from '../../static/back.png'

const montoValues = [100000,15000,50000,4000];
const capitalValues = [60000,1000,2000,3000];
const interesValues = [10,20,30];

function App() {
  const [page, setPage] = useState('home');
  const [monto, setMonto] = useState(100000);
  const [capital, setCapital] = useState(60000);
  const [interesEntero, setInteresEntero] = useState(10);
  const [error, setError] = useState(false);

  function getWindowWidth() {
    const {innerWidth: width} = window;
    return width;
  }
  
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  
  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

  const redirect = () => setPage('resultados');
  const back = () => setPage('home');
  const traceError = (value) => setError(value);
  const changeMonto = (monto) => setMonto(monto);
  const changeCapital = (capital) => setCapital(capital);
  const changeInteres = (interes) => setInteresEntero(interes);

  const interes = interesEntero/100;
  const resultado = Math.log(monto/capital) / Math.log(1 + interes);

  console.log(windowWidth);

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
            <p className={styles.text}>Introduce los datos deseados para encontrar el número de años </p>
            {
              error ? <p className={styles.error}>Solo debes introducir números mayores que 0!</p> : void 0
            }
          </div>
          <div id={styles.inputs}>
            <Input text="Monto" signo="$" changeValue={changeMonto} value={monto} traceError={traceError}/>
            <Input text="Capital" signo="$" changeValue={changeCapital} value={capital} traceError={traceError}/>
            <Input text="Tasa de interés" signo="%" changeValue={changeInteres} value={interesEntero} traceError={traceError}/>
          </div>
          <Button redirect={redirect} text={"Calcular"}></Button>
        </div>
      </div>
    :
      <div className={styles.resultados}>
        
        <div className={styles.bannerResultados}>
          {
            windowWidth <= 900 ? <div className={styles.responsivebanner}><img src={btnback} alt="Regresar" onClick={back}></img><p id={styles.title}>LOGARITMO</p></div> : <p id={styles.title}>LOGARITMO</p>
          }
        </div>
        
        <div className={styles.contentResultados}>
          <div className={styles.leftPanel}>
            {
              error ? <p className={styles.error}>Solo debes introducir números mayores que 0!</p> : void 0
            }
            <div className={styles.datacontainer}>
              <p id={styles.description}>Datos introducidos</p>
              <div className={styles.data}>
                <Input text="Monto&nbsp;&nbsp;:" signo="$" changeValue={changeMonto} value={monto} isResult={true} traceError={traceError}/>
                <Input text="Capital:&nbsp;" signo="$" changeValue={changeCapital} value={capital} isResult={true} traceError={traceError}/>
                <Input text="Interés:&nbsp;&nbsp;&nbsp;&nbsp;" signo="%" changeValue={changeInteres} value={interesEntero} isResult={true} traceError={traceError}/>
              </div>
            </div>
            {
              windowWidth > 900 ? <Button redirect={back} text={"Regresar"}></Button> : void 0
            }
          </div>
          <div className={styles.rigthPanel}>
            <div className={styles.despejes}>
              <p>Primero despejamos la fórmula</p>
              <Despejes windowWidth={windowWidth}/>
            </div>
            <div className={styles.sustitucion}>
              <p>Reemplazamos los datos en la fórmula</p>
              <p>1.- {monto} = {capital}(1 + {interes})^n</p>
              <p>2.- {monto}/{capital} = (1 + {interes})^n</p>
              <p>3.- log({monto}/{capital}) = log(1 + {interes})^n</p>
              <p>4.- log({monto}/{capital}) = n log(1 + {interes})</p>
              <p>5.- n = log({monto}/{capital})/log(1 + {interes})</p>
            </div>
            <div className={styles.resultado}>
              <p>Resolvemos...</p>
              <p>n =  {Math.log(monto/capital)} / {Math.log(1 + interes)} = {Math.log(monto/capital) / Math.log(1 + interes)}</p>
              <p>Resultado: {resultado.toFixed(2)} Años</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;

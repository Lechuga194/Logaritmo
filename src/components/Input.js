import React, {useState} from 'react';
import styles from './input.module.css'

function Input({text, signo, changeValue, value, isResult, traceError}) {

    const [currentValue, setCurrentValue] = useState(value);
    const [error, setError] = useState(false);

    const valida = (event) => {
        let input = event.target.value;
        if(input === ''){
            setCurrentValue('');
            setError(true);
            traceError(true);
        }else{
            if (input <= 0) input = 1;
            setError(false);
            setCurrentValue(input);
            changeValue(input)
            traceError(false);
        }
    }

    return (
        <div className={isResult ? styles.singleInputResult : styles.singleInput}>
            <p id={styles.text}>{text}</p>
            {
                signo === "$" ? 
                <div>$ <input type="number" id={text} min="1" className={error ? styles.inputmodError : styles.inputmod} list={text} name={text} 
                value={currentValue} onChange={valida}/></div>
                :
                <div><input type="number" id={text} min="1" list={text} className={error ? styles.inputmodError : styles.inputmod} name={text}
                value={currentValue} onChange={valida}/> %</div>
            }
        </div>
);
}

export default Input;

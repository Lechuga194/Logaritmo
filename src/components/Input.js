import React from 'react';
import styles from './input.module.css'

function Input({text, values, signo, changeValue, value, isResult}) {
    
    if(!value) value = 0;
        
    return (
        <div className={isResult ? styles.singleInputResult : styles.singleInput}>
            <p id={styles.text}>{text}</p>
            {
                signo === "$" ? 
                <div>$ <input type="number" id={styles.inputmod} list={text} name={text} defaultValue={value} onChange={changeValue}/></div>
                :
                <div><input type="number" list={text} id={styles.inputmod} name={text} defaultValue={value} onChange={changeValue}/> %</div>
            }
            <datalist id={text}>
                {
                    values.map((item, i) => {
                        return <option key={i} value={item}/>
                    })
                }
            </datalist>
        </div>
);
}

export default Input;

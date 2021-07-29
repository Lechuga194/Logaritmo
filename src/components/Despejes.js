import React from 'react';
import styles from './despejes.module.css'
import formula1 from '../static/formula1.png'
import formula2 from '../static/formula2.png'
import formula3 from '../static/formula3.png'
import formula4 from '../static/formula4.png'
import formula5 from '../static/formula5.png'

let images = [formula1, formula2, formula3, formula4, formula5];

function Despejes({windowWidth}) {
  return (
    <div className={windowWidth <= 900 ? styles.imageContainerMovil : styles.imageContainer}>
        {
            images.map((img, i) => {
                return <div key={i} id={styles.mix}>{i+1+".-"}<img key={i} src={img} alt="formula"></img></div>
            })
        }
    </div>
  );
}

export default Despejes;

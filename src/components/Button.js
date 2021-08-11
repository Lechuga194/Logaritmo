import React from "react";
import styles from "./button.module.css";

function Button({ redirect, text }) {
    return (
        <div className={styles.button}>
            <nav onClick={redirect}>
                <ul>
                    <li>
                        {text}
                        <span></span>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Button;

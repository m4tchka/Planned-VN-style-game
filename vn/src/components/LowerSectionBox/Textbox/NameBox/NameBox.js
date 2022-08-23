import styles from "./NameBox.module.css";

function NameBox ( {CharacterName} ) {

    return (
        <div className={styles.NameBox}>
            <p className={styles.NameBar}>{CharacterName}</p>
        </div>
    )
};
export { NameBox }; 
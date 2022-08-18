import styles from "./NameBox.module.css";

function NameBox ( {CharacterName} ) {

    return (
        <div className={styles.NameBox}>
            <p className="NameBar">{CharacterName}</p>
        </div>
    )
};
export { NameBox }; 
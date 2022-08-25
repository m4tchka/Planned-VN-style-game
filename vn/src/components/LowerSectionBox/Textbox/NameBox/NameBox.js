import styles from "./NameBox.module.css";

function NameBox ( {CharacterName} ) {

    return (
        <div className={styles.NameBox}>
            <h3 className="NameBar">{CharacterName}</h3>
        </div>
    )
};
export { NameBox }; 
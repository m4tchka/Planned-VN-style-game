import styles from "./NameBox.module.css";

function NameBox ( {CharacterName} ) {
    /* 
    In order to make diffent names have different styles, do not use css modules,
    and instead have h3's id = {CharacterName} (passed as prop above) and make extra
    entries in Namebox.css corresponding for each character name that will have different styling.
    */
    return (
        <div className={styles.NameBox}>
            <h3 className={styles.NameBar} id={styles.CharacterName}>{CharacterName}</h3>
        </div>
    )
};
export { NameBox }; 
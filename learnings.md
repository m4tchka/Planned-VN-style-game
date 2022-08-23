-   Q: What is the "<>" element ?

    -   A1: A "Fragment" component, used to avoid having to use actual DOM nodes to wrap components (i.e. to stop using too many \<div>s

-   Q: Why are my CSS classes correctly applying on _npm start_ but not on deployment even though they're the same repo ?
    -   A1: Open the _sources_ tab in the console and look at the CSS files there - In particular look for any **SEMI-COLONS AFTER CLOSING CURLY BRACKETS**.
    -   A2: Rename each .css file to .module.css; change imports to
    ```js
    import styles from x.module.css
    ```
    and change class/ids in the _JSX_ to be
    ```jsx
    className={styles.className}
    ```
-   Q: How to view contents of localStorage keys ? - (Remember to JSON.stringify before "set"ing)

    -   A: chrome: f12 (console) -> application (top bar) -> Storage -> Local Storage

-   Q: How to update list of branches from remotes/origin ?
    -   A: git remote update origin --prune

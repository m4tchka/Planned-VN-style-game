-   Q: What is the "<>" element ?

    -   A: A "Fragment" component, used to avoid having to use actual DOM nodes to wrap components (i.e. to stop using too many \<div>s

-   Q: How can I stop a new browser window/ tab opening every time I use _npm start_ ?
    -   A: Add a .env file and put ```BROWSER="none"``` in it somewhere.

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

-   Q: How to get local images to display on deploy AND make them able to added in via a map of an array of a separate file ?

    -   A: Add the images to a folder in /public and access the images in that folder from wherever the images are actually rendered by setting the src in the following format as a prop:
    ```jsx
    ...app.js
    <renderLocalImage imgsrc=`${process.env.PUBLIC_URL}/imagesFolder/.../x.png`/>
    ...renderLocalImage.js
    function renderLocalImage(imgsrc) {
        return <img src={imgsrc} />;
    }
    ```
-   Q: Should I make a plan for large components/ features ?

    - A: Yes

-   Q: Should I make a plan for small components/ features ?

    - A: ~~No~~ YES

-   Q: Why aren't my installed packages working ?

    - A: Because I installed them in the wrong directory (needed to be in /vn, otherwise it creates new, separate _package_, *package_lock* & _node_modules_ folders)

-   Q: Why aren't my .env variables being picked up ?

    - A1: Since this is a React project, .env variables need a prefix of *REACT_APP_*

    - A2: Reboot server first after every change to .env  (_ctrl + c_ + _npm start_)

    - A3: There should be no commas after each variable (it's not an object (at first))
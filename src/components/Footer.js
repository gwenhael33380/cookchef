import styles from "./Footer.module.scss"

function Footer() {
    return (
        <footer className={`d-flex flex-row align-item-center justify-content-center p-20 ${styles.footer}`}>
        <p>Copyright © 2022 Cookchef, Inc</p>
        </footer>

    );
}

export default Footer;
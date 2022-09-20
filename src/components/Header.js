
import styles from "./Header.module.scss";
import cookchef from "../assets/images/cookchef.png";
function Header() {
    return (    
    <header className={`${styles.header} d-flex flex-row align-items-center`}> 
    <i class="fa-solid fa-bars mr-15"></i>
    <div className="flex-fill">
    <img src={cookchef} alt="logo cookchef" />
    </div>
    <ul>
        <button className="mr-5 btn btn-reverse-primary">
            <i class="fa-solid fa-basket-shopping mr-5" ></i>
            <span>panier</span>
        </button>
        <button className="btn btn-primary">connexion</button>

    </ul>
    </header>
    );
}

export default Header;
import { Link  } from "react-router-dom";
import navList from "../navList";
import styles from "./Header.module.css";

const Header = () => {
    return (
    <div className={styles.header_inner}>
        <Link to={`${process.env.PUBLIC_URL}/`}><img src ={process.env.PUBLIC_URL + '/logo.png'} alt="logo"/></Link>
        <nav className={styles.nav}>
            <ul>
                {navList.map(({title, path}) => {
                    return <li key={title}>
                        <Link to={`/page/${path}`}>{title}</Link>
                    </li>
                })}
            </ul>
        </nav>
    </div>
    )
}

export default Header
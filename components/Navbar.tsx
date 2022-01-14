import Image from "next/image"
import styles from "../styles/Navbar.module.scss"

function Navbar() {
    return (
        <div className={styles.container}>   
            <Image
                alt="logo"
                src="/images/logo.svg"
                width={176}
                height={52}
            />
            <nav className={styles.nav}>
                <ul >
                    <li>
                        <a href="#">Features</a>
                    </li>
                    <li>
                        <a href="#">Team</a>
                    </li>
                    <li>
                        <a href="#">Sign In</a>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar

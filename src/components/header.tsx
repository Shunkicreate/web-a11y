import Link from "next/link"
import style from "./header.module.css"

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.top}>
                <Link href={"/"}>Webアクセシビリティ勉強会</Link>
            </div>
            <nav className={style.nav}>
                <Link href={"/"}>Top</Link>
            </nav>
        </header>
    )
}

export default Header
import Link from "next/link"
const Header = () => {
    return (
        <header style={{ minHeight: "4rem", borderBottom: "1px solid #999", borderColor: "rgba(0, 0, 0)", display:"flex",  justifyContent: "space-between"
    }}>
            <div style={{ margin:"auto 4rem", backgroundColor: "0000" }}>
                <Link href={"/"}>Webアクセシビリティ勉強会</Link>
            </div>
            <nav style={{ margin:"auto 4rem" }}>
                <Link href={"/"}>Top</Link>
            </nav>
        </header>
    )
}

export default Header
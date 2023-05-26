import Link from "next/link"
const Header = () => {
    return (
        <header style={{ minHeight: "4rem", borderBottom: "1px solid #999", borderColor: "rgba(0, 0, 0)", display:"flex",  justifyContent: "space-between"
    }}>
            <div style={{ width:"fit-content", height:"fit-content", margin:"auto 4rem" }}>
                Webアクセシビリティ勉強会
            </div>
            <nav style={{ margin:"auto 4rem" }}>
                <Link href={"/"}>Top</Link>
            </nav>
        </header>
    )
}

export default Header
import style from "./header.module.css"
import logo from "../../assets/img/logo.svg"
function Header() {
    return (
        <div className={style.container}>
            <img className={style.logo} src={logo} alt="makan logo" />
            <div className={style.actions}>
                <div>جاباما تجربه</div>
                <div>مورد علاقه‌ها</div>
                <button>ورود</button>
            </div>
        </div>
    );
}

export default Header;
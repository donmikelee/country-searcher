import { useState, useEffect } from "react"
import IconSVG from "../../controls/IconSVG/IconSVG";

const Nav = () => {
    const [darkmode, setDarkmode] = useState(() => {
        return localStorage.getItem("darkmode") === "true";
    });

    useEffect(() => {
        if (darkmode) {
            document.body.classList.add("darkmode");
        } else {
            document.body.classList.remove("darkmode");
        }

        localStorage.setItem("darkmode", darkmode.toString());
    }, [darkmode]);

    const handlerDarkmodeChange = () => {
        setDarkmode((prevState => !prevState))
    }

    return (  
        <nav className="navigation">
            <div className="logo">
                <a href="/" className="logo-link">Where in the world?</a>
            </div>
            <button className="theme-changer" onClick={handlerDarkmodeChange}>
                <IconSVG name={"moon"}></IconSVG>
                <span className="theme-changer-text">Dark Mode</span>
            </button>
        </nav>
    );
}
 
export default Nav;
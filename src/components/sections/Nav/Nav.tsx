const Nav = () => {
    return (  
        <nav className="navigation">
            <div className="logo">
                <a href="http://localhost:5173/" className="logo-link">Where in the world?</a>
            </div>
            <button className="theme-changer">
                <span className="theme-changer-text">Dark Mode</span>
            </button>
        </nav>
    );
}
 
export default Nav;
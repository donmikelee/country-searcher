import { useNavigate } from 'react-router-dom';

const Nav = () => {

    const navigate = useNavigate();

    const redirectToRoot = () => {
      navigate('/');
    };

    return (  
        <nav className="navigation">
            <div className="logo">
                <a onClick={redirectToRoot} className="logo-link">Where in the world?</a>
            </div>
            <button className="theme-changer">
                <span className="theme-changer-text">Dark Mode</span>
            </button>
        </nav>
    );
}
 
export default Nav;
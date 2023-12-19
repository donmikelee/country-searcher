interface HeaderProps {
    className: string;
}

const Header: React.FC<HeaderProps> = ({className}) => {
    return (  
        <div className={className}></div>
    );
}
 
export default Header;
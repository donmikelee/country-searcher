interface HeaderProps {
    className: string;
    children: string;
}

const Header: React.FC<HeaderProps> = ({className, children}) => {
    return (  
        <div className={className}>{children}</div>
    );
}
 
export default Header;
import Header from "./components/sections/Header";

interface BEMProps {
  block: string;
  element?: string;
  modifiers?: string[];
}

const generateBEMClassName = ({ block, element, modifiers }: BEMProps): string => {
  let className = block;

  if (element) {
    className += `__${element}`;
  }

  if (modifiers && modifiers.length > 0) {
    className += modifiers.map((modifier) => `${block}--${modifier}`).join('');
  }

  return className
}

const App = () => {

  const headerClass = generateBEMClassName( { block: 'csApp', element: 'Header' });
  return ( 
    <div className="csApp">
      <Header className={headerClass}>Dupa</Header>
    </div>
  );
}
 
export default App;
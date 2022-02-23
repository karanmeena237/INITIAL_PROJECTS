// import logo from './logo.svg';
import './App.css';
// import { Link } from 'react-router-dom';
import LeftBar from './Leftbar';
import Right from './Right';

function App() {
  return (
    <div className="App" style={{"padding":"0","margin":"0","backgroundColor":"#393c49 !important"}}>
     <LeftBar/>
    <Right/>
      </div>
    
  );
}

export default App;

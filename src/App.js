import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import Tabela from './components/tabela';

function App() {
  
  return (          

      <div style={{width: '100%'}}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>           
            <Tabela/>
        </div>      
      </div>
  );
}

export default App;

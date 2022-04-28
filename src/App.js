import Tabela from './components/tabela';
import {BrowserRouter, Route,  Link, Switch} from "react-router-dom";
import Home from "./home";
import './style.css'

function App() {  
  return (
      <div style={{width: '100%'}}>        
          <BrowserRouter>
            <div id='fixo'>
              <ul>
                <li>
                  <Link to='/' className='link'>Home</Link><br/>
                </li>
                <li>
                  <Link to='/tabela' className='link'>Alunos</Link>
                </li>
              </ul>
            </div>
            <Switch>
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Route exact path="/" component={Home}/>
                <Route path="/tabela" component={Tabela}/>
              </div>
            </Switch>          
          </BrowserRouter>           
      </div>
  );
}

export default App;

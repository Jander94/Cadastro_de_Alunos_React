import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../home";
import Tabela from "./tabela";
import Header from "./header";

function Routes(){
    return(
        <div style={{width: '100%'}}>        
          <BrowserRouter>
            <Header/>
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
export default Routes;
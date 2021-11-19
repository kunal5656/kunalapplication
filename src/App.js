import './App.css';
import {  Route,HashRouter } from 'react-router-dom';
import Culture from './Culture';
import Home from './Home';
function App() {
  return (
    <>
   <HashRouter>
        <div>
          <Route  path="/Culture" component={Culture}/>
          <Route  path="/" component={Home} />
        </div>
        </HashRouter> 
    </>
  
  )
}

export default App;


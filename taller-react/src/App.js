
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Album from './componentes/Album';
import LogIn from './componentes/LogIn';


function App() {
  return (
    <div >
      <Router>
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/Inicio/:idUsuario" component={Album} />
      </Router>
    </div>
  );
}

export default App;


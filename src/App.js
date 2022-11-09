import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Formulario from './pages/Formulario';
import API from './pages/api';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/pages/Formulario.js'element={<Formulario/>}></Route>
        <Route path='/pages/Collections.js'element={<Collections/>}></Route>
        <Route path='/pages/api.js'element={<API/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

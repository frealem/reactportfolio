import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import { Home } from './components/Home';
import { Service } from './components/Service';
import { Contact } from './components/Contact';
import { Portfolio } from './components/portfolio';
import { About } from './components/about';
import {Navbar} from './components/navbar'
import { Footer } from './components/footer';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar/>
    <Footer/>
      <Routes>
      <Route path="/" Component={Home} />
   <Route path="/Contact" Component={Contact} />
   <Route path="/Service" Component={Service} />
   <Route path="/about" Component={About} />
   <Route path="/portfolio" Component={Portfolio} />
      </Routes></Router>
    </div>
  );
}

export default App;

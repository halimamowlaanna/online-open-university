import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router , Switch,Route} from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import FileNotFound from './component/FileNotFound/FileNotFound';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Registration from './component/Registration/Registration';
import Services from './component/Services/Services';

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/services">
          <Services></Services>
        </Route>
        <Route exact path="/registration">
          <Registration></Registration>
        </Route>
        <Route path="*">
          <FileNotFound></FileNotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

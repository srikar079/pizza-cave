import "./App.css";
import  {Container} from "react-bootstrap";
import TopBar from "./components/TopBar";
import { BrowserRouter, Route,Switch } from "react-router-dom/cjs/react-router-dom.min";
import About from "./components/About";
import Contact from "./components/Contact";
import policy from "./components/policy";
import NavBar  from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
function App() {
  return (
    <>
    <BrowserRouter>
         <TopBar/>
         <NavBar/>
         <Switch>
          <Route path="/about" component={About} exact />
          <Route path='/contact' component={Contact} exact/>
          <Route path='/policy' component={policy} exact/>
          <Route path='/' component={HomeScreen} exact/>

         </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;

import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home.page";
import About from "./pages/About/About.page";
import ContactPage from "./pages/Contact/Contact.page";
import Portfolio from "./pages/Portfolio/Portfolio.page";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Switch>
    </div>
  );
}

export default App;

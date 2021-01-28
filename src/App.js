import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home.page";
import Pricing from "./pages/Pricing/Pricing.page";
import About from "./pages/About/About.page";
import ContactPage from "./pages/Contact/Contact.page";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/pricing" component={Pricing} />
      </Switch>
    </div>
  );
}

export default App;

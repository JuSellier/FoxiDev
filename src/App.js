import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home.page";
import About from "./pages/About/About.page";
import ContactPage from "./pages/Contact/Contact.page";
import ExperimentsPage from "./pages/Experiments/Experiments.page";
import DynamicCursor from "./pages/Experiments/DynamicCursor/DynamicCursor";
import ProgressiveScrollbar from "./pages/Experiments/ProgressiveScrollbar/ProgressiveScrollbar";
import InteractiveBackground from "./pages/Experiments/InteractiveBackground/InteractiveBackground";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={ContactPage} />

        <Route exact path="/experiments" component={ExperimentsPage} />
        <Route exact path="/e/dynamic-cursor" component={DynamicCursor} />
        <Route
          exact
          path="/e/interactive-background"
          component={InteractiveBackground}
        />
        <Route
          exact
          path="/e/progressive-scrollbar"
          component={ProgressiveScrollbar}
        />
      </Switch>
    </div>
  );
}

export default App;

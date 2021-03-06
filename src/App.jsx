import { useContext, useReducer, useState } from "react";
import Store from "./Store/Store";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { Sponsors } from "./Pages/sponsors";

import Reducer from "./Store/Reducer";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Devs } from "./Pages/Devs";
import { EventDescription } from "./Pages/EventDescription";
import { Events } from "./Pages/Events";
import { Queries } from "./Pages/Queries";
import { Category } from "./Pages/Category";
import { GuestLecture } from "./Pages/GuestLecture";
import { ErrorPage } from "./Pages/Errorpage";
import { UserProfilePage } from "./Pages/UserProfilePage";
import { Testimonial } from "./Pages/Testimonial";
import { Particle } from "./Components/particle";
import SplashScreen from "./Components/SplashScreen";
import TopBar from "./Components/TopBar";
import Footer from "./Components/Footer";
function App() {
  const initialState = useContext(Store);
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [splash, setSplash] = useState(true);
  let routes = (
    <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/about" exact component={About} />

      <Route path="/contact" exact component={Contact} />

      <Route path="/devs" exact component={Devs} />

      <Route path="/lectures" exact component={GuestLecture} />

      <Route path="/categories" exact component={Category} />

      <Route path="/sponsers" exact component={Sponsors} />

      <Route path="/events/:category" exact component={Events} />

      <Route
        path="/eventdetails/:category/:event"
        exact
        component={EventDescription}
      />
      <Route path="/user" exact component={UserProfilePage} />
      <Route path="/sponsors" exact component={Sponsors} />
      <Route path="/testimonial" exact component={Testimonial} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  );

  setTimeout(() => {
    setSplash(false);
  }, 2000);

  if (splash) return <SplashScreen />;

  return (
    <Store.Provider value={[state, dispatch]}>
      <div className="App">
        <Router>
          <TopBar />
          {routes}
        </Router>
        <Queries />
        <Footer />
      </div>
    </Store.Provider>
  );
}

export default App;

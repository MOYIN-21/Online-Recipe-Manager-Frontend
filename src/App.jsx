import { useRoutes } from "react-router-dom";
import { ROUTES } from "./websiteLandingPage/routes/Route"; 
import './App.css'
import {Provider} from "react-redux";
import store from "./redux/store.js";

function App() {
  const routing = useRoutes(ROUTES);
  return (
      <Provider store={store}>
        {routing}
      </Provider>
  )

}

export default App;

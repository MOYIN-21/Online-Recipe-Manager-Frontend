import { useRoutes } from "react-router-dom";
import { ROUTES } from "./websiteLandingPage/routes/Route"; 
import './App.css'

function App() {
  return useRoutes(ROUTES);
}

export default App;

import { useRoutes } from "react-router-dom";
import { ROUTES } from "./websiteLandingPage/routes/Route"; 
import './App.css'
import {Provider} from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from './redux/store.js'


function App() {
  const routing = useRoutes(ROUTES);
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {routing}
        </PersistGate>
      </Provider>
  )

}

export default App;

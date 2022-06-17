import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import UserListScreen from './pages/UserScreen';
import UserDetailPage from './components/UserDetailPage';
import AllTables from './pages/AllTables';
import TableDetails from './pages/TableDetails';
import FoodDetail from './pages/FoodDetail/FoodDetail';

setupIonicReact();

// ionic capacitor run ios -l --external

const App: React.FC = () => (
  <IonApp>
    <Router>
      <Route exact path="/home" component={UserListScreen} />
      <Route exact path="/all-user" component={UserListScreen} />
      <Route exact path="/user" component={UserDetailPage} />
      <Route exact path="/tables" component={AllTables} />
      <Route exact path="/tables/:id" component={TableDetails} />
      <Route exact path="/fooddetails/:id" component={FoodDetail} />
    </Router>
  </IonApp >
);

export default App;

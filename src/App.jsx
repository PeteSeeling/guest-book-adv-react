import { Route, Switch } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Login from './views/Auth/Auth';
import Header from './components/Layout/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'



export default function App() {
  return (
    <UserProvider>
      <Header />
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>

        <PrivateRoute>
          <EntryList />
        </PrivateRoute>
      </Switch>

    </UserProvider>
  )
}

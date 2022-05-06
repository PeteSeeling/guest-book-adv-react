import { Router, Switch } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Login from './views/Auth/Auth';
import Header from './components/Layout/Header';


export default function App() {
  return (
    <UserProvider>
      <Header />

    </UserProvider>
  )
}

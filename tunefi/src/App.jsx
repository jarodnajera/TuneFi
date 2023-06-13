import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Root from './screens/Root';
import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import ArtistProfile from './screens/ArtistProfile';
import AudioPlayer from './components/audio/AudioPlayer';
import { HandleSignUp, HandleLogin  } from './actions/AuthActions';


import './App.css'
import './components/audio/audio.css';
import './components/audio/customize-progress-bar.css';

// Using React Router
// Initializing BrowserRouter
const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
        action: HandleLogin,
      },
      {
        path: '/signup',
        element: <SignUp />,
        action: HandleSignUp,
      },
      {
        path: '/artist/:artistID',
        element: <ArtistProfile />,
      }
    ]
  },

]);

// App shell 
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}
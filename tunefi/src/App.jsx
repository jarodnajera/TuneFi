import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

// Components
import Root from './screens/Root';
import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import ArtistProfile from './screens/ArtistProfile';
import MusicTab from './screens/MusicTab';
import EventsTab from './screens/EventsTab';
import CommunityTab from './screens/CommunityTab';
import Search from './screens/Search';

// Loaders
import { ProfileLoader, PostsLoader, EventsLoader } from './loaders/ArtistLoaders';
import { SearchLoader } from './loaders/SearchLoaders';

// Actions
import { HandleSignUp, HandleLogin } from './actions/AuthActions';
import { UpdateArtist, AddPost, AddEvent } from './actions/ArtistActions';

import './App.css'

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
        path: '/artist/:artistID/',
        element: <ArtistProfile />,
        loader: ProfileLoader,
        action: UpdateArtist,
        children: [
          {
            path: 'music',
            element: <MusicTab />,
          },
          {
            path: 'events',
            element: <EventsTab />,
            action: AddEvent,
            loader: EventsLoader,
          },
          {
            path: 'community',
            element: <CommunityTab />,
            action: AddPost,
            loader: PostsLoader,
          },
        ],
      },
      {
        path: '/search/:query',
        element: <Search />,
        loader: SearchLoader,
      },
    ],
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
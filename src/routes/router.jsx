import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from './Home';
import Favorites from './Favorites';
import Auth from './Auth';
import Error from './Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: '/favorites', element: <Favorites /> },
      { path: '/auth', element: <Auth /> },
    ],
    errorElement: <Error />,
  },
]);

export default router;

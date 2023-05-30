import Landing from './pages/landing/Landing';
import About from './pages/landing/sections/about/About';

const routes = [
  {
    path: '/',
    element: <Landing />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
];

export default routes;

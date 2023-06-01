import Contact from './pages/contact/Contact';
import Landing from './pages/landing/Landing';
import About from './pages/landing/sections/about/About';
import Resume from './pages/landing/sections/resume/Resume';

const routes = [
  {
    path: '/',
    element: <Landing />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
];

export default routes;

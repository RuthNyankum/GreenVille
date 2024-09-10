import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Payment from './pages/payment';
import Contact from './pages/contact';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about-us',
      element: <About />,
    },
    {
      path: '/payment',
      element: <Payment />,
    },
    {
      path: 'contact-us',
      element: <Contact />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

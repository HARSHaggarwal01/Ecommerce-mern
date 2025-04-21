import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "./app/store.js";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Contact from "./pages/contact";
import Login from './pages/auth/Login.jsx';
import Register from './pages/auth/Register.jsx';
import Home from "./pages/home/index";
import ProductList from "./pages/product/index";

// Create a QueryClient instance
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        index:true,
        element:<Home />
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"users/login",
        element:<Login />
      },
      {
        path:"users/register",
        element:<Register />
      },
      {
        path:"/shop-list",
        element:<ProductList />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </StrictMode>
)

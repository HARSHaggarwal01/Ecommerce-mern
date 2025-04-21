  import './App.css'
  import Home from "./pages/home/index";
  import Header from "./component/header/Header";
  import Footer from './component/Footer';
  import Toaster from './component/toaster/Toaster';
  import { Outlet } from 'react-router-dom';

  function App() {

    return (
      <>
        <Toaster />
        <Header />
          <Outlet />
        <Footer />
      </>
    )
  }

  export default App

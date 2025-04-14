  import './App.css'
  import Home from "./pages/home/index";
  import Header from "./component/header/Header";
  import Footer from './component/Footer';
  import { Routes ,Route} from 'react-router-dom';
  import Login from "./pages/auth/Login";
  import Register from "./pages/auth/Register";
  import Toaster from './component/toaster/Toaster';
  import Contact from "./pages/contact";

  function App() {

    return (
      <>
        <Toaster />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/register" element={<Register />} />
        </Routes>
        <Footer />
      </>
    )
  }

  export default App

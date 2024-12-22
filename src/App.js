import logo from './logo.svg';
import './App.css';

import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

function App() {

  const { pathname } = useLocation();

  if (pathname === '/signin') {
    return (
      <div id='wrap'>
        <Header />
        <Routes>
          <Route path='/signin/*' exact={true} element={<SignIn />}></Route>
        </Routes>
        <Footer />
      </div>
    );
  }

  if (pathname === '/signup') {
    return (
      <div id='wrap'>
        <Header />
        <Routes>
          <Route path='/signup/*' exact={true} element={<SignUp />}></Route>
        </Routes>
        <Footer />
      </div>

    );
  }

  return (
    <div id='wrap'>
      <Header />
      <Routes>
        <Route path='/*' exact={true} element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
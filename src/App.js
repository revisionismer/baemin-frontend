import logo from './logo.svg';
import './App.css';

import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Store from './pages/store/Store';
import MyPage from './pages/user/MyPage';

import Likes from './pages/store/Likes';
import OrderList from './pages/order/OrderList';

function App() {

  const { pathname } = useLocation();

  if (pathname === '/signin') {
    return (
      <div id='app'>
        <Routes>
          <Route path='/signin/*' exact={true} element={<SignIn />}></Route>
        </Routes>
      </div>
    );
  }

  if (pathname === '/signup') {
    return (
      <div id='app'>
        <Routes>
          <Route path='/signup/*' exact={true} element={<SignUp />}></Route>
        </Routes>
      </div>

    );
  }

  return (
    <div id='wrap'>
      <Header />
      <Routes>
        <Route path='/*' exact={true} element={<Home />}></Route>
        <Route path='/home' exact={true} element={<Home />}></Route>
        <Route path='/likes' exact={true} element={<Likes />}></Route>
        <Route path='/order/orderList' exact={true} element={<OrderList />}></Route>
        <Route path='/user/myPage' exact={true} element={<MyPage />}></Route>
        <Route path='/store' exact={true} element={<Store />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

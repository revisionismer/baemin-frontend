import logo from './logo.svg';
import './App.css';

import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/*' exact={true} element={<Main />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

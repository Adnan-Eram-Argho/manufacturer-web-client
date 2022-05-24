
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Purchase from './Purchase/Purchase';
import Header from './Shared/Header';
import NotFound from './Shared/NotFound';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='purchase' element={<Purchase />}></Route>
      </Routes>
    </div >
  );
}

export default App;

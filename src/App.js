
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Header from './Shared/Header';
import NotFound from './Shared/NotFound';

function App() {
  return (
    <div className="App ">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div >
  );
}

export default App;

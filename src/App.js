
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Home/Home';
import SignIn from './Login/SignIn';
import SignUp from './Login/SignUp';
import Purchase from './Purchase/Purchase';
import Header from './Shared/Header';
import NotFound from './Shared/NotFound';
import RequireAuth from './Shared/RequireAuth'

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>



        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}>  </Route>
      </Routes>
      <ToastContainer />
    </div >
  );
}

export default App;

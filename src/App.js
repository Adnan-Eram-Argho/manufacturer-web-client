import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import DashBoard from './Dashbooard/DashBoard';
import MyProfile from './Dashbooard/MyProfile';
import Orders from './Dashbooard/Orders';
import Review from './Dashbooard/Review';
import Home from './Home/Home';
import SignIn from './Login/SignIn';
import SignUp from './Login/SignUp';
import Portfolio from './Portfolio/Portfolio';
import Purchase from './Purchase/Purchase';
import Footer from './Shared/Footer';
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


        <Route path='/dashboard' element={<RequireAuth><DashBoard /></RequireAuth>}>
          <Route index element={<Orders></Orders>}></Route>
          <Route path='review' element={<Review></Review>}></Route>

          <Route path='profile' element={<MyProfile />}></Route>
        </Route>

        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}>  </Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div >
  );
}

export default App;

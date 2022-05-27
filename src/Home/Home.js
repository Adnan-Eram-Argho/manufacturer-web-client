import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Footer from '../Shared/Footer';
import Loading from '../Shared/Loading';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Events from './Events';
import LearnPainting from './LearnPainting';
import Reviews from './Reviews';
import Tools from './Tools';


const Home = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user)
    return (
        <div className='container mx-auto'>
            <Banner />
            <Tools />
            <BusinessSummary />
            <Reviews />
            <Events />
            <LearnPainting />
            <Footer />

        </div>
    );
};

export default Home;
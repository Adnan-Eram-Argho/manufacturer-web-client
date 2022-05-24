import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Events from './Events';
import LearnPainting from './LearnPainting';

import Reviews from './Reviews';
import Tools from './Tools';


const Home = () => {
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
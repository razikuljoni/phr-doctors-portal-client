import React from 'react';
import Banner from '../../assets/components/Banner/Banner';
import Info from '../../assets/components/InfoCard/Info/Info';
import Services from '../../assets/components/Services/Services/Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner/>
            <Info/>
            <Services/>
        </div>
    );
};

export default Home;
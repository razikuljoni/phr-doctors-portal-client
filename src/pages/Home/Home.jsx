import React from 'react';
import Banner from '../../assets/components/Banner/Banner';
import ContactUs from '../../assets/components/ContactUs/ContactUs';
import Info from '../../assets/components/InfoCard/Info/Info';
import MakeAppointment from '../../assets/components/MakeAppointment/MakeAppointment';
import Services from '../../assets/components/Services/Services/Services';
import Testimonials from '../../assets/components/Testimonials/Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner/>
            <Info/>
            <Services/>
            <MakeAppointment/>
            <Testimonials/>
            <ContactUs/>
        </div>
    );
};

export default Home;
import Hero from '../Components/Hero/Hero';
import Solutions from '../Components/Solutions/Solutions';
import Industries from '../Components/Industries/Industries';
import Clients from '../Components/Clients/Clients';
import { Contact } from '../Components/Contact/Contact';
import AboutUsSection from '../Components/AboutUs/AboutUs';
import Testimonials from '../Components/Testimonials/Testimonials';
import GeospatialHero from '../Components/Geospatial/Geospatial-hero';
import AiTerritorial from '../Components/Territorial/AiTerritorial';

const Home = () => {
    return (
        <div>
            <Hero/>
            <GeospatialHero/>
            <Solutions/>
            <AiTerritorial/>
            <Industries/>
            <AboutUsSection/>
            <Clients/>
            <Contact/>
            <Testimonials/>
        </div>
    );
};

export default Home;
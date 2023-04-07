import Description from "../components/AboutUs/Description";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import Jumbotron from '../components/AboutUs/Jumbotron'

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <Jumbotron/>
            <Description />
            <Footer/>
        </>
    )
}

export default AboutUs
import Navbar from '../components/Navbar'
import Jumbotron from '../components/Home/Jumbotron'
import Inspiration from '../components/Home/Inspiration'
import Promotion from '../components/Home/Promotion'
import Newsletter from '../components/Home/Newsletter'
import Footer from '../components/Footer'
import ProductList from '../components/Product/ProductList'


const Home = ()=> {
    return (
        <>
            <Navbar />
            <Jumbotron/>
            <ProductList/>
            <Inspiration/>
            <Promotion/>
            <Newsletter/>
            <Footer/>
        </>
    )
}
export default Home
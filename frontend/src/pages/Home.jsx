import Navbar from '../components/Common/Navbar'
import Jumbotron from '../components/Home/Jumbotron'
import Inspiration from '../components/Home/Inspiration'
import Promotion from '../components/Home/Promotion'
import Newsletter from '../components/Home/Newsletter'
import Footer from '../components/Common/Footer'
import ProductList from '../components/Product/ProductList'
import Prompt from '../components/Common/Prompt'

import { FilterProvider } from "../context/FilterContext";


const Home = () => {
    return (
        <>
            <Navbar />
            <Jumbotron />
            <Prompt text={'Most Popular'} />
            <FilterProvider>
                <ProductList />
            </FilterProvider>
            <Inspiration />
            <Promotion />
            <Newsletter />
            <Footer />
        </>
    )
}
export default Home
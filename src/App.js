import Agency from './components/Agency/Agency';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';
import Introduction from './components/Introduction/Introduction';
import Navbar from './components/Navbar/Navbar';
import Number from './components/Number/Number';
import ProductCms from './components/ProductCms/ProductCms';
import Sales from './components/Sales/Sales';
//import { Routes, Route } from 'react-router-dom';
// <Routes><Route path="/" element={<HomePage />}></Route></Routes>
function App() {
    return (
        <>
            <Navbar />
            <Introduction />
            <Number />
            <Feature />
            <ProductCms />
            <Agency />
            {/* <Sales /> */}
            <Footer />
        </>
    );
}

export default App;

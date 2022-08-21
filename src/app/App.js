import './App.css';
import HeadeComponents from '../components/HeadeComponents';
import CoverComponent from '../components/CoverComponent';
import BlogComponent from '../components/BlogComponent';
import FaqComponent from '../components/FaqComponent';
import FooterComponent from '../components/FooterComponent';
import ProductComponent from '../components/ProductComponent';

function App() {
  return (
    <div>
        <HeadeComponents />
        <CoverComponent />
        <BlogComponent />
        <FaqComponent />
        <FooterComponent />
        <ProductComponent />
    </div>
  );
}

export default App;

import './App.css';
import HeadeComponents from '../components/HeadeComponents';
import CoverComponent from '../components/CoverComponent';
import BlogComponent from '../components/BlogComponent';
import FaqComponent from '../components/FaqComponent';
import FaqChild from '../components/FaqChild';

function App() {
  return (
    <div>
        <HeadeComponents />
        <CoverComponent />
        <BlogComponent />
        <FaqComponent />
        <FaqChild />
    </div>
  );
}

export default App;

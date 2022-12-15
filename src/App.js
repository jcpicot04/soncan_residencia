import logo from './logo.svg';
import './App.css';
import { Navbar,Home,Description,Services,Price,Installations,Contact,Footer } from './components';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Home/>
      <Description/>
      <Services/>
      <Price/>
      <Installations/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

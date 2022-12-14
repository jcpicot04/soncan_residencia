import logo from './logo.svg';
import './App.css';
import { Navbar,Home,Description,Services,Price,Installations,Contact } from './components';

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
    </div>
  );
}

export default App;

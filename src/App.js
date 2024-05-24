import './App.css';
import Hero from './components/Hero/Hero';

import Navbar from './components/Navbar/Navbar.js';

function App() {
  return (
    <>
      <Navbar/>
      <div className='container'>
      <Hero/>
      </div>
    </>
  );
}

export default App;
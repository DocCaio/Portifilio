import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import WorkExperience from './components/WorkExperience';

function App() {
 

  return (
    <>
      
        <Navbar/>
        <div className='container'>
           <Hero/>
           <WorkExperience/>
        </div>
       
      
    
    </>
  )
}

export default App

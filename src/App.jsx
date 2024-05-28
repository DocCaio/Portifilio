import './App.css';
import ContactMe from './components/ContactMe';
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
           <ContactMe/>
        </div>
       
      
    
    </>
  )
}

export default App

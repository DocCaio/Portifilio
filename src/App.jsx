import './App.css';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { Projets } from './components/Projetcs';
//import WorkExperience from './components/WorkExperience';

function App() {
 

  return (
    <>
      
        <Navbar/>
        <div className='container'>
           <Hero/>
           {/*<WorkExperience/>*/}
           {/*<ContactMe/>*/}
           <Projets/>
        </div>
        <Footer/>
       
      
    
    </>
  )
}

export default App

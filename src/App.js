import logo from './logo.svg';
import './App.css';
import Hero from './components/Home/Hero';
import Program from './components/Programs/Programs';
import Reason from './Reason/Reason';
import Plans from './Plans/Plans';
import Testimonials from './Testimonials/Testimonials';
import Join from './Join/Join';
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="App">
     <Hero/>
     <Program/>
     <Reason/>
     <Plans/>
     <Testimonials/>
     <Join/>
     <Footer/>
    </div>
  );
}

export default App;

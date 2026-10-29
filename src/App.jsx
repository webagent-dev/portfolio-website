import { BrowserRouter } from 'react-router';
import Navbar from './component/navbar/Navbar';
import Contact from './component/contact/Contact';
import Feedback from './component/feedback/Feedbacks';
import Hero from './component/hero/Hero';
import Work from './component/work/Works';
import Experience from './component/experience/Experience';
import Tech from './component/tech/Tech';
import About from './component/about/About';

import './index.css'
const App = () => {
 return(
    <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />
              <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Work />
          <Feedback />
          <div className="relative z-0">
            <Contact />
            {/* <StarsCanvas /> */}
          </div>
        </div>
    </BrowserRouter>

  );
}

export default App

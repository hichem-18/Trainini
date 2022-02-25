import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Feature from './Components/Feature';
import Offer from './Components/Offer';
import About from './Components/About';
import Contact from './Components/Contact';
import Coach from './Components/Coach';
import Footer from './Components/Footer';
import Blog from './Components/Blog';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <Offer />
     <Coach />
     <Feature/>
     <About />
     <Blog />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-darker">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App; 
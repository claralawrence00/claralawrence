import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  const [blurAmount, setBlurAmount] = useState(0);
  const backgroundImage = 'https://i.imgur.com/uyMcgZ8.gif';

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: '#0a0a0a',
        backgroundImage: `url('${backgroundImage}')`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: blurAmount > 0 ? `blur(${blurAmount}px)` : 'none',
      }}
    >
      <div
        className="min-h-screen"
        style={{
          backgroundColor: 'rgba(10, 10, 10, 0.92)',
          backdropFilter: blurAmount > 0 ? `blur(${blurAmount}px)` : 'none',
        }}
      >
        <Navigation />

       

        <Hero />
        <About />
        <Gallery />
        <Contact />
      </div>
    </div>
  );
}

export default App;

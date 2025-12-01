import { useState, useEffect } from 'react';

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-fade-in ${
        scrolled ? 'bg-black/60 backdrop-blur-md' : 'bg-black/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-[#D4AF37] font-light text-xl tracking-[0.2em] hover:text-[#C8A95A] transition-colors"
        >
          ClaraLawrence
        </button>

        <div className="flex gap-10">
          {['about', 'gallery', 'contact'].map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-white/80 font-light text-sm tracking-[0.15em] uppercase hover:text-[#D4AF37] transition-colors animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

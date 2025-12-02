function Hero() {
  // UPUTE ZA PROMENU SLIKE:
  // 1. Zameni URL ispod sa svojom PNG slikom (punom veličinom portreta)
  // 2. Za vraćanje na originalnu malu sliku, koristi: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=600'
  const portraitImageUrl = 'https://gcdnb.pbrd.co/images/gBBcnMJ16Zkm.png?o=1';

  return (
    <section
      id="hero"
      className="relative w-full flex items-stretch"
    >
      {/* GLAVNI KONTEJNER - Tekst na levoj strani */}
      <div className="flex-1 flex items-center justify-center px-6 pt-20 pb-20 min-h-screen">
        <div className="max-w-2xl">
          <h1 className="font-serif text-7xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wide animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            Clara Lawrence
          </h1>

          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          ></div>

          <p className="text-[#D4AF37] text-xl md:text-2xl tracking-[0.3em] uppercase font-light mb-8 animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            Director of Public Relations
          </p>

          <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed tracking-wide animate-fade-in-up"
            style={{ animationDelay: '0.7s' }}
          >
            Welcome to my personal page! Here, you can explore my work, view photo galleries, and see examples of the projects I worked on.
          </p>
        </div>
      </div>

      {/* SLIKA NA DESNOJ STRANI - Počinje od navigation bara do kraja hero sekcije */}
      <div className="hidden lg:flex flex-5 items-stretch justify-center fixed right-0 top-0 h-screen w-1/2">
        <img
          src={portraitImageUrl}
          alt="Portrait"
          className="w-full h-full object-cover animate-fade-in-up"
          style={{ animationDelay: '0.9s' }}
        />
      </div>
    </section>
  );
}

export default Hero;

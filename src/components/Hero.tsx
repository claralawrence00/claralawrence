function Hero() {
  // Change this URL to your PNG image link
  const portraitImageUrl = 'https://gcdnb.pbrd.co/images/gBBcnMJ16Zkm.png?o=1';

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-7xl w-full flex items-center justify-between gap-8 lg:gap-16">
        <div className="flex-1 max-w-2xl">
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

        <div className="hidden lg:flex flex-1 items-center justify-center">
          <img
            src={portraitImageUrl}
            alt="Portrait"
            className="w-full max-w-sm h-auto object-cover animate-fade-in-up"
            style={{ animationDelay: '0.0s' }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

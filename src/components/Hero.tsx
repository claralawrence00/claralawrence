function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-20"
    >
      <div className="text-center max-w-6xl">
        <h1 className="font-serif text-8xl md:text-7xl lg:text-9xl text-white mb-6 tracking-wide animate-fade-in-up"
          style={{ animationDelay: '0.0s' }}
        >
          Clara Lawrence
        </h1>

        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.0s' }}
        ></div>

        <p className="text-[#D4AF37] text-xl md:text-2xl tracking-[0.3em] uppercase font-light mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.0s' }}
        >
          Director of Public Relations
        </p>

        <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed tracking-wide max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.0s' }}
        >
          Welcome to my personal page! Here, you can explore my work, view photo galleries, and see examples of the projects I worked on.
        </p>
      </div>
    </section>
  );
}

export default Hero;

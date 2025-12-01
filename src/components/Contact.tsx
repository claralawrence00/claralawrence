import { Mail, Phone, MapPin } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="font-serif text-5xl md:text-6xl text-white mb-8 tracking-wide text-center">
          Contact
        </h2>

        <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-16"></div>

        <div className="space-y-8">
          <div className="flex items-center justify-center gap-4 group">
            <Mail className="w-5 h-5 text-[#D4AF37] group-hover:text-[#C8A95A] transition-colors" strokeWidth={1} />
            <a
              href="mailto:clara.lawrence@lsmail.com"
              className="text-white/80 text-lg font-light tracking-wide hover:text-[#D4AF37] transition-colors"
            >
              clara.lawrence@lsmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 group">
            <Phone className="w-5 h-5 text-[#D4AF37] group-hover:text-[#C8A95A] transition-colors" strokeWidth={1} />
            <a
              href="tel:+45360588"
              className="text-white/80 text-lg font-light tracking-wide hover:text-[#D4AF37] transition-colors"
            >
              45360588
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 group">
            <MapPin className="w-5 h-5 text-[#D4AF37] group-hover:text-[#C8A95A] transition-colors" strokeWidth={1} />
            <span className="text-white/80 text-lg font-light tracking-wide">
              Los Santos, SA
            </span>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/50 text-sm font-light tracking-[0.2em]">
            © 2025 Clara Lawrence. All rights reserved.
          </p>
          <p className="text-white/50 text-sm font-light tracking-[0.2em]">
            
            (( This website is not affiliated with GTAW, it's solely purpose is to portray IC character ))
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;

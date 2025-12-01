import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface LightboxProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-[#D4AF37] hover:text-[#C8A95A] transition-colors"
      >
        <X size={32} strokeWidth={1} />
      </button>

      <div className="relative w-full h-full flex items-center justify-center px-4">
        <img
          src={images[currentIndex]}
          alt="Gallery"
          className="max-h-[90vh] max-w-[90vw] object-contain"
        />

        <button
          onClick={goToPrevious}
          className="absolute left-6 text-[#D4AF37] hover:text-[#C8A95A] transition-colors hover:scale-110"
        >
          <ChevronLeft size={40} strokeWidth={1} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-6 text-[#D4AF37] hover:text-[#C8A95A] transition-colors hover:scale-110"
        >
          <ChevronRight size={40} strokeWidth={1} />
        </button>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-[#D4AF37] font-light tracking-wide">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

export default Lightbox;

import { useState } from 'react';
import Lightbox from './Lightbox';
import { albums } from '../data/albums';

function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedAlbumId, setSelectedAlbumId] = useState<string | null>(null);

  const openLightbox = (albumId: string) => {
    setSelectedAlbumId(albumId);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedAlbumId(null);
  };

  const selectedAlbum = albums.find((a) => a.id === selectedAlbumId);

  return (
    <section id="gallery" className="min-h-screen px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl text-white mb-8 tracking-wide text-center">
          Albums
        </h2>

        <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => (
            <button
              key={album.id}
              onClick={() => openLightbox(album.id)}
              className="group relative aspect-[4/3] overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-500 cursor-pointer text-left"
            >
              <img
                src={album.thumbnail}
                alt={album.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="font-serif text-2xl text-white tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300">
                  {album.title}
                </h3>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(212,175,55,0.3)]"></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[#D4AF37] text-sm font-light tracking-[0.2em] uppercase">
                  {album.images.length} images
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxOpen && selectedAlbum && (
        <Lightbox
          images={selectedAlbum.images}
          initialIndex={0}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
}

export default Gallery;

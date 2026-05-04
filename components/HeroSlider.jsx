'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSlider = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  // Track which video slides have been activated – once active, keep iframe mounted
  const [activatedVideos, setActivatedVideos] = useState(new Set());
  const isHoveredRef = useRef(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const idx = emblaApi.selectedScrollSnap();
    setSelectedIndex(idx);
    // Activate video iframe only when the slide becomes visible
    if (slides[idx]?.videoId) {
      setActivatedVideos((prev) => new Set(prev).add(idx));
    }
  }, [emblaApi, slides]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    const autoplay = setInterval(() => {
      if (!isHoveredRef.current) emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(autoplay);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 relative"
              onMouseEnter={() => { isHoveredRef.current = true; }}
              onMouseLeave={() => { isHoveredRef.current = false; }}
            >
              <div className="relative h-[600px] md:h-[700px] overflow-hidden">
                {slide.videoId ? (
                  activatedVideos.has(index) ? (
                    /* iframe only loads once this slide has been scrolled to */
                    <iframe
                      src={`https://www.youtube.com/embed/${slide.videoId}?autoplay=1&mute=1&loop=1&playlist=${slide.videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_type=3`}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        width: 'max(100%, 177.78vh)',
                        height: 'max(56.25vw, 100%)',
                        border: 'none',
                        pointerEvents: 'none',
                      }}
                      allow="autoplay; encrypted-media"
                      title={slide.title}
                    />
                  ) : (
                    /* Thumbnail placeholder until slide is first visited */
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={`https://img.youtube.com/vi/${slide.videoId}/maxresdefault.jpg`}
                      alt={slide.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  )
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className={`absolute inset-0 w-full h-full ${slide.contain ? 'object-contain bg-black' : 'object-cover'}`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    fetchPriority={index === 0 ? 'high' : 'auto'}
                    decoding="async"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
                        {slide.title}
                      </h1>
                      <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                        {slide.subtitle}
                      </p>
                      <Button
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
                        onClick={() => window.location.href = slide.link}
                      >
                        {slide.buttonText}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 active:scale-[0.98] z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 active:scale-[0.98] z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === selectedIndex ? 'bg-primary w-8' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;

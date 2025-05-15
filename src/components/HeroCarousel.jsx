import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slider1 from "../components/images/slider1.png";
import slider2 from "../components/images/slider2.png";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Retiros en tienda solo con pagos confirmados",
      description:
        "Comprehensive insurance solutions tailored to your unique needs.",
      image: slider1.src,
    },
    {
      title: "Oferta efectivo en Samsung Galaxy s23 32%OFF",
      description:
        "✅Retiro en Sucursal ✅Garantía de 1 año ✅Envío gratis a todo el país",
      image: slider2.src,
    },
    {
      title: "Insurance Made Simple",
      description:
        "Navigate insurance with ease through our straightforward approach.",
      image: slider1.src,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gray-900 -mt-6 md:-mt-4 z-10 rounded-lg">
      <div className="relative h-[50vh] sm:h-[45vh] md:h-[40vh] lg:h-[50vh]">
        <AnimatePresence>
          {slides.map((slide, index) =>
            index === currentSlide ? (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />

                {/* Contenido centrado */}
                <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
                  <motion.div
                    className="max-w-2xl text-center text-white space-y-4"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-xl mx-auto">
                      {slide.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {/* Botones de navegación */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-4 top-1/2 z-30 flex h-9 w-9 sm:h-10 sm:w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition"
          aria-label="Anterior"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-4 top-1/2 z-30 flex h-9 w-9 sm:h-10 sm:w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition"
          aria-label="Siguiente"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

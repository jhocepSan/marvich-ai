import { useState, useEffect } from "react"
import image1 from "../../assets/hero/globo.png"
import image2 from '../../assets/hero/image3.png'
import image3 from "../../assets/hero/image1.png"
import image4 from "../../assets/hero/image2.png"
import image5 from "../../assets/hero/general.png"

const Hero = () => {
  // Define colors for styling
  const colors = {
    primary: "text-cyan-400",
    bg: "bg-cyan-500",
    bgLight: "bg-cyan-500/20",
    hover: "hover:bg-cyan-600",
  }

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [fadeIn, setFadeIn] = useState(true)

  // Array of images for the slideshow
  const images = [image2, image3, image4]

  // Effect to handle image transitions
  useEffect(() => {
    const transitionInterval = setInterval(() => {
      // Start fade out
      setFadeIn(false)

      // After fade out completes, change image and start fade in
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        setFadeIn(true)
      }, 1000) // This should match the transition duration in CSS
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(transitionInterval)
  }, [images.length])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background with image slideshow */}
      <div className="absolute inset-0 z-0">
        {[1,2,3].includes(currentImageIndex)&&<div className="absolute inset-0 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 opacity-50 z-10"></div>}

        {/* Image background with transition */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={images[currentImageIndex]}
            alt="Background"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${fadeIn ? "opacity-100" : "opacity-70"}`}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 w-full">
        <div className="flex flex-col items-center py-10">
          {/* Text section - static content */}
          <div data-aos="fade-up" className="w-full">
            <div className="opacity-100 transform translate-y-0">
              {/* Technology tag above title */}
              <div
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${colors.bgLight} ${colors.primary}`}
              >
                Geospatial AI
              </div>

              <h1 className="text-3xl md:text-2xl lg:text-4xl font-bold mb-6 leading-tight max-w-4xl">
                <span className="text-cyan-400">
                  Inteligencia Artificial Geoespacial: Automatización del monitoreo geoespacial: De los datos
                  geoespaciales al despliegue de acciones precisas.
                </span>
              </h1>

              <p className="text-gray-300 mb-8 text-lg max-w-4xl">
                Nuestra solución de extremo a extremo basada en modelos de inteligencia artificial optimiza procesos,
                transformando datos visuales de sensores avanzados (fotografías aéreas, imágenes satelitales, LIDAR,
                radar, etc ) para la toma de decisiones críticas en tiempo útil.
              </p>

              <div className="">
                {/* Button with link */}
                <a
                  href="/contacto"
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${colors.bg} text-white ${colors.hover} inline-block`}
                >
                  Ponte en contacto
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

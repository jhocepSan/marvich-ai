"use client"

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState, useRef } from "react"

// Import images as organized by client
import image1 from "../../assets/part2/comolohacemos/image1.png"
import image2 from "../../assets/part2/comolohacemos/image2.png"
import image3 from "../../assets/part2/comolohacemos/image3.png"
import image4 from "../../assets/part2/comolohacemos/image4.png"
import image5 from "../../assets/part2/paraquelohacemos/image1.png"
import image6 from "../../assets/part2/paraquelohacemos/image2.png"
import image7 from "../../assets/part2/paraquelohacemos/image3.png"
import image8 from "../../assets/part2/paraquelohacemos/image4.png"
import image10 from "../../assets/part2/queprocesamos/image1.png"
import image11 from "../../assets/part2/queprocesamos/image2.png"
import image12 from "../../assets/part2/queprocesamos/image3.png"
import image13 from "../../assets/part2/queprocesamos/image4.png"

const AISection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  // State for managing dropdown visibility
  const [openDropdown, setOpenDropdown] = useState(null)

  // Refs for dropdown content elements
  const dropdownRefs = useRef([null, null, null])

  // States for image slideshows
  const [currentImageIndices, setCurrentImageIndices] = useState([0, 0, 0])
  const [fadeIn, setFadeIn] = useState([true, true, true])

  // Image arrays for each section
  const sectionImages = [
    [image10, image11, image12, image13], // Que procesamos
    [image1, image2, image3, image4], // Como lo hacemos
    [image5, image6, image7, image8], // Para que lo hacemos
  ]

  // Toggle dropdown function
  const toggleDropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null)
    } else {
      setOpenDropdown(index)
    }
  }

  // Effect to handle image transitions for all three sections
  useEffect(() => {
    const transitionIntervals = sectionImages.map((images, sectionIndex) => {
      return setInterval(() => {
        // Start fade out for this section
        setFadeIn((prev) => {
          const newFadeIn = [...prev]
          newFadeIn[sectionIndex] = false
          return newFadeIn
        })

        // After fade out completes, change image and start fade in
        setTimeout(() => {
          setCurrentImageIndices((prev) => {
            const newIndices = [...prev]
            newIndices[sectionIndex] = (prev[sectionIndex] + 1) % images.length
            return newIndices
          })

          setFadeIn((prev) => {
            const newFadeIn = [...prev]
            newFadeIn[sectionIndex] = true
            return newFadeIn
          })
        }, 1000) // This should match the transition duration in CSS
      }, 5000) // Change image every 5 seconds
    })

    // Clear all intervals on component unmount
    return () => {
      transitionIntervals.forEach((interval) => clearInterval(interval))
    }
  }, [])

  // Content for the three cards based on client requirements
  const cards = [
    {
      title: "Qué procesamos",
      description: "Capturamos y procesamos datos geoespaciales de múltiples sensores:",
      caption: "Imágenes satelitales y datos geoespaciales",
      dropdownContent: [
        "Imágenes satelitales ópticas e hiperespectrales",
        "Ortofotos",
        "LIDAR",
        "Radar GPR",
        "Imágenes 360",
      ],
    },
    {
      title: "Cómo lo hacemos",
      description:
        "Usamos modelos de deep learning entrenados para detectar, clasificar y vectorizar automáticamente objetos y cambios en el terreno",
      caption: "Procesamiento con inteligencia artificial",
      dropdownContent: [
        "Desde pequeños plantines hasta grandes infraestructuras",
        "Procesamiento masivo en minutos u horas",
        "Fusión de datos multifuente",
      ],
    },
    {
      title: "Para qué lo hacemos",
      description: "Para que puedas tomar decisiones inteligentes, rápidas y sostenibles",
      caption: "Visualización de datos y análisis",
      dropdownContent: [
        "Visualización en dashboards interactivos",
        "Alertas tempranas",
        "Análisis por API integrada",
        "Automatización de reportes y acciones correctivas",
      ],
    },
  ]

  return (
    <section id="solutions" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
            Automatizamos el monitoreo remoto geoespacial con inteligencia artificial
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative ">
          {cards.map((card, index) => {
            // Assign different z-index values based on card index
            const cardZIndex = index === 0 ? "z-30" : index === 1 ? "z-20" : "z-10"

            return (
              <div
                key={index}
                data-aos="zoom-in"
                className={`flex flex-col h-full relative ${cardZIndex}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Updated titles as per client requirements */}
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                  {index === 0 ? "Que procesamos" : index === 1 ? "Como lo hacemos" : "Para que lo hacemos"}
                </h3>

                {/* Fixed image container to ensure all images are the same size and centered */}
                <div className="relative overflow-hidden rounded-xl border-2 border-cyan-400 flex-grow mb-4 h-80 max-h-80">
                  {/* Image slideshow for each section - fixed centering for all images */}
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                    <img
                      src={sectionImages[index][currentImageIndices[index]] || "/placeholder.svg"}
                      alt={card.title}
                      className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                        fadeIn[index] ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <h4 className="text-xl font-bold text-white mb-2">{card.title}</h4>
                      <p className="text-gray-300 text-sm">{card.caption}</p>
                    </div>
                  </div>
                </div>

                {/* Description text below the image */}
                <p className="text-gray-300 mb-4">{card.description}</p>

                {/* Dropdown button and content container */}
                <div className="relative w-full mt-auto">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="w-full bg-gray-800 hover:bg-gray-700 text-cyan-400 font-medium py-3 px-4 rounded-md transition-all duration-300 hover:text-white flex items-center justify-between group"
                  >
                    <span>Más información</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 transition-transform duration-300 ${
                        openDropdown === index ? "rotate-180" : ""
                      } group-hover:text-white`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {/* Dropdown content - Fixed positioning to avoid layout shifts */}
                  {openDropdown === index && (
                    <div
                      ref={(el) => (dropdownRefs.current[index] = el)}
                      className="absolute w-full left-0 mt-2 md:bg-[#000000] rounded-md shadow-lg py-4 px-6 text-left transform transition-all duration-300 ease-in-out border border-cyan-400 dropdown-content bg-gray-800"
                      style={{
                        top: "100%",
                        width: "100%",
                        maxWidth: "100%",
                        zIndex: index === 0 ? 30 : index === 1 ? 20 : 10,
                      }}
                    >
                      <ul className="space-y-2">
                        {card.dropdownContent.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-200 flex items-start">
                            <span className="text-cyan-400 mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AISection

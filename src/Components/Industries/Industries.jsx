import { Link } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const IndustriesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Industry data with URLs
  const industries = [
    {
      title: "Forestal",
      description: "IA geoespacial para optimizar el ciclo forestal completo mediante detección automática.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 14v-4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4" />
          <path d="M12 14v4" />
          <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v0a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v0Z" />
          <path d="M12 6v4" />
          <path d="M7.5 10h9" />
        </svg>
      ),
      url: "/forestal",
    },
    {
      title: "Agricultura regenerativa",
      description: "IA geoespacial para monitoreo continuo de suelos y cultivos.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v.3a2 2 0 0 1-.2.9L19 14.2a2 2 0 0 1-1.8 1.1H6.8a2 2 0 0 1-1.8-1.1L3.2 10.2a2 2 0 0 1-.2-.9V9Z" />
          <path d="M10 14.2V20" />
          <path d="M14 14.2V20" />
          <path d="M12 4v4" />
          <path d="M10 4h4" />
        </svg>
      ),
      url: "/agricultura-regenerativa",
    },
    {
      title: "Servicios públicos",
      description: "Localización y gestión de infraestructura soterrada con IA y RA.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 5V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1" />
          <path d="M18 9V5H6v4" />
          <path d="M18 13v-4H6v4" />
          <path d="M18 17v-4H6v4" />
          <path d="M18 21v-4H6v4" />
          <path d="M18 21a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1" />
        </svg>
      ),
      url: "/servicios-publicos",
    },
    {
      title: "Minería y energía",
      description: "Análisis de operaciones mineras y energéticas.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 18v-2h8v2" />
          <path d="M12 18v4" />
          <path d="M2 6h20v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z" />
          <path d="M18 12a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2" />
          <path d="M22 6 12 2 2 6" />
        </svg>
      ),
      url: "/mineria-energia",
    },
  ]

  return (
    <section id="industries" className="py-20 bg-[#1f2937] z-30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - Title and description */}
          <div className="" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#22d3ee] mb-6">
              Monitoreo continuo que mejora la eficiencia operativa
            </h2>
            <p className="text-white mb-8">
              IA para la gestión precisa y eficiente de recursos, transformando grandes volúmenes de datos en decisiones
              inmediatas y sostenibles.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToContact()
              }}
              className="inline-flex items-center text-cyan-600 font-medium hover:text-cyan-700 transition-colors"
            >
              Conozca más sobre nuestras soluciones
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          {/* Right column - Industries list */}
          <div className="">
            <div className="space-y-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="border-b border-gray-200 pb-6 last:border-0"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-6 text-cyan-400">{industry.icon}</div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-[#22d3ee] mb-2">{industry.title}</h3>
                      <p className="text-white mb-3">{industry.description}</p>
                      <Link
                        to={industry.url}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-700 transition-colors"
                      >
                        Presione aqui, para mas información
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1 transition-transform duration-300"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection

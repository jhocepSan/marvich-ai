"use client"

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import image1 from "../../../assets/forestal/image1.png"
import image2 from "../../../assets/forestal/image2.png"
import image5 from "../../../assets/forestal/image5.png"
import image3 from "../../../assets/forestal/image3.png"
import image4 from "../../../assets/forestal/image4.png"
import imageBanner from "../../../assets/forestal/image6.png"
import image6 from "../../../assets/forestal/imageBanner.png"

const ForestalPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [image1, image2, image3, image4, image5]

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })

    // Scroll to top when page loads
    window.scrollTo(0, 0)

    // Auto-change image every 5 seconds
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    // Clean up interval on component unmount
    return () => clearInterval(imageInterval)
  }, [images.length])

  const navigate = useNavigate()

  const goToContact = () => {
    navigate("/", { state: { scrollTo: "contact" } })
  }

  return (
    <div className="bg-[#1f2937]">
      {/* Hero Section with Background Image */}
      <section className="relative  min-h-[60vh] flex items-center pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src={imageBanner || "/placeholder.svg"}
            alt="Monitoreo forestal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-[#22d3ee] mb-4">
              Monitoreo forestal con inteligencia artificial geoespacial para silvicultura de precisión
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Pasa del muestreo limitado al monitoreo integral y automatizado de tus activos forestales, con sensores
              remotos e inteligencia artificial geoespacial.
            </p>
            <button
              onClick={goToContact}
              className="bg-[#22d3ee] hover:bg-[#0ea5e9] text-white font-medium py-3 px-8 rounded-md transition-colors"
            >
              CONTACTANOS
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8" data-aos="fade-up">
              <div>
                <h2 className="text-3xl font-bold text-[#22d3ee] mb-6">Silvicultura de Precisión</h2>
                <p className="text-white leading-relaxed text-justify">
                  Los muestreos manuales, lentos y costosos ya deben ser parte del pasado. Con Marvich AI, digitaliza el
                  control de tu patrimonio forestal mediante monitoreo remoto continuo, sin interrupciones ni sesgos de
                  cobertura.
                </p>
                <p className="text-white leading-relaxed mt-4 text-justify">
                  Utilizamos múltiples fuentes de datos —satélites, drones, sensores móviles y terrestres— para capturar
                  en alta resolución lo que ocurre en tu territorio. Nuestros modelos de inteligencia artificial y deep
                  learning analizan esta información en tiempo real para detectar eventos críticos, desviaciones
                  operativas o condiciones anómalas de forma automática.
                </p>
                <p className="text-white leading-relaxed mt-4 text-justify">
                  Transformamos grandes volúmenes de datos en información clara y accionable, ayudándote a tomar
                  decisiones más rápidas y eficientes.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#22d3ee] mb-4">¿Qué procesos forestales monitoreamos?</h3>
                <ul className="list-disc pl-6 space-y-2 text-white [&>li::marker]:text-[#22d3ee]">
                  <li>Cosecha preparación de suelos y habilitación</li>
                  <li>Plantación, prendimiento (sobrevivencia) y control de malezas</li>
                  <li>Raleo, regeneración y salud del bosque</li>
                  <li>Prevención de incendios</li>
                  <li>Impactos por eventos climáticos o intervención humana</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-xl overflow-hidden shadow-lg h-[600px]" data-aos="fade-left">
                {/* Auto-changing image */}
                <img
                  src={images[currentImageIndex] || "/placeholder.svg"}
                  alt={`Monitoreo forestal ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-100 mb-12 text-center" data-aos="fade-up">
            Beneficios clave
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div
              className="border border-gray-700 p-8 rounded-xl shadow-md text-white"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="text-[#22d3ee] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 8c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z" />
                  <path d="M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#22d3ee] mb-2">Reducción de costos operativos</h3>
              <p>Optimiza recursos y reduce gastos innecesarios con monitoreo automatizado.</p>
            </div>

            {/* Card 2 */}
            <div
              className="border border-gray-700 p-8 rounded-xl shadow-md text-white"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="text-[#22d3ee] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                  <path d="m9 14 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#22d3ee] mb-2">Priorización inteligente del trabajo en terreno</h3>
              <p>Enfoca tus esfuerzos donde realmente importa gracias a datos precisos.</p>
            </div>

            {/* Card 3 */}
            <div
              className="border border-gray-700 p-8 rounded-xl shadow-md text-white"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="text-[#22d3ee] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#22d3ee] mb-2">
                Mejora continua en la planificación y gestión del patrimonio forestal
              </h3>
              <p>Perfecciona constantemente la gestión de tu patrimonio forestal.</p>
            </div>

            {/* Card 4 */}
            <div
              className="border border-gray-700 p-8 rounded-xl shadow-md text-white"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="text-[#22d3ee] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12h6" />
                  <path d="M12 9v6" />
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#22d3ee] mb-2">
                Trazabilidad y cumplimiento de normas ambientales
              </h3>
              <p>Asegura el cumplimiento de normas ambientales con registros precisos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="h-screen bg-[#1f2937] text-white bg-cover bg-center flex items-center justify-center hmio"
        style={{
          backgroundImage: `url(${image6 || "/placeholder.svg"})`,
        }}
      >
        <div className="container mx-auto px-4 text-center bg-black/60 p-6 rounded-md">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
            Solicita un diagnóstico gratuito
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Descubre cómo optimizar tu operación forestal con Marvich AI.
          </p>
          <button
            onClick={goToContact}
            className="bg-[#22d3ee] hover:bg-[#0ea5e9] text-white font-medium py-3 px-8 rounded-md transition-colors"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            CONTACTANOS
          </button>
        </div>
      </section>
    </div>
  )
}

export default ForestalPage

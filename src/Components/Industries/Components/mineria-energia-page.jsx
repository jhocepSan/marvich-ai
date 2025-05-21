import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import image1 from "../../../assets/mineria/1lateral.png"
import image2 from "../../../assets/mineria/2lateral.png"
import image3 from "../../../assets/mineria/4lateral.png"
import imageInferior from "../../../assets/mineria/inferior.png"
import imageBanner from "../../../assets/mineria/superior.png"

const MineriaEnergiaPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [image1, image2, image3]

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
          <img src={imageBanner || "/placeholder.svg"} alt="Minería y energía" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-[#22d3ee] mb-4">
              Monitoreo inteligente de faenas, infraestructura crítica y zonas de conservación ambiental
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Supervisa tus operaciones mineras con tecnología avanzada y asegura el cumplimiento ambiental en zonas
              protegidas mediante monitoreo remoto, imágenes satelitales y análisis con inteligencia artificial.
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
                <h2 className="text-3xl font-bold text-[#22d3ee] mb-6">
                  Minería – Monitoreo inteligente de faenas e infraestructura
                </h2>
                <p className="text-white leading-relaxed text-justify">
                  Nuestra solución combina imágenes satelitales de alta resolución, vuelos con drones especializados y
                  algoritmos de inteligencia artificial para monitorear en forma remota y continua:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white [&>li::marker]:text-[#22d3ee] mt-4">
                  <li>Áreas de explotación y botaderos</li>
                  <li>Infraestructura vial, plantas y depósitos</li>
                  <li>Límite y evolución de zonas de conservación</li>
                  <li>Presión ambiental en cuerpos de agua, suelos y vegetación</li>
                </ul>
                <p className="text-white leading-relaxed mt-4 text-justify">
                  Esto permite a las compañías mineras cumplir con sus compromisos ambientales y normativas sectoriales,
                  anticipar impactos, mejorar la trazabilidad y generar reportes automáticos para fiscalización interna
                  o ante organismos reguladores como la SMA o el SEA.
                </p>
                <p className="text-white leading-relaxed mt-4 text-justify">
                  Además, el sistema identifica cambios no autorizados, movimientos de tierra, deforestación, erosión y
                  uso indebido del suelo, alertando de forma temprana posibles incumplimientos o riesgos en la
                  operación.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#22d3ee] mb-4">¿Qué elementos mineros monitoreamos?</h3>
                <ul className="list-disc pl-6 space-y-2 text-white [&>li::marker]:text-[#22d3ee]">
                  <li>Vigilancia ambiental remota de zonas sensibles</li>
                  <li>Seguimiento de obras lineales, caminos y relaves</li>
                  <li>Caminos de acarreo, patios y zonas operativas</li>
                  <li>Control de expansión y uso de suelo en faenas</li>
                  <li>Infraestructura crítica (campamentos, depósitos, estaciones)</li>
                  <li>Actividades no autorizadas en zonas de seguridad</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              {/* Auto-changing image container */}
              <div className="rounded-xl overflow-hidden shadow-lg h-[600px]" data-aos="fade-left">
                <img
                  src={images[currentImageIndex] || "/placeholder.svg"}
                  alt={`Minería ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
              </div>

              {/* Image indicators */}
              <div className="flex justify-center space-x-2" data-aos="fade-up">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full ${currentImageIndex === index ? "bg-[#22d3ee]" : "bg-gray-500"}`}
                    aria-label={`Ver imagen ${index + 1}`}
                  />
                ))}
              </div>

              {/* Image thumbnails */}
              <div className="grid grid-cols-3 gap-2" data-aos="fade-left" data-aos-delay="100">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`rounded-lg overflow-hidden cursor-pointer border-2 ${
                      currentImageIndex === index ? "border-[#22d3ee]" : "border-transparent"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#111827]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#22d3ee] mb-12 text-center" data-aos="fade-up">
            Beneficios clave
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              className="border border-gray-700 p-8 rounded-xl shadow-md text-white"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="text-[#22d3ee] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v20" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#22d3ee] mb-2">
                Ahorro en inspecciones de terreno y monitoreos manuales
              </h3>
              <p className="text-white">Reduce costos operativos con monitoreo remoto automatizado.</p>
            </div>

            <div
              className="border border-gray-700 p-8 rounded-xl shadow-md text-white"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="text-[#22d3ee] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#22d3ee] mb-2">
                Monitoreo de cumplimiento ambiental y concesional
              </h3>
              <p className="text-white">Asegura el cumplimiento de normativas y compromisos ambientales.</p>
            </div>

            <div
              className="border border-gray-700 p-8 rounded-xl shadow-md text-white"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="text-[#22d3ee] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
                  <path d="M16.5 9.4 7.55 4.24" />
                  <polyline points="3.29 7 12 12 20.71 7" />
                  <line x1="12" y1="22" x2="12" y2="12" />
                  <circle cx="18.5" cy="15.5" r="2.5" />
                  <path d="M20.27 17.27 22 19" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#22d3ee] mb-2">
                Información precisa para decisiones operacionales y legales
              </h3>
              <p className="text-white">Toma decisiones basadas en datos precisos y actualizados.</p>
            </div>

            <div
              className="border border-gray-700 p-8 rounded-xl shadow-md text-white"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="text-[#22d3ee] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#22d3ee] mb-2">Detección temprana de impactos y riesgos</h3>
              <p className="text-white">
                Anticipa problemas potenciales antes de que se conviertan en incidentes graves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 bg-[#1f2937] text-white bg-cover bg-center hmio"
        style={{
          backgroundImage: `url(${imageInferior || "/placeholder.svg"})`,
        }}
      >
        <div className="container mx-auto px-4 text-center bg-black/60 p-6 rounded-md">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
            Solicita una demo con tu zona de operación
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Descubre cómo el monitoreo inteligente puede reducir riesgos y mejorar la trazabilidad ambiental de tu
            faena.
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

export default MineriaEnergiaPage

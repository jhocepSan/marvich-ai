import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import image1 from "../../../assets/servicios_publicos/backup.png"
import imageInferior from "../../../assets/servicios_publicos/inferior.png"
import imageBanner from "../../../assets/servicios_publicos/superior.png"

const ServiciosPublicosPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })

    // Scroll to top when page loads
    window.scrollTo(0, 0)
  }, [])

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
            alt="Servicios públicos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-[#22d3ee] mb-4">
              Digitalización inteligente de infraestructura urbana y redes soterradas
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Detecta, visualiza y gestiona redes visibles y soterradas con tecnologías geoespaciales, imágenes 360° y
              mobile mapping asistido por inteligencia artificial y realidad aumentada.
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
                  Infraestructura urbana y servicios soterrados
                </h2>
                <p className="text-white leading-relaxed text-justify">
                  Ofrecemos un conjunto integral de soluciones para el mapeo y la gestión de infraestructura crítica en
                  entornos urbanos y rurales. Nuestra solución combina escaneo 3D terrestre, visión 360° y radar de
                  penetración terrestre (GPR) para generar un gemelo digital detallado del espacio urbano y del
                  subsuelo. Esta tecnología permite a municipios, empresas de servicios y constructoras detectar,
                  clasificar y gestionar elementos de la infraestructura urbana que se encuentra sobre y debajo de la
                  superficie.
                </p>
                <p className="text-white leading-relaxed mt-4 text-justify">
                  Los algoritmos de inteligencia artificial procesan las imágenes y nubes de puntos para identificar
                  automáticamente cada objeto y generar planos, mapas y modelos tridimensionales con precisión
                  centimétrica. Esto reduce costos, evita errores en obras y agiliza la planificación urbana, el
                  mantenimiento y la toma de decisiones.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#22d3ee] mb-4">¿Qué tipos de infraestructura monitoreamos?</h3>
                <ul className="list-disc pl-6 space-y-2 text-white [&>li::marker]:text-[#22d3ee]">
                  <li>Redes eléctricas, agua potable, gas y telecomunicaciones</li>
                  <li>Sistemas eléctricos y telecomunicaciones</li>
                  <li>Ductos soterrados existentes y proyectados</li>
                  <li>Estructuras superficiales complementarias</li>
                  <li>Infraestructura rural dispersa o remota</li>
                  <li>Aceras, ciclovías y pavimentos</li>
                  <li>Postes, luminarias, señales de tránsito, arboles</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              {/* Main large image */}
              <div className="rounded-xl overflow-hidden shadow-lg h-[400px]" data-aos="fade-left">
                <img
                  src={image1 || "/placeholder.svg"}
                  alt="Servicios públicos - Infraestructura urbana"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Additional images from the banner and inferior images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-lg h-48" data-aos="fade-left" data-aos-delay="100">
                  <img
                    src={imageBanner || "/placeholder.svg"}
                    alt="Servicios públicos - Vista superior"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg h-48" data-aos="fade-left" data-aos-delay="150">
                  <img
                    src={imageInferior || "/placeholder.svg"}
                    alt="Servicios públicos - Vista inferior"
                    className="w-full h-full object-cover"
                  />
                </div>
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
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                  <path d="M13 5v14" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#22d3ee] mb-2">Reducción de tiempos y costos de levantamientos</h3>
              <p className="text-white">Optimiza recursos con levantamientos más rápidos y precisos.</p>
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
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22V8" />
                  <path d="m5 12-2 2 2 2" />
                  <path d="m19 12 2 2-2 2" />
                  <path d="M5 14h14" />
                  <path d="m17 2-2 2-2-2" />
                  <path d="M14 4h-4v4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#22d3ee] mb-2">Mayor seguridad en excavaciones y obras</h3>
              <p className="text-white">Previene accidentes y daños a infraestructura existente.</p>
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
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#22d3ee] mb-2">
                Información precisa sin necesidad de cortar calles
              </h3>
              <p className="text-white">Obtén datos detallados sin interrumpir el tráfico urbano.</p>
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
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#22d3ee] mb-2">Visualización integrada en mapas y modelos 3D</h3>
              <p className="text-white">Visualiza toda la infraestructura en modelos tridimensionales interactivos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 bg-[#1f2937] text-white bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageInferior || "/placeholder.svg"})`,
        }}
      >
        <div className="container mx-auto px-4 text-center bg-black/60 p-6 rounded-md">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
            Agenda una demostración técnica
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Conoce cómo la digitalización urbana con IA puede optimizar tus proyectos y reducir imprevistos.
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

export default ServiciosPublicosPage

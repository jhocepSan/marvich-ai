
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"
import image10 from "../../assets/image10.png"
import image9 from "../../assets/image9.png"

const AboutUsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  // State for active tab
  const [activeTab, setActiveTab] = useState("mission")

  // Values data
  const values = [
    {
      title: "Innovación",
      description: "Tecnología de vanguardia siempre.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v8" />
          <path d="m4.93 10.93 1.41 1.41" />
          <path d="M2 18h2" />
          <path d="M20 18h2" />
          <path d="m19.07 10.93-1.41 1.41" />
          <path d="M22 22H2" />
          <path d="M16 6h-4l-2 6h4l-2 6h8" />
        </svg>
      ),
    },
    {
      title: "Precisión",
      description: "Datos confiables para decisiones críticas.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
          <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
          <path d="M12 2a4.5 4.5 0 0 0-4.5 4.5v3a4.5 4.5 0 0 0 9 0v-3A4.5 4.5 0 0 0 12 2Z" />
        </svg>
      ),
    },
    {
      title: "Sostenibilidad",
      description: "Operaciones más verdes, inteligentes y responsables.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 22c1.25-1.25 2.5-2.5 3.5-2.5 1.5 0 2 1.5 3 1.5s1.5-1.5 3-1.5 2 1.5 3 1.5 1.5-1.5 3-1.5 2 1.5 3 1.5 1.5-1.5 3-1.5 2 1.5 3 1.5 1.5-1.5 3-1.5" />
          <path d="M19 16c.8-1 1-2.1 1-3.5C20 6.8 16.2 3 12 3s-8 3.8-8 9.5c0 1.4.2 2.5 1 3.5" />
        </svg>
      ),
    },
  ]

  return (
    <section id="about-us" className="py-20 bg-[#111827]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-400 mb-4">
            Expertos en Inteligencia Artificialy <br /> Ciencia Geoespacial
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left column - Who we are */}
          <div className="lg:col-span-5" data-aos="fade-up">
            <div className="rounded-xl border border-gray-700 bg-gray-900/50 p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-cyan-400 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </span>
                Quiénes somos
              </h3>

              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">•</span>
                  <p>Más de 8 años combinados de experiencia en IA aplicada a datos de sensores remotos.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">•</span>
                  <p>Especialistas en integrar visión artificial, datos geoespaciales y automatización de procesos.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">•</span>
                  <p>Pasión por impulsar decisiones sostenibles a escala global.</p>
                </li>
              </ul>

              <div className="mt-8">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="text-cyan-400 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  Presencia regional
                </h4>
                <ul className="space-y-2 text-gray-300 ml-9">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">•</span>
                    <p>Oficinas principales Chile</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">•</span>
                    <p>Operaciones en Perú y Bolivia</p>
                  </li>
                  <li className="flex items-start notShow">
                    <span className="text-cyan-400 mr-3">•</span>
                    <p>Expansión prioritaria Paraguay</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right column - Mission, Vision, Values */}
          <div className="lg:col-span-7" data-aos="fade-up">
            <div className="rounded-xl border border-gray-700 bg-gray-900/50 p-8 h-full">
              {/* Tabs */}
              <div className="flex border-b border-gray-700 mb-8">
                <button
                  onClick={() => setActiveTab("mission")}
                  className={`pb-4 px-4 font-medium text-lg transition-colors ${
                    activeTab === "mission"
                      ? "text-cyan-400 border-b-2 border-cyan-400"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  Misión
                </button>
                <button
                  onClick={() => setActiveTab("vision")}
                  className={`pb-4 px-4 font-medium text-lg transition-colors ${
                    activeTab === "vision"
                      ? "text-cyan-400 border-b-2 border-cyan-400"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  Visión
                </button>
                <button
                  onClick={() => setActiveTab("values")}
                  className={`pb-4 px-4 font-medium text-lg transition-colors ${
                    activeTab === "values"
                      ? "text-cyan-400 border-b-2 border-cyan-400"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  Valores
                </button>
              </div>

              {/* Tab content */}
              <div className="min-h-[300px]">
                {/* Mission */}
                {activeTab === "mission" && (
                  <div className="animate-fadeIn">
                    <div className="flex items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Nuestra Misión</h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          Transformar datos geoespaciales complejos en decisiones inmediatas que mejoran la eficiencia,
                          la sostenibilidad y la competitividad de nuestros clientes.
                        </p>
                      </div>
                    </div>
                    <img
                      src={image10 || "/placeholder.svg"}
                      alt="Mission visualization"
                      className="w-full h-100 object-cover rounded-lg mt-6"
                    />
                  </div>
                )}

                {/* Vision */}
                {activeTab === "vision" && (
                  <div className="animate-fadeIn">
                    <div className="flex items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Nuestra Visión</h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          Ser líderes en soluciones GeoAI en América Latina, conectando el dato espacial con la
                          inteligencia del futuro.
                        </p>
                      </div>
                    </div>
                    <img
                      src={image10 || "/placeholder.svg"}
                      alt="Vision visualization"
                      className="w-full h-100 object-cover rounded-lg mt-6"
                    />
                  </div>
                )}

                {/* Values */}
                {activeTab === "values" && (
                  <div className="animate-fadeIn">
                    <h3 className="text-2xl font-bold text-white mb-6">Nuestros Valores</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {values.map((value, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700">
                          <div className="text-cyan-400 mb-4 flex justify-center">{value.icon}</div>
                          <h4 className="text-xl font-semibold text-white mb-2">{value.title}</h4>
                          <p className="text-gray-300">{value.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection

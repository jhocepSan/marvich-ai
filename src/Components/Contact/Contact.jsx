import AOS from "aos"
import "aos/dist/aos.css"
import { Mail, Phone } from "lucide-react"
import { useEffect } from "react"
import Swal from "sweetalert2"

export const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    // Show sweet alert
    Swal.fire({
      title: "¡Mensaje Enviado!",
      text: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
      icon: "success",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#06b6d4",
    })
  }

  return (
    <section id="contact" className="py-12 md:py-20 bg-[#1b374b]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16" data-aos="fade-up">
          <h2 className="text-white text-xl md:text-2xl">CONTACTO</h2>
          <h3 className="text-2xl md:text-4xl font-bold text-cyan-400 mt-2">
            ¿Listo para transformar tu operación con IA geoespacial?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left side - Map and Contact Info */}
          <div data-aos="fade-up" className="order-2 md:order-1">
            {/* Map at the top */}
            <div className="mb-6 md:mb-8">
              <div className="bg-gray-700 rounded-lg h-64 md:h-80 overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53231.43021538343!2d-70.59993507832033!3d-33.41827010000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf2c2c9b61d5%3A0x8f1b6b9a96f8680e!2sLas%20Condes%2C%20Santiago%20Metropolitan%20Region%2C%20Chile!5e0!3m2!1sen!2s!4v1714149371889!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de la oficina"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
                </div>
                <div className="ml-4">
                  <h5 className="text-base md:text-lg font-semibold text-white">Teléfono</h5>
                  <p className="text-gray-300">+562 32341267</p>
                </div>
              </div>

              <div className="flex items-start bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
                </div>
                <div className="ml-4">
                  <h5 className="text-base md:text-lg font-semibold text-white">Email</h5>
                  <p className="text-gray-300">contacto@marvich-ai.cl</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div data-aos="fade-up" className="order-1 md:order-2 mb-8 md:mb-0">
            <div className="bg-gray-700/30 p-6 md:p-12 rounded-lg shadow-lg backdrop-blur-sm">
              <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white">Envíenos un mensaje</h4>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Su nombre"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Su empresa"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-300 mb-1">
                    Cargo
                  </label>
                  <input
                    type="text"
                    id="position"
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Su cargo"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Su email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Su mensaje"
                    required
                  ></textarea>
                </div>
                <div className="flex flex-col space-y-3 md:space-y-4 mt-2">
                  <button
                    type="submit"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2.5 md:py-3 px-6 rounded-md transition-all duration-300 w-full"
                  >
                    Enviar Mensaje
                  </button>
                  <button
                    type="button"
                    className="bg-white hover:bg-gray-100 text-cyan-700 font-medium py-2.5 md:py-3 px-6 rounded-md transition-all duration-300 w-full border-2 border-cyan-500 text-sm md:text-base"
                    onClick={() => window.open("https://calendly.com/your-link", "_blank")}
                  >
                    Agenda tu reunión gratuita con un especialista
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

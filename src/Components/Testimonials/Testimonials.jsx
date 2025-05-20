import { useEffect } from "react"
import { Star } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  // Sample testimonial data - replace with your actual testimonials
  const testimonials = [
    {
      id: 1,
      quote:
        "La implementación de la IA geoespacial transformó completamente nuestra capacidad para analizar datos territoriales. Los resultados superaron nuestras expectativas.",
      name: "Carlos Rodríguez",
      position: "Director de Operaciones",
      company: "GeoTech Solutions",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "El equipo de especialistas nos guió durante todo el proceso de integración. Su conocimiento y profesionalismo fueron clave para el éxito de nuestro proyecto.",
      name: "María González",
      position: "Gerente de Proyectos",
      company: "Minera Andina",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "La plataforma de análisis geoespacial nos permitió identificar oportunidades que antes eran invisibles. Ha sido una inversión con retorno excepcional.",
      name: "Alejandro Méndez",
      position: "CEO",
      company: "Urban Planning Group",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-[#1f2937]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-white">TESTIMONIOS</h2>
          <h3 className="text-4xl font-bold text-cyan-400">LO QUE DICEN NUESTROS CLIENTES</h3>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Descubre cómo nuestras soluciones de IA geoespacial están transformando empresas y organizaciones en toda
            Latinoamérica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-700/30 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={testimonial.id * 100}
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <blockquote className="text-gray-200 italic mb-6 text-center">"{testimonial.quote}"</blockquote>

              <div className="flex items-center justify-center">
                <div className="mr-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-cyan-400 object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-cyan-400 text-sm">{testimonial.position}</p>
                  <p className="text-gray-400 text-xs">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

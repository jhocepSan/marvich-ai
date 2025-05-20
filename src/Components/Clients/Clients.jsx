import { useEffect, useState } from "react"
import image1 from "../../assets/clint/image1.png"
import image2 from "../../assets/clint/image2.png"
import image3 from "../../assets/clint/image3.png"
import image4 from "../../assets/clint/image4.png"
import image5 from "../../assets/clint/image5.png"
import image6 from "../../assets/clint/image6.png"
import image7 from "../../assets/clint/image7.jpg"
import image8 from "../../assets/clint/image8.jpg"
import AOS from "aos";
import "aos/dist/aos.css";


export const Clients = () => {
  const [duplicatedClients, setDuplicatedClients] = useState([])

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const clients = [
    { name: "CMPC", logo: image1 },
    { name: "Arauco", logo: image2 },
    { name: "Codelco", logo: image3 },
    { name: "Colbún", logo: image4 },
    { name: "Los Pelambres", logo: image5 },
    { name: "Endesa", logo: image6 },
    { name: "Esval", logo: image7 },
    { name: "Transelec", logo: image8 },
  ]

  // Duplicate clients to ensure continuous scrolling
  useEffect(() => {
    // Duplicate the array to ensure continuous scrolling
    setDuplicatedClients([...clients, ...clients, ...clients])
  }, [])

  // Split clients into two groups for different directions
  const firstHalf = duplicatedClients.slice(0, Math.ceil(duplicatedClients.length / 2))
  const secondHalf = duplicatedClients.slice(Math.ceil(duplicatedClients.length / 2))

  return (
    <section className="py-20 bg-[#1f2937] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-white">NUESTROS</h2>
          <h3 className="text-4xl font-bold text-cyan-400">CLIENTES</h3>
        </div>

        {/* First marquee - Left to Right */}
        <div className="relative mb-12 overflow-hidden" data-aos="zoom-in-right">
          <div className="marquee-container">
            <div className="marquee marquee-left-to-right">
              {firstHalf.map((client, index) => (
                <div
                  key={`ltr-${index}`}
                  className="marquee-item flex items-center justify-center p-4 mx-4 bg-white rounded-lg transition-colors duration-300"
                >
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    className="h-16 w-auto filter  transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second marquee - Right to Left */}
        <div className="relative overflow-hidden" data-aos="zoom-in-left">
          <div className="marquee-container">
            <div className="marquee marquee-right-to-left">
              {secondHalf.map((client, index) => (
                <div
                  key={`rtl-${index}`}
                  className="marquee-item flex items-center justify-center p-4 mx-4 bg-white rounded-lg  transition-colors duration-300"
                >
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    className="h-16 w-auto filter transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients

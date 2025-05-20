import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import image4 from "../../assets/image4.jpg";

const Productivity = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-0 md:gap-12">
          
          {/* Text Section */}
          <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-2 text-white">TRANSFORME LA</h2>
            <h2 className="text-4xl font-bold mb-4 text-cyan-400">PRODUCTIVIDAD</h2>
            <h3 className="text-2xl font-bold mb-6 text-white">Y EL VALOR DE SUS ACTIVOS</h3>

            <p className="text-gray-300 mb-6">
              Una plataforma de inteligencia artificial geoespacial (GeoAI) para ayudar a nuestros partners a
              automatizar la laboriosa observación manual y tomar decisiones informadas rápidamente.
            </p>

            <div className="bg-gray-700/50 p-4 rounded-lg border-l-4 border-cyan-500">
              <h4 className="text-xl font-semibold mb-2 text-cyan-400">
                Decisiones poderosas hechas fáciles.
              </h4>
              <p className="text-gray-300">
                Comprenda, analice y visualice los fenómenos del mundo real de acuerdo con sus ubicaciones.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2" data-aos="fade-up">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={image4}
                alt="Earth visualization"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Productivity;

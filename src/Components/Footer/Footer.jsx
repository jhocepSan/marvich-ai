import { Facebook, Twitter, Instagram, Linkedin, Youtube, Github } from "lucide-react"
import logo from '../../assets/marca.svg';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* <MarvichLogo className="h-12 mb-4" /> */}
          <img className="w-60 h-10 mb-4" src={logo} alt="logo" />

          <p className="text-gray-400 text-center mb-6">
            Las Condes, Santiago - Chile
            <br />
            +562 32341267 - contacto@marvich-ai.cl
          </p>

          <div className="flex space-x-4 mb-8">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <Youtube size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <p className="text-gray-500 text-center text-sm">
            © {new Date().getFullYear()} Marvich AI. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

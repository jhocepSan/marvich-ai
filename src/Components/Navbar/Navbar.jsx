
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/marca.svg"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()
  const handleNav = (hash) => {
    console.log(hash)
    navigate("/#" + hash)
  }
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Detectar qué sección está activa basado en la posición de scroll
      const sections = ["forestal", "agricultura", "infraestructura", "mineria"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle clicks outside the sidebar to close it
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (sidebarOpen && !e.target.closest(".sidebar") && !e.target.closest(".sidebar-trigger")) {
        setSidebarOpen(false)
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)

    // Add body lock when sidebar is open
    if (sidebarOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
      document.body.style.overflow = ""
    }
  }, [sidebarOpen])



  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SOLUCIONES", href: "/#solutions" },
    { name: "INDUSTRIAS", href: "/#industries" },
    { name: "CONTACTO", href: "/#contact" },
    { name: "PREGUNTAS FRECUENTES", href: "" },
  ]
  useEffect(() => {
    if(window.location.href.split('#')[1]!=undefined){
      handleNav(window.location.href.split('#')[1])
    }
  }, [])
  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
            ? "bg-gray-900/90 border-b-4 border-[#266298] backdrop-blur-md py-2 shadow-lg"
            : "bg-gray-900/70 py-4"
          }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img className="w-60 h-10" src={logo || "/placeholder.svg"} alt="logo" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-200 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-200 sidebar-trigger"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label={sidebarOpen ? "Close menu" : "Open menu"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={sidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300 ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        aria-hidden={!sidebarOpen}
      >
        <div
          className={`sidebar fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <a href="/" className="flex items-center" onClick={() => setSidebarOpen(false)}>
              <img className="w-40" src={logo || "/placeholder.svg"} alt="logo" />
            </a>
            <button className="text-gray-200" onClick={() => setSidebarOpen(false)} aria-label="Close menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-sm font-medium text-gray-200 hover:bg-gray-800 hover:text-cyan-400 transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

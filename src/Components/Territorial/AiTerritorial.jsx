import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import image1 from "../../assets/hero/image3.png"
import image2 from "../../assets/image12.png"

const AiTerritorial = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [fadeIn, setFadeIn] = useState(true)

    // Array of images for the slideshow
    const images = [image1, image2]

    // Effect to handle image transitions
    useEffect(() => {
        const transitionInterval = setInterval(() => {
            // Start fade out
            setFadeIn(false)

            // After fade out completes, change image and start fade in
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
                setFadeIn(true)
            }, 1000) // This should match the transition duration in CSS
        }, 5000) // Change image every 5 seconds

        return () => clearInterval(transitionInterval)
    }, [images.length])

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        })
    }, [])

    return (
        <section className="w-full bg-black py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden min-h-screen flex items-center">
            {/* Single background image */}
            <div
                className="absolute inset-0 w-full h-full "
                style={{
                    backgroundImage: `url(${images[currentImageIndex] || "/placeholder.svg"})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

            {/* Content */}
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Main title with animation */}
                    <h1 className="text-3xl md:text-2xl lg:text-4xl font-bold mb-6 leading-tight max-w-4xl">
                        <span className="text-cyan-400">
                            Inteligencia Artificial geoespacial para decisiones que transforman territorios.
                        </span>
                    </h1>
                    {/* Subtitle with animation */}
                    <p
                        className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-6 sm:mt-8 md:mt-10"
                        data-aos="fade-left"
                        data-aos-delay="200"
                    >
                        Desde la oficina hasta el terreno: nuestra plataforma transforma datos crudos en inteligencia territorial lista para actuar.
                    </p>
                    <div className="py-6"></div>
                    {/* Main title with animation */}
                    <h1 className="text-3xl md:text-2xl lg:text-4xl font-bold mb-6 leading-tight max-w-4xl">
                        <span className="text-cyan-400">
                            Menos incentidumbre, más impacto en tus decisiones
                        </span>
                    </h1>

                    {/* Subtitle with animation */}
                    <p
                        className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-6 sm:mt-8 md:mt-10"
                        data-aos="fade-left"
                        data-aos-delay="200"
                    >
                        Monitoreamos, analizamos y anticipamos eventos criticos a partir de datos espaciales para industrias como la forestal, agricola, urbana y más.
                    </p>
                    <h1
                        className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight notShow"
                        data-aos="fade-right"
                    >
                        <span className="block mb-2 sm:mb-3">Inteligencia Artificial geoespaciall para decisiones que transforman territorios</span>
                        {/* Highlighted text with responsive sizing */}
                        <span className="text-cyan-400 block my-3 sm:my-4 md:my-6 text-5xl sm:text-6xl md:text-8xl  font-extrabold tracking-tight">
                            datos geoespaciales
                        </span>
                        <span className="block mb-2 sm:mb-3"> que se convierten en</span>
                        <span className="block">acciones concretas.</span>
                    </h1>


                </div>
            </div>
        </section>
    )
}

export default AiTerritorial

import { Fade, Slide } from "react-awesome-reveal"

const MainPage = () => {
  return (
    <section className="flex justify-center flex-col bg-white text-black p-12 pt-0 rounded-xl max-w-4xl mx-auto shadow-xl 
    lg:max-w-3xl md:max-w-xl sm:max-w-md sm:p-8 md:p-10 lg:p-12 max-[420px]:p-5">
      <img src="/LogoPadelPoint.png" alt="Logo PadelPoint" className="w-40 object-cover -ml-10 mx-auto md:w-32 sm:w-28"/>
      <Slide direction="up" delay={100} duration={1000} cascade>
        <h1 className="text-6xl font-poppinsSemiBold max-[1024px]:text-5xl max-[768px]:text-4xl max-[460px]:text-3xl max-[310px]:text-2xl text-center">
          PadelPoint en construcción...
        </h1>
        <h2 className="mt-4 font-poppinsMid text-3xl max-[768px]:text-2xl max-[460px]:text-xl max-[310px]:text-lg text-center">
          Estamos trabajando en este sitio para vos.
        </h2>
      </Slide>
      <div className="mt-8 w-full">
        <Fade delay={1000} duration={1900}>
          <p className="mb-4 text-xl font-poppinsXL max-[768px]:text-lg max-[460px]:text-base text-center">
            Mientras tanto, seguimos usando nuestras redes! No te pierdas ninguna novedad respecto al desarrollo!
          </p>
          <div className="flex justify-center">
            <a href="https://www.instagram.com/_padelpoint/" target="_blank" rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-red-500 text-white text-lg font-poppinsSemiBold rounded-lg shadow-lg transition-transform 
              duration-300 transform hover:bg-red-600 hover:scale-105 max-[460px]:px-4 max-[460px]:py-2">¡Síguenos en Instagram!</a>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default MainPage

import { Fade, Slide } from "react-awesome-reveal"
const MainPage = () => {
  return (
    <section className="flex justify-center flex-col">
      <Slide direction="left" delay={100} duration={1000} cascade>
        <h1 className="font-bold text-4xl">Hola</h1>
        <h2>Estamos trabajando en este sitio para vos</h2>
      </Slide>
      <Fade delay={1600} duration={1900}>
        <p>Mientras tanto, seguimos en nuestras redes para no perderte ninguna novedad!</p>
      </Fade>
    </section>
  )
}

export default MainPage

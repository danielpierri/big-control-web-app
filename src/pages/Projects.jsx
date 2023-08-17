import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import PropagateLoader from "react-spinners/PropagateLoader"
import ScrollToTopBtn from "../components/utils/ScrollToTopBtn"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Phone from "../components/Phone"
import projetosCondominio from "../img/projeto-6.jpg"
import projetosLargaEscala from "../img/projetos-larga-escala.jpg"
import projetosConsultoria from "../img/projeto-3.jpg"

export default function Project() {
  // Loading Screen
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const routeVariants = {
    initial: {
      y: "100vh"
    },
    final: {
      y: "0vh",
      transition: {
        type: "spring",
        mass: 0.1
      }
    }
  }

  return (
    <>
      <Navbar />
      {loading ? (
          <div className="loader__container">
            <PropagateLoader
              color={`#ffd36d`}
              size={15}
              speedMultiplier={1.5}
              aria-label="Loading Spinner"
            />
          </div>
        ) : (
          <>

          <motion.div
            variants={routeVariants}
            initial="initial"
            animate="final"
          >
            <div className="projects">
              <ScrollToTopBtn />
              <div className="project__container">
                <h2 className="project__title">PROJETOS PARA CONDOMÍNIOS E EMPRESAS</h2>
                <div className="project__img__container">
                  <img className="project__img" src={projetosCondominio} alt="" />
                </div>
                <p className="project__text">
                  A Big Control é uma empresa especializada em projetos e serviços de segurança eletrônica, rede, controle de acesso, segurança patrimonial, infraestrutura, entre outros.
                  Se segurança eletrônica fosse tudo igual não haveria tanta variedade de produtos e aplicativos.
                  Desenvolvemos projetos e soluções de acordo com a necessidade do seu condomínio ou empresa.
                </p>
                <div className="project__text">
                  <span>Infraestrutura de cabeamento</span>
                  <span>Planta de infraestrutura</span>
                  <span>Segurança perimetral</span>
                  <span>Monitoramento remoto</span>
                  <span>Segurança dos equipamentos</span>
                  <span>Manutenção</span>
                  <span>Locação</span>
                </div>
                <NavLink to={"/contact"} className={"project__btn"}>
                  Entre em contato
                </NavLink>

              </div>
              <div className="project__container">
                <h2 className="project__title">PROJETOS COMPLETOS E EM LARGA ESCALA</h2>
                <div className="project__img__container">
                  <img className="project__img" src={projetosLargaEscala} alt="" />
                </div>
                <p className="project__text">
                  Contamos com clientes grandes e estamos sempre apontando para o próximo passo. Na Big Control sabemos que a possibilidade de voar mais alto vem junto com a capacidade técnica, por isso estamos sempre buscando mais conhecimento e inovação.
                </p>
                <div className="project__text">
                  <span>Infraestrutura de rede</span>
                  <span>Cabeamento estruturado</span>
                  <span>Projetos Modernos</span>
                  <span>Analíticos</span>
                  <span>Inteligência Artificial</span>
                  <span>Segurança das informações</span>
                  <span>Controle de acesso de pessoas e veículos</span>
                  <span>Reconhecimento Facial</span>
                  <span>Diagrama de ativos</span>
                </div>
                <NavLink to={"/contact"} className={"project__btn"}>
                  Faça um orçamento
                </NavLink>

              </div>
              <div className="project__container">
                <h2 className="project__title">CONSULTORIA DE SEGURANÇA</h2>
                <span className="project__subtitle">Seu projeto pode sair de graça</span>
                <div className="project__img__container">
                  <img className="project__img" src={projetosConsultoria} alt="" />
                </div>
                <p className="project__text">
                  Ao contratar o PROJETO DE SEGURANÇA da Big Control e posterior sua implantação, o valor do projeto é descontado de sua proposta de serviços e produtos.
                </p>
                <NavLink to={"/contact"} className={"project__btn"}>
                  Agende conosco
                </NavLink>
              </div>
            </div>
            <Footer />
            <Phone />
          </motion.div>
          </>
        )}
    </>
  )
}

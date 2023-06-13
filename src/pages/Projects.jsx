import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Phone from "../components/Phone"
import projetosHome from "../img/projetos-home.jpg"
import { NavLink } from "react-router-dom"
import ScrollToTopBtn from "../components/utils/ScrollToTopBtn"

export default function Project() {
  return (
    <div>
      <Navbar />
      <div className="projects">
        <ScrollToTopBtn />
        <div className="project__container">
          <h2 className="project__title">PROJETOS PARA CONDOMÍNIOS E EMPRESAS</h2>
          <div className="project__img__container">
            <img className="project__img" src={projetosHome} alt="" />
          </div>
          <p className="project__text">
            A Big Control é uma empresa especializada em projetos e serviços de segurança eletrônica, rede, controle de acesso, segurança patrimonial, infraestrutura, entre outros.
            Se segurança eletrônica fosse tudo igual não haveria tanta variedade de produtos e aplicativos.
            Desenvolvemos projetos e soluções de acordo com a necessidade do seu condomínio ou empresa.
          </p>
          <NavLink to={""} className={"project__btn"}>
            Entre em contato
          </NavLink>

        </div>
        <div className="project__container">
          <h2 className="project__title">PROJETOS COMPLETOS E EM LARGA ESCALA</h2>
          <div className="project__img__container">
            <img className="project__img" src={projetosHome} alt="" />
          </div>
          <div className="project__text">
            <span>Infraestrutura de cabeamento</span>
            <span>Infraestrutura de rede</span>
            <span>Planta de Infraestrutura</span>
            <span>Cabeamento estruturado</span>
            <span>Tecnologia indicada</span>
            <span>Segurança perimetral</span>
            <span>Analíticos</span>
            <span>Monitoramento em tempo real</span>
            <span>Monitoramento remoto</span>
            <span>Segurança dos equipamentos</span>
            <span>Segurança das informações</span>
            <span>Controle de acesso de pessoas e veículos</span>
            <span>Mapa de rede</span>
            <span>Manutenção</span>
            <span>Locação</span>
          </div>
          <NavLink to={""} className={"project__btn"}>
            Faça um orçamento
          </NavLink>

        </div>
        <div className="project__container">
          <h2 className="project__title">CONSULTORIA DE SEGURANÇA</h2>
          <span className="project__subtitle">Seu projeto pode sair de graça</span>
          <div className="project__img__container">
            <img className="project__img" src={projetosHome} alt="" />
          </div>
          <p className="project__text">
            Ao contratar o PROJETO DE SEGURANÇA da Big Control e posterior sua implantação, o valor do projeto é descontado de sua proposta de serviços e produtos.
          </p>
          <NavLink to={""} className={"project__btn"}>
            Agende conosco
          </NavLink>
        </div>
      </div>
      <Footer />
      <Phone />
    </div>
  )
}

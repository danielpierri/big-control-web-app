import { NavLink } from "react-router-dom"
import cercaEletricaHome from "../img/cerca-eletrica-home.jpeg"
import cftvHome from "../img/cftv-home.jpeg"
import controleDeAcessoHome from "../img/controle-de-acesso-home.jpg"
import projetosHome from "../img/projeto-4.jpg"
import monitoramentoEmTempoReal from "../img/monitoramento-em-tempo-real-home.jpg"
import manutencaoHome from "../img/manutencao-home.jpg"
import ScrollToTopBtn from "./utils/ScrollToTopBtn"

export default function Main() {
  return (
    <div className="main__container">
      <div className="main__section">
      <ScrollToTopBtn />

        <section className="main main__article service-1 dark-bg">


          <div className="main__info__container full-bleed dark-bg">
            <h3 className="main__title">PROJETOS</h3>
            <div className="main__img__container main__services__img__container">
              <img src={projetosHome} alt="projetos" className="main__img main__services__img" />
            </div>
            <p className="main__text">A Big Control conta com vários profissionais especializados e certificados em diversas áreas. Fazemos projetos específicos para seu condomínio ou empresa. Trabalhamos com projetos, execução, locação, manutenção e vendas. </p>
            <NavLink to={"/projects"} className={"main__article__btn"}>Saiba mais</NavLink>
          </div>

        </section>

        <section className="main main__article service-1 light-bg">


          <div className="main__info__container">
            <h3 className="main__title">MONITORAMENTO EM TEMPO REAL</h3>
            <div className="main__img__container main__services__img__container">
              <img src={monitoramentoEmTempoReal} alt="monitoramento em tempo real" className="main__img main__services__img" />
            </div>
            <p className="main__text">Com nossa equipe especializada nos mais modernos sistemas de segurança eletrônica, monitoramos o funcionamento dos seus equipamentos remotamente e diariamente, local e em nuvem. Dessa forma, o cliente não precisa se preocupar se equipamento está gravando corretamente ou não, pois ele com certeza estará.</p>
            <NavLink to={"/projects"} className={"main__article__btn"}>Saiba mais</NavLink>
          </div>

        </section>

        <section className="main main__article service-1">


          <div className="main__info__container dark-bg full-bleed">
            <h3 className="main__title">MANUTENÇÃO</h3>
            <div className="main__img__container main__services__img__container">
              <img src={manutencaoHome} alt="manutenção" className="main__img main__services__img" />
            </div>
            <p className="main__text">Nossa manutenção, tanto preventiva quanto corretiva, é a mais completa possível a fim de que reduza ao máximo possível o risco de ficar com o sistema de segurança inoperante.</p>
            <NavLink to={"/services"} className={"main__article__btn"}>Saiba mais</NavLink>
          </div>

        </section>

        <section className="main main__service service-2">

          <div className="main__img__container main__topics__img__container">
            <img src={cftvHome} alt="circuito fechado de televisão" className="main__img main__topics__img" />
          </div>

          <div className="main__info__container">
            <h3 className="main__title">CFTV</h3>
            <p className="main__text">Uma de nossas especialidades é o Circuito Fechado de Televisão, na Big Control presamos por um sistema inteligente que efetue a gravação 24h por dia. Você sabe se o seu sistema está gravando corretamente? E se o seu gravador for roubado, você sabe como proceder? Nós temos as soluções.</p>
            <NavLink to={"/services"} className={"main__btn"}>Continuar lendo</NavLink>
          </div>

        </section>

        <section className="main main__service service-1">

          <div className="main__img__container main__topics__img__container">
            <img src={cercaEletricaHome} alt="cerca elétrica" className="main__img main__topics__img" />
          </div>

          <div className="main__info__container">
            <h3 className="main__title">SEGURANÇA PERIMETRAL</h3>
            <p className="main__text">Existem mais de 8 tipos diferentes de produtos para segurança perimetral. Avaliamos a área do seu condomínio para adotar as que mais trarão segurança e proteção para a sua família. Além disso, nos preocupamos com a estética do perímetro, alinhando segurança e beleza.</p>
            <NavLink to={"/services"} className={"main__btn"}>Continuar lendo</NavLink>
          </div>

        </section>

        <section className="main main__service service-2">

          <div className="main__img__container main__topics__img__container">
            <img src={controleDeAcessoHome} alt="controle de acesso" className="main__img main__topics__img" />
          </div>

          <div className="main__info__container">
            <h3 className="main__title">CONTROLE DE ACESSO</h3>
            <p className="main__text">Outra especialidade nossa é o controle de acesso e telecomunicações, podemos te auxiliar na automatização do seu condomínio com soluções de ponta e na modernização ou implementação do sistema de sua empresa.</p>
            <NavLink to={"/services"} className={"main__btn"}>Continuar lendo</NavLink>
          </div>

        </section>

      </div>
    </div>
  )
}
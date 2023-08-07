import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import PropagateLoader from "react-spinners/PropagateLoader"
import ScrollToTopBtn from "../components/utils/ScrollToTopBtn"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Phone from "../components/Phone"
import cftvServicos from "../img/cftv-servicos.jpg"
import cercaEletricaServicos from "../img/cerca-eletrica-servicos.jpg"
import controleDeAcessoServicos from "../img/controle-de-acesso-servicos.jpg"
import cardCftvAnalogico from "../img/card-cftv-analogico.jpg"
import cardCftvIp from "../img/card-cftv-ip.jpg"
import cardCftvPerimetral from "../img/card-cftv-perimetral.jpg"
import cardBiometriaFacial from "../img/card-biometria-facial.png"
import cardCameraLpr from "../img/card-camera-lpr.png"
import cardCancela from "../img/card-cancela.png"
import cardCatracas from "../img/card-catracas.png"
import cardCercaEletrica from "../img/card-cerca-eletrica.jpg"
import cardConcertina from "../img/card-concertina.png"
import cardFibraOptica from "../img/card-fibra-optica.png"
import cardRedeLaminada from "../img/card-rede-laminada.png"
import cardSensorInfravermelho from "../img/card-sensor-infravermelho.jpg"
import cardLancaPerfurante from "../img/card-lanca-perfurante.jpg"
// Fotos novas: sensor-infravermelho.png; cerca-eletrica-servicos.png; fibra-optica.png; concertina.png; rede-laminada.png; cancela.png; biometria-facial.png; catracas.png; camera-lpr.png
// Provavelmente trocar os nomes para maior adequação.

export default function Services() {
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
      <div className={loading ? "services--pre-loading" : "services--post-loading"}>
      <Navbar />
        <ScrollToTopBtn />
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
            <div className="services__bg" >
            <motion.div 
              className="services__container"
              variants={routeVariants}
              initial="initial"
              animate="final"
            >
              <main className="services">
                <div className="service service-1">
                  <div className="service__img__container">
                    <img src={cftvServicos} className="service__img" alt="câmera" />
                  </div>
                  <h2 className="services__title">CFTV</h2>
                  <p className="services__text">
                    A função principal de segurança perimetral é inibir a ação de
                    possíveis invasores. Para isso as principal ferramentas utilizadas
                    são a concertina e a cerca elétrica. Outras opções são os sensores
                    de barreira ou câmeras perimetrais para identificar se a área do
                    perímetro foi invadida. Em geral, quando percebem o sistema de
                    segurança, possíveis infratores avaliam a situação e desistem.
                  </p>
                  <div className="services__card__container">
                    <div className="services__card">
                      <img src={cardCftvIp} alt="" />
                      <h3>CÂMERAS EM REDE</h3>
                      <p>
                        Câmeras baseadas no protocolo IP para gravação de imagens.
                      </p>
                      <NavLink to={""} className={"services__card__link"}>
                        conhecer
                      </NavLink>
                    </div>
                    <div className="services__card">
                      <img src={cardCftvAnalogico} alt="" />
                      <h3>CÂMERAS ANALÓGICAS</h3>
                      <p>Câmeras analógicas com gravações digitais.</p>
                      <NavLink to={""} className={"services__card__link"}>
                        conhecer
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="service service-2">
                  <div className="service__img__container">
                    <img
                      src={cercaEletricaServicos}
                      className="service__img"
                      alt="câmera"
                    />
                  </div>
                  <h2 className="services__title">Segurança Perimetral</h2>
                  <p className="services__text">
                    A função principal de segurança perimetral é inibir a ação de
                    possíveis invasores. Para isso as principal ferramentas utilizadas
                    são a concertina e a cerca elétrica. Outras opções são os sensores
                    de barreira ou câmeras perimetrais para identificar se a área do
                    perímetro foi invadida. Em geral, quando percebem o sistema de
                    segurança, possíveis infratores avaliam a situação e desistem.
                  </p>
                  <div className="services__card__container">
                    <div className="services__card">
                      <img src={cardCercaEletrica} alt="cerca elétrica" />
                      <h3>CERCA ELÉTRICA</h3>
                      <p>
                        Câmeras baseadas no protocolo IP para gravação de imagens.
                      </p>
                      <NavLink to={""} className={"services__card__link"}>
                        conhecer
                      </NavLink>
                    </div>
                    <div className="services__card">
                      <img src={cardCftvPerimetral} alt="" />
                      <h3>CÂMERAS PERIMETRAIS</h3>
                      <p>
                        Câmeras com analíticos que detectam invasores humanos e
                        veículos.
                      </p>
                      <NavLink to={""} className={"services__card__link"}>
                        conhecer
                      </NavLink>
                    </div>
                    <div className="services__card">
                      <img src={cardSensorInfravermelho} alt="sensor de barreira infravermelho" />
                      <h3>SENSOR INFRAVERMELHO DE BARREIRA</h3>
                      <p>Câmeras com analíticos que controlam acesso de carros.</p>
                      <NavLink to={""} className={"services__card__link"}>
                        conhecer
                      </NavLink>
                    </div>
                    <div className="services__card">
                      <img src={cardFibraOptica} alt="conjunto de fibra óptica" />
                      <h3>FIBRA ÓTICA DE BARREIRA</h3>
                      <p>Câmeras analógicas com gravações digitais.</p>
                      <NavLink to={""} className={"services__card__link"}>
                        conhecer
                      </NavLink>
                    </div>
                    <div className="services__card">
                      <img src={cardConcertina} alt="concertina" />
                      <h3>CONCERTINA</h3>
                      <p>
                        Câmeras com analíticos que detectam invasores humanos e
                        veículos.
                      </p>
                      <NavLink to={""} className={"services__card__link"}>
                        conhecer
                      </NavLink>
                    </div>
                    <div className="services__card">
                      <img src={cardLancaPerfurante} alt="lança perfurante" />
                      <h3>LANÇA PERFURANTE</h3>
                      <p>Câmeras com analíticos que controlam acesso de carros.</p>
                      <NavLink to={""} className={"services__card__link"}>
                        conhecer
                      </NavLink>
                    </div>
                    <div className="services__card">
                      <img src={cardRedeLaminada} alt="rede laminada" />
                      <h3>REDE LAMINADA</h3>
                      <p>Câmeras com analíticos que controlam acesso de carros.</p>
                      <NavLink to={""} className={"services__card__link"}>
                        conhecer
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="service service-3">
                  <div className="service__img__container">
                    <img
                      src={controleDeAcessoServicos}
                      className="service__img"
                      alt="câmera"
                    />
                  </div>
                  <h2 className="services__title">Controle de Acesso</h2>
                  <p className="services__text">
                    A função principal de segurança perimetral é inibir a ação de
                    possíveis invasores. Para isso as principal ferramentas utilizadas
                    são a concertina e a cerca elétrica. Outras opções são os sensores
                    de barreira ou câmeras perimetrais para identificar se a área do
                    perímetro foi invadida. Em geral, quando percebem o sistema de
                    segurança, possíveis infratores avaliam a situação e desistem.
                  </p>
                  <div className="services__card__container">
                    <div className="services__card">
                      <img src={cardCancela} alt="cancela de estacionamento" />
                      <h3>CANCELAS</h3>
                      <p>
                        Câmeras baseadas no protocolo IP para gravação de imagens.
                      </p>
                      <NavLink to={""} className={"services__card__link"}>
                        conhecer
                      </NavLink>
                    </div>
                    <div className="services__card">
                      <img src={cardBiometriaFacial} alt="leitura biométrica da face" />
                      <h3>RECONHECIMENTO FACIAL E BIOMÉTRICO</h3>
                      <p>Câmeras analógicas com gravações digitais.</p>
                      <NavLink to={""} className={"services__card__link"}>
                        conhecer
                      </NavLink>
                    </div>
                    <div className="services__card">
                      <img src={cardCatracas} alt="catracas de controle de acesso" />
                      <h3>CATRACAS</h3>
                      <p>
                        Câmeras com analíticos que detectam invasores humanos e
                        veículos.
                      </p>
                      <NavLink to={""} className={"services__card__link"}>
                        conhecer
                      </NavLink>
                    </div>
                    <div className="services__card">
                      <img src={cardCameraLpr} alt="reconhecimento de plavas veiculares" />
                      <h3>CÂMERAS LPR</h3>
                      <p>Câmeras com analíticos que controlam acesso de carros.</p>
                      <NavLink to={""} className={"services__card__link"}>
                        conhecer
                      </NavLink>
                    </div>
                  </div>
                </div>
              </main>
            </motion.div>
            </div>  
          </>
        )}
        </div>
        <Footer />
        <Phone />
    </>
  )
}

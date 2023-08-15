import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import PropagateLoader from "react-spinners/PropagateLoader"
import Navbar from "./Navbar"
import Phone from "./Phone"
import Main from "./Main"
import Footer from "./Footer"
import "../App.scss"
import video from "../videos/teste.mp4"
// import Slider from "./utils/Slider"

const FADE_INTERVAL_MS = 5000
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2
const WORDS_TO_ANIMATE = [
  "Monitoramento humano em tempo real funciona?",
  "Quando devo utilizar tecnologia IP?",
  "Quais Analíticos Inteligentes servem para meu condomínio?",
  "Se existem tantos produtos para segurança, como você sabe que o seu é o mais adequado?",
  "Você sabia que existe profissional especializado em projeto de segurança eletrônica e controle de acesso?",
  "Qual o melhor projeto de segurança para pequenos prédios?",
  "Gravação em nuvem. Quanto tempo seu condomínio ou empresa precisa?",
  "Você sabe se o seu equipamento de segurança está gravando?",
  "Câmera IP ou Analógica? Qual devo usar?",
  "Segurança Perimetral. Qual a solução mais indicada?",
  "Gravação de áudio é permitida?",
  "Onde economizar e onde não economizar?",
  "Como é a segurança do seu equipamento de segurança?",
  "Gravação por movimento ou contínua?",
  "Você sabe se suas câmeras estão gravando?",
  "Você sabia que 90% dos roubos são de pessoas de dentro?",
  "Você sabia que é possível combinar beleza e segurança?",
  "O que fazer se o DVR for roubado?",
]

export default function Hero() {
  // Loading Screen
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const [fadeProp, setFadeProp] = useState({ fade: "fade-in" })
  const [wordOrder, setWordOrder] = useState(0)

  const routeVariants = {
    initial: {
      y: "100vh",
    },
    final: {
      y: "0vh",
      transition: {
        type: "spring",
        mass: 0.1,
      },
    },
  }

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      fadeProp.fade === "fade-in"
        ? setFadeProp({ fade: "fade-out" })
        : setFadeProp({ fade: "fade-in" })
    }, FADE_INTERVAL_MS)

    return () => clearInterval(fadeTimeout)
  }, [fadeProp])

  // In the future, implement a slider.
  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordOrder(
        (prevWordOrder) => (prevWordOrder + 1) % WORDS_TO_ANIMATE.length
      )
    }, WORD_CHANGE_INTERVAL_MS)

    return () => clearInterval(wordTimeout)
  }, [])

  return (
    <>
      {/* <Slider /> */}
      <div className="hero__bg">
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
              className="hero"
            >
              <div className="hero__main">
                <div className="hero__content">
                  <h1 className="hero__title">
                    Big<span className="white-text">Control</span>
                  </h1>
                  <p className="hero__description">
                    Segurança Eletrônica
                    <br />
                     e Controle de Acesso
                  </p>
                  <div className="hero__question__container">
                    <p className="hero__question">
                      <span className={fadeProp.fade}>
                        {WORDS_TO_ANIMATE[wordOrder]}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="hero__cta__wrapper">
                  <div className="hero__cta__container">
                    <figure className="hero__cta__video">
                      <video width="500" height="281.25" autoPlay loop muted >
                        <source src={video} />
                      </video>
                    </figure>
                    <p className="hero__cta__title">
                      Projetos,
                      <br /> Execução e Manutenção
                    </p>
                    <NavLink to={"/projects"} className={"hero__cta"}>
                      Conhecer
                    </NavLink>
                  </div>
                </div>
              </div>
            </motion.div>
            <Phone />
            <div className="hero__hours">
              <p>Segunda a sexta, 9h às 18h</p>
            </div>
          </>
        )}
      </div>
      <Main />
      <Footer />
    </>
  )
}

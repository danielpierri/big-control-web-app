import { useEffect, useState } from "react"
// import Fade from "./hooks/Fade"
import Navbar from "./Navbar"
import Phone from "./Phone"
import "../App.scss"

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
  "O que fazer se o DVR for roubado?"
]

export default function Hero() {

  const [fadeProp, setFadeProp] = useState({ fade: "fade-in"})
  const [wordOrder, setWordOrder] = useState(0)

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      fadeProp.fade === "fade-in" ? setFadeProp({ fade: "fade-out" }) : setFadeProp({ fade: "fade-in" })
    }, FADE_INTERVAL_MS)

    return () => clearInterval(fadeTimeout)
  }, [fadeProp])

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordOrder((prevWordOrder) => (prevWordOrder + 1) % WORDS_TO_ANIMATE.length)
    }, WORD_CHANGE_INTERVAL_MS)

    return () => clearInterval(wordTimeout)
  }, [])

  return (
    <>
      <div className="hero__bg">
        <div className="hero">

          <Navbar />

          <div className="hero__main">

            <div className="hero__content">
              <h1 className="hero__title">Big<span className="white-text">Control</span></h1>
              <p className="hero__description">
                Segurança Eletrônica,
                <br />
                Perimetral e Controle de Acesso
              </p>
              <div className="hero__question__container">
                  <p className="hero__question">
                    <span className={fadeProp.fade}>{WORDS_TO_ANIMATE[wordOrder]}</span>
                  </p>
                </div>
            </div>


            <div className="hero__cta__wrapper">
              <div className="hero__cta__container">
                <p className="hero__cta__title">
                  Projetos,<br /> Execução e Manutenção
                </p>
                <a href="index.html" className="hero__cta">Conhecer</a>
              </div>
            </div>

          </div>

          <Phone />
          <div className="hero__hours">
            <p>Segunda a sexta, 9h às 18h</p>
          </div>
        </div>
        
      </div>
    </>
  )
}
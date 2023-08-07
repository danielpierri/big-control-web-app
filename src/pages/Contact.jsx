import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import PropagateLoader from "react-spinners/PropagateLoader"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import emailjs from "@emailjs/browser"

export default function Contact() {
  // Loading Screen
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitMessage, setSubmitMessage] = useState({
    message: "",
    status: false
  })
  // Create useState as object, so it has a String and a Boolean

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

  function sendEmail(e) {
    e.preventDefault()

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos")
    }

    const templateParams = {
      from_name: name,
      email: email,
      message: message
    }

    emailjs.send("service_btjn2nn", "template_ewgztq5", templateParams, "YVVgn5xjlbMucXKuP")
      .then(
        (response) => {
          console.log("Email enviado", response.status, response.text)
          setName("")
          setEmail("")
          setMessage("")
          setSubmitMessage({
            message: "Email enviado com sucesso!",
            status: true
          })
          setTimeout(() => setSubmitMessage(""), 10000)
          // Create pop-up component with email confirmation
        }, (err) => {
          console.log("ERRO: ", err)
          setSubmitMessage("Email NÃO enviado!")
          setTimeout(() => setSubmitMessage({
            message: "ERRO! Email NÃO enviado!",
            status: true
          }), 10000)
          // Create pop-up component with error message
        }
      )
  }

  return (
    <>
      <div className="contact__viewport">
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
              <div className="contact">
                <div className="contact__form__container">
                  <form className="form" onSubmit={sendEmail}>

                    <fieldset className="fieldset input-name">
                      <legend>Seu nome</legend>
                      <label htmlFor="name"></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      />
                    </fieldset>

                    <fieldset className="fieldset input-email">
                      <legend>Seu email</legend>
                      <label htmlFor="email"></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </fieldset>

                    <fieldset className="fieldset input-message">
                      <legend>Mensagem</legend>
                      <label htmlFor="text"></label>
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        placeholder="Escreva sua dúvida..."
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                      ></textarea>
                    </fieldset>

                    <input className="form__btn" type="submit" value="ENVIAR" />

                  </form>
                </div>
              </div>

              <div className={submitMessage.status ? "submitMessage__container" : "submitMessage__container--hidden"}>
                {submitMessage.status && submitMessage.message}
              </div>

            </motion.div>
            <Footer style={{
              backgroundColor:
                "#22222271",
              backdropFilter: "blur(10px)"
            }} />
          </>
        )}
      </div>
    </>
  )
}

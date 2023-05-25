import { useState } from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitMessage, setSubmitMessage] = useState("Email enviado com sucesso")
  // Create useState as object, so it has a String and a Boolean

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
          setSubmitMessage("Email enviado com sucesso!")
          setTimeout(() => setSubmitMessage(""), 10000)
          // Create pop-up component with email confirmation
        }, (err) => {
          console.log("ERRO: ", err)
          setSubmitMessage("Email NÃO enviado!")
          setTimeout(() => setSubmitMessage(""), 10000)
          // Create pop-up component with error message
        }
      )
  }

  return (
    <div className="contact__viewport">

      <Navbar />

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

      <div className="submitMessage__container">
        {submitMessage}
      </div>

      <Footer style={{
        backgroundColor:
          "#22222271",
        backdropFilter: "blur(10px)"
      }} />
    </div>
  );
}

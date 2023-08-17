// import { useState } from "react"
// import { register } from "swiper/element/bundle"

import { register } from "swiper/element/bundle"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

register()

import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
// register()
import { Swiper, SwiperSlide } from "swiper/react"

export default function Slider() {
  const questions = [
    { id: 0, question: "Monitoramento humano em tempo real funciona?" },
    { id: 1, question: "Quando devo utilizar tecnologia IP?" },
    { id: 2, question: "Quais Analíticos Inteligentes servem para meu condomínio?" },
    { id: 3, question: "Se existem tantos produtos para segurança, como você sabe que o seu é o mais adequado?" },
    { id: 4, question: "Você sabia que existe profissional especializado em projeto de segurança eletrônica e controle de acesso?" },
    { id: 5, question: "Qual o melhor projeto de segurança para pequenos prédios?" },
    { id: 6, question: "Gravação em nuvem. Quanto tempo seu condomínio ou empresa precisa?" },
    { id: 7, question: "Você sabe se o seu equipamento de segurança está gravando?" },
    { id: 8, question: "Câmera IP ou Analógica? Qual devo usar?" },
    { id: 9, question: "Segurança Perimetral. Qual a solução mais indicada?" },
    { id: 10, question: "Gravação de áudio é permitida?" },
    { id: 11, question: "Onde economizar e onde não economizar?" },
    { id: 12, question: "Como é a segurança do seu equipamento de segurança?" },
    { id: 13, question: "Gravação por movimento ou contínua?" },
    { id: 14, question: "Você sabe se suas câmeras estão gravando?" },
    { id: 15, question: "Você sabia que 90% dos roubos são de pessoas de dentro?" },
    { id: 16, question: "Você sabia que é possível combinar beleza e segurança?" },
    { id: 17, question: "O que fazer se o DVR for roubado?" }
  ]

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={500}
      loop={true}
      navigation
      modules={[Pagination, Autoplay]}
      className={"hero__question__container"}
      autoplay={{ delay: 5000 }}
      style={{
        "--swiper-pagination-color": "#d6b34b",
        "--swiper-pagination-bullet-inactive-color": "#FFFFFF",
        "--swiper-pagination-bullet-inactive-opacity": ".3",
        "--swiper-pagination-bullet-size": "1rem",
        "--swiper-pagination-bullet-horizontal-gap": "5px"
      }}
    >
      {questions.map((item) => (
        <SwiperSlide className="hero__question" key={item.id}>
        {item.question}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
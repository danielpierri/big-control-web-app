import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import productsData from "../assets/products.json"

export default function Store() {
  const [product, setProduct] = useState([])

  // const fetchProductData = () => {
  //   fetch("../assets/products.json")
  //   .then(response => response.json())
  //   .then(data => setProduct(data))
  // }
  const fetchProductData = () => {
    setProduct(productsData)
  }

  useEffect(() => {
    fetchProductData()
  }, [])

  return (
    <div className="store">
      <Navbar />
      <h1 className="store__title">Kits de Monitoramento</h1>
      <p className="store__subtitle">Consulte também nossos planos de <span>Locação</span> e <span>Manutenção</span></p>
      {product.length > 0 && (
        <div className="store__container">
          {product.map((product) => {
            return (
              <div key={product.id} className="product__container">
                <h2 className="product__title">{product.title}</h2>
                <img src={product.img} alt="anúncio de kit de câmeras" className="product__img" />
                {/* <p className="product__caption">Kit acompanha</p>
                <ul className="product__list">
                  <li>{product.recorder}</li>  
                  <li>{product.cameras}</li>  
                  <li>{product.storage}</li>  
                  <li>{product.cable}</li>  
                  <li>{product.powerSupply}</li>  
                  <li>{product.connectors}</li>  
                </ul> */}
                <a href={`https://wa.me/5521984870140?&text=${encodeURI(product.wppMsg)}`} target="_blank" rel="noreferrer" className="product__link" >
                  Consulte valores
                </a>
              </div>
            )
          }
          )}
        </div>
      )}

      <Footer />
    </div>
  )
}
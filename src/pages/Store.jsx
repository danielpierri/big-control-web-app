import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
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
      {product.length > 0 && (
        <div className="store__container">
        {product.map((product) => { 
          return (
          <div key={product.id} className="product__container">
            <h2 className="product__title">{product.title}</h2>
            <img src={product.img} alt="anúncio de kit de câmeras" className="product__img" />
            <p className="product__caption">Kit acompanha</p>
            <ul className="product__list">
              <li>{product.recorder}</li>  
              <li>{product.cameras}</li>  
              <li>{product.storage}</li>  
              <li>{product.cable}</li>  
              <li>{product.powerSupply}</li>  
              <li>{product.connectors}</li>  
            </ul>
            <NavLink to={""} className={"product__link"}>
                  Consulte valores
            </NavLink>
          </div>
        )}
        )}
      </div>
      )}
      
      <Footer />
    </div>
  )
}
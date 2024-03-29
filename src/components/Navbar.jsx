import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import logo from "../img/big-control-home.png"

export default function Navbar() {
  const [menu, setMenu] = useState(false)
  const [navBg, setNavBg] = useState(false)
  const pathname = useLocation()

  const menuAction = (e) => {
    e.preventDefault()
    setMenu((prevMenu) => !prevMenu)
  }

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavBg(true)
    } else {
      setNavBg(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  useEffect(() => {
    setMenu(false)
  }, [pathname])

  return (
    <div className={navBg ? "nav__container--scrolled" : "nav__container"}>
      <nav className="nav">
        <div>
          <NavLink to={"/"}>
            <img src={logo} alt="Big Control logo" className="nav__logo" />
          </NavLink>
          <div className="menu-wrapper__btn" onClick={menuAction}>
            <button
              id="menu-btn"
              className={menu ? "menu__btn--active" : "menu__btn"}
            ></button>
          </div>
        </div>
        <div
          id="nav-wrapper"
          className={menu ? "nav__wrapper--isDisplayed" : "nav__wrapper"}
        >
          <ul className="nav__list">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav__link pending"
                    : isActive
                    ? "nav__link active"
                    : "nav__link"
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/store"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav__link pending"
                    : isActive
                    ? "nav__link active"
                    : "nav__link"
                }
              >
                LOJA
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav__link pending"
                    : isActive
                    ? "nav__link active"
                    : "nav__link"
                }
              >
                SERVIÇOS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav__link pending"
                    : isActive
                    ? "nav__link active"
                    : "nav__link"
                }
              >
                PROJETOS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav__link pending"
                    : isActive
                    ? "nav__link active"
                    : "nav__link"
                }
              >
                CONTATO
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

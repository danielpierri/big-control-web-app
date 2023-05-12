import { useEffect, useState } from "react"
import { PropTypes } from "prop-types"

const Fade = ({ show, children }) => {
  const [shouldRender, setRender] = useState(show)

  useEffect(() => {
    if (show) setRender(true)
  }, [show])

  const onAnimationEnd = () => {
    if (!show) setRender(false)
  }

  return (
    shouldRender && (
      <div
        style={{ animation: `${show ? "fadeIn" : "fadeOut"} 1s`}}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  )
}

Fade.propTypes = {
  show: PropTypes.string,
  children: PropTypes.string,
};

export default Fade
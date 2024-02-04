import { useEffect, useState } from 'react'
import '../scss/components/footer.scss'
import { FaFacebookF, FaChevronCircleUp } from 'react-icons/fa'
import { BsTwitter, BsInstagram } from 'react-icons/bs'


function Footer() {
  const [show, setShow] = useState(false);

  useEffect(() => () => window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight / 2) {
      setShow(true)
    } else {
      setShow(false)
    }
  }))

  return (
    <div className="footer">
      <div className="footer__container">
        <div className="top">
          <div className="logo">
            <p>D'task</p>
          </div>
          <div className="top__cta">
            <p>Ready to get started</p>
            <button>Get started</button>
          </div>
        </div>
        <div className="middle">
          <div className="left">
            <p>Subscribe to our news letter</p>
            <div className="input__container">
              <input type="text" placeholder='Email Address' />
              <button>Go</button>
            </div>
          </div>
          <div className="right">
            <ul className="right__routes">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">How it works</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <li>Terms and Conditions & </li>
            <li>Privacy policy</li>
          </div>
          <div className="right">
            <ul>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <BsTwitter />
              </li>
              <li>
                <BsInstagram />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {
        show && (
          <div className="scrollTop">
            <a href="#">
              <FaChevronCircleUp
                fontSize={33}
                color='#3ab7fc'
              />
            </a>
          </div>
        )
      }
    </div>
  )
}

export default Footer
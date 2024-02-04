import { useEffect, useState } from 'react';
import '../scss/components/navbar.scss';

function Navbar() {
  const [bg, setBg] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 70)
      setBg(true)
    else
      setBg(false)
  }

  useEffect(() => () => window.addEventListener('scroll', changeColor), [])

  return (
    <div className={`nav ${bg ? 'active' : 'inactive'}`}>
      <div className="nav__logo">
        <p className="nav__text">D'task</p>
      </div>

      <ul className="nav__routes">
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


      <div className="nav__buttons">
        <button
          className="nav__button transparent"
          style={{
            color: bg ? '#313438' : 'white'
          }}
        >
          <p>Login</p>
        </button>

        <button className="nav__button"
          style={{
            color: bg ? 'white' : '#313438',
            background: bg ? '#313438' : 'white'
          }}>
          <p>Register</p>
        </button>
      </div>
    </div>
  )
}

export default Navbar
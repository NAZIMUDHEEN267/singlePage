import { IoLogoGooglePlaystore } from 'react-icons/io5'
import { BsApple } from 'react-icons/bs'
import '../../scss/components/home/Distribution.scss'


function Distribution() {
  return (
    <div className='distribution'>
      <div className="container">
        <div className="left">
          <div className="left__text">
            <h1>Dtask also works on your phone</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus illo necessitatibus voluptates sequi quis quaerat corporis labore exercitationem rerum repellendus quae repudiandae adipisci nobis provident cupiditate officiis, earum porro amet.</p>
          </div>
          <div className="left__buttons">
            <button>
              <BsApple />
              <p>Download App</p>
            </button>
            <button>
              <IoLogoGooglePlaystore />
              <p>Download App</p>
            </button>
          </div>
        </div>

        {/* right */}
        <div className="right">
          <img src="./images/twophones.png" alt="image" draggable={false} />
        </div>
      </div>
    </div>
  )
}

export default Distribution
import { TiTick } from 'react-icons/ti'
import '../../scss/components/home/home.scss';

function Home() {
  return (
    <div className='home'>
      <h1 className='home__text'>Make your buisness <br /> More Powerfull</h1>

      <div>
        <div>
          <TiTick fontSize={24} color='#bacfe8' />
          <h2>Life time support</h2>
        </div>
        <div>
          <TiTick fontSize={24} color='#bacfe8' />
          <h2>No ncc required</h2>
        </div>
      </div>

      <div className="home__input">
        <input type="text" placeholder='Enter your email' />
        <button>Try For It</button>
      </div>

    </div>
  )
}

export default Home